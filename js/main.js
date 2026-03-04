/**
 * Alaf Ramadhan Portfolio Logic
 * Dynamically fetches data from JSON sources.
 */

async function renderContent() {
    // 1. DYNAMICALLY FETCH PROJECTS
    const projBox = document.getElementById('projects-container');
    if (projBox) {
        try {
            // Path adjusted to reach from /route/ folder to /src/
            const response = await fetch('../src/case-studies/case-studies.json');
            const projects = await response.json();
            
            projBox.innerHTML = projects.map(p => `
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
            
            // Re-initialize icons and observer after dynamic load
            if (typeof lucide !== 'undefined') lucide.createIcons();
            initIntersectionObserver();
        } catch (error) {
            console.error("Error loading projects:", error);
        }
    }

    // 2. DYNAMICALLY FETCH EXPERIENCE
    const expBox = document.getElementById('experience-container');
    if (expBox) {
        try {
            const response = await fetch('../src/experiences/experiences.json');
            const experience = await response.json();
            
            expBox.innerHTML = experience.map(e => `
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
            
            if (typeof lucide !== 'undefined') lucide.createIcons();
            initIntersectionObserver();
        } catch (error) {
            console.error("Error loading experience:", error);
        }
    }
}
