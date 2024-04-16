import React from "react";

import { CheckCircledIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

interface PricingCardProps {
  title: string;
  price: number;
}

export function PricingCard({ title, price }: PricingCardProps) {
  return (
    <section className="flex flex-col rounded-3xl border border-slate-600 p-6 sm:px-8 lg:py-8">
      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
      <p className="order-first text-5xl text-white">
        <span className="text-2xl text-slate-400">د.ت</span> {price}
      </p>
      <ul className="order-last mt-10 flex flex-col gap-y-3 text-slate-200">
        <li className="flex items-center">
          <CheckCircledIcon className="h-5 w-5 text-white" />
          <span className="ml-2">دروس مباشرة</span>
        </li>
        <li className="flex items-center">
          <CheckCircledIcon className="h-5 w-5 text-white" />
          <span className="ml-2">مجتمع الدروس</span>
        </li>
        <li className="flex items-center">
          <CheckCircledIcon className="h-5 w-5 text-white" />
          <span className="ml-2"> ملخصات وشروحات </span>
        </li>
        <li className="flex items-center">
          <CheckCircledIcon className="h-5 w-5 text-white" />
          <span className="ml-2"> اختبارات </span>
        </li>
      </ul>
      <Button variant="primary" className="mt-8">
        {" "}
        ابدأ الآن{" "}
      </Button>
    </section>
  );
}
