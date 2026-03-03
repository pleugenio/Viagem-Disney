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

let checklistData = {
    'Documentos': ['Passaportes', 'Vistos/ESTA', 'Seguro Viagem', 'Reservas Impressas', 'Cartão Internacional (Nomad/Wise)'],
    'Eletrônicos': ['Cabos e Carregadores', 'Power Bank (Crucial!)', 'Adaptador de Tomada', 'Fone de Ouvido (Joaquim/Vicente)'],
    'Joaquim (1 ano)': ['Fraldas Piscina', 'Leite em Pó/Fórmula', 'Mamadeiras', 'Carrinho Confortável', 'Remédios (Antitérmico, etc)'],
    'Vicente (4 anos)': ['Fantasias Disney', 'Tênis Extra', 'Brinquedos para Avião', 'Capa de Chuva'],
    'Higiene/Saúde': ['Protetor Solar', 'Repelente', 'Kit Primeiros Socorros', 'Termômetro', 'Lenços Umedecidos']
};

let strategiesData = {
    'Joaquim (1 ano)': ["Troca roupa SeaWorld.", "Pausa carrinho.", "Baby Care.", "Dolphin Nursery."],
    'Vicente (4 anos)': ["Dollar Tree: Brinquedos.", "SeaWorld: Abby’s Tower.", "Marmitas.", "Fone fogos."],
    '✨ Estratégia Genie+ (Prioridades 07:00 AM)': [
        "**Magic Kingdom**: 7 AM: Marcar Tiana’s ou Space Mountain. 11 AM: Segunda reserva.",
        "**Hollywood Studios**: 7 AM: Marcar Slinky Dog Dash (acaba rápido!) ou Rise of the Resistance.",
        "**Animal Kingdom**: 7 AM: Marcar Safari ou Navi River. Comprar Individual LL para Avatar Flight of Passage.",
        "**Epcot**: Equipe de Fila Virtual para Guardians of the Galaxy (7 AM). Genie+ para Remy ou Frozen."
    ]
};

const EMERGENCY_CONTACTS = [
    { name: 'Emergência EUA', phone: '911' },
    { name: 'Seguro Viagem (Assist Card)', phone: '+1 (800) XXX-XXXX' },
    { name: 'Pediatria Night Lite (24h)', phone: '(407) 505-5437', loc: '📍 Kissimmee' },
    { name: 'Consulado Brasileiro Miami', phone: '(305) 285-6200' }
];

const DISNEY_QUOTES = [
    '"Ao infinito e além!" — Buzz Lightyear',
    '"Continue a nadar." — Dory',
    '"Se você pode sonhar, você pode fazer." — Walt Disney',
    '"O passado pode doer, mas você pode fugir dele ou aprender com ele." — Rafiki',
    '"Algumas coisas valem a pena derreter por elas." — Olaf',
    '"Lembre-se de quem você é." — Mufasa',
    '"O infinito é o limite!" — Toy Story',
    '"A aventura está lá fora!" — Charles Muntz (Up)',
    '"Hakuna Matata!" — Timão e Pumba'
];

const SHOWS_DATA = [
    { park: 'Magic Kingdom', name: 'Happily Ever After', type: 'Fogos de Artifício', time: 'Noturno (geralmente 20:45 ou 21:00)', description: 'O clássico espetáculo de fogos e projeções no Castelo da Cinderela. Chegue de 45 a 60 min mais cedo para conseguir um bom lugar na Main Street.' },
    { park: 'Magic Kingdom', name: 'Festival of Fantasy Parade', type: 'Desfile', time: 'Geralmente às 15:00', description: 'O desfile principal do MK com os personagens clássicos. A melhor visão é da Frontierland ou Liberty Square (com menos sol na cara).' },
    { park: 'Hollywood Studios', name: 'Fantasmic!', type: 'Show Noturno', time: 'Depende do dia (geralmente 20:30 ou 21:00)', description: 'Show incrível do Mickey lutando contra vilões com água, fogo e lasers. O anfiteatro lota rápido, chegue muito cedo no final do dia ou use o Fantasmic Dining Package.' },
    { park: 'Hollywood Studios', name: 'Beauty and the Beast', type: 'Musical', time: 'Vários horários no dia', description: 'Teatro estilo Broadway da Bela e a Fera. Ótimo para descansar no meio do dia.' },
    { park: 'Epcot', name: 'Luminous The Symphony of Us', type: 'Fogos Noturnos', time: 'Geralmente às 21:00', description: 'Show noturno do Epcot na lagoa do World Showcase. Boas vistas do Japão, Itália, ou na ponte entre Reino Unido e França.' },
    { park: 'Animal Kingdom', name: 'Festival of the Lion King', type: 'Show Musical', time: 'Vários ao longo do dia', description: 'Um dos melhores musicais da Disney! Fica na África. As filas podem ser longas, fique atento ao Genie+ ou chegue cedo.' },
    { park: 'Animal Kingdom', name: 'Finding Nemo: The Big Blue... and Beyond!', type: 'Musical Teatral', time: 'Vários ao longo do dia', description: 'Espetáculo de marionetes e música do Procurando Nemo. Teatro fechado com ar-condicionado.' }
];

