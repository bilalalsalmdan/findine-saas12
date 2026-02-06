"use client";

import { Users, Shield, Check } from "lucide-react";

const roles = [
  {
    name: "المدير",
    description: "صلاحيات كاملة على جميع أقسام النظام",
    permissions: ["جميع الصلاحيات"],
    users: 2,
  },
  {
    name: "النادل",
    description: "إدارة الطلبات والطاولات",
    permissions: ["الطلبات", "الطاولات", "العملاء"],
    users: 5,
  },
  {
    name: "الكاشير",
    description: "إدارة المدفوعات والفواتير",
    permissions: ["الطلبات", "الفواتير"],
    users: 3,
  },
];

export default function RolesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">الأدوار والصلاحيات</h2>
        <p className="text-gray-600">إدارة أدوار الموظفين وصلاحياتهم</p>
      </div>

      <div className="grid gap-6">
        {roles.map((role, index) => (
          <div key={index} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{role.name}</h3>
                <p className="text-gray-600 mt-1">{role.description}</p>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Users className="w-5 h-5" />
                <span>{role.users} مستخدمين</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {role.permissions.map((perm, pIndex) => (
                <span key={pIndex} className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                  <Check className="w-3 h-3" />
                  {perm}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
