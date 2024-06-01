"use client";

import React from "react";

import { useRouter } from "next/navigation";
import { AddCourseSchema, AddCourseValues } from "@/schemas";
import { Quiz, Teacher } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { QuizModel } from "./addquizmodal";

interface AddCourseProps {
  teacher: Teacher;
}

export function AddCourseDialog({ teacher }: AddCourseProps) {
  const router = useRouter();
  const [success, setSuccess] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [quizarreay, setQuizarreay] = React.useState<Quiz[]>([]);

  const addCourseForm = useForm<AddCourseValues>({
    resolver: zodResolver(AddCourseSchema),
    defaultValues: {
      video_url: "",
      pdf_url: "",
      name: "",
      schoolLevel: "",
      subject: "",
      term: "",
      date_of_addition: new Date().toISOString(),
      quizzes: quizarreay,
    },
  });
  const API_URL = "http://localhost:8080/api/courses";

  const onSubmit = async (values: AddCourseValues) => {
    values.quizzes = quizarreay;
    console.log(values);
    try {
      await axios
        .post(API_URL, {
          ...values,
          teacher: teacher,
          quizzes: quizarreay,
        })
        .then((res) => {
          console.log(res.data);
          setSuccess("تمت إضافة الدرس بنجاح");
          router.refresh();
        })
        .catch((error) => {
          console.error(error);
          setError("حدث خطأ ما");
        });
    } catch (error) {
      console.error(error);
      setError("حدث خطأ ما");
    }
  };
  const handelAddnewquiztothequizarreay = (quiz: Quiz[]) => {
    setQuizarreay([...quizarreay, ...quiz]);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primaryOutline">إضافة درس جديد</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>إضافة درس جديد</DialogTitle>
          <DialogDescription>قم بإدخال بيانات الدرس الجديد</DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <Form {...addCourseForm}>
            <form
              onSubmit={addCourseForm.handleSubmit(onSubmit)}
              className="grid gap-4"
            >
              <FormField
                control={addCourseForm.control}
                name="video_url"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <div className="mr-auto inline-block text-sm"></div>
                      <FormLabel>رابط الفيديو</FormLabel>
                    </div>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addCourseForm.control}
                name="pdf_url"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <div className="mr-auto inline-block text-sm"></div>
                      <FormLabel>رابط الملف</FormLabel>
                    </div>
                    <FormControl>
                      <Input type="file" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addCourseForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <div className="mr-auto inline-block text-sm"></div>
                      <FormLabel>الاسم</FormLabel>
                    </div>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={addCourseForm.control}
                name="schoolLevel"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <div className="mr-auto inline-block text-sm"></div>
                      <FormLabel>المرحلة</FormLabel>
                    </div>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={addCourseForm.control}
                name="term"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <div className="mr-auto inline-block text-sm"></div>
                      <FormLabel>الفصل</FormLabel>
                    </div>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={addCourseForm.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <div className="mr-auto inline-block text-sm"></div>
                      <FormLabel>المادة</FormLabel>
                    </div>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" variant="primary">
                إضافة
              </Button>

              {error && (
                <div className="flex justify-end rounded-xl border-e-4 border-red-600 bg-red-200 p-4 px-6 text-sm font-medium text-red-600">
                  {error}
                </div>
              )}

              {success && (
                <div className="flex justify-end rounded-xl border-e-4 border-green-600 bg-green-200 p-4 px-6 text-sm font-medium text-green-600">
                  {success}
                </div>
              )}
            </form>
            <QuizModel
              value={quizarreay}
              onchange={handelAddnewquiztothequizarreay}
            />
          </Form>
          <Button onClick={() => console.log(quizarreay)}>log</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
