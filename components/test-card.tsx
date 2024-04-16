import React from "react";

import Image from "next/image";

import { Button } from "@/components/ui/button";

interface TestCardProps {
  title: string;
  description: string;
  image: string;
}

export function TestCard({ title, description, image }: TestCardProps) {
  return (
    <div className="flex flex-col rounded-xl border">
      <a href="#">
        <Image
          src={image}
          alt={title}
          width={1000}
          height={1000}
          className="h-[300px] w-full rounded-t-xl object-cover"
        />
      </a>
      <div className="flex flex-col space-y-4 p-6">
        <a href="#">
          <h5 className="text-2xl font-bold text-foreground">{title}</h5>
        </a>
        <p className="font-normal text-muted-foreground">{description}</p>
        <div className="mt-auto flex w-full items-center space-x-4 pt-2.5">
          <Button variant="secondary" className="w-full">
            عرض الحلول
          </Button>
          <Button variant="primaryOutline" className="w-full">
            إجراء الاختبار
          </Button>
        </div>
      </div>
    </div>
  );
}
