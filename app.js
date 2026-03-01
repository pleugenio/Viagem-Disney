let tripData = [
    {
        date: '10/04 Sex',
        title: 'FLL → Orlando - Disney\'s Pop Century Resort',
        activity: 'Retirada Carro + Viagem + Almoço',
        load: 'médio',
        icon: '🚗',
        hours: 'Carro: 08:30 | Check-in: 15:00',
        price: 83,
        carPaid: 1418,
        paid: true,
        notes: '🛬 Pouso 06:20 FLL. 🍱 **Jantar: Marmita Kids (1)**.',
        details: [
            '🛬 Pouso FLL (06:20 AM | ⏱️ 1h)',
            '🛂 Imigração e Alfândega (07:00 AM | ⏱️ 1h30)',
            '🚐 Retirada Mini Van (08:30 AM | 📍 Terminal Aeroporto | ⏱️ 1h)',
            '🛣️ Viagem Turnpike (10:00 AM | ⏱️ 3h30)',
            '🍴 Almoço: Fort Drum (11:30 AM | 📍 Turnpike Mile 184 | ⏱️ 1h)',
            '🏨 Check-in Pop Century (03:00 PM | 📍 Cabana/Resort | ⏱️ 1h)',
            '🍱 **Jantar: Marmita Kids (1)** (19:00 | ⏱️ 45min)',
            '🛍️ WalMart (18:00 | 📍 Vineland Rd | ⏱️ 1h30)'
        ]
    },
    {
        date: '11/04 Sáb',
        title: 'Disney Springs - Compras & Lazer',
        activity: 'Compras & Springs',
        load: 'médio',
        icon: '🛍️',
        hours: '10:00 - 23:00',
        price: 0,
        notes: 'Disney Springs. Almoço Earl of Sandwich.',
        details: [
            '🛍️ Marshalls (10:00 AM | 📍 Lake Buena Vista | ⏱️ 2h)',
            '🍔 Earl of Sandwich (12:30 PM | 📍 Marketplace | ⏱️ 1h)',
            '🌲 Disney Springs (14:00 | 📍 Complexo | ⏱️ 4h)'
        ]
    },
    {
        date: '12/04 Dom',
        title: 'SeaWorld Orlando - Discovery Cove Area',
        activity: 'Show Orca + Kids',
        load: 'pesado',
        icon: '🐬',
        hours: '09:00 - 20:00',
        price: 100,
        paid: true,
        notes: '🍱 **Almoço (2)**. 🍼 Papinha de bebê permitida.',
        details: [
            '🕒 Horários: 09:00 AM - 08:00 PM',
            '🎢 Abby’s Tower (09:30 AM | 📍 Sesame Street Land | ⏱️ 45min)',
            '🐧 Antarctica (11:00 AM | 📍 Antarctica Area | ⏱️ 1h)',
            '🍱 **Almoço: Marmita Kids (2)** (12:30 PM | 📍 Baby Care | ⏱️ 1h)',
            '🍴 Alt: Seafire Grill (01:00 PM | 📍 Waterfront | ⏱️ 1h)',
            '🐋 Orca Encounter (01:00 PM | 📍 Shamu Stadium | ⏱️ 30min)',
            '🐬 Dolphin Nursery (03:00 PM | 📍 Entrance Area | ⏱️ 30min)'
        ]
    },
    {
        date: '13/04 Seg',
        title: 'Animal Kingdom - Tusker House Restaurant',
        activity: 'Assessoria + Tusker House',
        load: 'pesado',
        icon: '🐘',
        hours: '08:00 - 18:00 (Resort: 07:30)',
        price: 139,
        paidTickets: true,
        notes: '🍱 **Almoço (3)**. Jantar Tusker House.',
        details: [
            '🕒 Horários: 08:00 AM - 06:00 PM (Resort: 07:30 AM)',
            '🦓 Safaris (08:30 AM | 📍 Africa | ⏱️ 1h)',
            '🦁 Lion King (11:00 AM | 📍 Africa | ⏱️ 45min)',
            '🍱 **Almoço: Marmita Kids (3)** (12:30 PM | 📍 Baby Care | ⏱️ 1h)',
            '🍴 Tusker House (05:15 PM | 📍 Africa | ⏱️ 1h30)'
        ]
    },
    {
        date: '14/04 Ter',
        title: 'Magic Kingdom - Crystal Palace & Liberty Tree',
        activity: 'Assessoria + Restaurantes',
        load: 'pesado',
        icon: '🏰',
        hours: '09:00 - 21:30 (Resort: 08:30)',
        price: 257,
        paidTickets: true,
        notes: '🍱 **Almoço (4)**. Crystal (Café) e Liberty (Jantar).',
        details: [
            '🕒 Horários: 09:00 AM - 09:30 PM (Resort: 08:30 AM)',
            '☕ Crystal Palace (08:00 AM | 📍 Main Street U.S.A. | ⏱️ 1h15)',
            '🎢 TRON (10:00 AM | 📍 Tomorrowland | ⏱️ 1h)',
            '🍱 **Almoço: Marmita Kids (4)** (12:30 PM | 📍 Baby Care | ⏱️ 1h)',
            '🍴 Liberty Tree (05:40 PM | 📍 Liberty Square | ⏱️ 1h30)',
            '🎆 Happily Ever After (09:30 PM | 📍 Hub/Castle | ⏱️ 20min)'
        ]
    },
    {
        date: '15/04 Qua',
        title: 'Disney\'s Contemporary - Chef Mickey\'s',
        activity: 'Cafe Mickey + Resorts',
        load: 'leve',
        icon: '🐭',
        hours: 'Café: 07:45',
        price: 156,
        notes: '🍱 **Almoço (5) / Jantar (6)**.',
        details: [
            '☕ Chef Mickey\'s (07:45 AM | 📍 Contemporary Resort - 4th Floor | ⏱️ 1h30)',
            '🏨 Resort Hopping (10:00 AM | 📍 Monorail Hotels | ⏱️ 2h)',
            '🍱 **Almoço: Marmita Kids (5)** (13:00 | ⏱️ 1h)',
            '🏊 Piscina Pop (16:00 | 📍 Hippy Dippy Pool | ⏱️ 2h)',
            '🍱 **Jantar: Marmita Kids (6)** (19:30 | ⏱️ 1h)'
        ]
    },
    {
        date: '16/04 Qui',
        title: 'Hollywood Studios - Roundup Rodeo BBQ',
        activity: 'Droid + Roundup Rodeo',
        load: 'pesado',
        icon: '🎬',
        hours: '09:00 - 21:00 (Resort: 08:30)',
        price: 128,
        paidTickets: true,
        notes: '🍱 **Almoço (7)**. Jantar Rodeo.',
        details: [
            '🕒 Horários: 09:00 AM - 09:00 PM (Resort: 08:30 AM)',
            '🧸 Toy Story Mania (10:00 AM | 📍 Toy Story Land | ⏱️ 1h)',
            '🍱 **Almoço: Marmita Kids (7)** (12:30 PM | 📍 Baby Care | ⏱️ 1h)',
            '🛠️ Droid Depot (05:10 PM | 📍 Galaxy\'s Edge | ⏱️ 45min)',
            '🍴 Roundup Rodeo (06:55 PM | 📍 Toy Story Land | ⏱️ 1h30)',
            '🎬 Fantasmic! (08:30 PM | 📍 Sunset Boulevard | ⏱️ 30min)'
        ]
    },
    {
        date: '17/04 Sex',
        title: 'Magic Kingdom - Be Our Guest Restaurant',
        activity: 'Ensaio + Be Our Guest',
        load: 'critico',
        icon: '📸',
        hours: '09:00 - 21:30 (Resort: 08:30)',
        price: 187,
        paidTickets: true,
        notes: '🍱 **Almoço (8)**. Jantar Be Our Guest.',
        details: [
            '🕒 Horários: 09:00 AM - 09:30 PM (Resort: 08:30 AM)',
            '📸 Ensaio (09:00 AM | 📍 Front of Castle | ⏱️ 1h)',
            '🍱 **Almoço: Marmita Kids (8)** (12:30 PM | 📍 Baby Care | ⏱️ 1h)',
            '🍴 Be Our Guest (06:10 PM | 📍 Fantasyland | ⏱️ 1h45)',
            '🎆 Fogos (09:30 PM | 📍 Castle | ⏱️ 20min)'
        ]
    },
    {
        date: '18/04 Sáb',
        title: 'Orlando Premium Outlets',
        activity: 'Compras',
        load: 'médio',
        icon: '👜',
        hours: '10:00 - 21:00',
        price: 0,
        notes: 'Dia de compras. Gastos variáveis aumentados.',
        details: [
            '👜 Outlet LBV (10:00 AM | 📍 Vineland Rd | ⏱️ 4h)',
            '🍟 Almoço (02:00 PM | 📍 Food Court | ⏱️ 1h)',
            '🛒 WalMart Extra (05:00 PM | ⏱️ 1h30)'
        ]
    },
    {
        date: '19/04 Dom',
        title: 'Epcot - Space 220 Restaurant',
        activity: 'Pavilhões + Space 220',
        load: 'pesado',
        icon: '🌍',
        hours: '09:00 - 21:00 (Resort: 08:30)',
        price: 193,
        paidTickets: true,
        notes: '🍱 **Almoço (9)**. Jantar Space 220.',
        details: [
            '🕒 Horários: 09:00 AM - 09:00 PM (Resort: 08:30 AM)',
            '🐢 Nemo (10:00 AM | 📍 World Nature | ⏱️ 30min)',
            '💠 Spaceship Earth (11:00 AM | ⏱️ 45min)',
            '🍱 **Almoço: Marmita Kids (9)** (13:00 | 📍 Baby Care | ⏱️ 1h)',
            '🍴 Space 220 (05:05 PM | 📍 World Discovery | ⏱️ 1h30)',
            '🎆 Luminous (09:00 PM | 📍 World Showcase Lagoon | ⏱️ 15min)'
        ]
    },
    {
        date: '20/04 Seg',
        title: 'Hollywood Studios - Hollywood & Vine',
        activity: 'Frozen + Vine Fantasmic',
        load: 'pesado',
        icon: '🎥',
        hours: '09:00 - 21:00 (Resort: 08:30)',
        price: 213,
        paidTickets: true,
        notes: '🍱 **Almoço (10)**. Jantar Hollywood & Vine.',
        details: [
            '🕒 Horários: 09:00 AM - 09:00 PM (Resort: 08:30 AM)',
            '❄️ Frozen (11:30 AM | 📍 Echo Lake | ⏱️ 30min)',
            '🍱 **Almoço: Marmita Kids (10)** (13:00 | 📍 Baby Care | ⏱️ 1h)',
            '🍴 Hollywood & Vine (05:00 PM | 📍 Echo Lake | ⏱️ 1h30)',
            '🎬 Fantasmic VIP (08:30 PM | 📍 Sunset Blvd | ⏱️ 30min)'
        ]
    },
    {
        date: '21/04 Ter',
        title: 'Disney Springs - T-Rex Cafe',
        activity: 'Almoço T-Rex',
        load: 'leve',
        icon: '🦖',
        hours: '14:00',
        price: 0,
        notes: 'Dia de relaxar na piscina e almoço com dinossauros.',
        details: [
            '🏊 Piscina (10:00 AM | 📍 Resort | ⏱️ 3h)',
            '🦖 T-Rex Cafe (02:00 PM | 📍 Marketplace | ⏱️ 1h30)'
        ]
    },
    {
        date: '22/04 Qua',
        title: 'Magic Kingdom - Cinderella\'s Royal Table',
        activity: 'Castelo + Jantar Gala',
        load: 'pesado',
        icon: '🏰',
        hours: '09:00 - 22:00 (Resort: 08:30)',
        price: 0,
        paid: true,
        paidTickets: true,
        notes: '🍱 **Almoço (11)**. Cinderella Jantar.',
        details: [
            '🕒 Horários: 09:00 AM - 10:00 PM (Resort: 08:30 AM)',
            '🎡 Belle (11:00 AM | 📍 Fantasyland | ⏱️ 45min)',
            '🍱 **Almoço: Marmita Kids (11)** (13:00 | 📍 Baby Care | ⏱️ 1h)',
            '👑 Cinderella (05:20 PM | 📍 Inside Castle | ⏱️ 1h15)',
            '🎆 Fogos (09:30 PM | 📍 Castle | ⏱️ 20min)'
        ]
    },
    {
        date: '23/04 Qui',
        title: 'Animal Kingdom Lodge - Jambo House',
        activity: 'Mudança Hotel + 🌊 Blizzard Beach',
        load: 'médio',
        icon: '🦒',
        hours: 'Out: 11:00 | In: 15:00',
        price: 0,
        paid: true,
        notes: 'Check-out Pop / Check-in AK Lodge. 🌊 **Nota**: Typhoon Lagoon fechado para reforma. Blizzard Beach disponível (Pago).',
        details: [
            '🏨 Check-out Pop Century (09:00 AM | ⏱️ 30min)',
            '🏨 Deixar malas Bell Services (09:30 AM | 📍 Jambo House | ⏱️ 20min)',
            '🌊 **Blizzard Beach** (10:30 AM | ⏱️ 5h)',
            '🛒 Devolução Carrinho (04:00 PM | 📍 Front Desk AKL | ⏱️ 15min)',
            '🏨 Check-in AK Lodge (04:30 PM | ⏱️ 30min)',
            '🦒 Savana (05:00 PM | 📍 Sunset Savanna | ⏱️ 1h)'
        ]
    },
    {
        date: '24/04 Sex',
        title: 'Animal Kingdom Lodge - Boma',
        activity: 'Savana + Café Boma',
        load: 'leve',
        icon: '🦓',
        hours: 'Café: 07:45',
        price: 101,
        notes: '🍱 **Almoço (12)**. Café Boma.',
        details: [
            '☕ Boma (07:45 AM | 📍 Jambo House | ⏱️ 1h15)',
            '🏊 Piscina (10:30 AM | 📍 Uzima Springs | ⏱️ 2h)',
            '🍱 **Almoço: Marmita Kids (12)** (13:30 | ⏱️ 1h)'
        ]
    },
    {
        date: '25/04 Sáb',
        title: 'Viagem para Naples',
        activity: 'Naples Beach + Golfinhos',
        load: 'médio',
        icon: '🌅',
        hours: 'Out: 11:00 | In: 16:00',
        price: 0,
        notes: '🍱 **Jantar (13)** em Naples.',
        details: [
            '🏨 Out AKL (11:00 AM | ⏱️ 30min)',
            '🚗 Viagem Naples (11:30 AM | ⏱️ 3h)',
            '🍱 **Jantar (13)** (07:00 PM | ⏱️ 1h)',
            '🌅 Sunset Pier (07:30 PM | 📍 Naples Pier | ⏱️ 1h)'
        ]
    },
    {
        date: '26/04 Dom',
        title: 'Naples Beach',
        activity: '5ª Avenida',
        load: 'leve',
        icon: '🌊',
        price: 0,
        notes: 'Dia de praia em Naples.',
        details: [
            '🌊 Praia (10:00 AM | 📍 Naples Pier | ⏱️ 4h)',
            '🍔 Almoço (02:00 PM | ⏱️ 1h)',
            '🏘️ Downtown (05:00 PM | 📍 5th Ave S | ⏱️ 2h)'
        ]
    },
    {
        date: '27/04 Seg',
        title: 'Miami Beach - Riu Plaza',
        activity: 'Miami + Praia',
        load: 'médio',
        icon: '🏙️',
        hours: 'Out: 11:00 | In: 15:00',
        price: 0,
        paid: true,
        notes: '🍱 **Jantar (14)** em Miami.',
        details: [
            '🏨 Out Naples (11:00 AM | ⏱️ 30min)',
            '🚗 Viagem Miami (11:30 AM | ⏱️ 2h)',
            '⛱️ Praia (02:00 PM | 📍 Riu Plaza Front | ⏱️ 3h)',
            '🍱 **Jantar (14)** (07:30 PM | ⏱️ 1h)'
        ]
    },
    {
        date: '28/04 Ter',
        title: 'Miami Relax',
        activity: 'Compras ou Ocean Drive',
        load: 'médio',
        icon: '👜',
        price: 0,
        notes: '🍱 **Almoço (15)**.',
        details: [
            '🚗 Dolphin Mall (10:00 AM | 📍 Sweetwater | ⏱️ 4h)',
            '🍱 **Almoço (15)** (02:30 PM | ⏱️ 1h)',
            '🚶 Ocean Drive (06:00 PM | 📍 South Beach | ⏱️ 2h)'
        ]
    },
    {
        date: '29/04 Qua',
        title: 'Aeroporto FLL - Retorno',
        activity: 'Voo FLL 08:20 AM',
        load: 'pesado',
        icon: '🛫',
        hours: 'Carro: 04:00 | Voo: 08:20',
        price: 0,
        notes: 'Retorno para o Brasil.',
        details: [
            '🚐 Devolução Alamo (04:00 AM | ⏱️ 45min)',
            '🛂 Check-in FLL (05:00 AM | ⏱️ 2h)',
            '🛫 Voo (08:20 AM | ⏱️ 9h)',
            '🏠 Brasil (05:45 PM)'
        ]
    }
];

