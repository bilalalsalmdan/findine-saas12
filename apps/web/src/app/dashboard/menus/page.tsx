"use client";

import { useState } from "react";
import { Plus, Search, MoreVertical, Edit, Trash, Eye } from "lucide-react";
import Link from "next/link";

const menus = [
  { id: 1, name: "القائمة الرئيسية", items: 24, active: true, views: 1250 },
  { id: 2, name: "قائمة العشاء", items: 18, active: true, views: 890 },
  { id: 3, name: "قائمة الغداء", items: 15, active: false, views: 0 },
];

export default function MenusPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">القوائم</h2>
          <p className="text-gray-600">إدارة قوائم الطعام الرقمية</p>
        </div>
        <Link
          href="/dashboard/menus/new"
          className="bg-[#E6034B] text-white px-4 py-2 rounded-xl font-medium hover:bg-[#c80340] transition-colors flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          قائمة جديدة
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="p-4 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="بحث في القوائم..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-10 pl-4 py-2 rounded-xl border border-gray-200 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none"
            />
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {menus.map((menu) => (
            <div key={menu.id} className="p-6 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#E6034B]/20 to-[#7c3aed]/20 flex items-center justify-center">
                  <span className="text-2xl">🍽️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{menu.name}</h3>
                  <p className="text-sm text-gray-500">{menu.items} عنصر • {menu.views} مشاهدة</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  menu.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                }`}>
                  {menu.active ? "نشط" : "غير نشط"}
                </span>
                <div className="flex items-center gap-1">
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash className="w-5 h-5" />
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
