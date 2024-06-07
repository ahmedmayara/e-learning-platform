"use client";

import React from "react";

import { useRouter } from "next/navigation";
import { Test } from "@/types";
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
import UpdateTest from "./updatetest";

interface TestsTableProps {
  tests: Test[];
}

const deleteTest = async (testId: string) => {
  return axios
    .delete("http://localhost:8080/api/tests/" + testId)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      throw error;
    });
};

export function TestsTable({ tests }: TestsTableProps) {
  const router = useRouter();

  React.useEffect(() => {
    router.refresh();
  }, [tests]);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>الاسم</TableHead>
          <TableHead>المرحلة</TableHead>
          <TableHead>المادة</TableHead>
          <TableHead className="hidden md:table-cell">المعلم</TableHead>
          <TableHead>
            <span className="sr-only">الإجراءات</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tests.map((test) => (
          <TableRow key={test.id}>
            <TableCell>{test.name}</TableCell>
            <TableCell>{test.schoolLevel}</TableCell>
            <TableCell>{test.subject}</TableCell>
            <TableCell className="hidden md:table-cell">
              {test.teacher.firstname} {test.teacher.lastname}
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-4">
                <UpdateTest test={test}/>
                <Button
                  variant="destructiveOutline"
                  size="sm"
                  onClick={() => deleteTest(test.id)}
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
