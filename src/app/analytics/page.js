
"use client";

import DashboardShell from '@/components/DashboardShell';
import SimpleCharts from '@/components/SimpleCharts';

export default function AnalyticsPage() {
    return (
        <DashboardShell>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Analytique</h1>
                <p className="text-gray-500">Vue d'ensemble des performances de votre équipe et de l'IA.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[500px]">
                {/* Reusing SimpleCharts for demo purposes, duplicated to simulate more charts */}
                <div className="h-full">
                    <SimpleCharts />
                </div>
                <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm flex items-center justify-center text-gray-400 italic">
                    Graphiques avancés ...
                </div>
            </div>
        </DashboardShell>
    );
}
