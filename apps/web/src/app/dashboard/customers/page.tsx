"use client";

import { Users, UserPlus, MoreVertical, Mail, Phone } from "lucide-react";

const customers = [
  { id: 1, name: "أحمد محمد", email: "ahmed@email.com", phone: "+966 50 123 4567", orders: 12, total: 3450 },
  { id: 2, name: "سارة علي", email: "sara@email.com", phone: "+966 55 987 6543", orders: 8, total: 2100 },
  { id: 3, name: "خالد السالم", email: "khaled@email.com", phone: "+966 54 456 7890", orders: 15, total: 5200 },
];

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">العملاء</h2>
          <p className="text-gray-600">إدارة قاعدة عملائك ومعلوماتهم</p>
        </div>
        <button className="bg-[#E6034B] text-white px-4 py-2 rounded-xl font-medium hover:bg-[#c80340] transition-colors flex items-center gap-2">
          <UserPlus className="w-5 h-5" />
          عميل جديد
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">العميل</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">التواصل</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">الطلبات</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">المجموع</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">إجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {customers.map((customer) => (
              <tr key={customer.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E6034B] to-[#7c3aed] flex items-center justify-center text-white font-medium">
                      {customer.name.charAt(0)}
                    </div>
                    <span className="font-medium text-gray-900">{customer.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1 text-sm">
                    <span className="flex items-center gap-1 text-gray-600">
                      <Mail className="w-4 h-4" /> {customer.email}
                    </span>
                    <span className="flex items-center gap-1 text-gray-600">
                      <Phone className="w-4 h-4" /> {customer.phone}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{customer.orders}</td>
                <td className="px-6 py-4 font-medium text-gray-900">{customer.total} ريال</td>
                <td className="px-6 py-4">
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
