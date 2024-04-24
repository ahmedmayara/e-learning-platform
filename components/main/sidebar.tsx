"use client";

import React from "react";

import Image from "next/image";

import { cn } from "@/lib/utils";

import { SidebarItem } from "./sidebar-item";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div
      className={cn(
        "left-0 top-0 flex h-screen flex-col border-r-2 bg-muted/40 px-4 lg:fixed lg:w-[300px]",
        className,
      )}
    >
      <div className="flex items-center gap-x-4 pb-7 pl-4 pt-8">
        <Image src="/mascot.svg" width={40} height={40} alt="Mascot" />
        <h1 className="text-2xl font-semibold">موقعي</h1>
      </div>
      <div className="flex flex-1 flex-col gap-y-4">
        <SidebarItem label="الدروس" href="/learn" iconSrc="/open-book.svg" />
        <SidebarItem
          label="الاختبارات القصيرة"
          href="/quizzes"
          iconSrc="/target.svg"
        />
        <SidebarItem
          label="الامتحانات"
          href="/tests"
          iconSrc="/book-pencil.svg"
        />
      </div>
    </div>
  );
}
