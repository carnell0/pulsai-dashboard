
"use client";

import DashboardShell from '@/components/DashboardShell';
import { mockRecentActivity } from '@/lib/mockData';
import { Bot, Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ConversationsPage() {
    return (
        <DashboardShell>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Conversations</h1>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">
                        <Filter size={16} /> Filtrer
                    </button>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
                <div className="divide-y divide-gray-100">
                    {mockRecentActivity.conversations.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="p-5 hover:bg-gray-50 flex items-start gap-4 transition-colors cursor-pointer"
                        >
                            <img src={item.avatar} alt={item.user} className="w-12 h-12 rounded-full object-cover" />
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-gray-900">{item.user}</h3>
                                    <span className="text-xs text-gray-500">{item.time}</span>
                                </div>
                                <p className="text-gray-600 text-sm mt-1 mb-2">{item.messagePreview}</p>
                                <div className="flex gap-2">
                                    <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md border ${item.status === 'GÉRÉ_PAR_IA' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                                            item.status === 'HUMAIN_REQUIS' ? 'bg-amber-50 text-amber-700 border-amber-100' :
                                                item.status === 'RÉSOLU' ? 'bg-gray-100 text-gray-600 border-gray-200' :
                                                    'bg-blue-50 text-blue-700 border-blue-100'
                                        }`}>
                                        {item.status.replace(/_/g, ' ')}
                                    </span>
                                    {item.status === 'GÉRÉ_PAR_IA' && (
                                        <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-md border border-green-100">
                                            <Bot size={12} /> Confiance {item.aiConfidence}%
                                        </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </DashboardShell>
    );
}
