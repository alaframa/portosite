/**
 * Alaf Ramadhan Portfolio Logic
 * Handles dynamic rendering of modular data.
 */

// Fallback data if JSON fetch fails in a local environment
const localProjects = [
    {
        year: "2020",
        title: "Solar-based Power Station",
        value: "80,000,000 IDR",
        description: "Decentralized energy monitoring with Arduino Nano & ESP01.",
        tech: ["IoT", "Arduino"],
        location: "src/case-study1.html"
    },
    {
        year: "2024",
        title: "3-Phase Energy Monitoring",
        value: "49,000,000 IDR",
        description: "Industrial grid monitoring via AWS Lambda & ESP32.",
        tech: ["AWS", "Modbus"],
        location: "src/case-study2.html"
    }
];

const localExperience = [
    {
        company: "Unilever Oleochemical",
        role: "IT Support Helpdesk",
        period: "2025 - Present",
        desc: "Active Directory, SAP S/4HANA Support, and network infrastructure.",
        location: "src/experience1.html"
    }
];

function renderContent() {
    // Render Projects on case-studies.html
    const projBox = document.getElementById('projects-container');
    if (projBox) {
        projBox.innerHTML = localProjects.map(p => `
            <a href="${p.location}" class="card-brief p-8 rounded-sm reveal group">
                <div class="flex justify-between items-start mb-6">
                    <span class="text-[10px] font-mono text-blue-500 uppercase tracking-widest">${p.year}</span>
                    <i data-lucide="arrow-up-right" size="16" class="text-zinc-700 group-hover:text-blue-500 transition-colors"></i>
                </div>
                <h3 class="text-xl font-bold font-mono mt-2 uppercase tracking-tight">${p.title}</h3>
                <p class="text-zinc-500 text-sm mt-4 leading-relaxed">${p.description}</p>
                <div class="flex flex-wrap gap-2 mt-6">
                    ${p.tech.map(t => `<span class="px-2 py-1 bg-black border border-zinc-800 text-[8px] font-mono text-zinc-400 uppercase">${t}</span>`).join('')}
                </div>
                <div class="text-green-500 font-mono text-xs mt-8 border-t border-zinc-800/50 pt-4 uppercase tracking-widest">
                    Est_Value: ${p.value}
                </div>
            </a>
        `).join('');
    }

    // Render Experience on experience.html
    const expBox = document.getElementById('experience-container');
    if (expBox) {
        expBox.innerHTML = localExperience.map(e => `
            <a href="${e.location}" class="border-l border-zinc-800 pl-8 relative reveal block group transition-all duration-300 hover:border-blue-500">
                <div class="absolute w-2 h-2 bg-blue-500 -left-[4.5px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.5)] group-hover:scale-150 transition-transform"></div>
                <div class="text-xs font-mono text-zinc-600 mb-2 uppercase tracking-widest">${e.period}</div>
                <h3 class="text-2xl font-bold font-mono uppercase text-white group-hover:text-blue-400 transition-colors">${e.role}</h3>
                <div class="text-blue-500 font-mono text-xs uppercase tracking-widest mt-1">${e.company}</div>
                <p class="text-zinc-500 text-sm mt-4 leading-relaxed max-w-2xl">${e.desc}</p>
                <div class="mt-6 text-[10px] font-mono text-zinc-700 uppercase flex items-center gap-2 group-hover:text-white transition-colors">
                    View_Details <i data-lucide="chevron-right" size="10"></i>
                </div>
            </a>
        `).join('');
    }
}

function initIntersectionObserver() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

window.onload = () => {
    renderContent();
    initIntersectionObserver();
    if (typeof lucide !== 'undefined') lucide.createIcons();
    
    // Smooth Navbar Transform on Scroll
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 30) {
            nav.classList.add('bg-black/95', 'border-b', 'border-zinc-900', 'py-4');
            nav.classList.remove('py-6');
        } else {
            nav.classList.remove('bg-black/95', 'border-b', 'border-zinc-900', 'py-4');
            nav.classList.add('py-6');
        }
    });
};