import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BrowserFrameProps {
  url: string;
  size?: "sm" | "lg";
  className?: string;
  children: ReactNode;
}

const sizes = {
  sm: {
    bar: "h-9 gap-2 px-3.5",
    dot: "h-2.5 w-2.5",
    address: "ml-2.5 h-[22px] px-2.5 text-[11.5px]",
  },
  lg: {
    bar: "h-[38px] gap-2 px-4",
    dot: "h-[11px] w-[11px]",
    address: "ml-3 h-6 max-w-[420px] px-3 text-xs",
  },
};

export function BrowserFrame({
  url,
  size = "sm",
  className,
  children,
}: BrowserFrameProps) {
  const s = sizes[size];

  return (
    <div className={cn("overflow-hidden rounded-[14px] bg-white", className)}>
      <div
        className={cn(
          "flex items-center border-b border-[#E2DAD0] bg-[#F3EEE8]",
          s.bar
        )}
        aria-hidden="true"
      >
        <span className={cn("rounded-full bg-[#FF5F57]", s.dot)} />
        <span className={cn("rounded-full bg-[#FEBC2E]", s.dot)} />
        <span className={cn("rounded-full bg-[#28C840]", s.dot)} />
        <span
          className={cn(
            "flex flex-1 items-center rounded-md bg-white font-mono text-[#5C534A]",
            s.address
          )}
        >
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}