let wishlist = [];
let checkedItems = [];
let pendenciesList = [];

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

// --- Firebase Config & Setup ---
const firebaseConfig = {
    apiKey: "AIzaSyCmZEvytDAA9wTj2xNEJp8mKj5uNH6xyjY",
    authDomain: "disney2026-97f07.firebaseapp.com",
    databaseURL: "https://disney2026-97f07-default-rtdb.firebaseio.com",
    projectId: "disney2026-97f07",
    storageBucket: "disney2026-97f07.firebasestorage.app",
    messagingSenderId: "506635218625",
    appId: "1:506635218625:web:7f93301274ed052c2d6e40"
};

// Initialize Firebase
if (typeof firebase !== 'undefined') {
    firebase.initializeApp(firebaseConfig);
}
const database = typeof firebase !== 'undefined' ? firebase.database() : null;
const DB_REF = '/disneyTripData_v2'; // Bumped version to ensure clean slate if needed

function loadPersistedData() {
    if (database) {
        // Listen for realtime updates from Firebase
        database.ref(DB_REF).on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                if (Array.isArray(data.tripData)) tripData = data.tripData;
                if (Array.isArray(data.wishlist)) wishlist = data.wishlist;
                if (Array.isArray(data.checkedItems)) checkedItems = data.checkedItems;
                if (Array.isArray(data.pendenciesList)) pendenciesList = data.pendenciesList;
                if (data.checklistData) checklistData = data.checklistData;
                if (data.strategiesData) strategiesData = data.strategiesData;

                // Re-render the application when new data arrives from any device
                sanitizeData();
                renderAll();
            } else {
                // First time load on Firebase: Try to migrate existing localStorage data to Firebase
                const saved = localStorage.getItem(STORAGE_KEY);
                if (saved) {
                    try {
                        const parsed = JSON.parse(saved);
                        if (Array.isArray(parsed.tripData)) tripData = parsed.tripData;
                        if (Array.isArray(parsed.wishlist)) wishlist = parsed.wishlist;
                        if (Array.isArray(parsed.checkedItems)) checkedItems = parsed.checkedItems;
                        if (Array.isArray(parsed.pendenciesList)) pendenciesList = parsed.pendenciesList;
                        if (parsed.checklistData) checklistData = parsed.checklistData;
                        if (parsed.strategiesData) strategiesData = parsed.strategiesData;
                        persistData(); // Push migrated data to Firebase
                    } catch (e) { console.error('Error loading local data', e); }
                }

                sanitizeData();
                renderAll();
            }
        }, (error) => {
            console.error("Firebase read error:", error);
            // Fallback to local if Firebase errors out
            fallbackToLocal();
        });
    } else {
        fallbackToLocal();
    }
}

function fallbackToLocal() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed.tripData)) tripData = parsed.tripData;
            if (Array.isArray(parsed.wishlist)) wishlist = parsed.wishlist;
            if (Array.isArray(parsed.checkedItems)) checkedItems = parsed.checkedItems;
            if (Array.isArray(parsed.pendenciesList)) pendenciesList = parsed.pendenciesList;
            if (parsed.checklistData) checklistData = parsed.checklistData;
            if (parsed.strategiesData) strategiesData = parsed.strategiesData;
        } catch (e) { console.error('Error loading data', e); }
    }
    sanitizeData();
    renderAll();
}

