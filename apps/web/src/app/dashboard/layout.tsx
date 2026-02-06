"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Menu,
  ShoppingCart,
  Users,
  Settings,
  QrCode,
  BarChart3,
  CreditCard,
  Bell,
  LogOut,
  ChevronLeft,
} from "lucide-react";

const sidebarItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "الرئيسية" },
  { href: "/dashboard/menus", icon: Menu, label: "القوائم" },
  { href: "/dashboard/orders", icon: ShoppingCart, label: "الطلبات" },
  { href: "/dashboard/qr-codes", icon: QrCode, label: "رمز QR" },
  { href: "/dashboard/customers", icon: Users, label: "العملاء" },
  { href: "/dashboard/analytics", icon: BarChart3, label: "التحليلات" },
  { href: "/dashboard/billing", icon: CreditCard, label: "الفواتير" },
  { href: "/dashboard/settings", icon: Settings, label: "الإعدادات" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-l fixed h-full">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E6034B] to-[#7c3aed] flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="font-bold text-xl text-gray-900">FineDine</span>
          </Link>
        </div>

        <nav className="px-4 py-4">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-colors ${
                  isActive
                    ? "bg-[#E6034B]/10 text-[#E6034B]"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <button className="flex items-center gap-3 px-4 py-3 w-full text-gray-600 hover:text-red-600 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">تسجيل الخروج</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 mr-64">
        {/* Top Bar */}
        <header className="bg-white border-b px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-gray-900">لوحة التحكم</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:text-gray-900">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E6034B] to-[#7c3aed] flex items-center justify-center text-white font-medium">
                م
              </div>
              <span className="font-medium text-gray-900">مطعم البستان</span>
            </div>
          </div>
        </header>

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
