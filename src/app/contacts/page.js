
"use client";

import DashboardShell from '@/components/DashboardShell';
import { mockContacts } from '@/lib/mockData';
import { Mail, Phone, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactsPage() {
    return (
        <DashboardShell>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Contacts</h1>
                <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">
                    Exporter CSV
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockContacts.map((contact, index) => (
                    <motion.div
                        key={contact.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow group relative"
                    >
                        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                            <MoreHorizontal size={20} />
                        </button>

                        <div className="flex flex-col items-center text-center">
                            <img
                                src={contact.avatar}
                                alt={contact.name}
                                className="w-20 h-20 rounded-full mb-4 object-cover ring-4 ring-gray-50"
                            />
                            <h3 className="text-lg font-bold text-gray-900">{contact.name}</h3>
                            <span className="text-sm text-gray-500 mb-4">{contact.role}</span>

                            <div className="flex gap-2 w-full justify-center">
                                <button className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                                    <Mail size={18} />
                                </button>
                                <button className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors">
                                    <Phone size={18} />
                                </button>
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-gray-50 flex justify-between items-center text-xs">
                            <span className={`px-2 py-1 rounded-full font-medium ${contact.status === 'Actif' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                                }`}>
                                {contact.status}
                            </span>
                            <span className="text-gray-400">Ajouté récem.</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </DashboardShell>
    );
}
