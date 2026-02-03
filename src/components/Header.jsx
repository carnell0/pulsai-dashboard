
"use client";

import { Search, Bell, Plus, Command } from 'lucide-react';
import { currentUser } from '@/lib/mockData';

export default function Header() {
    return (
        <header className="h-20 flex items-center justify-between mb-8">
            {/* Search Area */}
            <div className="flex-1 max-w-2xl">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Tableau de bord</h1>
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-11 pr-12 py-3 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition duration-150 ease-in-out shadow-sm text-sm"
                        placeholder="Rechercher conversations..."
                    />
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                        <span className="text-gray-400 text-xs border border-gray-200 rounded px-1.5 py-0.5">⌘ K</span>
                    </div>
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4 ml-6">
                {/* Quick Action Button */}
                <button className="hidden md:flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-4 py-2.5 rounded-xl font-medium shadow-md shadow-primary/20 transition-all active:scale-95">
                    <Plus size={18} />
                    <span>Nouveau Ticket</span>
                </button>

                {/* Notifications */}
                <button className="relative p-2.5 bg-white border border-gray-200 text-gray-500 hover:text-primary hover:border-primary/30 rounded-xl transition-all shadow-sm">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2.5 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="h-8 w-px bg-gray-200 mx-2"></div>

                {/* Profile Dropdown Trigger */}
                <button className="flex items-center gap-3 pl-1 pr-2 py-1 hover:bg-white rounded-xl transition-all border border-transparent hover:border-gray-100 hover:shadow-sm">
                    <img
                        src={currentUser.avatar}
                        alt={currentUser.name}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
                    />
                    <div className="hidden lg:block text-left mr-2">
                        <p className="text-sm font-semibold text-gray-900 leading-tight">{currentUser.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{currentUser.team}</p>
                    </div>
                </button>
            </div>
        </header>
    );
}
