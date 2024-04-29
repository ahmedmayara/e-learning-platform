import React from "react";

import Link from "next/link";
import { ClockIcon } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TeacherLiveMeetingsPage() {
  return (
    <div className="flex flex-col gap-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="#">الرئيسية</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="#">الاجتماعات المباشرة</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>جميع الاجتماعات المباشرة</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">جميع الاجتماعات المباشرة</h2>
        <Button variant="primaryOutline">
          <Link href="#">إضافة اجتماع</Link>
        </Button>
      </div>

      <Card className="w-full">
        <CardContent className="grid grid-cols-1 items-center gap-4 p-6 md:grid-cols-[auto,1fr,auto]">
          <div className="space-y-1 border-r pl-8 pr-12 text-center">
            <div className="text-4xl font-semibold">3</div>
            <div className="text-sm font-medium">ديسمبر</div>
            <div className="text-sm font-medium">2024</div>
          </div>

          <div className="space-y-1 pl-4">
            <h3 className="text-xl font-semibold">اجتماع الرياضيات اليوم</h3>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <ClockIcon className="h-4 w-4" />
              <span>3:00 PM - 4:00 PM</span>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <Button>
              <Link href="#">عرض التفاصيل</Link>
            </Button>
            <Button variant="secondary">
              <Link href="#">تعديل</Link>
            </Button>
            <Button variant="destructive">
              <Link href="#">حذف</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
