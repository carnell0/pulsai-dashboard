
"use client";

import DashboardShell from '@/components/DashboardShell';
import KPICard from '@/components/KPICard';
import RecentActivity from '@/components/RecentActivity';
import QuickActions from '@/components/QuickActions';
import SimpleCharts from '@/components/SimpleCharts'; // We can reuse this one for now, or update it if needed.
import { mockKpiStats } from '@/lib/mockData';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function Home() {
  return (
    <DashboardShell>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {mockKpiStats.map((stat) => (
            <motion.div key={stat.id} variants={item}>
              <KPICard {...stat} />
            </motion.div>
          ))}
        </div>

        {/* Content Grid: Main Activity (Left 2/3) + Side Panel (Right 1/3) */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

          {/* Left Column: Activity Feed */}
          <motion.div className="xl:col-span-2 space-y-8" variants={item}>
            <RecentActivity />
          </motion.div>

          {/* Right Column: Analytics & Actions */}
          <motion.div className="xl:col-span-1 space-y-6" variants={item}>
            <div className="h-64">
              <SimpleCharts />
            </div>

            <div>
              <QuickActions />
            </div>

            {/* Additional 'Service Status' Card could go here */}
            <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-blue-500/30">
              <h4 className="font-bold text-lg mb-2">Copilote PulsAI</h4>
              <p className="text-blue-100 text-sm mb-4">L'IA gère 75% des requêtes efficacement.</p>
              <div className="w-full bg-blue-900/30 h-2 rounded-full overflow-hidden">
                <div className="bg-white h-full w-[75%]"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </DashboardShell>
  );
}
