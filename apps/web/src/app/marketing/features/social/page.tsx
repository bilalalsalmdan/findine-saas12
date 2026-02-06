"use client";

import { Globe, Users, Heart } from "lucide-react";

export default function SocialPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">التكامل الاجتماعي</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            تواصل مع عملائك على وسائل التواصل الاجتماعي
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-gray-50 text-center">
            <Globe className="w-12 h-12 text-[#E6034B] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">مشاركة سهلة</h3>
            <p className="text-gray-600">شارك قائمتك على جميع المنصات</p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-50 text-center">
            <Users className="w-12 h-12 text-[#E6034B] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">متابعة العملاء</h3>
            <p className="text-gray-600">تتبع تفاعلات العملاء</p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-50 text-center">
            <Heart className="w-12 h-12 text-[#E6034B] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">تقييمات</h3>
            <p className="text-gray-600">اجمع تقييمات وآراء العملاء</p>
          </div>
        </div>
      </div>
    </div>
  );
}
