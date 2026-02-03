
"use client";

import DashboardShell from '@/components/DashboardShell';
import { User, Bell, Shield, Moon } from 'lucide-react';

export default function SettingsPage() {
    return (
        <DashboardShell>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Paramètres</h1>

            <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden divide-y divide-gray-100 max-w-3xl">

                {/* Profile Section */}
                <div className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                        <User size={24} />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1">Profil</h3>
                        <p className="text-sm text-gray-500 mb-4">Gérez vos informations personnelles et votre avatar.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" value="Alex Morgan" className="border border-gray-200 rounded-lg p-2 text-sm bg-gray-50" readOnly />
                            <input type="email" value="alex@pulsai.com" className="border border-gray-200 rounded-lg p-2 text-sm bg-gray-50" readOnly />
                        </div>
                    </div>
                    <button className="text-sm text-primary font-medium hover:underline">Modifier</button>
                </div>

                {/* Notifications */}
                <div className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                        <Bell size={24} />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1">Notifications</h3>
                        <p className="text-sm text-gray-500">Choisissez comment vous souhaitez être informé.</p>
                    </div>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-green-400" />
                        <label htmlFor="toggle" className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"></label>
                    </div>
                </div>

                {/* Security */}
                <div className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                        <Shield size={24} />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1">Sécurité</h3>
                        <p className="text-sm text-gray-500">Mot de passe et authentification à deux facteurs.</p>
                    </div>
                    <button className="text-sm text-primary font-medium hover:underline">Gérer</button>
                </div>

                {/* Theme */}
                <div className="p-6 flex items-start gap-4">
                    <div className="p-3 bg-gray-100 text-gray-600 rounded-xl">
                        <Moon size={24} />
                    </div>
                    <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-1">Apparence</h3>
                        <p className="text-sm text-gray-500">Basculez entre le mode clair et sombre.</p>
                    </div>
                    <span className="text-xs text-gray-400 font-medium px-2 py-1 bg-gray-100 rounded">Clair (Par défaut)</span>
                </div>

            </div>
        </DashboardShell>
    );
}
