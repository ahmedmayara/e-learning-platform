"use client";

import React from "react";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { HomeIcon } from "@radix-ui/react-icons";
import {
  BookMarkedIcon,
  RadioIcon,
  SettingsIcon,
  TestTubeIcon,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";

import { SidebarButton } from "./sidebar-button";

export function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <aside className="row-start-1 row-end-3 flex h-screen w-[70px] flex-col items-center border-r bg-white">
      <div className="flex h-[64px] w-full items-center justify-center">
        <Image src="/mascot.svg" alt="logo" width={30} height={30} />
      </div>

      <Separator className="mb-4 w-10" />

      <div className="flex flex-col space-y-4">
        <SidebarButton
          label="الرئيسية"
          icon={HomeIcon}
          onClick={() => router.push("/teacher/dashboard")}
          isActive={pathname === "/teacher/dashboard"}
        />
        <SidebarButton
          label="الدروس"
          icon={BookMarkedIcon}
          onClick={() => router.push("/teacher/courses")}
          isActive={pathname === "/teacher/courses"}
        />
        <SidebarButton
          label="الاختبارات"
          icon={TestTubeIcon}
          onClick={() => router.push("/teacher/tests")}
          isActive={pathname === "/teacher/tests"}
        />
        <SidebarButton
          label="الاجتماعات المباشرة"
          icon={RadioIcon}
          onClick={() => router.push("/teacher/live-meetings")}
          isActive={pathname === "/teacher/live-meetings"}
        />
        <SidebarButton
          label="الإعدادات"
          icon={SettingsIcon}
          onClick={() => router.push("/teacher/settings")}
          isActive={pathname.startsWith("/teacher/settings")}
        />
      </div>

      <div className="mb-4 mt-auto flex flex-col items-center"></div>
    </aside>
  );
}
