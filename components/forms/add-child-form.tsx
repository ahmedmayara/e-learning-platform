"use client";

import React from "react";

import { useRouter } from "next/navigation";
import { AddChildSchema, AddChildValues } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { useCookies } from "next-client-cookies";
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

export function AddChildForm() {
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();

  const [open, setOpen] = React.useState<boolean>(false);
  const [success, setSuccess] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const cookies = useCookies();
  const email = cookies.get("email");

  const addChildForm = useForm<AddChildValues>({
    resolver: zodResolver(AddChildSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      school_level: "",
    },
  });

  const onSubmit = async (values: AddChildValues) => {
    try {
      startTransition(async () => {
        await axios
          .post(`http://localhost:8080/api/parents/${email}/addStudent`, values)
          .then((res) => {
            setSuccess("تم إنشاء الحساب بنجاح");
            setTimeout(() => {
              setSuccess(null);
              setOpen(false);
              router.refresh();
            }, 2000);
          });
      });
    } catch (error) {
      setError("حدث خطأ ما");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="flex cursor-pointer flex-col items-center">
          <div className="flex items-center justify-center rounded-lg border bg-gray-500 p-4">
            <PlusCircledIcon className="h-28 w-28 text-white" />
          </div>
          <h3 className="mt-4 text-lg font-semibold">إنشاء حساب جديد</h3>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>إنشاء حساب جديد</DialogTitle>
          <DialogDescription>
            يرجى ملء النموذج التالي لإنشاء حساب جديد
          </DialogDescription>
        </DialogHeader>

        <Form {...addChildForm}>
          <form
            className="grid gap-4"
            onSubmit={addChildForm.handleSubmit(onSubmit)}
          >
            <FormField
              control={addChildForm.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center">
                    <div className="mr-auto inline-block text-sm"></div>
                    <FormLabel>الاسم</FormLabel>
                  </div>
                  <FormControl>
                    <Input {...field} disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addChildForm.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center">
                    <div className="mr-auto inline-block text-sm"></div>
                    <FormLabel>اللقب</FormLabel>
                  </div>
                  <FormControl>
                    <Input {...field} disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addChildForm.control}
              name="school_level"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center">
                    <div className="mr-auto inline-block text-sm"></div>
                    <FormLabel>المستوى الدراسي</FormLabel>
                  </div>
                  <FormControl>
                    <Input {...field} disabled={isPending} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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

            <Button variant="primary" type="submit" disabled={isPending}>
              إنشاء
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
