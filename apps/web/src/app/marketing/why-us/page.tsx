"use client";

import { Zap, Clock, Shield } from "lucide-react";

export default function WhyUsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">لماذا FineDine؟</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            أفضل منصة لإدارة المطاعم في العالم العربي
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-gray-50 text-center">
            <Zap className="w-12 h-12 text-[#E6034B] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">سريع وسهل</h3>
            <p className="text-gray-600">أنشئ قائمتك في دقائق</p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-50 text-center">
            <Clock className="w-12 h-12 text-[#E6034B] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">دعم 24/7</h3>
            <p className="text-gray-600">فريق دعم متاح على مدار الساعة</p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-50 text-center">
            <Shield className="w-12 h-12 text-[#E6034B] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">موثوق وآمن</h3>
            <p className="text-gray-600">أمان عالي وحماية للبيانات</p>
          </div>
        </div>
      </div>
    </div>
  );
}
