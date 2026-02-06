"use client";

import { Plus, Users, Shield } from "lucide-react";

const staff = [
  { id: 1, name: "أحمد محمد", email: "ahmed@restaurant.com", role: "مدير", active: true },
  { id: 2, name: "سارة علي", email: "sara@restaurant.com", role: "نادلة", active: true },
  { id: 3, name: "خالد السالم", email: "khaled@restaurant.com", role: "كاشير", active: false },
];

export default function StaffPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">الموظفون</h2>
          <p className="text-gray-600">إدارة فريق العمل والصلاحيات</p>
        </div>
        <button className="bg-[#E6034B] text-white px-4 py-2 rounded-xl font-medium hover:bg-[#c80340] transition-colors flex items-center gap-2">
          <Plus className="w-5 h-5" />
          موظف جديد
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">الموظف</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">الدور</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">الحالة</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">إجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {staff.map((member) => (
              <tr key={member.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E6034B] to-[#7c3aed] flex items-center justify-center text-white font-medium">
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{member.name}</div>
                      <div className="text-sm text-gray-500">{member.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                    <Shield className="w-3 h-3" />
                    {member.role}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${member.active ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}>
                    {member.active ? "نشط" : "غير نشط"}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-[#E6034B] hover:underline">إدارة الصلاحيات</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
