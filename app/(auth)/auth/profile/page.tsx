import React from "react";

import { PlusCircledIcon } from "@radix-ui/react-icons";
import { StickerIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export default function ProfileSelectionPage() {
  return (
    <div className="grid h-screen place-content-center bg-muted/40">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-5">
        <ProfileBox title="Child 1" className="bg-rose-500" />
        <ProfileBox title="Child 2" className="bg-blue-500" />
        <ProfileBox title="Child 3" className="bg-green-500" />
        <ProfileBox title="Child 4" className="bg-yellow-500" />
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center rounded-lg border bg-gray-500 p-4">
            <PlusCircledIcon className="h-28 w-28 text-white" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">Create a new profile</h3>
        </div>
      </div>
    </div>
  );
}

interface ProfileBoxProps {
  title: string;
  className?: string;
}

function ProfileBox({ title, className }: ProfileBoxProps) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          "flex cursor-pointer items-center justify-center rounded-lg border p-4",
          className,
        )}
      >
        <StickerIcon className="h-28 w-28 text-white" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
    </div>
  );
}
