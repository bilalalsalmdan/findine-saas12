"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const steps = [
  { title: "إنشاء حساب", desc: "سجل مجاناً في دقائق" },
  { title: "إضافة الأطباق", desc: "أضف قائمتك بسهولة" },
  { title: "نشر القائمة", desc: "شارك QR مع عملائك" },
];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">مرحباً بك في FineDine!</h1>
          <p className="text-gray-600 text-center mb-8">لنبدأ رحلتك في 3 خطوات بسيطة</p>

          <div className="flex justify-between mb-8">
            {steps.map((s, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  index <= step ? "bg-[#E6034B] text-white" : "bg-gray-200 text-gray-500"
                }`}>
                  {index < step ? <Check className="w-5 h-5" /> : index + 1}
                </div>
                <span className="text-sm font-medium text-gray-900">{s.title}</span>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <h3 className="font-semibold text-gray-900 mb-2">{steps[step].title}</h3>
            <p className="text-gray-600 mb-4">{steps[step].desc}</p>
            <button
              onClick={() => setStep(Math.min(step + 1, 2))}
              className="bg-[#E6034B] text-white px-6 py-2 rounded-xl font-medium hover:bg-[#c80340] transition-colors"
            >
              التالي
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
