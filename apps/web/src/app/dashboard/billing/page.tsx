"use client";

import { CreditCard, Download, Check } from "lucide-react";

const invoices = [
  { id: "INV-001", date: "2026-02-01", amount: 299, status: "مدفوع", plan: "الاحترافية" },
  { id: "INV-002", date: "2026-01-01", amount: 299, status: "مدفوع", plan: "الاحترافية" },
  { id: "INV-003", date: "2025-12-01", amount: 299, status: "مدفوع", plan: "الاحترافية" },
];

export default function BillingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">الفواتير والاشتراكات</h2>
        <p className="text-gray-600">إدارة اشتراكك وعرض الفواتير</p>
      </div>

      <div className="bg-gradient-to-br from-[#E6034B] to-[#7c3aed] rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white/80 mb-1">الخطة الحالية</p>
            <h3 className="text-3xl font-bold mb-2">الاحترافية</h3>
            <p className="text-white/80">299 ريال / شهر</p>
          </div>
          <div className="text-right">
            <p className="text-white/80 mb-1">الفاتورة القادمة</p>
            <p className="text-2xl font-bold">299 ريال</p>
            <p className="text-white/80 text-sm">1 مارس 2026</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="font-bold text-gray-900">سجل الفواتير</h3>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">رقم الفاتورة</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">التاريخ</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">الخطة</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">المبلغ</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">الحالة</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">إجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {invoices.map((invoice) => (
              <tr key={invoice.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{invoice.id}</td>
                <td className="px-6 py-4 text-gray-600">{invoice.date}</td>
                <td className="px-6 py-4 text-gray-600">{invoice.plan}</td>
                <td className="px-6 py-4 font-medium text-gray-900">{invoice.amount} ريال</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    <Check className="w-3 h-3" /> {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="flex items-center gap-1 text-[#E6034B] hover:underline">
                    <Download className="w-4 h-4" /> تحميل
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
