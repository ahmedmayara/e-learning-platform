import React from "react";

import { Container } from "@/components/container";
import { TestCard } from "@/components/test-card";

export default function TestsPage() {
  return (
    <Container>
      <div className="flex flex-col items-end">
        <h1 className="text-3xl font-bold">مرحبا بكم في صفحة الاختبارات</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          تحتوي هذه الصفحة على اختبارات مصحوبة بتصحيحات يمكنك إجراؤها لتقييم
          .مهاراتك وتحدي نفسك
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <TestCard
          title="إيقاظ علمي | 6 ابتدائي | مكونات الدّم"
          description="اختبار يحتوي على أسئلة حول مكونات الدم ووظائفها مرفقة بأجوبة مفصلة"
          image="https://source.unsplash.com/400x400/?science"
        />
        <TestCard
          title="الرياضيات | 6 ابتدائي | الأعداد الكسرية"
          description="اختبار يحتوي على أسئلة حول الأعداد الكسرية وكيفية تحويلها إلى كسور معادلة"
          image="https://source.unsplash.com/400x400/?math"
        />
        <TestCard
          title="اللغة العربية | 6 ابتدائي | الأفعال وأنواعها"
          description="اختبار يحتوي على أسئلة حول الأفعال وأنواعها مع تطبيقات عملية"
          image="https://source.unsplash.com/400x400/?arabic"
        />
        <TestCard
          title="التاريخ | 6 ابتدائي | العصور التاريخية"
          description="اختبار يحتوي على أسئلة حول العصور التاريخية وأحداثها البارزة"
          image="https://source.unsplash.com/400x400/?history"
        />
        <TestCard
          title="الجغرافيا | 6 ابتدائي | القارات والمحيطات"
          description="اختبار يحتوي على أسئلة حول القارات والمحيطات ومواقعها الجغرافية"
          image="https://source.unsplash.com/400x400/?geography"
        />
        <TestCard
          title="العلوم | 6 ابتدائي | الحركة والقوى الفيزيائية"
          description="اختبار يحتوي على أسئلة حول الحركة والقوى وتأثيرها على الأجسام"
          image="https://source.unsplash.com/400x400/?physics"
        />
      </div>
    </Container>
  );
}
