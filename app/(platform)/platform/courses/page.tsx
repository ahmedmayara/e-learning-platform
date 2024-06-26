import React from "react";

import Image from "next/image";
import { Course, ERole } from "@/types";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/container";

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
        email: "mohamedali@example.com",
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
  {
    id: "3",
    videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    pdfUrl: "https://www.pdf.com",
    name: "الكيمياء",
    term: 1,
    schoolLevel: "المرحلة الثانوية",
    subject: "الكيمياء",
    dateOfCreation: "2021-10-10",
    teacher: {
      id: "3",
      user: {
        id: "3",
        firstName: "فاطمة",
        lastName: "أحمد",
        email: "fatimaahmed@example.com",
        dateOfBirth: "1992-08-15",
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
    id: "4",
    videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    pdfUrl: "https://www.pdf.com",
    name: "اللغة العربية",
    term: 1,
    schoolLevel: "المرحلة الثانوية",
    subject: "اللغة العربية",
    dateOfCreation: "2021-10-10",
    teacher: {
      id: "4",
      user: {
        id: "4",
        firstName: "ليلى",
        lastName: "محمد",
        email: "leilamohamed@example.com",
        dateOfBirth: "1988-12-20",
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
    id: "5",
    videoUrl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    pdfUrl: "https://www.pdf.com",
    name: "اللغة الإنجليزية",
    term: 1,
    schoolLevel: "المرحلة الثانوية",
    subject: "اللغة الإنجليزية",
    dateOfCreation: "2021-10-10",
    teacher: {
      id: "5",
      user: {
        id: "5",
        firstName: "سارة",
        lastName: "علي",
        email: "sarahali@example.com",
        dateOfBirth: "1991-03-25",
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

export default function CoursesPage() {
  return (
    <Container>
      <div className="flex flex-col items-end">
        <h1 className="text-3xl font-bold">مرحبا بكم في صفحة الدروس</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          هنا يمكنك العثور على جميع الدروس المتاحة لدينا
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {courses.map((course) => (
          <Card className="w-full max-w-sm rounded-xl border">
            <Image
              alt="Course thumbnail"
              width="1000"
              height="1000"
              className="h-[200px] rounded-t-xl object-cover"
              src="/placeholder.svg"
            />

            <CardContent className="flex flex-col gap-4 p-6">
              <div className="flex flex-col items-end gap-1">
                <h3 className="line-clamp-2 text-lg font-semibold">
                  {course.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {course.term === 1 && "الثلاثي الأول"}
                  {course.term === 2 && "الثلاثي الثاني"}
                  {course.term === 3 && "الثلاثي الثالث"}
                  {" - "}
                  {course.schoolLevel}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="secondary" size="sm">
                    مشاهدة
                  </Button>
                  <Button variant="indigo" size="sm">
                    تحميل
                  </Button>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-medium">
                    {course.teacher.user.firstName}{" "}
                    {course.teacher.user.lastName}
                  </span>
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
        ))}
      </div>
    </Container>
  );
}
