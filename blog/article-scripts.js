// Nav scroll
const nav = document.getElementById('siteNav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60));

// Mascot scroll tracking
(function() {
    const mascot = document.getElementById('mascot');
    const hero = document.querySelector('.article-hero');
    if (!mascot || !hero) return;
    function handleScroll() {
        const heroBottom = hero.getBoundingClientRect().bottom;
        if (heroBottom < 0) { mascot.classList.remove('in-hero'); }
        else { mascot.classList.add('in-hero'); }
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
})();

// App ribbon
const apps = [
    { name: 'Side Hustle Copilot', desc: 'Income Matching', price: '$12/mo', emoji: '\u{1F4B0}', url: 'https://hustle.dubltap.io' },
    { name: 'Market Maven', desc: 'Competitive Intelligence', price: '$19/mo', emoji: '\u{1F4CA}', url: 'https://maven.dubltap.io' },
    { name: 'CLIFF NOTEZ', desc: 'Document Analysis', price: '$19/mo', emoji: '\u{1F4CB}', url: 'https://cliff.dubltap.io' },
    { name: 'Bad Mutha Forker', desc: 'Recipe Transformation', price: '$9/mo', emoji: '\u{1F374}', url: 'https://fork.dubltap.io' },
    { name: 'Mind Expander', desc: 'Cognitive Enhancement', price: 'FREE', emoji: '\u{1F9E0}', url: 'https://mind.dubltap.io' },
    { name: 'Pro BizDev', desc: 'Sales Strategy', price: '$24/mo', emoji: '\u{1F3AF}', url: 'https://bizdev.dubltap.io' },
    { name: 'Aesthetic AI', desc: 'Golden Ratio Design', price: '$12/mo', emoji: '\u{1F3A8}', url: 'https://aesthetic.dubltap.io' },
    { name: 'VibeCurate', desc: 'Energy & Vibration', price: '$9/mo', emoji: '\u{1F3B5}', url: 'https://vibe.dubltap.io' },
    { name: 'COMPLETE Bundle', desc: 'All 9 Tools', price: '$59/mo', emoji: '\u26A1', url: 'https://dubltap.io' },
];
const track = document.getElementById('ribbonTrack');
if (track) {
    const allApps = [...apps, ...apps, ...apps];
    track.innerHTML = allApps.map(a =>
        `<a href="${a.url}" class="app-chip" target="_blank" rel="noopener">
            <span class="app-emoji">${a.emoji}</span>
            <div><div class="app-chip-name">${a.name}</div><div class="app-chip-desc">${a.desc}</div></div>
            <span class="app-chip-price">${a.price}</span>
        </a>`
    ).join('');
}

// Email capture
async function captureEmail() {
    const email = document.getElementById('ctaEmail').value.trim();
    if (!email || !email.includes('@')) { alert('Please enter a valid email.'); return; }
    try {
        await fetch('https://api.dubltap.io/api/capture-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, source_app: 'blog_article', tags: ['blog','dispatch','article'] })
        });
    } catch(e) { console.log('Backend pending:', e); }
    document.querySelector('.cta-banner').innerHTML = '<h3 style="color:white;font-family:Cormorant Garamond,serif;font-size:1.8rem;">You\'re In. \u2713</h3><p style="color:#A8DADC;font-size:0.95rem;margin-top:0.8rem;">Check your inbox. The Dispatch lands every Tuesday.</p>';
  }
