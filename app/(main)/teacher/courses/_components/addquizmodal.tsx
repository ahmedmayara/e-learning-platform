import { useState } from "react";

import { Quiz } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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

interface ConfirmModelProps {
  value: Quiz[];
  onchange: (value: Quiz[]) => void;
}

export const QuizModel = ({ value, onchange }: ConfirmModelProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const MultipleQuizSchema = z.object({
    question: z.string().min(1, { message: "الرجاء إدخال سؤال" }),
    option1: z.string().min(1, { message: "الرجاء إدخال الخيار الأول" }),
    option2: z.string().min(1, { message: "الرجاء إدخال الخيار الثاني" }),
    option3: z.string().min(1, { message: "الرجاء إدخال الخيار الثالث" }),
    option4: z.string().min(1, { message: "الرجاء إدخال الخيار الرابع" }),
    correct_option: z
      .string()
      .min(1, { message: "الرجاء إدخال الخيار الصحيح" }),
  });

  const form = useForm({
    resolver: zodResolver(MultipleQuizSchema),
  });

  const [staticOptions, setStaticOptions] = useState([null]);

  const handelpushnewquizinthequizarray = (quiz: Quiz) => {
    onchange([quiz]);
  };

  return (
    <>
      <AlertDialog open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
        <AlertDialogTrigger className="flex items-center gap-x-2" asChild>
          <Button className="rounded-full p-4" size="sm" variant="ghost">
            إضافة اختبار
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-[50%]">
          <AlertDialogTitle>إضافة اختبار لدورتك</AlertDialogTitle>
          <AlertDialogDescription>
            هنا يمكنك إضافة اختبار إلى دورتك
          </AlertDialogDescription>
          <Form {...form}>
            <form className="mt-4 space-y-4">
              <FormField
                control={form.control}
                name="question"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="السؤال"
                        className="mt-1 w-full rounded-md border border-gray-300 p-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormLabel className="  mt-6 flex">ضع هنا خيارك الأول</FormLabel>
              <FormField
                control={form.control}
                name="option1"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        {...field}
                        type="text"
                        placeholder="الخيار الأول"
                        className="mt-1 w-full rounded-md border border-gray-300 p-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormLabel className="  mt-6 flex">ضع هنا خيارك الثاني</FormLabel>
              <FormField
                control={form.control}
                name="option2"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        {...field}
                        type="text"
                        placeholder="الخيار الثاني"
                        className="mt-1 w-full rounded-md border border-gray-300 p-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormLabel className="  mt-6 flex">ضع هنا خيارك الثالث</FormLabel>
              <FormField
                control={form.control}
                name="option3"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        {...field}
                        type="text"
                        placeholder="الخيار الثالث"
                        className="mt-1 w-full rounded-md border border-gray-300 p-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormLabel className="mt-3 flex">ضع هنا خيارك الرابع</FormLabel>
              <div className="flex flex-row items-center  justify-between">
                <div className="flex-1 ">
                  <FormField
                    control={form.control}
                    name="option4"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <input
                            {...field}
                            type="text"
                            placeholder="الخيار الرابع"
                            className="mt-1 w-full rounded-md border border-gray-300 p-2"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div></div>
              </div>
              <FormLabel className="mt-3 flex">
                ضع هنا الإجابة الصحيحة
              </FormLabel>
              <div className="flex flex-row items-center  justify-between">
                <div className="flex-1 ">
                  <FormField
                    control={form.control}
                    name="correct_option"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <input
                            {...field}
                            type="text"
                            placeholder="الخيار الصحيح"
                            className="mt-1 w-full rounded-md border border-gray-300 p-2"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div></div>
              </div>

              <div className="flex space-x-4 px-6">
                <Button
                  variant="destructive"
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    form.reset();
                    form.setValue("option1", "");
                    form.setValue("option2", "");
                    setStaticOptions([null]);
                  }}
                >
                  إلغاء
                </Button>
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => {
                    handelpushnewquizinthequizarray({
                      question: form.getValues("question"),
                      option1: form.getValues("option1"),
                      option2: form.getValues("option2"),
                      option3: form.getValues("option3"),
                      option4: form.getValues("option4"),
                      correct_option: form.getValues("correct_option"),
                    });
                  }}
                  className="flex-1"
                >
                  إضافة اختبار
                </Button>
              </div>
            </form>
          </Form>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
