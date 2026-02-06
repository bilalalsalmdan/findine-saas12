"use client";

import Link from "next/link";

export default function MarketingPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">أدوات التسويق</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          حملات بريدية، SMS، وعروض ترويجية
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-gray-50">
            <h3 className="font-bold text-gray-900 mb-2">حملات البريد</h3>
            <p className="text-gray-600 mb-4">أرسل بريداً إلكترونياً لعملائك</p>
            <button className="text-[#E6034B] font-medium">إنشاء حملة →</button>
          </div>
          <div className="p-6 rounded-2xl bg-gray-50">
            <h3 className="font-bold text-gray-900 mb-2">SMS</h3>
            <p className="text-gray-600 mb-4">رسائل نصية للعملاء</p>
            <button className="text-[#E6034B] font-medium">إرسال SMS →</button>
          </div>
          <div className="p-6 rounded-2xl bg-gray-50">
            <h3 className="font-bold text-gray-900 mb-2">العروض</h3>
            <p className="text-gray-600 mb-4">إنشاء كوبونات وخصومات</p>
            <button className="text-[#E6034B] font-medium">إنشاء عرض →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
