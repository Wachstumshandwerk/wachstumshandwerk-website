import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-akzent text-tannengruen-dark hover:brightness-95 shadow-sm shadow-tannengruen/10",
  secondary:
    "bg-tannengruen text-hintergrund hover:bg-tannengruen-dark",
  ghost:
    "bg-transparent text-tannengruen border border-tannengruen/25 hover:bg-tannengruen/5",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold tracking-tight transition-[color,background-color,box-shadow,transform] duration-150 ease-out hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-akzent";

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type,
  onClick,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