const PACKING_LIST = {
    'Documentos': ['Passaportes', 'Vistos/ESTA', 'Seguro Viagem', 'Reservas Impressas', 'Cartão Internacional (Nomad/Wise)'],
    'Eletrônicos': ['Cabos e Carregadores', 'Power Bank (Crucial!)', 'Adaptador de Tomada', 'Fone de Ouvido (Joaquim/Vicente)'],
    'Joaquim (1 ano)': ['Fraldas Piscina', 'Leite em Pó/Fórmula', 'Mamadeiras', 'Carrinho Confortável', 'Remédios (Antitérmico, etc)'],
    'Vicente (4 anos)': ['Fantasias Disney', 'Tênis Extra', 'Brinquedos para Avião', 'Capa de Chuva'],
    'Higiene/Saúde': ['Protetor Solar', 'Repelente', 'Kit Primeiros Socorros', 'Termômetro', 'Lenços Umedecidos']
};

const GENIE_TIPS = {
    'Magic Kingdom': '7 AM: Marcar **Tiana’s** ou **Space Mountain**. 11 AM: Segunda reserva.',
    'Hollywood Studios': '7 AM: Marcar **Slinky Dog Dash** (acaba rápido!) ou **Rise of the Resistance**.',
    'Animal Kingdom': '7 AM: Marcar **Safari** ou **Navi River**. Comprar Individual LL para **Avatar Flight of Passage**.',
    'Epcot': 'Equipe de Fila Virtual para **Guardians of the Galaxy** (7 AM). Genie+ para **Remy** ou **Frozen**.'
};

