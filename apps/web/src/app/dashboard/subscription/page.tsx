"use client";

import { CreditCard, Check, Sparkles } from "lucide-react";

const plans = [
  { name: "البداية", price: "0", features: ["قائمة واحدة", "100 طلب", "دعم البريد"] },
  { name: "النمو", price: "99", features: ["قوائم غير محدودة", "طلبات غير محدودة", "دعم أولوي"] },
  { name: "الاحترافية", price: "299", features: ["كل المميزات", "API مخصص", "مدير حساب"] },
];

export default function SubscriptionPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">الاشتراك</h2>
        <p className="text-gray-600">اختر الخطة المناسبة لمطعمك</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className={`p-6 rounded-2xl border ${index === 2 ? "border-[#E6034B] bg-[#E6034B]/5" : "border-gray-200"}`}>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
              <span className="text-gray-500">ريال/شهر</span>
            </div>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-center gap-2 text-gray-600">
                  <Check className="w-4 h-4 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-xl font-semibold ${index === 2 ? "bg-[#E6034B] text-white" : "border-2 border-gray-200"}`}>
              اختر الخطة
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
