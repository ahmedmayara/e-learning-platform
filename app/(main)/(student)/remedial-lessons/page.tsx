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

import ActivateAcount from "./activateaccount";

const RemedialLessonsPage = async () => {
  const email = cookies().get("email")?.value;
  const fetchUser = async () => {
    const data = axios.get(`http://localhost:8080/api/auth/user/${email}`);
    console.log(data);
    return data;
  };
  const subscribe = async () => {
    await axios.put(`http://localhost:8080/api/parents/${email}/upgrade`);
  };
  const user = await fetchUser();
  console.log("user" + user.data.subscribed);
  if (user.data.subscribed === false) {
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
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-semibold">لم تشترك بعد</h1>
          <p className="text-muted-foreground">
            يجب عليك الاشتراك للوصول إلى الاجتماعات المباشرة
          </p>
          <ActivateAcount id={user.data.id!} />
        </div>
      </div>
    );
  }
  const getAllmeeting = async () => {
    return axios
      .get("http://localhost:8080/meetings/all")
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.error(error);
        throw error;
      });
  };
  const avvailablemeeting = await getAllmeeting();
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
      </div>
      {/*@ts-ignore */}
      {avvailablemeeting.map((meeting) => (
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
              <Button variant={"primary"}>
                <Link href={`/room/${meeting.id}`}>انضم</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default RemedialLessonsPage;
