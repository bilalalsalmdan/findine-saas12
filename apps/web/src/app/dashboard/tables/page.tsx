"use client";

import { Table, Users } from "lucide-react";

const tables = [
  { id: 1, number: "1", capacity: 4, status: "available", location: "داخلي" },
  { id: 2, number: "2", capacity: 2, status: "occupied", location: "داخلي" },
  { id: 3, number: "3", capacity: 6, status: "reserved", location: "خارجي" },
  { id: 4, number: "4", capacity: 4, status: "available", location: "داخلي" },
  { id: 5, number: "5", capacity: 8, status: "occupied", location: "VIP" },
];

const statusColors: Record<string, string> = {
  available: "bg-green-100 text-green-700",
  occupied: "bg-red-100 text-red-700",
  reserved: "bg-yellow-100 text-yellow-700",
};

const statusLabels: Record<string, string> = {
  available: "متاح",
  occupied: "مشغول",
  reserved: "محجوز",
};

export default function TablesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">الطاولات</h2>
          <p className="text-gray-600">إدارة طاولات المطعم وحجوزاتها</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {tables.map((table) => (
          <div key={table.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#E6034B]/20 to-[#7c3aed]/20 flex items-center justify-center">
                <Table className="w-7 h-7 text-[#E6034B]" />
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[table.status]}`}>
                {statusLabels[table.status]}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">طاولة {table.number}</h3>
            <div className="flex items-center gap-4 text-gray-600">
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                {table.capacity} أشخاص
              </span>
              <span>{table.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
