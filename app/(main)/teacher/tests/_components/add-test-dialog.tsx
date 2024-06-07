"use client";

import React from "react";

import { useRouter } from "next/navigation";
import { AddTestSchema, AddTestValues } from "@/schemas";
import { Teacher, Test } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "@radix-ui/react-label";
import axios from "axios";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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

import { UploadcoursePdf } from "../../courses/_components/uploadpdf";

interface AddTestProps {
  teacher: Teacher;
}

export function AddTestDialog({ teacher }: AddTestProps) {
  const router = useRouter();
  const [success, setSuccess] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [file, setFile] = React.useState<File | null>(null);
  const [filecorrection, setFileCorrection] = React.useState<File | null>(null);

  const addTestForm = useForm<AddTestValues>({
    resolver: zodResolver(AddTestSchema),
    defaultValues: {
      name: "",
      pdf_url: "",
      description: "",
      schoolLevel: "",
      difficulty: "",
      subject: "",
      duration: "",
      term: "",
      correction_pdf_url: "",
    },
  });

  const onSubmit = async (values: AddTestValues) => {
    //@ts-ignore
    values.pdf_url = file?.url;
    //@ts-ignore
    values.correction_pdf_url = filecorrection?.url;
    console.log(values);
    try {
      await axios
        .post("http://localhost:8080/api/tests", {
          ...values,
          teacher: teacher,
        })
        .then((res) => {
          setSuccess("تمت إضافة الاختبار بنجاح");
          router.refresh();
        })
        .catch((error) => {
          setError("حدث خطأ ما");
        });
    } catch (error) {
      setError("حدث خطأ ما");
    }
  };
  console.log(addTestForm.formState.errors);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="primaryOutline">إضافة اختبار جديد</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>إضافة اختبار جديد</DialogTitle>
          <DialogDescription>
            قم بإدخال بيانات الاختبار الجديد
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <Form {...addTestForm}>
            <form
              onSubmit={addTestForm.handleSubmit(onSubmit)}
              className="grid grid-cols-2 gap-4"
              id="addTestForm"
            >
              <div className="col-span-2 space-y-2">
                <FormField
                  control={addTestForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-center">
                        <div className="mr-auto inline-block text-sm"></div>
                        <FormLabel>اسم الاختبار</FormLabel>
                      </div>
                      <FormControl>
                        <Input type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col space-y-2">
                  <div className="flex items-center">
                    <div className="mr-auto inline-block text-sm"></div>
                    <FormLabel>ملف الاختبار</FormLabel>
                  </div>
                  <UploadcoursePdf
                    file={file}
                    onchange={(file) => setFile(file)}
                  />
                </div>
              </div>

              <FormField
                control={addTestForm.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <div className="mr-auto inline-block text-sm"></div>
                      <FormLabel>الوصف</FormLabel>
                    </div>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={addTestForm.control}
                name="schoolLevel"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <div className="mr-auto inline-block text-sm"></div>
                      <FormLabel>المستوى الدراسي</FormLabel>
                    </div>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={addTestForm.control}
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
                control={addTestForm.control}
                name="difficulty"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <div className="mr-auto inline-block text-sm"></div>
                      <FormLabel>الصعوبة</FormLabel>
                    </div>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={addTestForm.control}
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

              <FormField
                control={addTestForm.control}
                name="duration"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center">
                      <div className="mr-auto inline-block text-sm"></div>
                      <FormLabel>المدة</FormLabel>
                    </div>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="col-span-2 flex flex-col space-y-2">
                <div className="flex items-center">
                  <div className="mr-auto inline-block text-sm"></div>
                  <FormLabel>ملف الإجابة</FormLabel>
                </div>
                <UploadcoursePdf
                  file={filecorrection}
                  onchange={(file) => setFileCorrection(file)}
                />
              </div>

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
          </Form>
        </div>
        <DialogFooter>
          <div className="flex justify-end">
            <Button type="submit" variant="primary" form="addTestForm">
              إضافة
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