const EMERGENCY_CONTACTS = [
    { name: 'Emergência EUA', phone: '911' },
    { name: 'Seguro Viagem (Assist Card)', phone: '+1 (800) XXX-XXXX' },
    { name: 'Pediatria Night Lite (24h)', phone: '(407) 505-5437', loc: '📍 Kissimmee' },
    { name: 'Consulado Brasileiro Miami', phone: '(305) 285-6200' }
];

let wishlist = [];
let checkedItems = [];

const STORAGE_KEY = 'disneyTripData_v38'; // Updated for Lightning Lane costs v38
const EXCHANGE_RATE = 5.30;
const TOTAL_BUDGET_BRL = 25000;

function sanitizeData() {
    tripData = tripData.map(day => ({
        date: day.date || 'Data Indefinida',
        title: day.title || 'Atividade',
        activity: day.activity || '',
        load: day.load || 'leve',
        icon: day.icon || '📍',
        hours: day.hours || 'Livre',
        price: day.price || 0,
        notes: day.notes || '',
        details: Array.isArray(day.details) ? day.details : [],
        ...day
    }));
}

const BABY_CARE_LOCATIONS = {
    'Magic Kingdom': '📍 Main Street: Entre Casey’s Corner e Crystal Palace (perto da First Aid).',
    'Epcot': '📍 Odyssey Pavilion: No caminho entre Test Track e o México.',
    'Hollywood Studios': '📍 Entrada: À esquerda, dentro do prédio do Guest Relations.',
    'Animal Kingdom': '📍 Discovery Island: À esquerda do Tree of Life, antes da ponte para a África.'
};

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }

    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

