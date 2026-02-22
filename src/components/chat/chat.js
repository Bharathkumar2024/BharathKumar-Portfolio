/* ============================================================
   chat.js — BK Assistant (RAG-like Knowledge Chatbot)
   Knows everything about Bharathkumar J
============================================================ */

/* ===================== KNOWLEDGE BASE ===================== */
const BK_KNOWLEDGE = {
    name: 'Bharathkumar J',
    role: 'AI Engineering Student & Developer',
    location: 'Salem, Tamil Nadu, India',
    email: 'bharathkumarj037@gmail.com',
    phone: '+91 9363751268',
    linkedin: 'https://www.linkedin.com/in/bharathkumar-j-373598386/',
    github: 'https://github.com/Bharathkumar2024',
    leetcode: 'https://leetcode.com/u/bharathkumarj_2006/',
    college: 'Kongu Engineering College, Erode',
    degree: 'B.E. (2024 – 2028)',
    cgpa: '8.43',
    hsc: '88% — Swamy Vivekanandhar Matric HSS (2023–2024)',

    about: `Bharathkumar is an enthusiastic B.E. student at Kongu Engineering College, Erode, 
passionate about building intelligent systems at the intersection of AI and Software Engineering. 
He dives deep into Python, Java, and C while mastering frontend technologies like HTML, CSS, and JavaScript. 
He has a solid foundation in MongoDB and Git/GitHub.`,

    skills: {
        programming: ['Python', 'Java', 'C Language'],
        frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
        tools: ['Git', 'GitHub', 'VS Code'],
        database: ['MongoDB'],
        softSkills: ['Problem Solving', 'Communication', 'Collaboration', 'Agentic AI', 'Machine Learning'],
    },

    achievements: [
        {
            title: '🏆 1st Place — MEDINOVA\'25 Intra College Hackathon',
            detail: 'Secured 1st place at MEDINOVA\'25 organized by the Red Ribbon Club, Kongu Engineering College. The project — "Blood Donation Crisis Management Platform" — bridges donors, hospitals, and patients for timely emergency access to blood.',
            tags: '#Hackathon #Innovation #KonguEngineeringCollege #RedRibbonClub #MEDINOVA25',
        },
        {
            title: '🥈 Finalist — Odoo x SNS Hackathon 2026',
            detail: 'Secured Finalist position at the Odoo x SNS Coimbatore Hackathon \'26 (Feb 7–8 at SNS Institutions). Built "LearnSphere" — a next-gen E-Learning platform with high-fidelity dashboards and student-centric UI/UX in 24 hours.',
            tags: '#OdooHackathon #SNSInstitutions #LearnSphere #Finalist',
        },
        {
            title: '🎓 College CGPA: 8.43',
            detail: 'Maintaining a strong academic record at Kongu Engineering College (2024–Present).',
        },
        {
            title: '📊 HSC: 88%',
            detail: 'Achieved high distinction in Higher Secondary examinations (2023–2024).',
        },
    ],

    projects: [
        {
            name: 'Blood Management System',
            stack: 'React, Node.js, MongoDB',
            desc: 'A comprehensive platform managing donor records and blood stock levels to improve emergency response times.',
            link: 'https://github.com/Bharathkumar2024/drop-save-network',
        },
        {
            name: 'HR Management System',
            stack: 'Python, Django, PostgreSQL',
            desc: 'Centralized HRMS for tracking attendance, leaves, and payroll to streamline organizational workflows.',
            link: 'https://github.com/Bharathkumar2024/peoplefirst-hr',
        },
        {
            name: 'Librarian Assistant Chatbot',
            stack: 'Gemini API, Python, JavaScript',
            desc: 'AI chatbot that helps users find books, manage returns, and answer library-related queries.',
            link: 'https://github.com/Bharathkumar2024/Librarian-Assistant-chatbot',
        },
        {
            name: 'Stock Market Learning Platform',
            stack: 'React, Tailwind, Node.js',
            desc: 'Interactive platform to teach beginners about Indian stock market fundamentals and trading strategies.',
            link: 'https://github.com/Bharathkumar2024',
        },
    ],

    education: [
        'B.E. Student at Kongu Engineering College, Erode (2024–2028) — CGPA 8.43',
        'Higher Secondary (HSC) — Swamy Vivekanandhar Matric HSS — 88% (2023–2024)',
    ],

    interests: ['AI Engineering', 'Agentic AI', 'Gen-AI', 'Web Development', 'UI/UX Design', 'Machine Learning', 'Open Source'],
};

