"use client";

import { useState } from "react";
import { Plus, Grip, Trash, Save } from "lucide-react";

const menuItems = [
  { id: 1, name: "مشاوي مشكلة", price: 120, category: "أطباق رئيسية" },
  { id: 2, name: "كبسة لحم", price: 95, category: "أطباق رئيسية" },
  { id: 3, name: "فتوش", price: 35, category: "مقبلات" },
];

export default function MenuBuilderPage() {
  const [items, setItems] = useState(menuItems);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">منشئ القائمة</h2>
          <p className="text-gray-600">إنشاء وتعديل قائمة الطعام</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50">
            معاينة
          </button>
          <button className="bg-[#E6034B] text-white px-4 py-2 rounded-xl font-medium hover:bg-[#c80340] transition-colors flex items-center gap-2">
            <Save className="w-4 h-4" />
            حفظ
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="p-4 border-b border-gray-100">
          <button className="flex items-center gap-2 text-[#E6034B] font-medium">
            <Plus className="w-5 h-5" />
            إضافة عنصر جديد
          </button>
        </div>
        <div className="divide-y divide-gray-100">
          {items.map((item) => (
            <div key={item.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <Grip className="w-5 h-5 text-gray-400 cursor-move" />
                <div>
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-medium text-gray-900">{item.price} ريال</span>
                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
                  <Trash className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