function loadPersistedData() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed.tripData)) tripData = parsed.tripData;
            if (Array.isArray(parsed.wishlist)) wishlist = parsed.wishlist;
            if (Array.isArray(parsed.checkedItems)) checkedItems = parsed.checkedItems;
        } catch (e) { console.error('Error loading data', e); }
    }
}

function persistData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
        tripData,
        wishlist,
        checkedItems
    }));
}

function getDailyVariableEstimate(day) {
    if (!day) return { total: 0, snacks: 0, lunch: 0, lightningLane: 0 };
    let snacksBebidasBrinquedos = 200; // Base diaria ($50/pessoa)
    let almoçoExtra = 0;
    let lightningLane = 0;

    const title = (day.title || "").toLowerCase();
    const activity = (day.activity || "").toLowerCase();

    // Lightning Lane / Single Pass (3 people as requested)
    if (day.paidTickets) {
        if (title.includes('magic kingdom')) lightningLane = 35 * 3;
        else if (title.includes('epcot')) lightningLane = 24 * 3;
        else if (title.includes('hollywood studios')) lightningLane = 29 * 3;
        else if (title.includes('animal kingdom')) lightningLane = 19 * 3;
    }

    // Check if day has restaurant or marmita for lunch
    const currentTitle = day.title || "";
    const currentDetails = day.details || [];
    const hasRestaurant = day.price > 0 || day.paid;
    const hasMarmita = currentDetails.some(d => (d || "").includes('🍱') && ((d || "").toLowerCase().includes('almoço') || !(d || "").toLowerCase().includes('jantar')));
    const isTravelDay = currentTitle.includes('Aeroporto') || currentTitle.includes('Retorno');

    if (!hasRestaurant && !hasMarmita && !isTravelDay) {
        almoçoExtra = 60;
    }

    return {
        total: snacksBebidasBrinquedos + almoçoExtra + lightningLane,
        snacks: snacksBebidasBrinquedos,
        lunch: almoçoExtra,
        lightningLane: lightningLane
    };
}

