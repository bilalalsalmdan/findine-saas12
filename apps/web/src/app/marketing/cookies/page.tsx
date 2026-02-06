"use client";

import Link from "next/link";

export default function CookiesPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">سياسة الكوكيز</h1>
        
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="mb-6">
            نستخدم الكوكيز و تقنيات مماثلة لتحسين تجربتك على منصتنا.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">ما هي الكوكيز؟</h2>
          <p className="mb-6">
            الكوكيز هي ملفات نصية صغيرة تُخزن على جهازك عند زيارة المواقع. تساعدنا في تذكر
            تفضيلاتك وتحسين تجربتك.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">أنواع الكوكيز التي نستخدمها</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li><strong>ضرورية:</strong> للتشغيل الأساسي للمنصة</li>
            <li><strong>تحليلية:</strong> لفهم كيفية استخدامك للمنصة</li>
            <li><strong>وظيفية:</strong> لتذكر تفضيلاتك</li>
            <li><strong>تسويقية:</strong> لعرض إعلانات ذات صلة</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">إدارة الكوكيز</h2>
          <p className="mb-6">
            يمكنك التحكم في الكوكيز من خلال إعدادات متصفحك. يمكنك حظر الكوكيز لكن ذلك قد
            يؤثر على تجربتك.
          </p>

          <p className="mt-8 text-sm text-gray-500">
            آخر تحديث: فبراير 2026
          </p>
        </div>
      </div>
    </div>
  );
}
