
export const currentUser = {
    name: "Alex Morgan",
    email: "alex@pulsai.com",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    role: "Administrateur",
    team: "Service Client"
};

export const mockKpiStats = [
    {
        id: 1,
        title: "Clients Actifs",
        value: "1,284",
        trend: "+12.5%",
        trendDirection: "up",
        icon: "Users",
        description: "vs mois dernier",
        color: "text-blue-600",
        bg: "bg-blue-50"
    },
    {
        id: 2,
        title: "Taux Résolution IA",
        value: "94.2%",
        trend: "+4.3%",
        trendDirection: "up",
        icon: "Bot",
        description: "efficience active",
        color: "text-purple-600",
        bg: "bg-purple-50"
    },
    {
        id: 3,
        title: "Temps Réponse Moy.",
        value: "1m 42s",
        trend: "-18s",
        trendDirection: "down", // Good for time
        previousValue: "2m 00s", // context
        icon: "Zap",
        description: "plus rapide que moy.",
        color: "text-amber-500",
        bg: "bg-amber-50"
    },
    {
        id: 4,
        title: "Campagnes Actives",
        value: "8",
        trend: "Stable",
        trendDirection: "neutral",
        icon: "Megaphone",
        description: "3 bientôt lancées",
        color: "text-emerald-600",
        bg: "bg-emerald-50"
    }
];

export const mockRecentActivity = {
    conversations: [
        {
            id: 101,
            user: "Sarah Connor",
            avatar: "https://i.pravatar.cc/150?u=101",
            messagePreview: "J'ai besoin d'aide pour... [Interprétation IA]",
            status: "GÉRÉ_PAR_IA",
            aiConfidence: 98,
            channel: "Website",
            time: "il y a 2m",
            icon: "Globe"
        },
        {
            id: 102,
            user: "John Wick",
            avatar: "https://i.pravatar.cc/150?u=102",
            messagePreview: "Où est ma commande #9921 ?",
            status: "Écrit...",
            aiConfidence: 0,
            channel: "WhatsApp",
            time: "À l'instant",
            icon: "Smartphone"
        },
        {
            id: 103,
            user: "Ellen Ripley",
            avatar: "https://i.pravatar.cc/150?u=103",
            messagePreview: "Produit endommagé pendant livraison.",
            status: "HUMAIN_REQUIS",
            aiConfidence: 45,
            channel: "Email",
            time: "il y a 1h",
            icon: "Mail"
        },
        {
            id: 104,
            user: "Marty McFly",
            avatar: "https://i.pravatar.cc/150?u=104",
            messagePreview: "Puis-je planifier une démo ?",
            status: "RÉSOLU",
            aiConfidence: 100,
            channel: "Website",
            time: "il y a 3h",
            icon: "Globe"
        }
    ],
    tickets: [
        {
            id: 201,
            subject: "Crash appli mobile au login",
            priority: "CRITIQUE",
            status: "Ouvert",
            assignee: null,
            user: "Doc Brown",
            time: "il y a 10m"
        },
        {
            id: 202,
            subject: "Facturation: Erreur facture #4021",
            priority: "HAUTE",
            status: "En Cours",
            assignee: "Alex Morgan",
            user: "Biff Tannen",
            time: "il y a 2h"
        },
        {
            id: 203,
            subject: "Demande Fonctionnalité: Mode Sombre",
            priority: "BASSE",
            status: "En Attente",
            assignee: "Équipe Dev",
            user: "George McFly",
            time: "il y a 1j"
        }
    ]
};

export const mockAnalyticsData = {
    aiPerformance: [
        { label: "Auto-Résolu", value: 65, color: "bg-primary" },
        { label: "Aide Humaine", value: 25, color: "bg-secondary" },
        { label: "Escaladé", value: 10, color: "bg-red-400" }
    ],
    weeklyTraffic: [30, 45, 32, 70, 85, 90, 60]
};

export const mockContacts = [
    { id: 1, name: "Thierry Henry", email: "thierry@arsenal.com", role: "Client VIP", status: "Actif", avatar: "https://i.pravatar.cc/150?u=thierry" },
    { id: 2, name: "Zinedine Zidane", email: "zizou@madrid.com", role: "Partenaire", status: "Actif", avatar: "https://i.pravatar.cc/150?u=zizou" },
    { id: 3, name: "Kylian Mbappé", email: "kylian@psg.com", role: "Prospect", status: "Inactif", avatar: "https://i.pravatar.cc/150?u=kylian" },
    { id: 4, name: "Antoine Griezmann", email: "antoine@atletico.com", role: "Client", status: "Actif", avatar: "https://i.pravatar.cc/150?u=antoine" },
];

export const mockCampaigns = [
    { id: 1, name: "Promo Été 2026", status: "En Cours", sent: 12500, openRate: "45%", clickRate: "12%", type: "Email" },
    { id: 2, name: "Relance Panier", status: "Active (Auto)", sent: 340, openRate: "68%", clickRate: "24%", type: "Trigger" },
    { id: 3, name: "Newsletter Février", status: "Brouillon", sent: 0, openRate: "-", clickRate: "-", type: "Newsletter" },
    { id: 4, name: "Webinar IA", status: "Terminée", sent: 5000, openRate: "32%", clickRate: "8%", type: "Event" },
];
