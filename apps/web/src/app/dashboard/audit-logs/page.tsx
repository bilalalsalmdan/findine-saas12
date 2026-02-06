"use client";

import { Clock, User, FileText } from "lucide-react";

const logs = [
  { action: "تم إنشاء طلب جديد", user: "أحمد محمد", time: "5 دقائق", details: "طلب #1234 - 285 ريال" },
  { action: "تم تحديث القائمة", user: "المدير", time: "1 ساعة", details: "إضافة 3 أطباق جديدة" },
  { action: "تسجيل دخول", user: "سارة علي", time: "3 ساعات", details: "من IP 192.168.1.1" },
  { action: "تم تعديل إعدادات المطعم", user: "المدير", time: "5 ساعات", details: "تحديث ساعات العمل" },
];

export default function AuditLogsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">سجل الأحداث</h2>
        <p className="text-gray-600">تتبع جميع الأنشطة في النظام</p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">الحدث</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">المستخدم</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">التفاصيل</th>
              <th className="px-6 py-4 text-right text-sm font-medium text-gray-500">الوقت</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {logs.map((log, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <FileText className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-medium text-gray-900">{log.action}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-600">{log.user}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-600">{log.details}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{log.time}</span>
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
