"use client";

import { MapPin, Clock, Phone } from "lucide-react";

export default function RestaurantSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">إعدادات المطعم</h2>
        <p className="text-gray-600">معلومات وتفاصيل المطعم</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <MapPin className="w-5 h-5" />
          العنوان
        </h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="عنوان المطعم"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="المدينة"
              className="px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none"
            />
            <input
              type="text"
              placeholder="الرمز البريدي"
              className="px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5" />
          ساعات العمل
        </h3>
        <div className="space-y-3">
          {["السبت", "الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"].map((day, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
              <span className="font-medium text-gray-900">{day}</span>
              <div className="flex items-center gap-2">
                <input
                  type="time"
                  defaultValue="09:00"
                  className="px-3 py-2 rounded-lg border border-gray-200"
                />
                <span className="text-gray-400">-</span>
                <input
                  type="time"
                  defaultValue="23:00"
                  className="px-3 py-2 rounded-lg border border-gray-200"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
