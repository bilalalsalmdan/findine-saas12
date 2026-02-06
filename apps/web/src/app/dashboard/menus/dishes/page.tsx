"use client";

import { useState } from "react";
import { Plus, Search, Edit, Trash, ImageIcon } from "lucide-react";

const dishes = [
  { id: 1, name: "مشاوي مشكلة", category: "أطباق رئيسية", price: 120, active: true },
  { id: 2, name: "كبسة لحم", category: "أطباق رئيسية", price: 95, active: true },
  { id: 3, name: "فتوش", category: "مقبلات", price: 35, active: true },
  { id: 4, name: "حمص", category: "مقبلات", price: 25, active: false },
  { id: 5, name: "بقلاوة", category: "حلويات", price: 40, active: true },
];

export default function DishesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">الأطباق</h2>
          <p className="text-gray-600">إدارة أطباق قائمة الطعام</p>
        </div>
        <button className="bg-[#E6034B] text-white px-4 py-2 rounded-xl font-medium hover:bg-[#c80340] transition-colors flex items-center gap-2">
          <Plus className="w-5 h-5" />
          طبق جديد
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="p-4 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="بحث في الأطباق..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-10 pl-4 py-2 rounded-xl border border-gray-200 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none"
            />
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {dishes.map((dish) => (
            <div key={dish.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-gray-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{dish.name}</h3>
                  <p className="text-sm text-gray-500">{dish.category}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-medium text-gray-900">{dish.price} ريال</span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${dish.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}>
                  {dish.active ? "نشط" : "غير نشط"}
                </span>
                <div className="flex items-center gap-1">
                  <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
