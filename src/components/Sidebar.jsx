
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    MessageSquare,
    Ticket,
    Users,
    Megaphone,
    BarChart2,
    Settings,
    Bot,
    ChevronRight,
    ChevronLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
    { label: 'Tableau de bord', icon: LayoutDashboard, href: '/' },
    { label: 'Conversations', icon: MessageSquare, href: '/conversations' },
    { label: 'Tickets', icon: Ticket, href: '/tickets' },
    { label: 'Contacts', icon: Users, href: '/contacts' },
    { label: 'Campagnes', icon: Megaphone, href: '/campaigns' },
    { label: 'Analytique', icon: BarChart2, href: '/analytics' },
    { label: 'Paramètres', icon: Settings, href: '/settings' },
];

export default function Sidebar({ isCollapsed, onToggle }) {
    const pathname = usePathname();
    const [isHovered, setIsHovered] = useState(false);
    const [isPinned, setIsPinned] = useState(false);

    // Effective open state: Open if pinned OR if hovered
    const effectiveOpen = isPinned || isHovered;

    return (
        <motion.div
            className="h-screen bg-white border-r border-neutral-200 flex flex-col fixed left-0 top-0 z-50 shadow-sm transition-all duration-300 ease-in-out"
            style={{ width: effectiveOpen ? 260 : 80 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Logo Section */}
            <div className="h-20 flex items-center px-6 overflow-hidden whitespace-nowrap border-b border-gray-100/50">
                <div className="min-w-[32px] flex items-center justify-center">
                    <div className="bg-primary text-white p-2 rounded-xl shadow-lg shadow-primary/20">
                        <Bot size={24} strokeWidth={2.5} />
                    </div>
                </div>

                <motion.div
                    className="ml-4 font-bold text-xl text-neutral-900 tracking-tight flex items-center gap-2"
                    animate={{ opacity: effectiveOpen ? 1 : 0 }}
                    initial={false}
                >
                    PulsAI
                    <span className="text-[10px] bg-secondary/20 text-green-700 px-1.5 py-0.5 rounded-full font-medium uppercase tracking-wider">Beta</span>
                </motion.div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <Link key={item.href} href={item.href}>
                            <div
                                className={`
                  group flex items-center px-3 py-3 rounded-xl transition-all duration-200 relative
                  ${isActive
                                        ? 'bg-primary/5 text-primary'
                                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                    }
                `}
                            >
                                {/* Active Indicator Bar (Left) */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNavIndicator"
                                        className="absolute left-0 w-1 h-8 bg-primary rounded-r-full"
                                    />
                                )}

                                <div className="min-w-[32px] flex items-center justify-center">
                                    <Icon
                                        size={22}
                                        strokeWidth={isActive ? 2.5 : 2}
                                        className={isActive ? 'text-primary' : 'text-gray-400 group-hover:text-gray-600'}
                                    />
                                </div>

                                <motion.span
                                    className="ml-4 font-medium whitespace-nowrap overflow-hidden block"
                                    animate={{ opacity: effectiveOpen ? 1 : 0, width: effectiveOpen ? 'auto' : 0 }}
                                    initial={false}
                                >
                                    {item.label}
                                </motion.span>

                                {/* Floating Tooltip (Only when collapsed) */}
                                {!effectiveOpen && (
                                    <div className="absolute left-16 ml-2 px-3 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-[60] shadow-xl">
                                        {item.label}
                                        {/* Tiny arrow */}
                                        <div className="absolute top-1/2 -left-1 -mt-1 border-4 border-transparent border-r-gray-900"></div>
                                    </div>
                                )}
                            </div>
                        </Link>
                    );
                })}
            </nav>

            {/* Pin Toggle / Footer */}
            <div className="p-4 border-t border-gray-100 flex items-center justify-between overflow-hidden">
                <motion.button
                    onClick={() => setIsPinned(!isPinned)}
                    className="w-full flex items-center gap-3 text-gray-400 hover:text-primary transition-colors p-2 rounded-lg hover:bg-gray-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <div className="min-w-[32px] flex items-center justify-center">
                        {effectiveOpen ? (
                            isPinned ? <ChevronLeft size={20} /> : <div className="w-5 h-5 border-2 border-gray-300 rounded-sm" title="Pin Sidebar" />
                        ) : (
                            <ChevronRight size={20} />
                        )}
                    </div>

                    {effectiveOpen && (
                        <motion.span
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            className="text-sm font-medium whitespace-nowrap"
                        >
                            {isPinned ? "Réduire Sidebar" : "Épingler Sidebar"}
                        </motion.span>
                    )}
                </motion.button>
            </div>
        </motion.div>
    );
}
