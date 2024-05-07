import React from "react";

import { ERole, Teacher } from "@/types";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "./ui/button";

const teachers: Teacher[] = [
  {
    id: "1",
    user: {
      id: "1",
      firstName: "محمد",
      lastName: "علي",
      email: "mohamed@example.com",
      dateOfBirth: "1990-01-01",
      password: "123456",
      roles: [{ id: "1", name: ERole.ROLE_TEACHER }],
    },
  },
  {
    id: "2",
    user: {
      id: "2",
      firstName: "أحمد",
      lastName: "محمود",
      email: "ahmed@example.com",
      dateOfBirth: "1990-01-01",
      password: "123456",
      roles: [{ id: "2", name: ERole.ROLE_TEACHER }],
    },
  },
];

export function TeachersTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>الاسم</TableHead>
          <TableHead>البريد الإلكتروني</TableHead>
          <TableHead>الدور</TableHead>
          <TableHead>الإجراءات</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {teachers.map((teacher) => (
          <TableRow key={teacher.id}>
            <TableCell>
              {teacher.user.firstName} {teacher.user.lastName}
            </TableCell>
            <TableCell>{teacher.user.email}</TableCell>
            <TableCell>
              {teacher.user.roles.map((role) => {
                if (role.name === ERole.ROLE_TEACHER) {
                  return "معلم";
                }
              })}
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Button variant="secondary" size="sm">
                  تحقق
                </Button>
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
