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
            headline: 'Se você se identifica com alguma dessas situações, você está no <span class="text-brand-orange">lugar certo</span> para <span class="text-brand-orange">mudar isso!</span>',
            subhead: 'Cansado de ver seu dinheiro <span class="text-brand-orange">perder valor?</span>',
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
                items: ['Dinheiro parado perdendo valor', 'Dependência total do INSS', 'Insegurança sobre o futuro', 'Vida financeira desorganizada']
            },
            goodSide: {
                title: 'O Caminho do Investidor',
                items: ['Dinheiro Aplicado', 'Seu plano para aposentadoria', 'Tranquilidade e paz', 'Seu dinheiro organizado e investido']
            }
        },
        testimonials: {
            headline: 'O Que Nossos Alunos <span class="text-brand-orange">Estão Falando</span>',
            items: [
                { name: 'Ricardo Oliveira', initials: 'RO', text: 'Comecei com apenas R$ 50,00 e segui o método passo a passo. Hoje, ver os primeiros dividendos caindo na conta é uma sensação indescritível de liberdade!' },
                { name: 'Fernanda Lima', initials: 'FL', text: 'Eu tinha medo de abrir o app do banco. O módulo de Organização Financeira mudou minha vida. Agora invisto todo mês com segurança.' },
                { name: 'Carlos Mendes', initials: 'CM', text: 'O suporte do curso é sensacional. Tiram todas as dúvidas e a comunidade ajuda demais. Já recuperei o valor do investimento em 2 meses.' },
                { name: 'Juliana Santos', initials: 'JS', text: 'Achava que investir em ações era loteria. Entendi a lógica dos fundamentos e agora tenho uma carteira sólida de Renda Variável.' },
                { name: 'Roberto Alves', initials: 'RA', text: 'Em 1 semana eu realmente saí do zero. A didática é direta, sem enrolação. Recomendadíssimo para quem não tem tempo.' },
                { name: 'Mariana Costa', initials: 'MC', text: 'Já tinha feito outros cursos caros e complexos. Esse foi o único que me fez colocar a mão na massa de verdade. Simples e prático.' },
                { name: 'Lucas Torres', initials: 'LT', text: 'Investir parecia coisa de rico. Descobri que é para quem quer construir riqueza. Minha mentalidade mudou completamente.' },
                { name: 'Beatriz Gomes', initials: 'BG', text: 'A planilha de controle é um bônus que vale ouro! Finalmente sei para onde meu dinheiro vai e quanto ele está rendendo.' },
                { name: 'Gustavo Henrique', initials: 'GH', text: 'Segurança na Renda Fixa foi o que me atraiu. Hoje durmo tranquilo sabendo que meu dinheiro está rendendo bem mais que a poupança.' },
                { name: 'Patricia Bueno', initials: 'PB', text: 'O melhor investimento que fiz em mim mesma esse ano. Conteúdo de altíssimo nível por um preço acessível.' }
            ]
        },
        objection: {
            headline: '"Mas eu não tenho muito dinheiro..."',
            text1: 'Essa é a maior mentira que te contaram. Você não precisa ser rico para começar a investir, <strong class="text-brand-orange">você precisa investir para construir riqueza.</strong>',
            text2: 'No curso <em>Investidor em 1 Semana</em>, você vai aprender que é possível começar com o que você tem hoje, seja R$ 30,00 ou R$ 5.000,00. O segredo não é o valor inicial, mas a consistência e a estratégia certa.'
        },
        modules: {
            headline: 'O Que Você Vai <span class="text-brand-orange">Aprender</span>',
            subhead: 'Um método direto ao ponto, sem enrolação.',
            showcase: [
                'Curso completo investidor em 1 semana',
                'Acesso por 12 meses',
                'Suporte exclusivo',
                'Mapa mental completo',
                'Certificado de conclusão'
            ],
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
                { criteria: 'Passo a Passo', course: 'Sim (Guia Prático)', others: 'Teoria Excessiva', youtube: 'Sem Ordem Lógica' },
                { criteria: 'Suporte Direto', course: 'Sim (Tire suas dúvidas)', others: 'Demorado / Inexistente', youtube: 'Nenhum' },
                { criteria: 'Evolução como Investidor', course: 'Base sólida', others: 'Lenta', youtube: 'Desorganizada' }
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
                'Acesso por 12 meses e Atualizações',
                'Bônus: Planilha de Controle Financeiro',
                'Bônus: Mapa Mental Completo',
                'Certificado de Conclusão',
                'Suporte Exclusivo para Alunos',
                'Acesso via Celular e Computador'
            ],
            cta: 'Garantir Minha Vaga',
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
        <section class="hero-section overflow-hidden">
            <!-- Ambient Background Glow -->
            <div class="absolute top-[-20%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style="animation-duration: 4s;"></div>
            <div class="absolute bottom-[-10%] right-[-5%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>

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


        </section>
    `;

    const PainSection = () => `
        <section class="py-24 bg-brand-dark relative">
            <div class="container mx-auto px-6 max-w-7xl">
                <div class="text-center max-w-3xl mx-auto mb-16 reveal-up">
                    <h2 class="font-heading text-3xl md:text-4xl font-bold text-white mb-4">${DATA.pain.headline}</h2>
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
                    </div>
                </div>

                <div class="text-center mt-12 reveal-up">
                    <a href="#oferta" class="inline-block py-5 px-8 md:py-6 md:px-12 bg-brand-orange text-white font-bold rounded-full shadow-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-glow uppercase tracking-wide text-base md:text-xl whitespace-nowrap">
                        Quero ser um investidor
                    </a>
                </div>
            </div>
        </section>
    `;

    const TestimonialSection = () => `
        <section class="py-24 bg-brand-dark relative overflow-hidden">
            <div class="container mx-auto px-6 max-w-7xl relative z-10">
                <h2 class="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-16 reveal-up">${DATA.testimonials.headline}</h2>
                
                <div class="testimonial-slider relative w-full h-[400px] md:h-[320px] overflow-hidden reveal-up">
                    <div class="testimonial-track absolute top-0 left-0 h-full flex transition-transform duration-500 ease-in-out" id="track">
                        ${DATA.testimonials.items.map(item => `
                            <div class="testimonial-card w-[calc(100vw-48px)] md:w-[400px] flex-shrink-0 px-2 md:px-4">
                                <div class="bg-brand-gray/80 backdrop-blur-sm border border-white/5 p-8 rounded-2xl h-full flex flex-col justify-between hover:border-brand-orange/30 transition-colors">
                                    <div class="mb-6">
                                        <div class="flex text-brand-orange mb-3">★★★★★</div>
                                        <p class="text-gray-300 italic text-lg leading-relaxed">"${item.text}"</p>
                                    </div>
                                    <div class="flex items-center gap-4">
                                        <div class="w-12 h-12 rounded-full bg-gradient-to-br from-brand-orange to-orange-700 flex items-center justify-center text-white font-bold text-sm shadow-lg border border-white/10 flex-shrink-0">
                                            ${item.initials}
                                        </div>
                                        <div class="flex-1 min-w-0">
                                            <p class="text-white font-semibold truncate">${item.name}</p>
                                            <p class="text-xs text-gray-500 uppercase tracking-widest">Aluno Verificado</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Navigation Buttons -->
                <div class="flex justify-center gap-4 mt-8">
                    <button id="prevBtn" class="w-12 h-12 rounded-full bg-brand-gray border border-white/10 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 group shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:scale-110 transition-transform"><polyline points="15 18 9 12 15 6"></polyline></svg>
                    </button>
                    <button id="nextBtn" class="w-12 h-12 rounded-full bg-brand-gray border border-white/10 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 group shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:scale-110 transition-transform"><polyline points="9 18 15 12 9 6"></polyline></svg>
                </div>

                <div class="text-center mt-12 reveal-up">
                    <a href="#oferta" class="inline-block py-5 px-10 md:py-6 md:px-12 bg-brand-orange text-white font-bold rounded-full shadow-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-glow uppercase tracking-wide text-base md:text-xl whitespace-nowrap">
                        QUERO FAZER PARTE
                    </a>
                </div>
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

                <div class="flex flex-wrap justify-center gap-4 md:gap-6">
                    ${DATA.modules.items.map((m, i) => `
                        <div class="w-[calc(50%-8px)] sm:w-[calc(50%-12px)] lg:w-[calc(20%-20px)] relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-glow transition-all duration-500 reveal-up" style="transition-delay: ${i * 100}ms">
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
                
                <!-- Offer Block (Moved Top) -->
                <div class="relative mb-24">
                    <div class="absolute top-1/2 left-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-orange/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
                    <div id="oferta" class="container mx-auto px-6 max-w-lg relative z-10">
                        <div class="bg-brand-gray/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 reveal-up">
                            <div class="bg-gradient-to-r from-brand-orange to-orange-600 p-6 text-center">
                                <h3 class="text-white font-bold text-xl tracking-wider">${DATA.offer.headline}</h3>
                            </div>
                            
                            <!-- Mockup Image Inside Offer -->
                            <div class="px-10 pt-8 pb-0 flex justify-center">
                                <img src="assets/course-mockup.png" alt="Curso Investidor em 1 Semana" class="w-full max-w-[350px] drop-shadow-xl hover:scale-105 transition-transform duration-500">
                            </div>

                            <div class="p-10 text-center">
                                <p class="text-gray-400 text-lg mb-2">De <span class="line-through">${DATA.offer.oldPrice}</span> por apenas:</p>
                                <div class="flex items-center justify-center gap-2 md:gap-3 mb-2 text-white">
                                    <div class="flex flex-col items-end text-right leading-tight">
                                        <span class="text-lg md:text-xl font-semibold">12x</span>
                                        <span class="text-sm md:text-base text-gray-400">de</span>
                                    </div>
                                    <span class="text-5xl md:text-6xl font-black tracking-tighter text-brand-orange">R$ 15,20</span>
                                </div>
                                <p class="text-white font-bold text-lg mb-8">${DATA.offer.cashPrice}</p>
                                <ul class="text-left space-y-4 mb-10 text-gray-300">
                                    ${DATA.offer.benefits.map(b => `
                                        <li class="flex items-start gap-3"><span class="text-brand-orange font-bold mt-1">✓</span> ${b}</li>
                                    `).join('')}
                                </ul>
                                <a href="${DATA.offer.checkoutUrl}" target="_blank" rel="noopener noreferrer" class="block w-full py-4 md:py-6 px-4 md:px-8 bg-brand-orange text-white font-bold rounded-full shadow-lg hover:bg-orange-600 transition-colors uppercase tracking-wide text-sm md:text-xl mb-4 shadow-glow text-center">${DATA.offer.cta}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 class="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-16 reveal-up">${DATA.differentials.headline}</h2>
                <div class="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl reveal-up">
                    <table class="w-full text-left border-collapse min-w-[600px] md:min-w-0">
                        <thead>
                            <tr class="bg-brand-gray text-white">
                                <th class="p-3 md:p-6 font-bold border-b border-white/10 text-sm md:text-base">Critério</th>
                                <th class="p-3 md:p-6 font-bold border-b border-brand-orange bg-brand-orange/10 text-brand-orange text-center text-sm md:text-lg">Investidor em 1 Semana</th>
                                <th class="p-3 md:p-6 font-bold border-b border-white/10 text-gray-400 text-center text-sm md:text-base">Outros Cursos</th>
                                <th class="p-3 md:p-6 font-bold border-b border-white/10 text-gray-400 text-center text-sm md:text-base">Youtube "De Graça"</th>
                            </tr>
                        </thead>
                        <tbody class="bg-brand-dark">
                            ${DATA.differentials.rows.map(row => `
                                <tr class="border-b border-white/5">
                                    <td class="p-3 md:p-6 text-white font-medium text-sm md:text-base">${row.criteria}</td>
                                    <td class="p-3 md:p-6 text-center bg-brand-orange/5 border-x border-brand-orange/20 text-white text-sm md:text-base"><span class="text-brand-orange font-bold">✓</span> ${row.course}</td>
                                    <td class="p-3 md:p-6 text-center text-gray-500 text-sm md:text-base"><span class="text-red-500 font-bold">✗</span> ${row.others}</td>
                                    <td class="p-3 md:p-6 text-center text-gray-500 text-sm md:text-base"><span class="text-red-500 font-bold">✗</span> ${row.youtube}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>

                <div class="text-center mt-12 reveal-up">
                    <a href="#oferta" class="inline-block py-5 px-10 md:py-6 md:px-12 bg-brand-orange text-white font-bold rounded-full shadow-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-glow uppercase tracking-wide text-base md:text-xl whitespace-nowrap">
                        Quero começar agora
                    </a>
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

                <div class="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-8 text-sm text-gray-400">
                    <a href="#" class="hover:text-brand-orange transition-colors">Termos de Uso</a>
                    <a href="#" class="hover:text-brand-orange transition-colors">Política de Privacidade</a>
                    <a href="#" class="hover:text-brand-orange transition-colors">Contato</a>
                </div>

                <!-- Disclaimer Section -->
                <div class="max-w-5xl mx-auto mb-6 text-left border-t border-white/5 pt-6">
                    <p class="text-gray-700 text-[10px] leading-tight mb-2"><span class="font-medium">Aviso Legal e Compliance</span> — As informações disponibilizadas neste site têm caráter exclusivamente educacional e informativo, não constituindo, em hipótese alguma, oferta, recomendação, indicação ou solicitação de compra ou venda de valores mobiliários, ativos financeiros, produtos ou serviços de investimento, nos termos da regulamentação da Comissão de Valores Mobiliários (CVM). Os conteúdos apresentados não devem ser interpretados como consultoria, análise ou recomendação personalizada, nos termos da Resolução CVM nº 19/2021 e demais normas aplicáveis. Decisões de investimento devem ser tomadas com base na avaliação do perfil do investidor, objetivos financeiros, horizonte de investimento e tolerância a risco, preferencialmente com o apoio de um profissional habilitado.</p>
                    <p class="text-gray-700 text-[10px] leading-tight"><span class="font-medium">Perfil do Investidor (Suitability)</span> — Os investimentos e estratégias eventualmente mencionados neste site podem não ser adequados a todos os perfis de investidores. Antes de investir, é fundamental que o investidor realize a avaliação de seu Perfil de Investidor (Suitability), conforme exigido pela regulamentação da CVM e pelas regras da ANBIMA. A definição do perfil de investidor é condição essencial para a adequação de qualquer produto ou estratégia de investimento. Rentabilidade passada não representa garantia de rentabilidade futura. Investimentos envolvem riscos e podem resultar em perdas patrimoniais.</p>
                </div>

                <p class="text-gray-600 text-sm">&copy; 2025 Investidor em 1 Semana. Todos os direitos reservados.</p>
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
            <div class="overflow-hidden w-full max-w-[100vw]">
                ${HeroSection()}
                ${ContrastSection()}
                ${TestimonialSection()}
                ${PainSection()}
                ${ModulesSection()}
                ${DifferentialsSection()}

                ${FooterSection()}
            </div>
        `;

        initInteractions();
    };

    // =========================================================================
    // 4. INTERACTION LAYER (LISTENERS & ANIMATIONS)
    // =========================================================================

    const initInteractions = () => {

        // Testimonial Carousel Logic
        // Testimonial Carousel Logic (Infinite Loop with Clones)
        const track = document.getElementById('track');
        if (track) {
            const originalCards = Array.from(track.children);
            const totalOriginal = originalCards.length;
            const isMobile = window.innerWidth < 768;
            const clonesCount = isMobile ? 1 : 3; // 1 on mobile, 3 on desktop

            // Create Clones
            const firstClones = originalCards.slice(0, clonesCount).map(c => c.cloneNode(true));
            const lastClones = originalCards.slice(-clonesCount).map(c => c.cloneNode(true));

            // Inject Clones
            firstClones.forEach(c => track.appendChild(c));
            lastClones.reverse().forEach(c => track.insertBefore(c, track.firstChild));

            let currentIndex = clonesCount; // Start at first real item
            let isTransitioning = false;

            const updateTrack = (animate = true) => {
                const cardWidth = originalCards[0].offsetWidth;
                track.style.transition = animate ? 'transform 0.5s ease-in-out' : 'none';
                track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
            };

            // Initial Position
            setTimeout(() => updateTrack(false), 50);

            const handleNext = () => {
                if (isTransitioning) return;
                isTransitioning = true;
                currentIndex++;
                updateTrack(true);

                setTimeout(() => {
                    if (currentIndex >= totalOriginal + clonesCount) {
                        currentIndex = clonesCount; // Jump to real start
                        updateTrack(false);
                    }
                    isTransitioning = false;
                }, 500);
            };

            const handlePrev = () => {
                if (isTransitioning) return;
                isTransitioning = true;
                currentIndex--;
                updateTrack(true);

                setTimeout(() => {
                    if (currentIndex < clonesCount) {
                        currentIndex = currentIndex + totalOriginal; // Jump to real end
                        updateTrack(false);
                    }
                    isTransitioning = false;
                }, 500);
            };

            document.getElementById('nextBtn')?.addEventListener('click', handleNext);
            document.getElementById('prevBtn')?.addEventListener('click', handlePrev);
            window.addEventListener('resize', () => updateTrack(false));
        }


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
