import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Test } from "@/types";

import { Button } from "@/components/ui/button";

interface TestCardProps {
  test: Test;
}

export function TestCard({ test }: TestCardProps) {
  return (
    <div className="flex flex-col rounded-xl border">
      <div className="flex h-[200px] items-center justify-center rounded-t-xl bg-muted">
        <Image alt="Course thumbnail" width="64" height="64" src="/pdf.svg" />
      </div>
      <div className="flex flex-col space-y-4 p-6">
        <a href="#">
          <h5 className="text-2xl font-bold text-foreground">{test.name}</h5>
        </a>
        <p className="font-normal text-muted-foreground">{test.description}</p>
        <p className="font-normal text-muted-foreground">{test.subject}</p>
        <p className="font-normal text-muted-foreground">{test.duration}</p>
        <div className="mt-auto flex w-full items-center space-x-4 pt-2.5">
          {test.correction_pdf_url && test.pdf_url && (
            <>
              <Button variant="secondary" className="w-full" asChild>
                <Link href={test.correction_pdf_url} target="_blank">
                  عرض الحلول
                </Link>
              </Button>
              <Button variant="secondary" className="w-full" asChild>
                <Link href={test.pdf_url} target="_blank">
                  تحميل الامتحان
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
