import { useEffect, useMemo, useRef, useState } from "react";

import { useTheme } from "@application";

import type { HeaderPreferenceSelectProps } from "../../interfaces";
import type { ChangeEvent, JSX, KeyboardEvent } from "react";

const MAX_VISIBLE_OPTIONS = 5;

export default function HeaderPreferenceSelect<T extends string>({
  value,
  options,
  onChange,
  ariaLabel,
  compact = false,
}: HeaderPreferenceSelectProps<T>): JSX.Element {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const selectedOption = options.find(
    (option): boolean => option.value === value,
  );

  const hasManyOptions = options.length > MAX_VISIBLE_OPTIONS;

  const filteredOptions = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    if (normalizedSearch.length === 0) {
      return options;
    }

    return options.filter(
      (option): boolean =>
        option.label.toLowerCase().includes(normalizedSearch) ||
        option.value.toLowerCase().includes(normalizedSearch),
    );
  }, [options, search]);

  useEffect((): (() => void) => {
    const handleOutsideClick = (event: MouseEvent): void => {
      const target = event.target;

      if (
        target instanceof Node &&
        containerRef.current !== null &&
        !containerRef.current.contains(target)
      ) {
        setIsOpen(false);
        setSearch("");
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return (): void => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect((): (() => void) => {
    const handleEscape = (event: globalThis.KeyboardEvent): void => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setSearch("");
      }
    };

    document.addEventListener("keydown", handleEscape);

    return (): void => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect((): void => {
    if (isOpen && hasManyOptions) {
      searchInputRef.current?.focus();
    }
  }, [hasManyOptions, isOpen]);

  const handleToggle = (): void => {
    setIsOpen((currentState): boolean => !currentState);

    if (isOpen) {
      setSearch("");
    }
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearch(event.target.value);
  };

  const handleSelect = (optionValue: T): void => {
    onChange(optionValue);
    setIsOpen(false);
    setSearch("");
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    optionValue: T,
  ): void => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleSelect(optionValue);
    }
  };

  return (
    <div ref={containerRef} className="relative min-w-0">
      <button
        type="button"
        onClick={handleToggle}
        className="
          flex
          h-9
          max-w-12
          items-center
          justify-center
          gap-1.5
          rounded-full
          border
          px-2.5
          text-xs
          font-medium
          transition-all
          duration-200
          hover:opacity-80
          focus:outline-none
          focus:ring-2
          sm:max-w-none
        "
        style={{
          backgroundColor: theme.colors.surface.surfaceElevated,
          borderColor: theme.colors.border.default,
          color: theme.colors.text.primary,
          outlineColor: theme.colors.border.focus,
        }}
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {selectedOption?.icon}

        {!compact && (
          <span className="hidden truncate sm:inline">
            {selectedOption?.label ?? value}
          </span>
        )}

        <svg
          className={`
            hidden
            h-3.5
            w-3.5
            transition-transform
            duration-200
            sm:block
            ${isOpen ? "rotate-180" : ""}
          `}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="
            absolute
            right-0
            top-full
            z-50
            mt-2
            w-56
            overflow-hidden
            rounded-xl
            border
          "
          style={{
            backgroundColor: theme.colors.surface.surfaceElevated,
            borderColor: theme.colors.border.default,
            boxShadow: theme.colors.shadow.medium,
          }}
        >
          {hasManyOptions && (
            <div
              className="border-b p-2"
              style={{
                borderColor: theme.colors.border.subtle,
              }}
            >
              <input
                ref={searchInputRef}
                type="search"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search..."
                className="
                  w-full
                  rounded-lg
                  border
                  bg-transparent
                  px-3
                  py-2
                  text-sm
                  outline-none
                "
                style={{
                  borderColor: theme.colors.border.default,
                  color: theme.colors.text.primary,
                }}
                aria-label={`Buscar en ${ariaLabel}`}
              />
            </div>
          )}

          <div
            className={hasManyOptions ? "max-h-60 overflow-y-auto p-1" : "p-1"}
            role="listbox"
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option): JSX.Element => {
                const selected = option.value === value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    role="option"
                    aria-selected={selected}
                    onClick={(): void => handleSelect(option.value)}
                    onKeyDown={(event): void =>
                      handleKeyDown(event, option.value)
                    }
                    className="
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-lg
                        px-3
                        py-2.5
                        text-left
                        text-sm
                        transition-colors
                        duration-150
                        hover:opacity-80
                      "
                    style={{
                      backgroundColor: selected
                        ? theme.colors.brand.primary
                        : "transparent",
                      color: selected
                        ? theme.colors.brand.primaryContrast
                        : theme.colors.text.primary,
                    }}
                  >
                    {option.icon !== undefined && option.icon !== null && (
                      <span className="shrink-0">{option.icon}</span>
                    )}

                    <span className="min-w-0 flex-1 truncate">
                      {option.label}
                    </span>

                    {selected && (
                      <span className="shrink-0" aria-hidden="true">
                        ✓
                      </span>
                    )}
                  </button>
                );
              })
            ) : (
              <p
                className="px-3 py-6 text-center text-sm"
                style={{
                  color: theme.colors.text.muted,
                }}
              >
                No results found
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
