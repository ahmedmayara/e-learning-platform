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

import { CoursesTable } from "./_components/courses-table";

export default function TeacherCoursesPage() {
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
              <Link href="#">الدروس</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>جميع الدروس</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">جميع الدروس</h2>
        <Button variant="primaryOutline">
          <Link href="#">إضافة درس</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>جميع الدروس</CardTitle>
          <CardDescription>
            هنا يمكنك إدارة جميع الدروس الخاصة بك
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CoursesTable />
        </CardContent>
      </Card>
    </div>
  );
}
