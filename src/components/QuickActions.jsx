
"use client";

import { motion } from 'framer-motion';
import { Plus, Users, Send, Settings, Ticket } from 'lucide-react';

const actions = [
    { label: 'Nouveau Ticket', icon: Ticket, color: 'bg-blue-50 text-blue-600 hover:bg-blue-100', desc: 'Signaler un pb' },
    { label: 'Lancer Chat', icon: Send, color: 'bg-purple-50 text-purple-600 hover:bg-purple-100', desc: 'Msg Direct' },
    { label: 'Ajouter User', icon: Users, color: 'bg-green-50 text-green-600 hover:bg-green-100', desc: 'Inviter équipe' },
    { label: 'Campagne', icon: Plus, color: 'bg-amber-50 text-amber-600 hover:bg-amber-100', desc: 'Lancer nvlle' },
];

export default function QuickActions() {
    return (
        <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm h-full flex flex-col justify-center">
            <h3 className="text-gray-900 font-bold mb-4 text-sm uppercase tracking-wide">Actions Rapides</h3>
            <div className="grid grid-cols-2 gap-4">
                {actions.map((action, idx) => {
                    const Icon = action.icon;
                    return (
                        <motion.button
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`p-4 rounded-xl flex flex-col items-center justify-center gap-2 transition-colors ${action.color} border border-transparent hover:border-black/5`}
                        >
                            <Icon size={24} />
                            <div className="text-center">
                                <span className="block font-semibold text-sm">{action.label}</span>
                                <span className="block text-[10px] opacity-70 font-medium">{action.desc}</span>
                            </div>
                        </motion.button>
                    )
                })}
            </div>
        </div>
    );
}
