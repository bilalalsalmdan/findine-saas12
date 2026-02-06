"use client";

import { useState } from "react";
import { Plus, Edit, Trash } from "lucide-react";

const categories = [
  { id: 1, name: "مقبلات", items: 6, order: 1 },
  { id: 2, name: "أطباق رئيسية", items: 12, order: 2 },
  { id: 3, name: "حلويات", items: 4, order: 3 },
  { id: 4, name: "مشروبات", items: 8, order: 4 },
];

export default function CategoriesPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">التصنيفات</h2>
          <p className="text-gray-600">إدارة تصنيفات قائمة الطعام</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#E6034B] text-white px-4 py-2 rounded-xl font-medium hover:bg-[#c80340] transition-colors flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          تصنيف جديد
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">التصنيف</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">العناصر</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">الترتيب</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">إجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {categories.map((category) => (
              <tr key={category.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{category.name}</td>
                <td className="px-6 py-4 text-gray-600">{category.items} عنصر</td>
                <td className="px-6 py-4 text-gray-600">{category.order}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
