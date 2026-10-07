import type { JSX } from "react";

export default function Header(): JSX.Element {
  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-8 py-6 z-50 bg-[#0B0F19]">
      <div className="flex items-center space-x-3">
        <div className="h-8 w-8 rounded-full bg-[#00F0FF] flex items-center justify-center shadow-lg shadow-[#00F0FF]/30">
          <svg
            className="w-4 h-4 text-[#0B0F19]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>
        <span className="text-xl font-bold tracking-tight text-white">
          INNOVATECH
        </span>
      </div>
      <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-300">
        <a
          href="#services"
          className="hover:text-[#00F0FF] transition-colors flex items-center gap-1"
        >
          Services{" "}
          <svg
            className="w-3 h-3 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
        <a
          href="#cases"
          className="hover:text-[#00F0FF] transition-colors flex items-center gap-1"
        >
          Case Studies{" "}
          <svg
            className="w-3 h-3 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
        <a
          href="#stack"
          className="hover:text-[#00F0FF] transition-colors flex items-center gap-1"
        >
          Stack{" "}
          <svg
            className="w-3 h-3 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
        <a href="#about" className="hover:text-[#00F0FF] transition-colors">
          About Us
        </a>
      </nav>
      <button className="px-6 py-2.5 rounded-full bg-[#00F0FF] text-[#0B0F19] font-semibold text-sm hover:bg-[#3bf6ff] transition-all shadow-lg shadow-[#00F0FF]/20">
        BOOK A CONSULTATION
      </button>
    </header>
  );
}
