"use client";

import { Search, HelpCircle, Book, MessageCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "كيف أبدأ مع FineDine؟", a: "يمكنك التسجيل مجاناً وإنشاء قائمتك الرقمية في دقائق." },
  { q: "هل يمكنني تعديل القائمة بعد نشرها؟", a: "نعم، يمكنك تعديل القائمة في أي وقت والتغييرات تظهر فوراً." },
  { q: "ما طرق الدفع المدعومة؟", a: "ندعم جميع بطاقات الائتمان و Apple Pay و Google Pay." },
];

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">مركز المساعدة</h1>
          <p className="text-lg text-gray-600">كيف يمكننا مساعدتك اليوم؟</p>
        </div>

        <div className="relative mb-12">
          <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="بحث في المساعدة..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pr-12 pl-4 py-4 rounded-2xl border border-gray-200 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-gray-50 text-center hover:bg-gray-100 transition-colors cursor-pointer">
            <Book className="w-8 h-8 text-[#E6034B] mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900">الوثائق</h3>
          </div>
          <div className="p-6 rounded-2xl bg-gray-50 text-center hover:bg-gray-100 transition-colors cursor-pointer">
            <HelpCircle className="w-8 h-8 text-[#E6034B] mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900">الأسئلة الشائعة</h3>
          </div>
          <div className="p-6 rounded-2xl bg-gray-50 text-center hover:bg-gray-100 transition-colors cursor-pointer">
            <MessageCircle className="w-8 h-8 text-[#E6034B] mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900">تواصل معنا</h3>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">الأسئلة الشائعة</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
