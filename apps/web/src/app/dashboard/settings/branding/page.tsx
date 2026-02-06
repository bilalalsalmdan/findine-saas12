"use client";

import { Palette, Image, Type } from "lucide-react";
import { useState } from "react";

export default function BrandingPage() {
  const [colors, setColors] = useState({
    primary: "#E6034B",
    secondary: "#7c3aed",
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">الهوية البصرية</h2>
        <p className="text-gray-600">تخصيص مظهر قائمتك وموقعك</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Palette className="w-5 h-5" />
          الألوان
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">اللون الأساسي</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={colors.primary}
                onChange={(e) => setColors({ ...colors, primary: e.target.value })}
                className="w-12 h-12 rounded-lg border border-gray-200 cursor-pointer"
              />
              <input
                type="text"
                value={colors.primary}
                onChange={(e) => setColors({ ...colors, primary: e.target.value })}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">اللون الثانوي</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={colors.secondary}
                onChange={(e) => setColors({ ...colors, secondary: e.target.value })}
                className="w-12 h-12 rounded-lg border border-gray-200 cursor-pointer"
              />
              <input
                type="text"
                value={colors.secondary}
                onChange={(e) => setColors({ ...colors, secondary: e.target.value })}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Image className="w-5 h-5" />
          الشعار
        </h3>
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <Image className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-gray-600 mb-2">اسحب الصورة هنا أو اضغط للاختيار</p>
          <p className="text-gray-400 text-sm">PNG, JPG حتى 2MB</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Type className="w-5 h-5" />
          الخط
        </h3>
        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none">
          <option>الخط الافتراضي</option>
          <option>Cairo</option>
          <option>Tajawal</option>
          <option>IBM Plex Arabic</option>
        </select>
      </div>
    </div>
  );
}
