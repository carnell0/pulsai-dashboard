
"use client";

import DashboardShell from '@/components/DashboardShell';
import { mockRecentActivity } from '@/lib/mockData';
import { Plus, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TicketsPage() {
    return (
        <DashboardShell>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Tickets</h1>
                <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-sm">
                    <Plus size={18} /> Nouveau Ticket
                </button>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                            <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Sujet</th>
                            <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Priorité</th>
                            <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Statut</th>
                            <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Assigné à</th>
                            <th className="p-4 text-xs font-semibold text-gray-500 uppercase">Client</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {mockRecentActivity.tickets.map((ticket, index) => (
                            <motion.tr
                                key={ticket.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="hover:bg-gray-50 transition-colors"
                            >
                                <td className="p-4 font-medium text-gray-900">{ticket.subject}</td>
                                <td className="p-4">
                                    <span className={`inline-block px-2 py-1 text-[10px] font-bold rounded-full border ${ticket.priority === 'CRITIQUE' ? 'bg-red-50 text-red-600 border-red-100' :
                                            ticket.priority === 'HAUTE' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                                                'bg-blue-50 text-blue-600 border-blue-100'
                                        }`}>
                                        {ticket.priority}
                                    </span>
                                </td>
                                <td className="p-4">
                                    <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
                                        {ticket.status}
                                    </span>
                                </td>
                                <td className="p-4 text-sm text-gray-500">
                                    {ticket.assignee || <span className="italic text-gray-400">Non assigné</span>}
                                </td>
                                <td className="p-4 text-sm text-gray-900">{ticket.user}</td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </DashboardShell>
    );
}
