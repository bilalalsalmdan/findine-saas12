"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">شروط الخدمة</h1>
        
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="mb-6">
            باستخدامك لمنصة FineDine، فإنك توافق على هذه الشروط والأحكام. يرجى قراءتها بعناية.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. قبول الشروط</h2>
          <p className="mb-6">
            بالوصول إلى أو استخدام خدماتنا، فإنك توافق على الالتزام بهذه الشروط. إذا كنت لا توافق،
            يرجى عدم استخدام المنصة.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. حسابات المستخدمين</h2>
          <p className="mb-6">
            أنت مسؤول عن الحفاظ على سرية معلومات حسابك وكلمة المرور. يجب أن تكون المعلومات
            التي تقدمها دقيقة ومحدثة.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. الاشتراكات والدفع</h2>
          <p className="mb-6">
            بعض خدماتنا تتطلب اشتراكاً مدفوعاً. سيتم محاسبتك وفقاً للخطة التي اخترتها.
            يمكنك إلغاء اشتراكك في أي وقت.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. الملكية الفكرية</h2>
          <p className="mb-6">
            جميع المحتويات والعلامات التجارية في المنصة هي ملك لـ FineDine. لا يحق لك نسخ
            أو توزيع أو تعديل أي جزء من المنصة دون إذن خطي.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. إنهاء الخدمة</h2>
          <p className="mb-6">
            نحتفظ بالحق في إنهاء أو تعليق حسابك في حالة انتهاك هذه الشروط.
          </p>

          <p className="mt-8 text-sm text-gray-500">
            آخر تحديث: فبراير 2026
          </p>
        </div>
      </div>
    </div>
  );
}
