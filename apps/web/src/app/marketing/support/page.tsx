"use client";

import { Phone, MessageCircle, Video } from "lucide-react";

export default function SupportPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">الدعم</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            نحن هنا لمساعدتك على مدار الساعة
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-gray-50 text-center">
            <MessageCircle className="w-12 h-12 text-[#E6034B] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">دردشة مباشرة</h3>
            <p className="text-gray-600 mb-4">تواصل مع فريق الدعم مباشرة</p>
            <button className="text-[#E6034B] font-medium">ابدأ الدردشة</button>
          </div>
          <div className="p-8 rounded-2xl bg-gray-50 text-center">
            <Phone className="w-12 h-12 text-[#E6034B] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">اتصل بنا</h3>
            <p className="text-gray-600 mb-4">+966 50 123 4567</p>
            <p className="text-gray-400 text-sm">24/7</p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-50 text-center">
            <Video className="w-12 h-12 text-[#E6034B] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">جلسة فيديو</h3>
            <p className="text-gray-600 mb-4">احجز جلسة تدريب مخصصة</p>
            <button className="text-[#E6034B] font-medium">احجز الآن</button>
          </div>
        </div>
      </div>
    </div>
  );
}