function persistData() {
    const dataToSave = {
        tripData,
        wishlist,
        checkedItems,
        pendenciesList,
        checklistData,
        strategiesData
    };

    // Save to Firebase (triggers .on('value') on all connected clients)
    if (database) {
        database.ref(DB_REF).set(dataToSave).catch(e => console.error("Firebase write error:", e));
    }

    // Keep local backup just in case of offline
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
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
        renderPendencies();
        renderShows();
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
    setupAuth();
}

function setupAuth() {
    const authStatus = sessionStorage.getItem('disney_auth');
    const loginModal = document.getElementById('login-modal');
    const loginQuote = document.getElementById('login-quote');

    if (loginModal) {
        if (authStatus !== 'true') {
            if (loginQuote) {
                const randomQuote = DISNEY_QUOTES[Math.floor(Math.random() * DISNEY_QUOTES.length)];
                loginQuote.textContent = randomQuote;
            }
            loginModal.style.display = 'flex';
            setTimeout(() => loginModal.classList.add('active'), 10);
        } else {
            loginModal.style.display = 'none';
        }

        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.onsubmit = (e) => {
                e.preventDefault();
                const user = document.getElementById('login-user').value.trim();
                const pass = document.getElementById('login-password').value.trim();
                const errorMsg = document.getElementById('login-error');

                if (user.toLowerCase() === 'plopes' && pass === 'disney2026') {
                    sessionStorage.setItem('disney_auth', 'true');
                    errorMsg.style.display = 'none';
                    loginModal.classList.remove('active');
                    setTimeout(() => loginModal.style.display = 'none', 300);
                } else {
                    errorMsg.style.display = 'block';
                }
            };
        }
    }
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

    const pendencyModal = document.getElementById('pendency-modal');
    const pendencyForm = document.getElementById('pendency-form');

    window.onclick = (e) => {
        if (e.target == editModal) closeModal();
        if (e.target == wishModal) closeWishlistModal();
        if (e.target == pendencyModal) closePendencyModal();
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

    if (pendencyForm) {
        pendencyForm.onsubmit = (e) => {
            e.preventDefault();
            const name = document.getElementById('pendency-name').value.trim();
            const idx = parseInt(document.getElementById('pendency-index').value);

            if (name) {
                if (idx >= 0) {
                    pendenciesList[idx].name = name;
                } else {
                    pendenciesList.push({ name, done: false });
                }
                persistData();
                renderPendencies();
                closePendencyModal();
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
    const container = document.querySelector('.strategies-grid');
    if (!container) return;

    container.innerHTML = Object.entries(strategiesData).map(([cat, items]) => `
        <div class="strategy-card glass" style="grid-column: ${cat.includes('Genie') ? '1 / -1' : 'span 1'}">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                <h2 style="margin:0;">${cat}</h2>
                <div style="display:flex; gap:0.5rem; flex-shrink:0;">
                    <span style="cursor:pointer; font-size:1.2rem; opacity:0.8;" title="Adicionar Dica" onclick="addStrategyTip('${cat}')">➕</span>
                    <span style="cursor:pointer; font-size:1.2rem; color:var(--accent);" title="Editar Categoria" onclick="editStrategyCategory('${cat}')">✏️</span>
                    <span style="cursor:pointer; font-size:1.2rem; color:var(--danger);" title="Apagar Categoria" onclick="deleteStrategyCategory('${cat}')">🗑️</span>
                </div>
            </div>
            <ul class="tips-list">
                ${items.map((item, idx) => `
                    <li style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:0.5rem;">
                        <span style="flex:1;">${item}</span>
                        <div style="display:flex; gap:0.5rem; margin-left:1rem; flex-shrink:0;">
                            <span style="cursor:pointer; opacity:0.6;" onclick="editStrategyTip('${cat}', ${idx})">✏️</span>
                            <span class="wishlist-delete" onclick="deleteStrategyTip('${cat}', ${idx})">&times;</span>
                        </div>
                    </li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}

function addStrategyCategory() {
    const cat = prompt("Nome do novo bloco de estratégias:");
    if (cat && !strategiesData[cat]) {
        strategiesData[cat] = [];
        persistData();
        renderStrategies();
    } else if (strategiesData[cat]) {
        alert("Já existe um bloco com este nome.");
    }
}

function editStrategyCategory(oldCat) {
    const newCat = prompt("Renomear bloco de estratégias:", oldCat);
    if (newCat && newCat !== oldCat) {
        if (strategiesData[newCat]) {
            alert("Já existe um bloco com este nome.");
            return;
        }
        strategiesData[newCat] = strategiesData[oldCat];
        delete strategiesData[oldCat];
        persistData();
        renderStrategies();
    }
}

function deleteStrategyCategory(cat) {
    if (confirm(`Tem certeza que deseja apagar o bloco "${cat}" e todas as suas dicas?`)) {
        delete strategiesData[cat];
        persistData();
        renderStrategies();
    }
}

function addStrategyTip(cat) {
    const tip = prompt("Adicionar nova dica:");
    if (tip && tip.trim() !== '') {
        strategiesData[cat].push(tip.trim());
        persistData();
        renderStrategies();
    }
}

function editStrategyTip(cat, tipIdx) {
    const oldTip = strategiesData[cat][tipIdx];
    const newTip = prompt("Renomear dica:", oldTip);
    if (newTip && newTip.trim() !== '') {
        strategiesData[cat][tipIdx] = newTip.trim();
        persistData();
        renderStrategies();
    }
}

function deleteStrategyTip(cat, tipIdx) {
    if (confirm("Apagar esta dica?")) {
        strategiesData[cat].splice(tipIdx, 1);
        persistData();
        renderStrategies();
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
        if (day.paidTickets) { paidItems.push({ name: `🎫 Ingressos(${dTitle.split('-')[0] || "Park"})`, val: 'PAGO' }); }
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

    container.innerHTML = Object.entries(checklistData).map(([cat, items]) => `
        <div class="checklist-category" style="position:relative;">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid var(--glass-border); padding-bottom:0.5rem; margin-bottom:1rem;">
            <h3 style="margin:0;">${cat}</h3>
            <div style="display:flex; gap:0.5rem;">
                <span style="cursor:pointer; font-size:1.2rem; opacity:0.8;" title="Adicionar Item" onclick="addChecklistItem('${cat}')">➕</span>
                <span style="cursor:pointer; font-size:1.2rem; color:var(--accent);" title="Editar Categoria" onclick="editChecklistCategory('${cat}')">✏️</span>
                <span style="cursor:pointer; font-size:1.2rem; color:var(--danger);" title="Apagar Categoria" onclick="deleteChecklistCategory('${cat}')">🗑️</span>
            </div>
        </div>
            ${items.map((item, idx) => {
        const isChecked = checkedItems.includes(item);
        return `
                    <div class="checklist-item ${isChecked ? 'checked' : ''}" style="display:flex; justify-content:space-between;">
                        <div style="flex:1; cursor:pointer; display:flex; align-items:center; gap:0.5rem;" onclick="toggleChecklist('${item}')">
                            <input type="checkbox" ${isChecked ? 'checked' : ''}>
                            <span>${item}</span>
                        </div>
                        <div style="display:flex; gap:0.5rem; margin-left:1rem;">
                            <span style="cursor:pointer; opacity:0.6;" onclick="editChecklistItem('${cat}', ${idx})">✏️</span>
                            <span class="wishlist-delete" onclick="deleteChecklistItem('${cat}', ${idx})">&times;</span>
                        </div>
                    </div>
                `;
    }).join('')
        }
        </div>
        `).join('');
}

function addChecklistCategory() {
    const cat = prompt("Nome da nova categoria:");
    if (cat && !checklistData[cat]) {
        checklistData[cat] = [];
        persistData();
        renderChecklist();
    } else if (checklistData[cat]) {
        alert("Esta categoria já existe.");
    }
}

function editChecklistCategory(oldCat) {
    const newCat = prompt("Renomear categoria:", oldCat);
    if (newCat && newCat !== oldCat) {
        if (checklistData[newCat]) {
            alert("Já existe uma categoria com este nome.");
            return;
        }
        checklistData[newCat] = checklistData[oldCat];
        delete checklistData[oldCat];
        persistData();
        renderChecklist();
    }
}

function deleteChecklistCategory(cat) {
    if (confirm(`Tem certeza que deseja apagar a categoria "${cat}" e todos os seus itens ? `)) {
        delete checklistData[cat];
        persistData();
        renderChecklist();
    }
}

function addChecklistItem(cat) {
    const item = prompt(`Adicionar item em "${cat}": `);
    if (item && item.trim() !== '') {
        checklistData[cat].push(item.trim());
        persistData();
        renderChecklist();
    }
}

function editChecklistItem(cat, itemIdx) {
    const oldItem = checklistData[cat][itemIdx];
    const newItem = prompt("Renomear item:", oldItem);
    if (newItem && newItem.trim() !== '') {
        checklistData[cat][itemIdx] = newItem.trim();
        // Update check state if it was checked
        if (checkedItems.includes(oldItem)) {
            checkedItems = checkedItems.map(i => i === oldItem ? newItem.trim() : i);
        }
        persistData();
        renderChecklist();
    }
}

function deleteChecklistItem(cat, itemIdx) {
    if (confirm("Apagar este item?")) {
        const item = checklistData[cat][itemIdx];
        checklistData[cat].splice(itemIdx, 1);
        checkedItems = checkedItems.filter(i => i !== item); // Remove from checked items
        persistData();
        renderChecklist();
    }
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
            `).join('')
        }
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

// --- Pendencies Functions ---
function renderPendencies() {
    const list = document.getElementById('pendencies-content');
    if (!list) return;

    list.innerHTML = `
        <div style="background:var(--bg-card); border-radius:16px; width:100%;">
        ${pendenciesList.map((item, idx) => `
                <div class="wishlist-item" style="display:flex; justify-content:space-between; align-items:center; padding:1rem; border-bottom:1px solid var(--glass-border); ${item.done ? 'opacity:0.5;' : ''}">
                    <div style="display:flex; align-items:center; gap:1rem; flex:1; cursor:pointer;" onclick="togglePendency(${idx})">
                        <input type="checkbox" ${item.done ? 'checked' : ''} style="width:20px; height:20px; accent-color:var(--accent);">
                        <span style="${item.done ? 'text-decoration:line-through;' : ''}">${item.name}</span>
                    </div>
                    <div style="display:flex; gap:1rem;">
                        <span style="color:var(--accent); cursor:pointer; font-size:1.2rem;" onclick="openPendencyModal(${idx})">✏️</span>
                        <span class="wishlist-delete" onclick="deletePendency(${idx})">&times;</span>
                    </div>
                </div>
            `).join('')
        }
            ${pendenciesList.length === 0 ? '<p style="opacity:0.5; text-align:center; padding:2rem;">Nenhuma pendência. Parabéns!</p>' : ''}
        </div>
        `;
}

function openPendencyModal(idx = -1) {
    const modal = document.getElementById('pendency-modal');
    if (modal) {
        const isEdit = idx >= 0;
        document.getElementById('pendency-modal-title').innerText = isEdit ? 'Editar Pendência' : 'Adicionar Pendência';
        document.getElementById('pendency-name').value = isEdit ? pendenciesList[idx].name : '';
        document.getElementById('pendency-index').value = idx;

        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('active'), 10);
    }
}

function closePendencyModal() {
    const modal = document.getElementById('pendency-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.style.display = 'none', 300);
    }
}

function togglePendency(idx) {
    pendenciesList[idx].done = !pendenciesList[idx].done;
    persistData();
    renderPendencies();
}

function deletePendency(idx) {
    if (confirm("Tem certeza que deseja apagar essa pendência?")) {
        pendenciesList.splice(idx, 1);
        persistData();
        renderPendencies();
    }
}

// --- News Functions ---
async function translateText(text) {
    try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=pt&dt=t&q=${encodeURIComponent(text)}`;
        const res = await fetch(url);
        const json = await res.json();
        return json[0].map(part => part[0]).join('');
    } catch (e) {
        console.error("Translation fail", e);
        return text;
    }
}

async function fetchNews() {
    const container = document.getElementById('news-content');
    if (!container) return;

    try {
        const rssUrl = "https://wdwnt.com/category/walt-disney-world/feed/";
        const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Network issue");

        const data = await response.json();
        if (data.status !== "ok" || !data.items) throw new Error("JSON parsing error");

        const slicedItems = data.items.slice(0, 10);

        const postsHtmlArray = await Promise.all(slicedItems.map(async item => {
            const pubDate = new Date(item.pubDate).toLocaleDateString("pt-BR", { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
            const imgHtml = item.thumbnail ? `<img src="${item.thumbnail}" style="width:100%; height:200px; object-fit:cover; border-radius:12px; margin-bottom:1rem;" alt="News thumbnail">` : '';

            // Translate the English title to Portuguese
            const translatedTitle = await translateText(item.title);

            return `
                <div class="info-card glass" style="padding:1.5rem; margin-bottom:0;">
                    ${imgHtml}
                    <h3 style="color:var(--accent); margin-bottom:0.5rem; font-size:1.3rem;">
                        <a href="${item.link}" target="_blank" style="color:inherit; text-decoration:none;">${translatedTitle}</a>
                    </h3>
                    <p style="font-size:0.8rem; opacity:0.6; margin-bottom:1rem;">${pubDate} • WDWNT</p>
                    <a href="${item.link}" target="_blank" class="save-btn" style="display:inline-block; text-align:center; text-decoration:none; padding:0.75rem 1rem; width:auto;">Leia mais</a>
                </div>
            `;
        }));

        container.innerHTML = postsHtmlArray.join('');
    } catch (e) {
        console.error("News fetch error:", e);
        container.innerHTML = `<p style="text-align:center; padding: 2rem; color:var(--danger);">Não foi possível carregar as notícias no momento.</p>`;
    }
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

// --- Shows ---
function renderShows() {
    const showsContainer = document.getElementById('shows-content');
    if (!showsContainer) return;

    // Group shows by park
    const groupedShows = SHOWS_DATA.reduce((acc, show) => {
        if (!acc[show.park]) acc[show.park] = [];
        acc[show.park].push(show);
        return acc;
    }, {});

    showsContainer.innerHTML = Object.entries(groupedShows).map(([park, shows]) => `
        <div class="strategy-card glass" style="grid-column: span 1">
            <h2 style="color:var(--accent-gold); border-bottom:1px solid var(--glass-border); padding-bottom:0.5rem;">${park}</h2>
            <div style="display:flex; flex-direction:column; gap:1.5rem; margin-top:1rem;">
                ${shows.map(s => `
                    <div>
                        <strong style="font-size:1.1rem; display:block; color:var(--text-primary);">${s.name}</strong>
                        <span style="font-size:0.75rem; background:rgba(56,189,248,0.1); color:var(--accent); padding:0.1rem 0.5rem; border-radius:12px; margin-bottom:0.5rem; display:inline-block;">${s.type}</span>
                        <div style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:0.3rem;">🕒 <strong>${s.time}</strong></div>
                        <p style="font-size:0.85rem; opacity:0.8; margin:0; line-height:1.4;">${s.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}


// --- Data Export & Import ---
function exportData() {
    const dataToExport = localStorage.getItem(STORAGE_KEY);
    if (!dataToExport) {
        alert("Nenhum dado salvo encontrado para exportar.");
        return;
    }
    const blob = new Blob([dataToExport], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Disney2026_Backup_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const importedContent = e.target.result;
            // Validate JSON
            const parsed = JSON.parse(importedContent);

            if (confirm("Isto irá substituir todos os seus dados atuais E na nuvem (lista de compras, checklist, etc). Deseja continuar?")) {
                localStorage.setItem(STORAGE_KEY, importedContent);
                if (database) {
                    database.ref(DB_REF).set(parsed).then(() => {
                        alert("Dados importados com sucesso para a Nuvem! A tela será atualizada.");
                    }).catch(err => {
                        console.error("Erro ao subir pro Firebase:", err);
                        alert("Importação salva localmente, mas falhou ao enviar para a nuvem.");
                    });
                } else {
                    alert("Dados importados localmente com sucesso! A tela será atualizada.");
                    location.reload();
                }
            }
        } catch (err) {
            alert("Erro ao ler o arquivo. Certifique-se de que é um arquivo de backup válido do aplicativo Disney 2026.");
        }
    };
    reader.readAsText(file);
    event.target.value = ""; // Reset input
}

window.onload = () => {
    initTheme();
    loadPersistedData(); // This now async handles sanitizeData() and renderAll()
    setupEventListeners();
    startCountdown();
    fetchNews(); // Load news immediately
};
