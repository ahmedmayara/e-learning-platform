import React from "react";

import { ERole } from "@/types";
import { BookOpenIcon, DollarSignIcon, Users2Icon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AdminDashboardPage() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <StatisticsCard
          title="المستخدمين"
          value={1234}
          percentage={5}
          icon={Users2Icon}
        />
        <StatisticsCard
          title="المعلمين"
          value={123}
          percentage={10}
          icon={Users2Icon}
        />
        <StatisticsCard
          title="الدروس"
          value={12}
          percentage={-5}
          icon={BookOpenIcon}
        />
        <StatisticsCard
          title="المداخيل"
          value={12345}
          percentage={0}
          icon={DollarSignIcon}
        />
      </div>

      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>المستخدمين الجدد</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>الاسم</TableHead>
                  <TableHead>البريد الإلكتروني</TableHead>
                  <TableHead>الدور</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>محمد</TableCell>
                  <TableCell>mohamed@example.com</TableCell>
                  <TableCell>
                    {ERole.ROLE_PARENT === ERole.ROLE_PARENT && "ولي"}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>المعلمين الجدد</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>الاسم</TableHead>
                  <TableHead>البريد الإلكتروني</TableHead>
                  <TableHead>الدور</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>محمد</TableCell>
                  <TableCell>mohamed@example.com</TableCell>
                  <TableCell>
                    {ERole.ROLE_TEACHER === ERole.ROLE_TEACHER && "معلم"}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

interface StatisticsCardProps {
  title: string;
  value: number;
  percentage: number;
  icon: React.ElementType;
}

function StatisticsCard({
  title,
  value,
  percentage,
  icon: Icon,
}: StatisticsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-sky-600" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {value.toLocaleString("en-US")}
        </div>
        <p className="text-xs text-muted-foreground">
          <span className="text-success-600">
            {percentage > 0 ? "+" : ""}
            {percentage}%
          </span>{" "}
          من الشهر الماضي
        </p>
      </CardContent>
    </Card>
  );
}
