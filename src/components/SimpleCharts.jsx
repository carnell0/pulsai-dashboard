
"use client";

import { mockAnalyticsData } from '@/lib/mockData';

export default function SimpleCharts() {
    return (
        <div className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm h-full flex flex-col justify-between">
            <div>
                <h2 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Performance</h2>

                {/* AI Performance Bar */}
                <div className="mb-6">
                    <div className="flex justify-between items-end mb-2">
                        <label className="text-xs font-medium text-gray-500">Distribution Résolution IA</label>
                        <span className="text-lg font-bold text-gray-900">90% <span className="text-xs font-normal text-green-500">Efficace</span></span>
                    </div>
                    <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden flex">
                        {mockAnalyticsData.aiPerformance.map((item, index) => (
                            <div
                                key={index}
                                className={`h-full ${item.color}`}
                                style={{ width: `${item.value}%` }}
                                title={`${item.label}: ${item.value}%`}
                            />
                        ))}
                    </div>
                    <div className="flex justify-between mt-2 text-[10px] text-gray-400">
                        {mockAnalyticsData.aiPerformance.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-1">
                                <div className={`w-1.5 h-1.5 rounded-full ${item.color.replace('bg-', 'bg-')}`}></div>
                                {item.label}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Weekly Traffic Mini-Chart */}
            <div>
                <div className="flex justify-between items-end mb-3">
                    <label className="text-xs font-medium text-gray-500">Trafic Hebdomadaire</label>
                    <span className="text-xs font-bold text-primary">+12% vs semaine dernière</span>
                </div>
                <div className="flex items-end justify-between h-16 gap-1">
                    {mockAnalyticsData.weeklyTraffic.map((value, index) => (
                        <div
                            key={index}
                            className="w-full bg-gray-100 rounded-t-sm relative group overflow-hidden"
                            style={{ height: `${value}%` }}
                        >
                            <div className="absolute inset-0 bg-primary opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            {/* Gradient overlay */}
                            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
