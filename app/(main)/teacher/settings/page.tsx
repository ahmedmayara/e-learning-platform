import React from "react";

import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function TeacherSettingsPage() {
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
            <BreadcrumbPage>الإعدادات</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl font-semibold">الإعدادات</h1>

      <Card>
        <CardHeader>
          <CardTitle>الإعدادات</CardTitle>
          <CardDescription>هنا يمكنك تعديل الإعدادات الخاصة بك</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label className="text-sm font-medium">الاسم الكامل</Label>
              <Input type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-sm font-medium">البريد الإلكتروني</Label>
              <Input type="email" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-sm font-medium">كلمة المرور</Label>
              <Input type="password" />
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-sm font-medium">تأكيد كلمة المرور</Label>
              <Input type="password" />
            </div>

            <div className="flex justify-end">
              <Button variant="primary">حفظ</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