function renderAll() {
    try {
        console.log('--- Render Start (v35) ---');
        renderDashboard();
        renderCurrentDay(parseInt(document.getElementById('day-selector')?.value || 0));
        renderItinerary();
        renderStrategies();
        renderLogistics();
        renderFinance();
        renderChecklist();
        renderShopping();
        console.log('--- Render Complete ---');
    } catch (e) { console.error('CRITICAL RENDER ERROR:', e); }
}

document.addEventListener('DOMContentLoaded', () => {
    loadPersistedData();
    initApp();
});

function setupEventListeners() {
    setupTabs();
    setupModalListeners();
}

function initApp() {
    setupEventListeners();
    sanitizeData(); // Ensure consistency
    initDaySelector();
    renderAll();
    startCountdown();
}

function setupTabs() {
    const navLinks = document.querySelectorAll('.nav-links li');
    const tabContents = document.querySelectorAll('.tab-content');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const tabId = link.getAttribute('data-tab');
            navLinks.forEach(l => l.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            link.classList.add('active');
            const target = document.getElementById(tabId);
            if (target) target.classList.add('active');
            renderAll(); // Re-render to ensure fresh data and safety
        });
    });
}

function initDaySelector() {
    const selector = document.getElementById('day-selector');
    if (!selector) return;
    selector.innerHTML = tripData.map((d, i) => `<option value="${i}">${d.date} - ${d.title.split('-')[0]}</option>`).join('');
    selector.onchange = (e) => renderCurrentDay(parseInt(e.target.value));
}

function renderDashboard() {
    const summaryList = document.querySelector('.timeline-summary');
    if (!summaryList) return;
    const progress = Math.min(100, Math.max(0, (new Date() - new Date('2026-04-10')) / (1000 * 60 * 60 * 24 * 20) * 100));
    summaryList.innerHTML = `
        <div style="margin-bottom: 20px;">
            <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <span>Progresso da Viagem</span>
                <span>${isNaN(progress) ? 0 : Math.round(progress)}%</span>
            </div>
            <div style="height:12px; background:rgba(255,255,255,0.05); border-radius:10px; overflow:hidden;">
                <div style="width:${isNaN(progress) ? 0 : progress}%; height:100%; background:var(--accent); box-shadow:0 0 10px var(--accent);"></div>
            </div>
        </div>
        <div class="stats-grid" style="margin-top:2rem;">
            ${tripData.slice(0, 5).map(day => `
                <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px; opacity:0.8;">
                    <span style="font-size:1.2rem;">${day.icon}</span>
                    <span style="font-size:0.85rem;">${day.date}: ${(day.title || "").split('-')[0].substring(0, 30)}</span>
                </div>
            `).join('')}
        </div>
        <div class="marmita-tracker">
            <span style="font-size:1.5rem;">🍱</span>
            <div>
                <div style="font-size:0.7rem; opacity:0.6; text-transform:uppercase; letter-spacing:1px;">Marmitas Kids Restantes</div>
                <div class="marmita-count" id="marmita-count">15 / 15</div>
            </div>
        </div>
    `;
}

function renderCurrentDay(index = 0) {
    const container = document.getElementById('today-content');
    if (!container) return;
    const day = tripData[index] || tripData[0];
    const park = (day.title || "").split(' - ')[0];
    const babyCare = BABY_CARE_LOCATIONS[park] || BABY_CARE_LOCATIONS[(day.activity || "").split(' ')[0]] || null;
    const estimate = getDailyVariableEstimate(day);

    let timelineHtml = `<div class="timeline-container">`;
    (day.details || []).forEach(detail => {
        const dStr = detail || "";
        const timeMatch = dStr.match(/(\d{2}:\d{2})\s*(AM|PM)?/);
        const locationMatch = dStr.match(/📍\s*([^)|]+)/);
        const durationMatch = dStr.match(/⏱️\s*([^)|]+)/);
        const isMarmita = dStr.includes('🍱');

        timelineHtml += `
            <div class="timeline-item">
                <div class="timeline-dot" ${isMarmita ? 'style="background: #fb923c;"' : ''}></div>
                <div class="timeline-content" ${isMarmita ? 'style="border-left: 4px solid #fb923c; background: rgba(251, 146, 60, 0.05);"' : ''}>
                    <div class="timeline-time">
                        ${timeMatch ? timeMatch[0] : 'Horário Livre'} 
                        ${durationMatch ? `• <span style="color:var(--accent-gold)">⏱️ ${durationMatch[1].trim()}</span>` : ''}
                    </div>
                    <p style="font-weight:700; margin-bottom:5px;">${dStr.includes('🕒') ? dStr.split('📍')[0].trim() : dStr.split('(')[0].split('📍')[0].trim()}</p>
                    ${locationMatch ? `<div style="font-size:0.75rem; color:var(--accent); font-weight:600; margin-bottom:5px;">📍 ${locationMatch[1].trim()}</div>` : ''}
                    ${isMarmita ? '<span style="color:#fb923c; font-size:0.7rem;">🍛 Aquecer no Baby Care / Hotel</span>' : ''}
                    ${dStr.includes('PAGO') ? '<span style="color:var(--success); font-size:0.7rem; font-weight:700;">Confirmado ✅</span>' : ''}
                </div>
            </div>`;
    });
    timelineHtml += `</div>`;

    container.innerHTML = `
        <div class="timeline-column">${timelineHtml}</div>
        <div class="info-column">
            <div class="info-card glass">
                <h4 style="color: var(--accent); margin-bottom: 0.5rem;">💰 Estimativa de Gastos</h4>
                <div style="font-size:0.9rem; margin-bottom:10px;">
                    <div style="display:flex; justify-content:space-between;"><span>Snack/Drink/Mimo:</span> <strong>$${estimate.snacks}</strong></div>
                    ${estimate.lightningLane > 0 ? `<div style="display:flex; justify-content:space-between; color:var(--accent-gold);"><span>Lightning Lane (3x):</span> <strong>$${estimate.lightningLane}</strong></div>` : ''}
                    ${estimate.lunch > 0 ? `<div style="display:flex; justify-content:space-between; color:var(--warning);"><span>Almoço Estimado:</span> <strong>$${estimate.lunch}</strong></div>` : ''}
                    <div style="display:flex; justify-content:space-between; margin-top:5px; padding-top:5px; border-top:1px solid rgba(255,255,255,0.1); font-weight:700;">
                        <span>Total Sugerido:</span> <span>$${estimate.total} (~R$ ${(estimate.total * EXCHANGE_RATE).toLocaleString('pt-BR', { maximumFractionDigits: 0 })})</span>
                    </div>
                </div>
            </div>
            <div class="info-card glass" style="background: rgba(74, 222, 128, 0.05); border-left-color: var(--success);">
                <h4 style="color: var(--success); margin-bottom: 0.5rem;">🏷️ Status Reservas</h4>
                ${day.price > 0 ? `<p><strong>Pagar local:</strong> $${day.price}</p>` : '<p style="color:var(--success)"><strong>Reservas:</strong> Tudo Pago / Grátis</p>'}
                ${day.paidTickets ? '<p style="color:var(--success); font-size:0.8rem;">✅ Ingressos PAGO</p>' : ''}
            </div>
            ${babyCare ? `<div class="baby-care-tip"><h4 style="color: #c084fc;">🤱 Baby Care Center</h4><p>${babyCare}</p></div>` : ''}
            <div class="info-card glass" style="margin-top: 1.5rem;">
                <h4>📝 Notas</h4>
                <p style="font-size:0.85rem; line-height:1.5;">${day.notes || 'Sem observações.'}</p>
            </div>
        </div>`;
}

