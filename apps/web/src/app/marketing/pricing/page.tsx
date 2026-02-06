"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "البداية",
    price: "0",
    period: "مجاني للأبد",
    description: "مثالي للمطاعم الصغيرة",
    features: ["قائمة QR واحدة", "100 طلب/شهر", "تصميم أساسي", "دعم البريد"],
    popular: false,
  },
  {
    name: "النمو",
    price: "99",
    period: "ريال/شهر",
    description: "للمطاعم المتنامية",
    features: ["قوائم غير محدودة", "طلبات غير محدودة", "تصميم مخصص", "دعم 24/7", "تحليلات متقدمة"],
    popular: true,
  },
  {
    name: "الاحترافية",
    price: "299",
    period: "ريال/شهر",
    description: "للسلاسل والمطاعم الكبيرة",
    features: ["كل مميزات النمو", "أفرع غير محدودة", "API مخصص", "مدير حساب", "ضمان SLA"],
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">خطط الأسعار</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            اختر الخطة المناسبة لك، خطط مرنة تناسب كل حجم مطعم
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl ${plan.popular ? "bg-gray-900 text-white" : "bg-white border"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#E6034B] text-white px-4 py-1 rounded-full text-sm font-medium">
                    الأكثر شيوعاً
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={plan.popular ? "text-gray-400" : "text-gray-500"}>ريال</span>
                </div>
                <span className={`text-sm ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                  {plan.period}
                </span>
                <p className={`mt-4 text-sm ${plan.popular ? "text-gray-300" : "text-gray-600"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.popular ? "text-[#E6034B]" : "text-green-500"}`} />
                    <span className={plan.popular ? "text-gray-300" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/auth/register"
                className={`block w-full py-3 rounded-xl font-semibold text-center transition-colors ${
                  plan.popular
                    ? "bg-[#E6034B] text-white hover:bg-[#c80340]"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                ابدأ الآن
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
