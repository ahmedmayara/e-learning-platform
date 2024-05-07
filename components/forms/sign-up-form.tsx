"use client";

import React from "react";

import Link from "next/link";
import { SignUpSchema, SignUpValues } from "@/schemas";
import { ERole } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { User2Icon, UserCircleIcon } from "lucide-react";
import { useForm } from "react-hook-form";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type FieldName = keyof SignUpValues;

interface StepsType {
  id: string;
  name: string;
  fields?: FieldName[];
}

const steps: StepsType[] = [
  {
    id: "role",
    name: "Role Selection",
    fields: ["role"],
  },
  {
    id: "personal",
    name: "Fundamental Information",
    fields: ["name", "email"],
  },
  {
    id: "password",
    name: "Security and Privacy",
    fields: ["password", "confirmPassword"],
  },
  {
    id: "finish",
    name: "Finishing Touches",
  },
];

export function SignUpForm() {
  const [currentStep, setCurrentStep] = React.useState<number>(0);
  const [previousStep, setPreviousStep] = React.useState<number>(0);
  const delta = currentStep - previousStep;

  const signUpForm = useForm<SignUpValues>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      role: ERole.ROLE_PARENT,
    },
  });

  const next = async () => {
    const fields = steps[currentStep].fields;

    const output = await signUpForm.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await signUpForm.handleSubmit(() => {})();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const previous = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <>
      <Form {...signUpForm}>
        <form onSubmit={signUpForm.handleSubmit(() => {})}>
          {currentStep === 0 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <FormField
                control={signUpForm.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel>الدور</FormLabel>
                    <FormDescription>
                      اختر الدور الذي يصفك بشكل أفضل
                    </FormDescription>
                    <FormMessage />
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid max-w-xl grid-cols-2 gap-4 pt-4"
                    >
                      <FormItem>
                        <FormLabel className="ring-white/60 ring-offset-2 ring-offset-sky-600 [&:has([data-state=checked])>div]:ring-2">
                          <FormControl>
                            <RadioGroupItem
                              value={ERole.ROLE_PARENT}
                              className="sr-only"
                            />
                          </FormControl>
                          <RoleCard
                            title="ولي"
                            description="وصف"
                            checked={field.value === ERole.ROLE_PARENT}
                            icon={User2Icon}
                          />
                        </FormLabel>
                      </FormItem>

                      <FormItem>
                        <FormLabel className="ring-white/60 ring-offset-2 ring-offset-sky-600 [&:has([data-state=checked])>div]:ring-2">
                          <FormControl>
                            <RadioGroupItem
                              value={ERole.ROLE_TEACHER}
                              className="sr-only"
                            />
                          </FormControl>
                          <RoleCard
                            title="معلم"
                            description="وصف"
                            checked={field.value === ERole.ROLE_TEACHER}
                            icon={UserCircleIcon}
                          />
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormItem>
                )}
              />
            </motion.div>
          )}

          {currentStep === 1 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-4"
            >
              <FormField
                control={signUpForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الاسم</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={signUpForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>البريد الإلكتروني</FormLabel>
                    <FormControl>
                      <Input type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="space-y-4"
            >
              <FormField
                control={signUpForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>كلمة المرور</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={signUpForm.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>تأكيد كلمة المرور</FormLabel>
                    <FormControl>
                      <Input type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
          )}

          {currentStep === 3 && (
            <>
              <motion.div
                initial={{ x: delta >= 0 ? "50%" : "-50%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="rounded-xl border border-green-200 bg-green-100 p-6"
              >
                <div className="flex flex-col items-center space-y-2">
                  <CheckCircledIcon className="h-16 w-16 text-green-600" />
                  <h1 className="text-xl font-semibold">
                    تم إنشاء حسابك بنجاح
                  </h1>
                  <p className="text-center text-muted-foreground">
                    تم إنشاء حسابك بنجاح، يمكنك الآن تسجيل الدخول
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </form>
      </Form>

      {currentStep !== 3 && (
        <div className="pt-6">
          <Button
            type="button"
            variant="primary"
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className="w-full"
          >
            {currentStep === steps.length - 1 ? "إنهاء" : "التالي"}
          </Button>

          <Button
            type="button"
            onClick={previous}
            disabled={currentStep === 0 || currentStep === steps.length - 1}
            className="mt-4 w-full"
          >
            السابق
          </Button>
        </div>
      )}

      {currentStep === 3 && (
        <div className="pt-6">
          <Button type="button" className="w-full" asChild>
            <Link href="/auth/sign-in">تسجيل الدخول</Link>
          </Button>
        </div>
      )}
    </>
  );
}

interface RoleCardProps {
  title: string;
  description: string;
  checked: boolean;
  icon: React.ElementType;
}

function RoleCard({ title, description, checked, icon: Icon }: RoleCardProps) {
  return (
    <div
      className={cn(
        "flex cursor-pointer items-center rounded-xl border bg-muted/40 p-4",
        {
          "bg-sky-100 text-sky-900": checked,
          "bg-white text-muted-foreground": !checked,
        },
      )}
    >
      <Icon className="h-8 w-8" />
      <div className="ml-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
