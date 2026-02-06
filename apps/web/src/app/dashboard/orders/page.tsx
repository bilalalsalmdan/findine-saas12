"use client";

import { Search, Filter, Eye, Edit, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

const orders = [
  { id: "#1234", customer: "أحمد محمد", items: 3, total: 285, status: "pending", table: "5", time: "5 دقائق" },
  { id: "#1233", customer: "سارة علي", items: 2, total: 150, status: "preparing", table: "12", time: "15 دقيقة" },
  { id: "#1232", customer: "خالد السالم", items: 4, total: 420, status: "ready", table: "8", time: "30 دقيقة" },
  { id: "#1231", customer: "نورة عبدالله", items: 1, total: 85, status: "delivered", table: "3", time: "45 دقيقة" },
  { id: "#1230", customer: "فهد العتيبي", items: 5, total: 550, status: "cancelled", table: "15", time: "1 ساعة" },
];

const statusColors: Record<string, string> = {
  pending: "bg-blue-100 text-blue-700",
  preparing: "bg-yellow-100 text-yellow-700",
  ready: "bg-green-100 text-green-700",
  delivered: "bg-gray-100 text-gray-700",
  cancelled: "bg-red-100 text-red-700",
};

const statusLabels: Record<string, string> = {
  pending: "جديد",
  preparing: "قيد التحضير",
  ready: "جاهز",
  delivered: "تم التسليم",
  cancelled: "ملغي",
};

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">الطلبات</h2>
          <p className="text-gray-600">إدارة ومتابعة طلبات العملاء</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="p-4 border-b border-gray-100 flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="بحث في الطلبات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-10 pl-4 py-2 rounded-xl border border-gray-200 focus:border-[#E6034B] focus:ring-2 focus:ring-[#E6034B]/20 outline-none"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl hover:bg-gray-50">
            <Filter className="w-5 h-5" />
            فلتر
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">الطلب</th>
                <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">العميل</th>
                <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">الطاولة</th>
                <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">المجموع</th>
                <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">الحالة</th>
                <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">الوقت</th>
                <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 text-gray-600">{order.customer}</td>
                  <td className="px-6 py-4 text-gray-600">طاولة {order.table}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{order.total} ريال</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                      {statusLabels[order.status]}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-sm">{order.time}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg">
                        <CheckCircle className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
                        <XCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