/* ===================== RESPONSE ENGINE ===================== */
const RESPONSES = [
    {
        patterns: ['who is', 'about you', 'tell me about', 'introduce', 'yourself', 'who are you', 'bk', 'bharath'],
        reply: () => `👋 Hi! I'm <b>BK</b> — the AI assistant for <b>Bharathkumar J</b>!
<br><br>He's an enthusiastic <b>AI Engineering student</b> at <b>Kongu Engineering College, Erode</b> (B.E. 2024–2028), passionate about building intelligent systems that solve real-world problems.
<br><br>He works with <b>Python, Java, React, Node.js, MongoDB</b> and loves <b>Agentic AI & Gen-AI</b>.
<br><br>CGPA: <b>8.43</b> | Location: Salem, Tamil Nadu 🇮🇳`,
    },
    {
        patterns: ['achievement', 'award', 'win', 'hackathon', 'medinova', 'odoo', 'finalist', 'won', 'prize', 'recent'],
        reply: () => {
            const a = BK_KNOWLEDGE.achievements;
            return `🏅 Here are Bharathkumar's recent achievements:<br><br>
<b>${a[0].title}</b><br>${a[0].detail}<br><br>
<b>${a[1].title}</b><br>${a[1].detail}<br><br>
<b>${a[2].title}</b><br><b>${a[3].title}</b>`;
        },
    },
    {
        patterns: ['skill', 'tech', 'stack', 'language', 'know', 'work with', 'expertise', 'tools'],
        reply: () => `⚡ Bharathkumar's tech stack:<br><br>
<b>🐍 Programming:</b> Python, Java, C<br>
<b>🌐 Frontend:</b> HTML, CSS, JavaScript, React, Next.js<br>
<b>🛢️ Database:</b> MongoDB<br>
<b>🔧 Tools:</b> Git, GitHub, VS Code<br>
<b>🤖 Focus Areas:</b> Agentic AI, Machine Learning, Gen-AI`,
    },
    {
        patterns: ['project', 'built', 'made', 'created', 'portfolio work', 'github repo', 'show me'],
        reply: () => {
            const p = BK_KNOWLEDGE.projects;
            return `🚀 Here are Bharathkumar's key projects:<br><ul>
<li><b>${p[0].name}</b> (${p[0].stack}) — ${p[0].desc}</li>
<li><b>${p[1].name}</b> (${p[1].stack}) — ${p[1].desc}</li>
<li><b>${p[2].name}</b> (${p[2].stack}) — ${p[2].desc}</li>
<li><b>${p[3].name}</b> (${p[3].stack}) — ${p[3].desc}</li>
</ul>
🔗 <a href="${BK_KNOWLEDGE.github}" target="_blank">View all on GitHub</a>`;
        },
    },
    {
        patterns: ['education', 'college', 'study', 'school', 'degree', 'cgpa', 'hsc', 'academic', 'university'],
        reply: () => `🎓 Bharathkumar's educational journey:<br><br>
<b>B.E. — Kongu Engineering College, Erode</b><br>
📅 2024 – 2028 | CGPA: <b>8.43</b><br>
Focusing on AI engineering, machine learning & building real-world tech projects.<br><br>
<b>HSC — Swamy Vivekanandhar Matric HSS</b><br>
📅 2023 – 2024 | Score: <b>88%</b><br>
Strong foundation in Mathematics and Science.`,
    },
    {
        patterns: ['contact', 'reach', 'email', 'phone', 'hire', 'connect', 'message', 'talk', 'touch'],
        reply: () => `📬 Want to connect with Bharathkumar? Here's how:<br><br>
📧 <b>Email:</b> <a href="mailto:${BK_KNOWLEDGE.email}">${BK_KNOWLEDGE.email}</a><br>
📞 <b>Phone:</b> ${BK_KNOWLEDGE.phone}<br>
💼 <b>LinkedIn:</b> <a href="${BK_KNOWLEDGE.linkedin}" target="_blank">bharathkumar-j</a><br>
🐙 <b>GitHub:</b> <a href="${BK_KNOWLEDGE.github}" target="_blank">Bharathkumar2024</a><br>
💻 <b>LeetCode:</b> <a href="${BK_KNOWLEDGE.leetcode}" target="_blank">bharathkumarj_2006</a><br><br>
Or use the <b>Contact</b> section on this page! 👇`,
    },
    {
        patterns: ['linkedin', 'profile', 'social'],
        reply: () => `💼 You can find Bharathkumar on LinkedIn here:<br>
<a href="${BK_KNOWLEDGE.linkedin}" target="_blank">linkedin.com/in/bharathkumar-j-373598386</a>`,
    },
    {
        patterns: ['github', 'code', 'repository', 'repo', 'open source'],
        reply: () => `🐙 Check out Bharathkumar's code on GitHub:<br>
<a href="${BK_KNOWLEDGE.github}" target="_blank">github.com/Bharathkumar2024</a>`,
    },
    {
        patterns: ['leetcode', 'dsa', 'algorithm', 'competitive', 'problem'],
        reply: () => `💻 Bharathkumar solves problems on LeetCode:<br>
<a href="${BK_KNOWLEDGE.leetcode}" target="_blank">leetcode.com/u/bharathkumarj_2006</a>`,
    },
    {
        patterns: ['location', 'where', 'city', 'place', 'based', 'from'],
        reply: () => `📍 Bharathkumar is based in <b>Salem, Tamil Nadu, India 🇮🇳</b>.<br>
He's currently studying at Kongu Engineering College, Erode.`,
    },
    {
        patterns: ['interest', 'hobby', 'passion', 'like', 'love', 'enjoy'],
        reply: () => `💡 Bharathkumar is passionate about:<br><ul>
<li>🤖 Agentic AI & Gen-AI</li>
<li>🌐 Web Development & UI/UX Design</li>
<li>🧠 Machine Learning</li>
<li>📱 Building real-world impactful projects</li>
<li>⚡ Open Source contribution</li>
</ul>`,
    },
    {
        patterns: ['ai', 'machine learning', 'agentic', 'gen-ai', 'generative'],
        reply: () => `🤖 Bharathkumar is deeply interested in <b>AI Engineering</b>!<br><br>
He focuses on:<br>
• <b>Agentic AI</b> — autonomous AI systems<br>
• <b>Gen-AI</b> — generative AI applications<br>
• <b>Machine Learning</b> fundamentals<br>
• Building real-world AI products<br><br>
He's currently open for <b>AI-focused internships & collaborations</b>! 🚀`,
    },
    {
        patterns: ['internship', 'job', 'opportunity', 'available', 'open'],
        reply: () => `🚀 Yes! Bharathkumar is currently <b>open for opportunities</b>!<br><br>
He's seeking:<br>
• AI Engineering internships<br>
• Full-stack development roles<br>
• AI/ML research collaborations<br><br>
📧 Reach him at: <a href="mailto:${BK_KNOWLEDGE.email}">${BK_KNOWLEDGE.email}</a>`,
    },
    {
        patterns: ['hello', 'hi', 'hey', 'hola', 'howdy', 'sup', 'good morning', 'good evening', 'good afternoon'],
        reply: () => `Hey there! 👋 I'm <b>BK</b>, Bharathkumar's AI assistant.<br>
I know everything about him — his skills, projects, achievements, and more!<br><br>
What would you like to know? 😊`,
    },
    {
        patterns: ['thank', 'thanks', 'awesome', 'great', 'cool', 'nice', 'wow', 'amazing'],
        reply: () => `You're welcome! 😊 If you have more questions about Bharathkumar, feel free to ask!<br>
Or you can reach him directly at <a href="mailto:${BK_KNOWLEDGE.email}">${BK_KNOWLEDGE.email}</a> 📧`,
    },
    {
        patterns: ['bye', 'goodbye', 'see you', 'later', 'cya'],
        reply: () => `Goodbye! 👋 Feel free to come back anytime. Don't forget to connect with Bharathkumar on <a href="${BK_KNOWLEDGE.linkedin}" target="_blank">LinkedIn</a>! 💼`,
    },
];

