import React from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

interface ProfileBoxProps {
  title: string;
  href: string;
  className?: string;
}

export function ChildProfileBox({ title, href, className }: ProfileBoxProps) {
  return (
    <div className="flex flex-col items-center">
      <Link
        href={href}
        className={cn(
          "flex h-36 w-36 cursor-pointer items-center justify-center rounded-lg border bg-muted",
          className,
        )}
      >
        <p className="text-7xl font-bold">{title.charAt(0).toUpperCase()}</p>
      </Link>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
    </div>
  );
}
