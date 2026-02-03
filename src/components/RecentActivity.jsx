
"use client";

import { mockRecentActivity } from '@/lib/mockData';
import { Clock, Globe, Smartphone, Mail, MoreHorizontal, Bot, CheckCircle2, AlertCircle, Users } from 'lucide-react';

const iconMap = {
    Globe,
    Smartphone,
    Mail
};

export default function RecentActivity() {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Recent Conversations */}
            <div className="bg-white p-0 rounded-2xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                        Conversations en Direct
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full animate-pulse">3 Actives</span>
                    </h2>
                    <button className="text-gray-400 hover:text-primary transition-colors">
                        <MoreHorizontal size={20} />
                    </button>
                </div>

                <div className="divide-y divide-gray-100">
                    {mockRecentActivity.conversations.map((item) => {
                        const ChannelIcon = iconMap[item.icon] || Globe;

                        return (
                            <div key={item.id} className="p-4 hover:bg-gray-50 transition-all duration-200 cursor-pointer group">
                                <div className="flex items-start gap-4">
                                    <div className="relative">
                                        <img src={item.avatar} alt={item.user} className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm" />
                                        <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full">
                                            <div className={`w-5 h-5 rounded-full border-2 border-white flex items-center justify-center bg-gray-100 text-gray-600 shadow-sm`}>
                                                <ChannelIcon size={10} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="font-bold text-gray-900 text-sm truncate">{item.user}</h4>
                                            <span className="text-xs font-medium text-gray-400 whitespace-nowrap">{item.time}</span>
                                        </div>

                                        <p className="text-sm text-gray-600 truncate mb-2 pr-4 font-medium mb-2 opacity-80">
                                            {item.messagePreview}
                                        </p>

                                        <div className="flex items-center gap-2">
                                            {/* Status Badge */}
                                            <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md border ${item.status === 'GÉRÉ_PAR_IA' ? 'bg-purple-50 text-purple-700 border-purple-100' :
                                                item.status === 'HUMAIN_REQUIS' ? 'bg-amber-50 text-amber-700 border-amber-100' :
                                                    item.status === 'RÉSOLU' ? 'bg-gray-100 text-gray-600 border-gray-200' :
                                                        'bg-blue-50 text-blue-700 border-blue-100'
                                                }`}>
                                                {item.status.replace(/_/g, ' ')}
                                            </span>

                                            {/* AI Confidence Indicator */}
                                            {item.status !== 'Écrit...' && (
                                                <div className="flex items-center gap-1 text-xs text-gray-500" title="Score Confiance IA">
                                                    <Bot size={12} className={item.aiConfidence > 80 ? "text-green-500" : "text-gray-400"} />
                                                    <span className="font-mono">{item.aiConfidence}%</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Ticket Queue */}
            <div className="bg-white p-0 rounded-2xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                    <h2 className="text-lg font-bold text-gray-900">Tickets Prioritaires</h2>
                    <button className="text-sm font-medium text-primary hover:underline">Voir Tout</button>
                </div>

                <div className="divide-y divide-gray-100">
                    {mockRecentActivity.tickets.map((ticket) => (
                        <div key={ticket.id} className="p-5 hover:bg-gray-50 transition-colors cursor-pointer group flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className={`w-1.5 h-12 rounded-full ${ticket.priority === 'CRITIQUE' ? 'bg-red-500 shadow-red-200 shadow-lg' :
                                    ticket.priority === 'HAUTE' ? 'bg-orange-500' :
                                        'bg-blue-400'
                                    }`}></div>

                                <div>
                                    <h4 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-primary transition-colors">
                                        {ticket.subject}
                                    </h4>
                                    <div className="flex items-center gap-3 text-xs text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <Users size={12} /> {ticket.user}
                                        </span>
                                        <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                                        <span>{ticket.time}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-end gap-2">
                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${ticket.priority === 'CRITIQUE' ? 'bg-red-50 text-red-600 border-red-100' :
                                    ticket.priority === 'HAUTE' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                                        'bg-blue-50 text-blue-600 border-blue-100'
                                    }`}>
                                    {ticket.priority}
                                </span>
                                {ticket.assignee ? (
                                    <span className="text-xs text-gray-400 flex items-center gap-1">
                                        <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" className="w-4 h-4 rounded-full" alt="assignee" />
                                        {ticket.assignee}
                                    </span>
                                ) : (
                                    <span className="text-xs text-gray-400 italic">Non assigné</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