function getBKResponse(userMsg) {
    const msg = userMsg.toLowerCase().trim();
    for (const item of RESPONSES) {
        if (item.patterns.some(p => msg.includes(p))) {
            return item.reply();
        }
    }
    // Fallback
    return `🤔 I'm not sure about that specific question, but I know everything about <b>Bharathkumar</b>!<br><br>
Try asking about:<br>
• His <b>achievements</b> 🏆<br>
• His <b>projects</b> 🚀<br>
• His <b>skills</b> ⚡<br>
• How to <b>contact</b> him 📬`;
}

/* ===================== WIDGET LOGIC ===================== */
function initBKChat() {
    // Guard: only ever run once
    if (window._bkChatInited) return;
    const widget = document.getElementById('bk-chat-widget');
    if (!widget) return;
    window._bkChatInited = true;

    const toggle = document.getElementById('bk-chat-toggle');
    const window_ = document.getElementById('bk-chat-window');
    const closeBtn = document.getElementById('bk-chat-close');
    const input = document.getElementById('bk-chat-input');
    const sendBtn = document.getElementById('bk-send-btn');
    const messages = document.getElementById('bk-messages');
    const unread = document.getElementById('bk-unread-dot');
    const chips = document.querySelectorAll('.bk-suggestion-chip');

    let isOpen = false;
    let greeted = false;

    function openChat() {
        isOpen = true;
        window_.classList.remove('bk-chat-closed');
        window_.classList.add('bk-chat-open');
        unread.classList.remove('show');
        if (!greeted) {
            greeted = true;
            setTimeout(() => addBotMessage(`👋 Hi! I'm <b>BK</b>, Bharathkumar's personal AI assistant.<br>I have full knowledge about his skills, projects, achievements & more.<br><br>What would you like to know? 😊`), 400);
        }
        setTimeout(() => input.focus(), 450);
    }

    function closeChat() {
        isOpen = false;
        window_.classList.add('bk-chat-closed');
        window_.classList.remove('bk-chat-open');
    }

    toggle.addEventListener('click', () => isOpen ? closeChat() : openChat());
    closeBtn.addEventListener('click', closeChat);

    // Keyboard: close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isOpen) closeChat();
    });

    // Suggestion chips
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            handleUserMessage(chip.dataset.q);
        });
    });

    // Send button & Enter key
    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    function sendMessage() {
        const text = input.value.trim();
        if (!text) return;
        input.value = '';
        handleUserMessage(text);
    }

    function handleUserMessage(text) {
        if (!isOpen) openChat();
        addUserMessage(text);
        showTyping();
        setTimeout(() => {
            removeTyping();
            addBotMessage(getBKResponse(text));
        }, 700 + Math.random() * 400);
    }

    function addUserMessage(text) {
        const bubble = document.createElement('div');
        bubble.className = 'bk-bubble user';
        bubble.textContent = text;
        messages.appendChild(bubble);
        scrollBottom();
    }

    function addBotMessage(html) {
        const bubble = document.createElement('div');
        bubble.className = 'bk-bubble bot';
        bubble.innerHTML = html;
        messages.appendChild(bubble);
        scrollBottom();
    }

    function showTyping() {
        const typing = document.createElement('div');
        typing.className = 'bk-typing';
        typing.id = 'bk-typing';
        typing.innerHTML = '<span></span><span></span><span></span>';
        messages.appendChild(typing);
        scrollBottom();
    }

    function removeTyping() {
        const t = document.getElementById('bk-typing');
        if (t) t.remove();
    }

    function scrollBottom() {
        setTimeout(() => { messages.scrollTop = messages.scrollHeight; }, 50);
    }

    // Show unread dot after 3 seconds to attract attention
    setTimeout(() => {
        if (!isOpen) unread.classList.add('show');
    }, 3000);
}

// Export — init is called by index.html once all fragments are loaded
window.initBKChat = initBKChat;
