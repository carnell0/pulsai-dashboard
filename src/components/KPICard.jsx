
"use client";

import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown, Minus, TrendingUp, Users, MessageSquare, Ticket, Zap, Megaphone, Bot } from 'lucide-react';

const iconMap = {
    Users,
    MessageSquare,
    Ticket,
    Zap,
    Megaphone,
    Bot
};

export default function KPICard({ title, value, trend, trendDirection, icon, description, color, bg }) {
    const Icon = iconMap[icon] || Users;

    return (
        <motion.div
            whileHover={{ y: -4, boxShadow: "0 12px 24px -8px rgba(0, 0, 0, 0.08)" }}
            className="bg-white p-6 rounded-2xl border border-neutral-200/60 shadow-sm relative overflow-hidden group"
        >
            {/* Background decoration */}
            <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-10 ${bg} group-hover:scale-150 transition-transform duration-500 ease-out pointer-events-none`}></div>

            <div className="flex justify-between items-start mb-4 relative z-10">
                <div className={`p-3.5 rounded-xl ${bg} ${color} ring-1 ring-black/5`}>
                    <Icon size={24} strokeWidth={2.5} />
                </div>

                {trend && (
                    <div className={`
            flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border
            ${trendDirection === 'up' ? 'bg-green-50 text-green-700 border-green-100' : ''}
            ${trendDirection === 'down' ? 'bg-amber-50 text-amber-700 border-amber-100' : ''} // Down usually bad, but context depends
            ${trendDirection === 'neutral' ? 'bg-gray-50 text-gray-600 border-gray-100' : ''}
          `}>
                        {trendDirection === 'up' && <TrendingUp size={12} />}
                        {trendDirection === 'down' && <ArrowDown size={12} />}
                        {trendDirection === 'neutral' && <Minus size={12} />}
                        {trend}
                    </div>
                )}
            </div>

            <div className="relative z-10">
                <h3 className="text-gray-500 text-sm font-medium mb-1 tracking-wide uppercase text-[11px]">{title}</h3>
                <div className="flex items-baseline gap-2">
                    <p className="text-3xl font-bold text-gray-900 tracking-tight">{value}</p>
                </div>

                {description && (
                    <p className="text-gray-400 text-xs mt-2 font-medium">
                        {description}
                    </p>
                )}
            </div>
        </motion.div>
    );
}
