
"use client";

import Sidebar from './Sidebar';
import Header from './Header';

export default function DashboardShell({ children }) {
    // For the Hybrid UI, the sidebar is fixed left. 
    // We leave a margin-left of 80px (the collapsed width) so the "resting" state looks correct.
    // When the sidebar expands on hover, it overlaps the content (standard pattern).

    return (
        <div className="min-h-screen bg-[#F8F9FC] text-gray-900 font-sans selection:bg-primary/20">
            <Sidebar />

            <div className="pl-20 min-h-screen flex flex-col transition-all duration-300">
                <Header />

                <main className="flex-1 p-6 md:p-8 max-w-[1600px] mx-auto w-full animate-in fade-in duration-500">
                    {children}
                </main>
            </div>
        </div>
    );
}
