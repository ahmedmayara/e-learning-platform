"use client";

import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Course, ERole } from "@/types";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { UpdateCourseDialog } from "./updatecoursedialog";

interface CoursesTableProps {
  courses: Course[];
}

const deleteCourse = async (courseId: string) => {
  return axios
    .delete("http://localhost:8080/api/courses/" + courseId)
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export function CoursesTable({ courses }: CoursesTableProps) {
  const router = useRouter();

  React.useEffect(() => {
    router.refresh();
  }, [courses]);
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
              {course.teacher.firstname} {course.teacher.lastname}
            </TableCell>
            <TableCell className="hidden md:table-cell">
              {new Date(course.date_of_addition).toLocaleDateString("en-US")}
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-4">
                <UpdateCourseDialog course={course} />
                <Button
                  variant="destructiveOutline"
                  size="sm"
                  onClick={() => deleteCourse(course.id)}
                >
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
