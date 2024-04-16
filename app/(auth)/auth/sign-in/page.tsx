import React from "react";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignInPage() {
  return (
    <div className="h-screen w-full lg:grid lg:grid-cols-2">
      <div className="flex h-screen items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">تسجيل الدخول</h1>
            <p className="text-balance text-muted-foreground">
              تسجيل الدخول للوصول إلى حسابك
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <div className="flex items-center">
                <div className="mr-auto inline-block text-sm"></div>
                <Label htmlFor="email" className="mb-1">
                  البريد الإلكتروني
                </Label>
              </div>
              <Input id="email" type="email" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Link
                  href="/forgot-password"
                  className="mr-auto inline-block text-sm underline underline-offset-4"
                >
                  نسيت كلمة المرور؟
                </Link>
                <Label htmlFor="password">كلمة المرور</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button variant="primary" type="submit" className="w-full">
              تسجيل الدخول
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            ليس لديك حساب؟{" "}
            <Link
              href="/auth/sign-up"
              className="font-bold text-sky-400 underline underline-offset-4"
            >
              سجل الآن
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/bg-sign-in.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover"
          priority
        />
      </div>
    </div>
  );
}