function renderItinerary() {
    const dailyList = document.getElementById('daily-list');
    if (!dailyList) return;
    dailyList.innerHTML = '';
    const firstDayOffset = 5;
    for (let i = 0; i < firstDayOffset; i++) {
        const empty = document.createElement('div');
        empty.className = 'calendar-cell calendar-empty';
        dailyList.appendChild(empty);
    }
    tripData.forEach((day, index) => {
        const card = document.createElement('div');
        card.className = 'itinerary-card glass calendar-cell';

        const currentTitle = day.title || 'Atividade';
        const displayTitle = currentTitle.length > 35 ? currentTitle.substring(0, 32) + '...' : currentTitle;
        const currentLoad = (day.load || 'leve').normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        card.innerHTML = `
            <div class="header">
                <span class="date">${day.date}</span>
                <span class="load-tag load-${currentLoad}">${day.load || 'leve'}</span>
            </div>
            <strong>${day.icon} ${displayTitle}</strong>
            <div class="itinerary-status">
                ${day.paid || day.paidTickets || day.carPaid ? '<span style="color:var(--success)">✅ PAGO</span>' : ''}
                ${(day.notes || "").includes('🍱') ? `<span style="color:#fb923c;">🍱 Kid Meal</span>` : ''}
            </div>
            <div style="margin-top: auto; padding-top: 0.5rem; border-top: 1px solid var(--glass-border); font-size: 0.65rem; color: var(--accent-gold);">
                $ Estimado: $${getDailyVariableEstimate(day).total}
            </div>`;
        card.onclick = () => openEditModal(index);
        dailyList.appendChild(card);
    });
    const totalCells = firstDayOffset + tripData.length;
    const remaining = 7 - (totalCells % 7);
    if (remaining < 7) { for (let i = 0; i < remaining; i++) { const empty = document.createElement('div'); empty.className = 'calendar-cell calendar-empty'; dailyList.appendChild(empty); } }
}

function setupModalListeners() {
    const editModal = document.getElementById('edit-modal');
    const editCloseBtn = document.querySelector('.close-btn');
    const editForm = document.getElementById('edit-form');

    if (editCloseBtn) { editCloseBtn.onclick = () => closeModal(); }

    const wishModal = document.getElementById('wishlist-modal');
    const wishForm = document.getElementById('wishlist-form');

    window.onclick = (e) => {
        if (e.target == editModal) closeModal();
        if (e.target == wishModal) closeWishlistModal();
    };

    if (editForm) {
        editForm.onsubmit = (e) => {
            e.preventDefault();
            const idx = document.getElementById('edit-index').value;
            tripData[idx].title = document.getElementById('edit-title').value;
            tripData[idx].activity = document.getElementById('edit-activity').value;
            tripData[idx].notes = document.getElementById('edit-notes').value;
            tripData[idx].load = document.getElementById('edit-load').value;
            persistData();
            renderAll();
            closeModal();
        };
    }

    if (wishForm) {
        wishForm.onsubmit = (e) => {
            e.preventDefault();
            const name = document.getElementById('wish-name').value;
            const store = document.getElementById('wish-store').value;
            const price = parseFloat(document.getElementById('wish-price').value);

            if (name && store && !isNaN(price)) {
                wishlist.push({ name, store, price });
                persistData();
                renderShopping();
                renderFinance();
                closeWishlistModal();
            }
        };
    }
}

