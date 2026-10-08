import type { ReactNode } from "react";

export interface HeaderPreferenceOption<T extends string> {
  value: T;
  label: string;
  icon?: ReactNode;
}

export interface HeaderPreferenceSelectProps<T extends string> {
  value: T;
  options: HeaderPreferenceOption<T>[];
  onChange: (value: T) => void;
  ariaLabel: string;
  compact?: boolean;
}
