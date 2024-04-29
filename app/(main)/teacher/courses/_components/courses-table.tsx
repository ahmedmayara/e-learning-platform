import React from "react";

import Image from "next/image";
import { Course, ERole } from "@/types";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const courses: Course[] = [
  {
    id: "1",
    videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    pdfUrl: "https://www.example.com",
    name: "دورة تصميم الواجهات",
    term: 1,
    schoolLevel: "المرحلة الثانوية",
    subject: "التصميم",
    dateOfCreation: "2021-10-01",
    teacher: {
      id: "1",
      user: {
        id: "1",
        firstName: "محمد",
        lastName: "علي",
        email: "ali@example.com",
        dateOfBirth: "1990-01-01",
        password: "123456",
        roles: [
          {
            id: "1",
            name: ERole.ROLE_TEACHER,
          },
        ],
      },
    },
  },
];

export function CoursesTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden w-[100px] sm:table-cell">
            <span className="sr-only">الصورة</span>
          </TableHead>
          <TableHead>الاسم</TableHead>
          <TableHead>المرحلة</TableHead>
          <TableHead>المادة</TableHead>
          <TableHead className="hidden md:table-cell">المعلم</TableHead>
          <TableHead className="hidden md:table-cell">تم إنشاؤها في</TableHead>
          <TableHead>
            <span className="sr-only">الإجراءات</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courses.map((course) => (
          <TableRow key={course.id}>
            <TableCell className="hidden sm:table-cell">
              <Image
                alt="placeholder"
                className="aspect-square rounded-md object-cover"
                height="64"
                src="/placeholder.svg"
                width="64"
              />
            </TableCell>
            <TableCell>{course.name}</TableCell>
            <TableCell>{course.schoolLevel}</TableCell>
            <TableCell>{course.subject}</TableCell>
            <TableCell className="hidden md:table-cell">
              {course.teacher.user.firstName} {course.teacher.user.lastName}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {course.dateOfCreation}
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-4">
                <Button size="sm">عرض</Button>
                <Button variant="indigoOutline" size="sm">
                  تعديل
                </Button>
                <Button variant="destructiveOutline" size="sm">
                  حذف
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