function openEditModal(index) {
    const modal = document.getElementById('edit-modal');
    const day = tripData[index];
    if (!modal || !day) return;
    document.getElementById('edit-index').value = index;
    document.getElementById('edit-title').value = day.title || "";
    document.getElementById('edit-activity').value = day.activity || "";
    document.getElementById('edit-notes').value = day.notes || "";
    document.getElementById('edit-load').value = day.load || "leve";
    modal.style.display = 'flex';
    setTimeout(() => modal.classList.add('active'), 10);
}

function closeModal() { const modal = document.getElementById('edit-modal'); if (modal) { modal.classList.remove('active'); setTimeout(() => modal.style.display = 'none', 300); } }

function renderStrategies() {
    const vTips = ["Dollar Tree: Brinquedos.", "SeaWorld: Abby’s Tower.", "Marmitas.", "Fone fogos."];
    const jTips = ["Troca roupa SeaWorld.", "Pausa carrinho.", "Baby Care.", "Dolphin Nursery."];
    const vList = document.querySelector('#vicente .tips-list');
    const jList = document.querySelector('#joaquim .tips-list');

    if (vList) vList.innerHTML = vTips.map(t => `<li>${t}</li>`).join('');
    if (jList) jList.innerHTML = jTips.map(t => `<li>${t}</li>`).join('');

    // Add Genie+ Content
    const strategiesGrid = document.querySelector('.strategies-grid');
    if (strategiesGrid && !document.getElementById('genie-strategy')) {
        const genieCard = document.createElement('div');
        genieCard.className = 'strategy-card glass';
        genieCard.id = 'genie-strategy';
        genieCard.style.gridColumn = '1 / -1';
        genieCard.innerHTML = `
            <h2>✨ Estratégia Genie+ (Prioridades 07:00 AM)</h2>
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:1rem; margin-top:1rem;">
                ${Object.entries(GENIE_TIPS).map(([park, tip]) => `
                    <div style="background:rgba(255,bbf,36,0.03); padding:1rem; border-radius:12px; border-left:4px solid var(--accent-gold);">
                        <strong style="color:var(--accent-gold);">${park}</strong>
                        <p style="font-size:0.8rem; margin-top:0.5rem; opacity:0.8;">${tip}</p>
                    </div>
                `).join('')}
            </div>
        `;
        strategiesGrid.appendChild(genieCard);
    }
}


function renderLogistics() {
    const hotels = [{ p: '10–23 Abr', n: 'Pop Century (PAGO)' }, { p: '23–25 Abr', n: 'AK Lodge (PAGO)' }, { p: '25–27 Abr', n: 'Naples Beach' }, { p: '27–29 Abr', n: 'Riu Miami (PAGO)' }];
    const hList = document.getElementById('hotels-list');
    if (hList) { hList.innerHTML = hotels.map(h => `<div style="margin-bottom:0.8rem; border-left:4px solid var(--accent); padding-left:0.8rem;"><div style="font-size:0.7rem; opacity:0.6;">${h.p}</div><div>${h.n}</div></div>`).join(''); }

    const miamiList = document.getElementById('miami-itinerary');
    if (miamiList) {
        miamiList.innerHTML = `
            <div style="opacity:0.8; font-size:0.85rem;">
                <p>• 27/04: Dia de Praia no Riu Plaza.</p>
                <p>• 28/04: Compras Dolphin Mall + Ocean Drive.</p>
                <p>• 29/04: Retorno FLL 08:20 AM.</p>
            </div>
        `;
    }

    // Add Emergency Contacts
    const logisticsGrid = document.querySelector('.logistics-grid');
    if (logisticsGrid && !document.getElementById('emergency-section')) {
        const emergencyDiv = document.createElement('div');
        emergencyDiv.className = 'hotel-section glass';
        emergencyDiv.id = 'emergency-section';
        emergencyDiv.style.gridColumn = '1 / -1';
        emergencyDiv.innerHTML = `
            <h2>🆘 SOS Emergência & Saúde</h2>
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:1.5rem; margin-top:1rem;">
                ${EMERGENCY_CONTACTS.map(c => `
                    <div style="background:rgba(248,113,113,0.05); border-left:4px solid var(--danger); padding:1rem; border-radius:12px;">
                        <div style="font-weight:700;">${c.name}</div>
                        <div style="font-size:1.1rem; color:var(--danger); margin:0.5rem 0;">${c.phone}</div>
                        ${c.loc ? `<div style="font-size:0.75rem; opacity:0.7;">${c.loc}</div>` : ''}
                    </div>
                `).join('')}
            </div>
        `;
        logisticsGrid.appendChild(emergencyDiv);
    }
}

