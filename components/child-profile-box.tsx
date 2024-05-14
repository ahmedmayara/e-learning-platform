import React from "react";

import Link from "next/link";
import { Student } from "@/types";

interface ProfileBoxProps {
  child: Student;

  href: string;
}

export function ChildProfileBox({ child, href }: ProfileBoxProps) {
  return (
    <div className="flex flex-col items-center">
      <Link
        href={href}
        className="flex h-36 w-36 cursor-pointer items-center justify-center rounded-lg border bg-muted"
      >
        <p className="text-7xl font-bold">
          {child.firstname.charAt(0).toUpperCase()}
        </p>
      </Link>
      <h3 className="mt-4 text-lg font-semibold">{`${child.firstname} ${child.lastname}`}</h3>
    </div>
  );
}
