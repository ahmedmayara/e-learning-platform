import React from "react";

import { Course, ERole } from "@/types";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "./ui/button";

const courses: Course[] = [
  {
    id: "1",
    videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    pdfUrl: "https://www.pdf.com",
    name: "الرياضيات",
    term: 1,
    schoolLevel: "المرحلة الثانوية",
    subject: "الرياضيات",
    dateOfCreation: "2021-10-10",
    teacher: {
      id: "1",
      user: {
        id: "1",
        firstName: "جون",
        lastName: "دو",
        email: "johndoe@example.com",
        dateOfBirth: "1990-01-01",
        password: "password",
        roles: [
          {
            id: "1",
            name: ERole.ROLE_TEACHER,
          },
        ],
      },
    },
  },
  {
    id: "2",
    videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    pdfUrl: "https://www.pdf.com",
    name: "الفيزياء",
    term: 1,
    schoolLevel: "المرحلة الثانوية",
    subject: "الفيزياء",
    dateOfCreation: "2021-10-10",
    teacher: {
      id: "2",
      user: {
        id: "2",
        firstName: "محمد",
        lastName: "علي",
        email: "ali@example.com",
        dateOfBirth: "1985-05-05",
        password: "password",
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
          <TableHead>الاسم</TableHead>
          <TableHead>الثلاثي</TableHead>
          <TableHead>المستوى الدراسي</TableHead>
          <TableHead>المادة</TableHead>
          <TableHead>تاريخ الإنشاء</TableHead>
          <TableHead>المعلم</TableHead>
          <TableHead>الإجراءات</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courses.map((course) => (
          <TableRow key={course.id}>
            <TableCell>{course.name}</TableCell>
            <TableCell>{course.term}</TableCell>
            <TableCell>{course.schoolLevel}</TableCell>
            <TableCell>{course.subject}</TableCell>
            <TableCell>{course.dateOfCreation}</TableCell>
            <TableCell>
              {course.teacher.user.firstName} {course.teacher.user.lastName}
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Button size="sm">عرض</Button>
                <Button variant="destructive" size="sm">
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