function renderFinance() {
    let pendingUSD = 0;
    let projectedVariablesUSD = 0;
    const paidItems = [];
    const pendingItemsRaw = [];

    tripData.forEach(day => {
        const dTitle = day.title || "";
        const dDate = day.date || "";
        const dPrice = day.price || 0;

        if (day.carPaid) { paidItems.push({ name: '🚗 Carro', val: day.carPaid }); }
        if (day.paidTickets) { paidItems.push({ name: `🎫 Ingressos (${dTitle.split('-')[0] || "Park"})`, val: 'PAGO' }); }
        if (day.paid) { paidItems.push({ name: dTitle.includes('Resort') || dTitle.includes('Miami') || dTitle.includes('naples') ? `🏨 Hotel ${dTitle.split('-')[1] || dTitle}` : dTitle, val: 'PAGO' }); }
        else if (dPrice > 0) {
            if (dDate.includes('14/04')) {
                pendingItemsRaw.push({ name: 'MK - Crystal Palace', val: 143 }, { name: 'MK - Liberty Tree', val: 114 });
                pendingUSD += 257;
            } else {
                pendingUSD += dPrice;
                pendingItemsRaw.push({ name: dTitle, val: dPrice });
            }
        }

        // Add daily variables to projection
        const est = getDailyVariableEstimate(day);
        projectedVariablesUSD += est.total;
    });

    const pendingBRL = pendingUSD * EXCHANGE_RATE;
    const variablesBRL = projectedVariablesUSD * EXCHANGE_RATE;
    const remainingBRL = TOTAL_BUDGET_BRL - pendingBRL - variablesBRL;

    const fContainer = document.querySelector('.finance-container');
    if (!fContainer) return;

    fContainer.innerHTML = `
        <h2>Controle & Checklist</h2>
        <div class="stats-grid">
            <div class="stat-card glass"><h3>Orçamento</h3><p class="value">R$25k</p></div>
            <div class="stat-card glass"><h3>Pendentes (Reservas)</h3><p class="value" style="color:var(--warning);">R$${pendingBRL.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</p></div>
            <div class="stat-card glass"><h3>Projeção (Snacks/LL/Almoço)</h3><p class="value" style="color:var(--accent-gold);">R$${variablesBRL.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</p></div>
            <div class="stat-card glass"><h3>Saldo Livre</h3><p class="value" style="color:var(--success);">R$${remainingBRL.toLocaleString('pt-BR', { maximumFractionDigits: 0 })}</p></div>
        </div>
        <div class="glass" style="margin-top:1.5rem">
            <h4>💰 Total Projetado para Extras: $${projectedVariablesUSD}</h4>
            <div style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:1rem;">(Inclui snacks $200/dia, Lightning Lane para 3 pessoas em parques Disney e almoços extras)</div>
            
            <h4>Pendências Atuais (A pagar no local):</h4>
            ${pendingItemsRaw.map(r => `<div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;"><span>${r.name}</span><strong>$${r.val}</strong></div>`).join('')}
            
            <h4 style="margin-top:1.5rem">Já Confirmado:</h4>
            ${paidItems.map(r => `<div style="display:flex; justify-content:space-between; margin-bottom:0.5rem; opacity:0.6;"><span>${r.name}</span><span style="color:var(--success)">CONCLUÍDO</span></div>`).join('')}
        </div>
    `;
}

function renderChecklist() {
    const container = document.getElementById('checklist-content');
    if (!container) return;

    container.innerHTML = Object.entries(PACKING_LIST).map(([cat, items]) => `
        <div class="checklist-category">
            <h3>${cat}</h3>
            ${items.map(item => {
        const isChecked = checkedItems.includes(item);
        return `
                    <div class="checklist-item ${isChecked ? 'checked' : ''}" onclick="toggleChecklist('${item}')">
                        <input type="checkbox" ${isChecked ? 'checked' : ''}>
                        <span>${item}</span>
                    </div>
                `;
    }).join('')}
        </div>
    `).join('');
}

function toggleChecklist(item) {
    if (checkedItems.includes(item)) {
        checkedItems = checkedItems.filter(i => i !== item);
    } else {
        checkedItems.push(item);
    }
    persistData();
    renderChecklist();
}

function renderShopping() {
    const container = document.getElementById('shopping-content');
    if (!container) return;

    const totalUSD = wishlist.reduce((acc, item) => acc + item.price, 0);

    container.innerHTML = `
        <div class="wishlist-table">
            ${wishlist.map((item, idx) => `
                <div class="wishlist-item">
                    <div class="wishlist-info">
                        <strong>${item.name}</strong>
                        <span style="font-size:0.75rem; opacity:0.6;">📍 ${item.store}</span>
                    </div>
                    <div style="display:flex; align-items:center;">
                        <span class="wishlist-price">$${item.price}</span>
                        <span class="wishlist-delete" onclick="removeItem(${idx})">&times;</span>
                    </div>
                </div>
            `).join('')}
            ${wishlist.length === 0 ? '<p style="opacity:0.5; text-align:center; padding:2rem;">Nenhum item na lista.</p>' : ''}
        </div>
        <div style="margin-top:2rem; padding:1.5rem; background:rgba(255,bbf,36,0.1); border-radius:16px; border:1px solid var(--accent-gold); display:flex; justify-content:space-between; align-items:center;">
            <span style="font-weight:700;">TOTAL ESTIMADO (WISHLIST):</span>
            <span style="font-size:1.5rem; font-weight:700; color:var(--accent-gold);">$${totalUSD} (~R$ ${(totalUSD * EXCHANGE_RATE).toLocaleString('pt-BR', { maximumFractionDigits: 0 })})</span>
        </div>
    `;
}

function openWishlistModal() {
    const modal = document.getElementById('wishlist-modal');
    if (modal) {
        document.getElementById('wish-name').value = '';
        document.getElementById('wish-store').value = '';
        document.getElementById('wish-price').value = '';
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('active'), 10);
    }
}

function closeWishlistModal() {
    const modal = document.getElementById('wishlist-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.style.display = 'none', 300);
    }
}

function removeItem(idx) {
    wishlist.splice(idx, 1);
    persistData();
    renderShopping();
    renderFinance();
}

function startCountdown() {
    const cEl = document.getElementById('countdown');
    if (!cEl) return;
    const t = new Date('2026-04-09T22:45:00').getTime();
    const timer = () => {
        const n = new Date().getTime();
        const d = Math.floor((t - n) / (1000 * 60 * 60 * 24));
        if (d >= 0) {
            cEl.innerText = `${d} Dias para a Magia ✨`;
            cEl.style.background = 'var(--accent-gold)';
            cEl.style.color = '#000';
        } else {
            cEl.innerText = `A Magia Começou! ✨`;
        }
    };
    timer();
    setInterval(timer, 60000);
}

window.onload = () => {
    initTheme();
    loadPersistedData();
    sanitizeData();
    renderAll();
    setupEventListeners();
    startCountdown();
};
