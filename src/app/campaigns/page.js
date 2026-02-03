
"use client";

import DashboardShell from '@/components/DashboardShell';
import { mockCampaigns } from '@/lib/mockData';
import { Megaphone, Play, Pause, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CampaignsPage() {
    return (
        <DashboardShell>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Campagnes</h1>
                <button className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors shadow-sm">
                    <Megaphone size={18} /> Nouvelle Campagne
                </button>
            </div>

            <div className="space-y-4">
                {mockCampaigns.map((campaign, index) => (
                    <motion.div
                        key={campaign.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
                    >
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-xl ${campaign.status.includes('Active') ? 'bg-green-50 text-green-600' :
                                    campaign.status === 'En Cours' ? 'bg-blue-50 text-blue-600' : 'bg-gray-100 text-gray-500'
                                }`}>
                                <Megaphone size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 text-lg">{campaign.name}</h3>
                                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                    <span className="bg-gray-100 px-2 py-0.5 rounded text-xs text-gray-600">{campaign.type}</span>
                                    <span>• {campaign.sent.toLocaleString()} envoyés</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-8 flex-1 justify-end">
                            <div className="text-center">
                                <span className="block text-xl font-bold text-gray-900">{campaign.openRate}</span>
                                <span className="text-xs text-gray-500 uppercase tracking-wide">Ouverture</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-xl font-bold text-gray-900">{campaign.clickRate}</span>
                                <span className="text-xs text-gray-500 uppercase tracking-wide">Clics</span>
                            </div>

                            <div className="h-10 w-px bg-gray-200 mx-2 hidden md:block"></div>

                            <button className="p-2 text-gray-400 hover:text-primary transition-colors" title="Voir stats">
                                <BarChart3 size={20} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </DashboardShell>
    );
}
