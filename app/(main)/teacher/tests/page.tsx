import React from "react";

import { cookies } from "next/headers";
import Link from "next/link";
import { Teacher, Test } from "@/types";
import axios from "axios";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { AddTestDialog } from "./_components/add-test-dialog";
import { TestsTable } from "./_components/tests-table";

const getTeacherTests = async (
  teacherId: string | undefined,
): Promise<Test[]> => {
  return axios
    .get("http://localhost:8080/api/tests/teacher/" + teacherId)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

const getTeacherByEmail = async (
  email: string | undefined,
): Promise<Teacher> => {
  return axios
    .get("http://localhost:8080/api/teachers/" + email)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export default async function TeacherTestsPage() {
  const teacherId = cookies().get("teacherId")?.value;
  const teacherEmail = cookies().get("email")?.value;
  const teacher = await getTeacherByEmail(teacherEmail);
  const tests = await getTeacherTests(teacherId);
  console.log(tests);
  console.log(teacher);
  console.log(teacherId);
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
              <Link href="#">الاختبارات</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>جميع الاختبارات</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">الاختبارات</h1>
        <AddTestDialog teacher={teacher} />
      </div>

      <Card>
        <CardHeader>
          <CardTitle>جميع الاختبارات</CardTitle>
          <CardDescription>
            هنا يمكنك إدارة جميع الاختبارات الخاصة بك
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TestsTable tests={tests} />
        </CardContent>
      </Card>
    </div>
  );
}
