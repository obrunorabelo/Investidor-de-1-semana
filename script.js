document.addEventListener('DOMContentLoaded', () => {
    console.log('Investidor em 1 Semana - App Initialized');

    // =========================================================================
    // 1. DATA LAYER (SINGLE SOURCE OF TRUTH)
    // =========================================================================

    const DATA = {
        hero: {
            badge: 'CURSO INVESTIDOR EM 1 SEMANA',
            headline: 'Passo a passo para começar a<br><span class="highlight" style="color: #f27317;">investir em apenas 1 semana!</span>',
            subhead: '',
            cta: 'QUERO COMEÇAR A INVESTIR',
            benefits: ['Método Validado', 'Acesso Imediato', 'Garantia Total'],
            footerBenefits: [
                { text: 'Acesso por 12 meses', icon: 'infinity' },
                { text: 'Certificado Digital', icon: 'certificate' },
                { text: 'Equipe de Suporte', icon: 'chat' }
            ]
        },
        pain: {
            headline: 'Cansado de ver seu dinheiro <span class="text-brand-orange">perder valor?</span>',
            subhead: 'Se você se identifica com alguma dessas situações, você está no lugar certo para mudar isso!',
            cards: [
                'Trabalha o mês inteiro, paga as contas e sente que não sobra nada para o futuro.',
                'Deixa o dinheiro parado na poupança, simplesmente por não conhecer outras possibilidades.',
                'Acha o mercado financeiro complicado demais e cheio de termos que você não entende.',
                'Sabe que precisa investir, mas fica paralisado sem saber qual o primeiro passo dar.'
            ]
        },
        contrast: {
            headline: 'A Diferença é <span class="text-brand-orange">Brutal</span>',
            badSide: {
                title: 'O Caminho Comum',
                items: ['Dinheiro parado perdendo valor', 'Dependência total do INSS', 'Insegurança sobre o futuro', 'Você trabalha pelo dinheiro']
            },
            goodSide: {
                title: 'O Caminho do Investidor',
                items: ['Dinheiro 24h/dia', 'Construção de Renda Passiva', 'Tranquilidade e Segurança', 'O dinheiro trabalha para você']
            }
        },
        objection: {
            headline: '"Mas eu não tenho muito dinheiro..."',
            text1: 'Essa é a maior mentira que te contaram. Você não precisa ser rico para começar a investir, <strong class="text-brand-orange">você precisa investir para construir riqueza.</strong>',
            text2: 'No curso <em>Investidor em 1 Semana</em>, você vai aprender que é possível começar com o que você tem hoje, seja R$ 30,00 ou R$ 5.000,00. O segredo não é o valor inicial, mas a consistência e a estratégia certa.'
        },
        modules: {
            headline: 'O Que Você Vai <span class="text-brand-orange">Aprender</span>',
            subhead: 'Um método direto ao ponto, sem enrolação.',
            items: [
                { img: 'assets/module-01.jpg', alt: 'Módulo 01: Primeiros Passos - Saindo do Zero' },
                { img: 'assets/module-02.jpg', alt: 'Módulo 02: Organizando suas Finanças Pessoais' },
                { img: 'assets/module-03.jpg', alt: 'Módulo 03: Segurança na Renda Fixa' },
                { img: 'assets/module-04.jpg', alt: 'Módulo 04: Multiplicação com Renda Variável' },
                { img: 'assets/module-05.jpg', alt: 'Módulo 05: O Plano Prático de 7 Dias' }
            ]
        },
        differentials: {
            headline: 'Por que este é o <span class="text-brand-orange">Melhor Começo</span>?',
            rows: [
                { criteria: 'Didática para Iniciantes', course: 'Sim (Zero "Economês")', others: 'Não (Muito Técnico)', youtube: 'Confuso e Solto' },
                { criteria: 'Método Passo a Passo', course: 'Sim (Guia Prático)', others: 'Teoria Excessiva', youtube: 'Sem Ordem Lógica' },
                { criteria: 'Suporte Direto', course: 'Sim (Tire suas dúvidas)', others: 'Demorado / Inexistente', youtube: 'Nenhum' },
                { criteria: 'Tempo para Começar', course: 'Em 7 Dias', others: 'Meses de Estudo', youtube: 'Indefinido' }
            ]
        },
        guarantee: {
            headline: 'Seu Risco é <span class="text-brand-orange">Zero</span>',
            text: 'Você tem 7 dias inteiros para entrar, assistir às aulas e decidir se o curso é para você. Se por qualquer motivo você não gostar, nós devolvemos <strong class="text-white">100% do seu investimento</strong>.',
            subtext: 'Sem letras miúdas e sem burocracia.'
        },
        offer: {
            headline: 'OFERTA EXCLUSIVA',
            oldPrice: 'R$ 497,00',
            installments: '12x de',
            price: 'R$ 15,20',
            cashPrice: 'ou R$ 147,00 à vista',
            benefits: [
                'Curso Completo Investidor em 1 Semana',
                'Bônus: Planilha de Controle Financeiro',
                'Bônus: Guia de Bancos Digitais',
                'Acesso Vitalício e Atualizações',
                'Suporte Exclusivo para Alunos'
            ],
            cta: 'Garantir Minha Vaga Agora',
            checkoutUrl: 'https://payment.ticto.app/O44B8A4E7'
        },
        faq: {
            headline: 'Perguntas <span class="text-brand-orange">Frequentes</span>',
            items: [
                { question: 'Eu nunca investi na vida, vou conseguir acompanhar?', answer: 'Com certeza! O curso foi criado exatamente para você. Começamos do absoluto zero, explicando cada termo e cada passo. Você não precisa de nenhum conhecimento prévio.' },
                { question: 'Preciso ter muito dinheiro para começar?', answer: 'Mito! Você vai aprender a fazer seus primeiros investimentos com valores muito baixos (a partir de R$ 30,00). O importante é começar e criar o hábito, não o valor inicial.' },
                { question: 'E se eu não gostar do curso?', answer: 'Você não corre risco nenhum. Se em até 7 dias você achar que não é para você, basta enviar um e-mail e devolvemos 100% do seu dinheiro. Simples assim.' }
            ]
        }
    };

    // =========================================================================
    // 2. COMPONENT LAYER (FUNCTIONAL COMPONENTS)
    // =========================================================================

    const HeroSection = () => `
        <section class="hero-section">
            <!-- Ambient Background Glow -->
            <div class="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style="animation-duration: 4s;"></div>
            <div class="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div class="hero-container relative z-10">
                <!-- Lado Esquerdo: Conteúdo -->
                <div class="hero-content reveal-left">
                    <div class="hero-badge">
                        ${DATA.hero.badge}
                    </div>
                    
                    <h1 class="hero-title">
                        ${DATA.hero.headline}
                    </h1>
                    

                    
                    <a href="#oferta" class="hero-cta inline-block text-center no-underline">
                        ${DATA.hero.cta}
                    </a>
                    

                </div>
                
                <!-- Lado Direito: Nova Imagem do Mapa com Efeitos -->
                <div class="hero-image reveal-right relative">
                    <!-- Glow Effects (Restored) -->
                    <div class="absolute -top-10 -left-10 w-40 h-40 bg-brand-orange/20 rounded-full blur-3xl animate-pulse"></div>
                    <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-orange/30 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
                    
                    <img src="assets/hero-roadmap.jpg" alt="Mapa do Investidor - Do Zero ao Primeiro Investimento em 7 Dias" class="relative z-10 w-full max-w-[450px] aspect-[9/16] object-cover mx-auto transform hover:scale-105 transition-transform duration-700 rounded-[2.5rem]" style="max-height: 85vh;">
                </div>
            </div>

            <!-- New Footer Benefits Bar -->
            <!-- New Footer Benefits Bar -->
            <div class="container mx-auto px-6 max-w-7xl mt-16 border-t border-white/10 pt-10">
                <div class="flex flex-row justify-between items-start gap-2 md:grid md:grid-cols-3 md:gap-8 text-center reveal-up">
                    ${DATA.hero.footerBenefits.map(item => `
                        <div class="flex flex-col items-center gap-2 group w-1/3 md:w-full">
                            <div class="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white/5 rounded-full border border-white/10 group-hover:border-brand-orange/50 group-hover:bg-brand-orange/10 transition-all duration-300">
                                ${item.icon === 'infinity' ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 group-hover:text-brand-orange transition-colors md:w-6 md:h-6"><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"/></svg>' : ''}
                                ${item.icon === 'certificate' ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 group-hover:text-brand-orange transition-colors md:w-6 md:h-6"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>' : ''}
                                ${item.icon === 'chat' ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-400 group-hover:text-brand-orange transition-colors md:w-6 md:h-6"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' : ''}
                            </div>
                            <span class="text-gray-300 font-medium group-hover:text-white transition-colors text-xs md:text-base leading-tight">${item.text}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;

    const PainSection = () => `
        <section class="py-24 bg-brand-dark relative">
            <div class="container mx-auto px-6 max-w-7xl">
                <div class="text-center max-w-3xl mx-auto mb-16 reveal-up">
                    <h2 class="font-heading text-3xl md:text-4xl font-bold text-white mb-4">${DATA.pain.headline}</h2>
                    <p class="text-gray-400 text-lg">${DATA.pain.subhead}</p>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${DATA.pain.cards.map((card, i) => `
                        <div class="bg-brand-gray p-8 rounded-2xl border border-white/5 hover:border-brand-orange/30 transition-colors duration-300 reveal-up" style="transition-delay: ${i * 100}ms">
                            <div class="text-red-500 text-4xl mb-4 font-bold">✗</div>
                            <p class="text-gray-300 leading-relaxed">${card}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;

    const ContrastSection = () => `
        <section class="py-24 bg-brand-black">
            <div class="container mx-auto px-6 max-w-7xl">
                <h2 class="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-16 reveal-up">${DATA.contrast.headline}</h2>
                <div class="flex flex-col md:flex-row gap-8 items-stretch justify-center relative">
                    <div class="flex-1 bg-white/5 border border-white/10 p-8 rounded-2xl reveal-left">
                        <h3 class="text-2xl font-bold text-white mb-6 text-center">${DATA.contrast.badSide.title}</h3>
                        <ul class="space-y-4">
                            ${DATA.contrast.badSide.items.map(item => `
                                <li class="flex items-center gap-3 text-gray-400"><span class="text-red-500 font-bold text-xl">✗</span> ${item}</li>
                            `).join('')}
                        </ul>
                    </div>
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex w-16 h-16 bg-brand-orange rounded-full items-center justify-center font-black text-white text-xl border-4 border-brand-black shadow-glow reveal-scale">VS</div>
                    <div class="flex-1 bg-brand-orange/5 border border-brand-orange p-8 rounded-2xl shadow-glow reveal-right">
                        <h3 class="text-2xl font-bold text-white mb-6 text-center">${DATA.contrast.goodSide.title}</h3>
                        <ul class="space-y-4">
                            ${DATA.contrast.goodSide.items.map(item => `
                                <li class="flex items-center gap-3 text-white"><span class="text-brand-orange font-bold text-xl">✓</span> ${item}</li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    `;

    const ObjectionSection = () => `
        <section class="py-24 bg-brand-black relative overflow-hidden">
            <!-- Background Glow -->
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-brand-orange/5 blur-[100px] pointer-events-none"></div>
            
            <div class="container mx-auto px-6 max-w-4xl relative z-10 text-center reveal-up">
                <h2 class="font-heading text-3xl md:text-4xl font-bold text-white mb-8">${DATA.objection.headline}</h2>
                <p class="text-xl leading-relaxed text-gray-300 mb-8 font-light">${DATA.objection.text1}</p>
                <p class="text-lg text-gray-500">${DATA.objection.text2}</p>
            </div>
        </section>
    `;

    const ModulesSection = () => `
        <section class="py-24 bg-brand-dark">
            <div class="container mx-auto px-6 max-w-[1800px]">
                <div class="text-center mb-16 reveal-up">
                    <h2 class="font-heading text-3xl md:text-4xl font-bold text-white mb-4">${DATA.modules.headline}</h2>
                    <p class="text-gray-400">${DATA.modules.subhead}</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    ${DATA.modules.items.map((m, i) => `
                        <div class="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-glow transition-all duration-500 reveal-up" style="transition-delay: ${i * 100}ms">
                            <div class="w-full h-auto overflow-hidden rounded-3xl border border-white/5 group-hover:border-brand-orange transition-colors duration-300">
                                <img src="${m.img}" alt="${m.alt}" class="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700">
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;

    const DifferentialsSection = () => `
        <section class="py-24 bg-brand-black">
            <div class="container mx-auto px-6 max-w-5xl">
                <h2 class="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-16 reveal-up">${DATA.differentials.headline}</h2>
                <div class="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl reveal-up mb-24">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-brand-gray text-white">
                                <th class="p-6 font-bold border-b border-white/10">Critério</th>
                                <th class="p-6 font-bold border-b border-brand-orange bg-brand-orange/10 text-brand-orange text-center text-lg">Investidor em 1 Semana</th>
                                <th class="p-6 font-bold border-b border-white/10 text-gray-400 text-center">Outros Cursos</th>
                                <th class="p-6 font-bold border-b border-white/10 text-gray-400 text-center">Youtube "De Graça"</th>
                            </tr>
                        </thead>
                        <tbody class="bg-brand-dark">
                            ${DATA.differentials.rows.map(row => `
                                <tr class="border-b border-white/5">
                                    <td class="p-6 text-white font-medium">${row.criteria}</td>
                                    <td class="p-6 text-center bg-brand-orange/5 border-x border-brand-orange/20 text-white"><span class="text-brand-orange font-bold">✓</span> ${row.course}</td>
                                    <td class="p-6 text-center text-gray-500"><span class="text-red-500 font-bold">✗</span> ${row.others}</td>
                                    <td class="p-6 text-center text-gray-500"><span class="text-red-500 font-bold">✗</span> ${row.youtube}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
                <!-- Guarantee Block Removed -->
                <!-- Offer Block -->
                <div class="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                <div id="oferta" class="container mx-auto px-6 max-w-lg relative z-10">
                    <div class="bg-brand-gray/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 reveal-up">
                        <div class="bg-gradient-to-r from-brand-orange to-orange-600 p-6 text-center">
                            <h3 class="text-white font-bold text-xl tracking-wider">${DATA.offer.headline}</h3>
                        </div>
                        <div class="p-10 text-center">
                            <p class="text-gray-400 text-lg mb-2">De <span class="line-through">${DATA.offer.oldPrice}</span> por apenas:</p>
                            <div class="flex items-center justify-center gap-2 mb-2 text-white">
                                <span class="text-2xl font-semibold">${DATA.offer.installments}</span>
                                <span class="text-6xl font-black tracking-tighter text-brand-orange">${DATA.offer.price}</span>
                            </div>
                            <p class="text-white font-bold text-lg mb-8">${DATA.offer.cashPrice}</p>
                            <ul class="text-left space-y-4 mb-10 text-gray-300">
                                ${DATA.offer.benefits.map(b => `
                                    <li class="flex items-start gap-3"><span class="text-brand-orange font-bold mt-1">✓</span> ${b}</li>
                                `).join('')}
                            </ul>
                            <a href="${DATA.offer.checkoutUrl}" target="_blank" rel="noopener noreferrer" class="block w-full py-4 bg-brand-orange text-white font-bold rounded-full shadow-lg hover:bg-orange-600 transition-colors uppercase tracking-wide text-lg mb-4 shadow-glow">${DATA.offer.cta}</a>
                            <p class="text-gray-500 text-sm flex items-center justify-center gap-2">🔒 Pagamento 100% Seguro</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    const FAQSection = () => `
        <section class="py-24 bg-brand-dark">
            <div class="container mx-auto px-6 max-w-3xl">
                <h2 class="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-16 reveal-up">${DATA.faq.headline}</h2>
                <div class="space-y-4 reveal-up">
                    ${DATA.faq.items.map(item => `
                        <div class="faq-item bg-brand-gray rounded-xl overflow-hidden border border-white/5">
                            <div class="faq-question p-6 flex justify-between items-center cursor-pointer hover:bg-white/5 transition-colors">
                                <h3 class="text-white font-semibold text-lg">${item.question}</h3>
                                <span class="text-brand-orange text-2xl font-bold">+</span>
                            </div>
                            <div class="faq-answer max-h-0 overflow-hidden transition-all duration-300 px-6">
                                <p class="text-gray-400 pb-6">${item.answer}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;

    const FooterSection = () => `
        <footer class="py-12 bg-black border-t border-white/10">
            <div class="container mx-auto px-6 text-center">
                <div class="mb-8">
                    <h3 class="text-2xl font-heading font-bold text-white">Bruno Rabelo</h3>
                    <p class="text-gray-500">Investidor em 1 Semana</p>
                </div>
                <div class="flex justify-center gap-8 mb-8 text-sm text-gray-400">
                    <a href="#" class="hover:text-brand-orange transition-colors">Termos de Uso</a>
                    <a href="#" class="hover:text-brand-orange transition-colors">Política de Privacidade</a>
                    <a href="#" class="hover:text-brand-orange transition-colors">Contato</a>
                </div>
                <p class="text-gray-600 text-sm">&copy; 2024 Bruno Rabelo. Todos os direitos reservados.</p>
            </div>
        </footer>
    `;

    // =========================================================================
    // 3. RENDER ENGINE (INJECTS COMPONENTS INTO DOM)
    // =========================================================================

    const renderApp = () => {
        const app = document.getElementById('app');
        if (!app) return;

        app.innerHTML = `
            ${HeroSection()}
            ${PainSection()}
            ${ContrastSection()}
            ${ObjectionSection()}
            ${ModulesSection()}
            ${DifferentialsSection()}
            ${FAQSection()}
            ${FooterSection()}
        `;

        initInteractions();
    };

    // =========================================================================
    // 4. INTERACTION LAYER (LISTENERS & ANIMATIONS)
    // =========================================================================

    const initInteractions = () => {
        // FAQ Logic
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const item = question.parentElement;
                const answer = item.querySelector('.faq-answer');
                const isOpen = item.classList.contains('active');

                document.querySelectorAll('.faq-item').forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-answer').style.maxHeight = null;
                        otherItem.querySelector('span').textContent = '+';
                        otherItem.querySelector('span').classList.remove('text-white');
                        otherItem.querySelector('span').classList.add('text-brand-orange');
                    }
                });

                if (isOpen) {
                    item.classList.remove('active');
                    answer.style.maxHeight = null;
                    question.querySelector('span').textContent = '+';
                    question.querySelector('span').classList.remove('text-white');
                    question.querySelector('span').classList.add('text-brand-orange');
                } else {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + "px";
                    question.querySelector('span').textContent = '-';
                    question.querySelector('span').classList.remove('text-brand-orange');
                    question.querySelector('span').classList.add('text-white');
                }
            });
        });

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Scroll Reveal
        const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-scale');
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal-active');
                    observer.unobserve(entry.target);
                }
            });
        }, { root: null, threshold: 0.1, rootMargin: "0px" });
        revealElements.forEach(el => revealObserver.observe(el));

        // Cursor Logic
        const cursorDot = document.querySelector('[data-cursor-dot]');
        const cursorOutline = document.querySelector('[data-cursor-outline]');
        if (cursorDot && cursorOutline && window.matchMedia("(min-width: 769px)").matches) {
            window.addEventListener('mousemove', function (e) {
                const posX = e.clientX;
                const posY = e.clientY;
                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;
                cursorOutline.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 500, fill: "forwards" });
            });
            document.querySelectorAll('a, button, .faq-question, input, textarea').forEach(el => {
                el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
                el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
            });
        }

        // Call Text Animate
        initTextAnimate();
    };

    // --- Text Animate (BlurInUp) ---
    const initTextAnimate = () => {
        const headings = document.querySelectorAll('h1, h2');

        headings.forEach(heading => {
            const processNode = (node) => {
                if (node.nodeType === 3) { // Text node
                    const text = node.textContent;
                    if (!text.trim()) return;

                    // Split by spaces to preserve words
                    const words = text.split(/(\s+)/); // Split by whitespace, capturing it
                    const fragment = document.createDocumentFragment();

                    words.forEach(word => {
                        if (word.match(/^\s+$/)) {
                            // It's whitespace, just add it
                            fragment.appendChild(document.createTextNode(word));
                        } else if (word.length > 0) {
                            // It's a word, wrap it to prevent breaking
                            const wordSpan = document.createElement('span');
                            wordSpan.style.display = 'inline-block';
                            wordSpan.style.whiteSpace = 'nowrap';

                            word.split('').forEach(char => {
                                const charSpan = document.createElement('span');
                                charSpan.textContent = char;
                                charSpan.className = 'text-animate-char';
                                wordSpan.appendChild(charSpan);
                            });

                            fragment.appendChild(wordSpan);
                        }
                    });

                    node.parentNode.replaceChild(fragment, node);
                } else if (node.nodeType === 1) { // Element node
                    Array.from(node.childNodes).forEach(processNode);
                }
            };

            heading.classList.remove('reveal-up', 'reveal-left', 'reveal-right');
            Array.from(heading.childNodes).forEach(processNode);

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('text-animate-active');
                        const chars = entry.target.querySelectorAll('.text-animate-char');
                        chars.forEach((char, i) => {
                            char.style.animationDelay = `${i * 0.03}s`;
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(heading);
        });
    };

    // Start App
    renderApp();
});
