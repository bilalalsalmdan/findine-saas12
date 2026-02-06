"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";

export default function BlogPostPage({ params }: { params: { id: string } }) {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/marketing/blog" className="inline-flex items-center gap-2 text-[#E6034B] mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" />
          العودة للمدونة
        </Link>

        <article>
          <div className="h-64 bg-gradient-to-br from-[#E6034B]/20 to-[#7c3aed]/20 rounded-2xl mb-8" />
          
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              1 فبراير 2026
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              فريق FineDine
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            كيف تزيد مبيعات مطعمك بنسبة 40%
          </h1>

          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              في عالم المطاعم المتنافس، زيادة المبيعات ليست مجرد هدف بل هي ضرورة للبقاء والنمو.
              في هذا المقال، سنستعرض الاستراتيجيات الفعالة التي ساعدت آلاف المطاعم على زيادة إيراداتها.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. تحسين تجربة العملاء</h2>
            <p className="mb-4">
              تجربة العملاء هي العامل الأهم في نجاح أي مطعم. من أول لحظة يدخل فيها العميل
              حتى يغادر، كل تفصيل يهم.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. استخدام التقنية</h2>
            <p className="mb-4">
              التحول الرقمي ليس خياراً بعد الآن. القوائم الرقمية، أنظمة الطلبات، وتحليلات
              البيانات كلها أدوات ضرورية للنجاح.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
