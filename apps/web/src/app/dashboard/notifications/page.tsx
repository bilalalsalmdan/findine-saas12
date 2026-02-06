"use client";

import { Bell, Check, Trash } from "lucide-react";

const notifications = [
  { id: 1, title: "طلب جديد", message: "طلب جديد من أحمد محمد - طاولة 5", time: "5 دقائق", read: false },
  { id: 2, title: "التحديث اكتمل", message: "تم تحديث القائمة بنجاح", time: "1 ساعة", read: true },
  { id: 3, title: "تنبيه المخزون", message: "الكمية منخفضة: مشاوي مشكلة", time: "3 ساعات", read: true },
];

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">الإشعارات</h2>
          <p className="text-gray-600">إدارة إشعاراتك وتنبيهاتك</p>
        </div>
        <button className="text-gray-500 hover:text-gray-700">تحديد الكل كمقروء</button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-100">
        {notifications.map((notification) => (
          <div key={notification.id} className={`p-6 flex items-start gap-4 ${!notification.read ? "bg-blue-50/50" : ""}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${!notification.read ? "bg-[#E6034B]" : "bg-gray-100"}`}>
              <Bell className={`w-5 h-5 ${!notification.read ? "text-white" : "text-gray-400"}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                  <p className="text-gray-600 mt-1">{notification.message}</p>
                  <span className="text-sm text-gray-400 mt-2 block">{notification.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  {!notification.read && (
                    <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg">
                      <Check className="w-4 h-4" />
                    </button>
                  )}
                  <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg">
                    <Trash className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
