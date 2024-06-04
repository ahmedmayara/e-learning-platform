import React from "react";

import { cookies } from "next/headers";
import Link from "next/link";
import { LiveMeeting, Teacher } from "@/types";
import axios from "axios";
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

import { AddGroupClassDialog } from "./_components/add-group-class-dialog";
import DeleteLive from "./_components/deletelivemeeting";
import StartNewMeeting from "./_components/startmeeting";

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
const liveMeetingUrl = "http://localhost:8080/meetings/teacher/";

const getAllmeetingsByemail = async (
  email: string | undefined,
): Promise<LiveMeeting> => {
  return axios
    .get(liveMeetingUrl + "teacher@gmail.com")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export default async function TeacherLiveMeetingsPage() {
  const teacherEmail = cookies().get("email")?.value;
  const teacher = await getTeacherByEmail(teacherEmail);
  const meetings = await getAllmeetingsByemail(teacherEmail);

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
        <AddGroupClassDialog teacher={teacher} />
      </div>
      {/*@ts-ignore */}
      {meetings.map((meeting) => (
        <Card className="w-full">
          <CardContent className="grid grid-cols-1 items-center gap-4 p-6 md:grid-cols-[auto,1fr,auto]">
            <div className="space-y-1 border-r pl-8 pr-12 text-center">
              <div className="text-4xl font-semibold">
                {new Date(meeting.dateTime).getDate()}
              </div>
              <div className="text-sm font-medium">
                {new Date(meeting.dateTime).toLocaleString("default", {
                  month: "long",
                })}
              </div>
              <div className="text-sm font-medium">
                {new Date(meeting.dateTime).toLocaleString("default", {
                  weekday: "long",
                })}
              </div>
            </div>

            <div className="space-y-1 pl-4">
              <h3 className="text-xl font-semibold">{meeting.name}</h3>

              <p className="text-sm text-muted-foreground">
                {meeting.description}
              </p>
            </div>
            <div className="flex flex-row items-center space-x-4">
              <StartNewMeeting id={meeting.id} />

              <Button variant="secondary">
                <Link href="#">تعديل</Link>
              </Button>
              <DeleteLive id={meeting.id} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
