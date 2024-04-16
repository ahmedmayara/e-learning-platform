import React from "react";

import { BookOpenIcon, PencilRulerIcon, TestTubeIcon } from "lucide-react";

import { Container } from "@/components/container";
import { FeatureCard } from "@/components/marketing/feature-card";

export function Features() {
  return (
    <div className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32" id="features">
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            مكتبة تعليمية كاملة
          </h2>
          <p className="mt-4 text-lg font-medium text-muted-foreground">
            لأننا نهتم بتعليمك، نقدم لك مكتبة تعليمية كاملة تحتوي على كل ما
            تحتاجه
          </p>
        </div>
        <div className="mt-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="التمارين"
              subtitle="تدرب على مهاراتك"
              description="تدرب على المهارات التي تريد تطويرها من خلال التمارين المتاحة"
              icon={PencilRulerIcon}
            />
            <FeatureCard
              title="الاختبارات"
              subtitle="قيم مهاراتك"
              description="قيم مهاراتك من خلال الاختبارات المتاحة واعرف مستواك"
              icon={TestTubeIcon}
            />
            <FeatureCard
              title="ملخصات وشروحات"
              subtitle="استفد من الملخصات"
              description="استفد من الملخصات والشروحات المتاحة لتحقيق أقصى استفادة"
              icon={BookOpenIcon}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
