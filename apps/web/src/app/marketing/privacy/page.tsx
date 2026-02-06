"use client";

import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">سياسة الخصوصية</h1>
        
        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="mb-6">
            نحن نأخذ خصوصيتك على محمل الجد. توضح هذه السياسة كيفية جمع واستخدام وحماية بياناتك الشخصية.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">المعلومات التي نجمعها</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>معلومات الحساب (الاسم، البريد الإلكتروني، رقم الهاتف)</li>
            <li>معلومات المطعم (الاسم، العنوان، معلومات التواصل)</li>
            <li>بيانات الاستخدام والتحليلات</li>
            <li>معلومات الدفع والفوترة</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">كيف نستخدم معلوماتك</h2>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>تقديم خدماتنا وتحسينها</li>
            <li>التواصل معك بخصوص حسابك</li>
            <li>إرسال التحديثات والعروض (بموافقتك)</li>
            <li>التحليلات والإحصائيات</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">حماية البيانات</h2>
          <p className="mb-6">
            نستخدم تشفير SSL لحماية数据传输 ونخزن بياناتك على خوادم آمنة.
            لا نشارك بياناتك مع أطراف ثالثة إلا بموافقتك أو عند الضرورة القانونية.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">حقوقك</h2>
          <p className="mb-6">
            لك الحق في الوصول إلى بياناتك، تعديلها، أو حذفها. يمكنك التواصل معنا في أي وقت
            لطلب هذه الإجراءات.
          </p>

          <p className="mt-8 text-sm text-gray-500">
            آخر تحديث: فبراير 2026
          </p>
        </div>

        <div className="mt-12 pt-8 border-t">
          <Link href="/marketing/contact" className="text-[#E6034B] hover:underline">
            تواصل معنا إذا كان لديك أي استفسار ←
          </Link>
        </div>
      </div>
    </div>
  );
}
