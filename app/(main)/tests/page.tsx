import React from "react";

import { Separator } from "@/components/ui/separator";

export default function TestsPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-end gap-y-2">
        <h1 className="text-4xl font-bold">الامتحانات</h1>
        <p className="text-right text-lg text-muted-foreground">
          هذه الصفحة مخصصة لامتحانات مع الإصلاح
        </p>
      </div>

      <Separator className="mb-6 mt-4 px-8" />
    </div>
  );
}
