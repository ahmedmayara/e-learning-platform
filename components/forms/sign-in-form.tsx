"use client";

import React from "react";

import Link from "next/link";
import { SignInSchema, SignInValues } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function SignInForm() {
  const signInForm = useForm<SignInValues>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div>
      <Form {...signInForm}>
        <form
          className="grid gap-4"
          onSubmit={signInForm.handleSubmit(() => {})}
        >
          <FormField
            control={signInForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center">
                  <div className="mr-auto inline-block text-sm"></div>
                  <FormLabel> البريد الإلكتروني</FormLabel>
                </div>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={signInForm.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center">
                  <Link
                    href="/forgot-password"
                    className="mr-auto inline-block text-sm underline underline-offset-4"
                  >
                    نسيت كلمة المرور؟
                  </Link>
                  <FormLabel>كلمة المرور</FormLabel>
                </div>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button variant="primary" type="submit" className="w-full">
            تسجيل الدخول
          </Button>
          <div className="mt-4 text-center text-sm">
            ليس لديك حساب؟{" "}
            <Link
              href="/auth/sign-up"
              className="font-bold text-sky-400 underline underline-offset-4"
            >
              سجل الآن
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
