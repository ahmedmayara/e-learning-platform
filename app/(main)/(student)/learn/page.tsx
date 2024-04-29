import React from "react";

import Image from "next/image";
import { DownloadIcon, EyeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function LearnPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-end gap-y-2">
        <h1 className="text-4xl font-bold">الدروس</h1>
        <p className="text-right text-lg text-muted-foreground">
          هذه الصفحة خاصة بالمقررات الدراسية التي قمت بدراستها
        </p>
      </div>

      <Separator className="mb-6 mt-4 px-8" />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        {[...Array(8)].map((_, index) => (
          <CourseCard key={index} />
        ))}
      </div>
    </div>
  );
}

function CourseCard() {
  return (
    <Card className="w-full max-w-sm rounded-xl border">
      <div className="flex h-[200px] items-center justify-center rounded-t-xl bg-muted">
        <Image alt="Course thumbnail" width="64" height="64" src="/pdf.svg" />
      </div>
      <CardContent className="flex flex-col gap-4 p-6">
        <div className="flex flex-col items-end gap-1">
          <h3 className="line-clamp-2 text-lg font-semibold">
            الرياضيات الفصل الأول
          </h3>
          <p className="text-sm text-muted-foreground">١٢ درس - ١٢ تمرين</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm">
              <EyeIcon className="h-5 w-5" />
            </Button>
            <Button variant="indigo" size="sm">
              <DownloadIcon className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">أحمد علي</span>
            <Image
              alt="Instructor"
              className="overflow-hidden rounded-full object-cover"
              width="24"
              height="24"
              src="/placeholder.svg"
              style={{
                aspectRatio: "24/24",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
