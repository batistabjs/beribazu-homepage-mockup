/* ============================================
   GRUPO BERIBAZU — JavaScript Principal
   ============================================ */

"use strict";

// ============================================
// DADOS MOCK (simulando API/backend)
// ============================================

const DADOS_CENTROS = [
  {
    id: "ct-001",
    nome: "Centro Cultural Beribazu — Brasília",
    mestre: "Mestre Bill",
    graduacao: "Mestre",
    bio: "O Centro Cultural Beribazu de Brasília foi fundado pelo Mestre Bill, discípulo direto do Mestre Falcão. Desde 1985 formando capoeiristas e cidadãos na capital federal.",
    foto: "https://placehold.co/800x600/1B3A2D/C8962A?text=Mestre+Bill",
    pais: "Brasil",
    estado: "Distrito Federal",
    cidade: "Brasília",
    endereco: "SGAS 915, Lote 69 — Asa Sul",
    telefone: "+55 61 99999-0001",
    email: "ccb.brasilia@beribazu.com.br",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/556199990001",
    youtube: "https://youtube.com",
    horarios: "Seg/Qua/Sex: 18h–20h | Sáb: 9h–11h",
    alunos: [
      { id: "a001", apelido: "Falcão Mirim", nome: "Carlos Andrade", corda: "azul", foto: "https://placehold.co/300x300/1565C0/FFFFFF?text=CM" },
      { id: "a002", apelido: "Relâmpago", nome: "Fernanda Lima", corda: "verde", foto: "https://placehold.co/300x300/2E7D32/FFFFFF?text=RL" },
      { id: "a003", apelido: "Maré", nome: "João Pedro Silva", corda: "azul-marrom", foto: "https://placehold.co/300x300/1565C0/FFFFFF?text=MR" },
      { id: "a004", apelido: "Ventania", nome: "Ana Paula Costa", corda: "amarela", foto: "https://placehold.co/300x300/F9A825/1a1a1a?text=VT" },
      { id: "a005", apelido: "Gavião Real", nome: "Ricardo Mendes", corda: "amarela-roxa", foto: "https://placehold.co/300x300/6A1B9A/FFFFFF?text=GR" },
      { id: "a006", apelido: "Trovão", nome: "Lucas Freitas", corda: "verde-amarela", foto: "https://placehold.co/300x300/2E7D32/FFFFFF?text=TR" },
      { id: "a007", apelido: "Corisco", nome: "Beatriz Nunes", corda: "marrom", foto: "https://placehold.co/300x300/5D4037/FFFFFF?text=CR" },
      { id: "a008", apelido: "Sereno", nome: "Tiago Rodrigues", corda: "marrom-verde", foto: "https://placehold.co/300x300/5D4037/FFFFFF?text=SR" },
    ]
  },
  {
    id: "ct-002",
    nome: "Beribazu Florianópolis — Núcleo Mestre Falcão",
    mestre: "Mestre Falcão",
    graduacao: "Mestre Dignificador",
    bio: "Fundado por Mestre Falcão após sua chegada à Ilha da Magia em 1996. Referência no Sul do país, integrando capoeira à pesquisa acadêmica.",
    foto: "https://placehold.co/800x600/2D5E45/F5D060?text=Mestre+Falcão",
    pais: "Brasil",
    estado: "Santa Catarina",
    cidade: "Florianópolis",
    endereco: "Rua Lauro Linhares, 589 — Trindade",
    telefone: "+55 48 99999-0002",
    email: "nucleo.fpolis@beribazu.com.br",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/554899990002",
    youtube: null,
    horarios: "Ter/Qui: 19h–21h | Sáb: 10h–12h",
    alunos: [
      { id: "a009", apelido: "Surfista", nome: "Paulo Henrique", corda: "verde", foto: "https://placehold.co/300x300/2E7D32/FFFFFF?text=SF" },
      { id: "a010", apelido: "Catarinense", nome: "Márcia Oliveira", corda: "azul", foto: "https://placehold.co/300x300/1565C0/FFFFFF?text=CT" },
      { id: "a011", apelido: "Baleia", nome: "Renato Camargo", corda: "azul-marrom", foto: "https://placehold.co/300x300/1565C0/FFFFFF?text=BL" },
      { id: "a012", apelido: "Ilha", nome: "Sabrina Motta", corda: "marrom", foto: "https://placehold.co/300x300/5D4037/FFFFFF?text=IH" },
      { id: "a013", apelido: "Ondas", nome: "Guilherme Pereira", corda: "amarela", foto: "https://placehold.co/300x300/F9A825/1a1a1a?text=OD" },
      { id: "a014", apelido: "Vento Sul", nome: "Camila Ramos", corda: "verde-amarela", foto: "https://placehold.co/300x300/2E7D32/FFFFFF?text=VS" },
    ]
  },
  {
    id: "ct-003",
    nome: "Beribazu São Paulo — Zona Sul",
    mestre: "Contra-Mestre Leopardo",
    graduacao: "Contra-Mestre",
    bio: "Núcleo da zona sul paulistana com forte trabalho social em comunidades periféricas. Projeto Gingando na Escola presente em 5 escolas municipais.",
    foto: "https://placehold.co/800x600/8B3A2A/F5EDD8?text=Ctr-Mestre+Leopardo",
    pais: "Brasil",
    estado: "São Paulo",
    cidade: "São Paulo",
    endereco: "Av. Interlagos, 1900 — Interlagos",
    telefone: "+55 11 99999-0003",
    email: "sp.zonasul@beribazu.com.br",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/551199990003",
    youtube: "https://youtube.com",
    horarios: "Seg/Qua: 18h30–20h30 | Dom: 9h–11h",
    alunos: [
      { id: "a015", apelido: "Sampa", nome: "Diego Santos", corda: "azul", foto: "https://placehold.co/300x300/1565C0/FFFFFF?text=SP" },
      { id: "a016", apelido: "Metrô", nome: "Lara Souza", corda: "verde", foto: "https://placehold.co/300x300/2E7D32/FFFFFF?text=MT" },
      { id: "a017", apelido: "Fulô", nome: "Rodrigo Alves", corda: "marrom-verde", foto: "https://placehold.co/300x300/5D4037/FFFFFF?text=FL" },
      { id: "a018", apelido: "Chuva Fina", nome: "Natália Carvalho", corda: "amarela", foto: "https://placehold.co/300x300/F9A825/1a1a1a?text=CF" },
    ]
  },
  {
    id: "ct-004",
    nome: "Beribazu Rio de Janeiro — Tijuca",
    mestre: "Mestre Nanã",
    graduacao: "Mestre",
    bio: "No coração do Rio, o núcleo Tijuca mantém viva a tradição de Mestre Zulu com rodas abertas toda última sexta-feira do mês.",
    foto: "https://placehold.co/800x600/1B3A2D/E8B84B?text=Mestre+Nanã",
    pais: "Brasil",
    estado: "Rio de Janeiro",
    cidade: "Rio de Janeiro",
    endereco: "Rua Conde de Bonfim, 240 — Tijuca",
    telefone: "+55 21 99999-0004",
    email: "rj.tijuca@beribazu.com.br",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/552199990004",
    youtube: null,
    horarios: "Ter/Qui/Sex: 18h–20h",
    alunos: [
      { id: "a019", apelido: "Carioca", nome: "Alexandre Pinto", corda: "vermelha", foto: "https://placehold.co/300x300/B71C1C/FFFFFF?text=CC" },
      { id: "a020", apelido: "Sugarloaf", nome: "Priscila Gomes", corda: "amarela-roxa", foto: "https://placehold.co/300x300/6A1B9A/FFFFFF?text=SL" },
      { id: "a021", apelido: "Areia", nome: "Eduardo Lima", corda: "azul", foto: "https://placehold.co/300x300/1565C0/FFFFFF?text=AR" },
      { id: "a022", apelido: "Sol Nascente", nome: "Viviane Torres", corda: "marrom", foto: "https://placehold.co/300x300/5D4037/FFFFFF?text=SN" },
      { id: "a023", apelido: "Maracanã", nome: "Bruno Ferreira", corda: "verde-amarela", foto: "https://placehold.co/300x300/2E7D32/FFFFFF?text=MR" },
    ]
  },
  {
    id: "ct-005",
    nome: "Beribazu Porto Alegre — Centro",
    mestre: "Contra-Mestre Gaúcho",
    graduacao: "Contra-Mestre",
    bio: "Referência na capoeira gaúcha, com turmas para todas as idades e projeto especial para a terceira idade.",
    foto: "https://placehold.co/800x600/3D7A5A/F5EDD8?text=Ctr-Mestre+Gaúcho",
    pais: "Brasil",
    estado: "Rio Grande do Sul",
    cidade: "Porto Alegre",
    endereco: "Rua dos Andradas, 560 — Centro Histórico",
    telefone: "+55 51 99999-0005",
    email: "poa.centro@beribazu.com.br",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/555199990005",
    youtube: "https://youtube.com",
    horarios: "Seg/Qua/Sex: 19h–21h | Sáb: 10h–12h",
    alunos: [
      { id: "a024", apelido: "Pampa", nome: "Gustavo Silva", corda: "verde", foto: "https://placehold.co/300x300/2E7D32/FFFFFF?text=PM" },
      { id: "a025", apelido: "Chimarrão", nome: "Juliana Cardoso", corda: "azul-marrom", foto: "https://placehold.co/300x300/1565C0/FFFFFF?text=CH" },
      { id: "a026", apelido: "Minuano", nome: "Thiago Barros", corda: "azul", foto: "https://placehold.co/300x300/1565C0/FFFFFF?text=MN" },
    ]
  },
  {
    id: "ct-006",
    nome: "Beribazu Salvador — Pelourinho",
    mestre: "Mestre Axé",
    graduacao: "Mestre",
    bio: "No berço da capoeira, o núcleo Salvador honra as raízes com aulas no Pelourinho e apresentações culturais para turistas e locais.",
    foto: "https://placehold.co/800x600/C8962A/1B3A2D?text=Mestre+Axé",
    pais: "Brasil",
    estado: "Bahia",
    cidade: "Salvador",
    endereco: "Largo do Pelourinho, 08 — Centro Histórico",
    telefone: "+55 71 99999-0006",
    email: "ssa.pelourinho@beribazu.com.br",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/557199990006",
    youtube: "https://youtube.com",
    horarios: "Seg a Sex: 10h–12h | 17h–19h",
    alunos: [
      { id: "a027", apelido: "Axé", nome: "Willian Barbosa", corda: "vermelha", foto: "https://placehold.co/300x300/B71C1C/FFFFFF?text=AX" },
      { id: "a028", apelido: "Dendê", nome: "Yasmin Souza", corda: "amarela-roxa", foto: "https://placehold.co/300x300/6A1B9A/FFFFFF?text=DD" },
      { id: "a029", apelido: "Baiana", nome: "Cleide Nascimento", corda: "marrom", foto: "https://placehold.co/300x300/5D4037/FFFFFF?text=BA" },
      { id: "a030", apelido: "Vatapá", nome: "Max Oliveira", corda: "azul-marrom", foto: "https://placehold.co/300x300/1565C0/FFFFFF?text=VT" },
      { id: "a031", apelido: "Berimbau de Ouro", nome: "Letícia Melo", corda: "amarela", foto: "https://placehold.co/300x300/F9A825/1a1a1a?text=BO" },
      { id: "a032", apelido: "Caruru", nome: "Anderson Lima", corda: "azul", foto: "https://placehold.co/300x300/1565C0/FFFFFF?text=CR" },
      { id: "a033", apelido: "Samba de Roda", nome: "Patrícia Couto", corda: "verde-amarela", foto: "https://placehold.co/300x300/2E7D32/FFFFFF?text=SR" },
    ]
  }
];

const EVENTOS = [
  {
    id: "ev-001",
    titulo: "Batizado e Troca de Cordas 2025 — Beribazu",
    descricao: "O maior evento do Grupo Beribazu. Apresentações, batizado de novos alunos e troca de cordas com a presença de mestres de todo o Brasil.",
    dia: "12", mes: "Jul", ano: "2025", cidade: "Brasília – DF",
    tipo: "Batizado",
    foto: "https://placehold.co/600x400/0D2B5E/FFFFFF?text=Batizado+2025"
  },
  {
    id: "ev-002",
    titulo: "Encontro Nacional de Mestres",
    descricao: "Roda de mestres, palestras e workshops com os maiores nomes do Grupo Beribazu. Evento aberto ao público.",
    dia: "28", mes: "Ago", ano: "2025", cidade: "São Paulo – SP",
    tipo: "Encontro",
    foto: "https://placehold.co/600x400/B71C1C/FFFFFF?text=Encontro+Mestres"
  },
  {
    id: "ev-003",
    titulo: "Seminário Arte-Luta 2025",
    descricao: "Seminário de aprofundamento técnico: angola, regional e contemporâneo. Vagas limitadas.",
    dia: "15", mes: "Set", ano: "2025", cidade: "Rio de Janeiro – RJ",
    tipo: "Seminário",
    foto: "https://placehold.co/600x400/1565C0/FFFFFF?text=Seminário+Arte-Luta"
  },
  {
    id: "ev-004",
    titulo: "Roda Aberta — Pelourinho",
    descricao: "Roda aberta ao público no coração histórico de Salvador. Toda última sexta-feira do mês.",
    dia: "26", mes: "Set", ano: "2025", cidade: "Salvador – BA",
    tipo: "Roda Aberta",
    foto: "https://placehold.co/600x400/0D2B5E/FFFFFF?text=Roda+Aberta"
  },
  {
    id: "ev-005",
    titulo: "Copa Beribazu de Capoeira",
    descricao: "Competição amistosa entre os núcleos do grupo, com categorias para todas as idades e graduações.",
    dia: "18", mes: "Out", ano: "2025", cidade: "Florianópolis – SC",
    tipo: "Competição",
    foto: "https://placehold.co/600x400/B71C1C/FFFFFF?text=Copa+Beribazu"
  },
  {
    id: "ev-006",
    titulo: "Intercâmbio Internacional — Lisboa",
    descricao: "Intercâmbio cultural com o núcleo de Lisboa, Portugal. Troca de experiências e rodas internacionais.",
    dia: "08", mes: "Nov", ano: "2025", cidade: "Lisboa – Portugal",
    tipo: "Intercâmbio",
    foto: "https://placehold.co/600x400/1565C0/FFFFFF?text=Lisboa+2025"
  },
  {
    id: "ev-007",
    titulo: "Confraternização de Fim de Ano",
    descricao: "Encerramento das atividades anuais com roda geral, cerimônia e celebração entre todos os núcleos.",
    dia: "13", mes: "Dez", ano: "2025", cidade: "Brasília – DF",
    tipo: "Confraternização",
    foto: "https://placehold.co/600x400/0D2B5E/FFFFFF?text=Confraternização+2025"
  },
  {
    id: "ev-008",
    titulo: "Workshop de Musicalidade",
    descricao: "Oficina intensiva de berimbau, atabaque, pandeiro e canto. Aberto para alunos de todos os níveis.",
    dia: "05", mes: "Out", ano: "2025", cidade: "Porto Alegre – RS",
    tipo: "Workshop",
    foto: "https://placehold.co/600x400/B71C1C/FFFFFF?text=Workshop+Musical"
  }
];

// Dados para o select de estados/cidades por país
const GEO_DATA = {
  "Brasil": {
    "Distrito Federal": ["Brasília", "Ceilândia", "Taguatinga"],
    "São Paulo": ["São Paulo", "Campinas", "Santos"],
    "Rio de Janeiro": ["Rio de Janeiro", "Niterói", "Petrópolis"],
    "Santa Catarina": ["Florianópolis", "Joinville", "Blumenau"],
    "Bahia": ["Salvador", "Feira de Santana", "Ilhéus"],
    "Rio Grande do Sul": ["Porto Alegre", "Caxias do Sul", "Pelotas"]
  },
  "Portugal": {
    "Lisboa": ["Lisboa", "Sintra", "Cascais"],
    "Porto": ["Porto", "Vila Nova de Gaia"]
  },
  "Estados Unidos": {
    "California": ["Los Angeles", "San Francisco", "San Diego"],
    "New York": ["Nova Iorque", "Buffalo"]
  }
};

// ============================================
// UTILITÁRIOS
// ============================================

function $(sel, ctx = document) { return ctx.querySelector(sel); }
function $$(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

function slugify(str) {
  return str.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').trim('-');
}

function salvarNaURL(params) {
  const url = new URL(window.location);
  Object.entries(params).forEach(([k, v]) => {
    if (v) url.searchParams.set(k, v);
    else url.searchParams.delete(k);
  });
  history.pushState({}, '', url);
}

function lerURLParam(param) {
  return new URL(window.location).searchParams.get(param);
}

// ============================================
// MÓDULO: HEADER / NAVEGAÇÃO
// ============================================

const ModuloHeader = {
  init() {
    this.header     = $('.site-header');
    this.hamburger  = $('.hamburger');
    this.navPrinc   = $('.nav-principal');

    if (this.hamburger) {
      this.hamburger.addEventListener('click', () => this.toggleMenu());
    }

    window.addEventListener('scroll', () => this.aoScroll(), { passive: true });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
      if (this.navPrinc && this.navPrinc.classList.contains('aberto')) {
        if (!this.navPrinc.contains(e.target) && !this.hamburger.contains(e.target)) {
          this.fecharMenu();
        }
      }
    });
  },

  toggleMenu() {
    this.hamburger.classList.toggle('ativo');
    this.navPrinc.classList.toggle('aberto');
  },

  fecharMenu() {
    this.hamburger.classList.remove('ativo');
    this.navPrinc.classList.remove('aberto');
  },

  aoScroll() {
    if (window.scrollY > 40) {
      this.header.classList.add('scrolled');
    } else {
      this.header.classList.remove('scrolled');
    }
  }
};

// ============================================
// MÓDULO: CAROUSEL
// ============================================

const ModuloCarousel = {
  indiceAtual: 0,
  total: 0,
  intervalo: null,
  tocando: true,

  init() {
    this.track  = $('.carousel-track');
    this.slides = $$('.carousel-slide');
    this.dots   = $$('.carousel-dot');
    this.btnPrev = $('.carousel-btn.prev');
    this.btnNext = $('.carousel-btn.next');

    if (!this.track || this.slides.length === 0) return;

    this.total = this.slides.length;
    this.irPara(0);
    this.iniciarAutomatico();

    if (this.btnPrev) this.btnPrev.addEventListener('click', () => this.anterior());
    if (this.btnNext) this.btnNext.addEventListener('click', () => this.proximo());

    this.dots.forEach((dot, i) => {
      dot.addEventListener('click', () => this.irPara(i));
    });

    // Pausar ao hover
    this.track.addEventListener('mouseenter', () => this.pausar());
    this.track.addEventListener('mouseleave', () => this.iniciarAutomatico());

    // Touch/Swipe
    this.configurarSwipe();
  },

  irPara(index) {
    this.slides[this.indiceAtual].classList.remove('ativo');
    if (this.dots[this.indiceAtual]) this.dots[this.indiceAtual].classList.remove('ativo');

    this.indiceAtual = (index + this.total) % this.total;

    this.track.style.transform = `translateX(-${this.indiceAtual * 100}%)`;
    this.slides[this.indiceAtual].classList.add('ativo');
    if (this.dots[this.indiceAtual]) this.dots[this.indiceAtual].classList.add('ativo');
  },

  proximo() { this.irPara(this.indiceAtual + 1); },
  anterior() { this.irPara(this.indiceAtual - 1); },

  iniciarAutomatico() {
    this.pausar();
    this.intervalo = setInterval(() => this.proximo(), 5500);
  },

  pausar() {
    if (this.intervalo) clearInterval(this.intervalo);
  },

  configurarSwipe() {
    let startX = 0;
    this.track.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    }, { passive: true });

    this.track.addEventListener('touchend', (e) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? this.proximo() : this.anterior();
      }
    });
  }
};

// ============================================
// MÓDULO: FORMULÁRIO DE BUSCA GEOGRÁFICA
// ============================================

const ModuloFormBusca = {
  init() {
    this.formEl    = $('#form-busca');
    this.selPais   = $('#select-pais');
    this.selEstado = $('#select-estado');
    this.selCidade = $('#select-cidade');

    if (!this.formEl) return;

    this.selPais.addEventListener('change', () => this.aoMudarPais());
    this.selEstado.addEventListener('change', () => this.aoMudarEstado());
    this.formEl.addEventListener('submit', (e) => {
      e.preventDefault();
      this.buscar();
    });
  },

  aoMudarPais() {
    const pais = this.selPais.value;
    this.selEstado.innerHTML = '<option value="">Selecione o estado</option>';
    this.selCidade.innerHTML = '<option value="">Selecione a cidade</option>';
    this.selEstado.disabled = !pais;
    this.selCidade.disabled = true;

    if (pais && GEO_DATA[pais]) {
      Object.keys(GEO_DATA[pais]).forEach(estado => {
        const opt = document.createElement('option');
        opt.value = estado;
        opt.textContent = estado;
        this.selEstado.appendChild(opt);
      });
    }
  },

  aoMudarEstado() {
    const pais   = this.selPais.value;
    const estado = this.selEstado.value;
    this.selCidade.innerHTML = '<option value="">Selecione a cidade</option>';
    this.selCidade.disabled = !estado;

    if (pais && estado && GEO_DATA[pais] && GEO_DATA[pais][estado]) {
      GEO_DATA[pais][estado].forEach(cidade => {
        const opt = document.createElement('option');
        opt.value = cidade;
        opt.textContent = cidade;
        this.selCidade.appendChild(opt);
      });
    }
  },

  buscar() {
    const pais   = this.selPais.value;
    const estado = this.selEstado.value;
    const cidade = this.selCidade.value;

    const params = new URLSearchParams({ pais, estado, cidade });
    window.location.href = `pages/ct-search.html?${params.toString()}`;
  }
};

// ============================================
// MÓDULO: PÁGINA DE RESULTADOS
// ============================================

const ModuloResultados = {
  _centrosAtuais: [],

  init() {
    const container = $('#centros-grid');
    if (!container) return;

    const pais   = lerURLParam('pais')   || '';
    const estado = lerURLParam('estado') || '';
    const cidade = lerURLParam('cidade') || '';

    this.atualizarHeader(pais, estado, cidade);
    this.preencherFiltrosInline(pais, estado, cidade);

    this._centrosAtuais = this.filtrar(pais, estado, cidade);
    this.renderizarTotal(this._centrosAtuais.length);
    this.renderizarCentros(this._centrosAtuais, container);
    this.configurarOrdenacao(container);
    this.configurarFiltrosInline(container);

    ModuloAnimacoes.init();
  },

  preencherFiltrosInline(pais, estado, cidade) {
    const selPais   = $('#fi-pais');
    const selEstado = $('#fi-estado');
    const selCidade = $('#fi-cidade');
    if (!selPais) return;

    if (pais) {
      selPais.value = pais;
      selEstado.disabled = false;
      selEstado.innerHTML = '<option value="">Todos os estados</option>';
      if (GEO_DATA[pais]) {
        Object.keys(GEO_DATA[pais]).forEach(e => {
          const o = document.createElement('option');
          o.value = e; o.textContent = e;
          if (e === estado) o.selected = true;
          selEstado.appendChild(o);
        });
      }
    }
    if (estado) {
      selCidade.disabled = false;
      selCidade.innerHTML = '<option value="">Todas as cidades</option>';
      if (GEO_DATA[pais] && GEO_DATA[pais][estado]) {
        GEO_DATA[pais][estado].forEach(ci => {
          const o = document.createElement('option');
          o.value = ci; o.textContent = ci;
          if (ci === cidade) o.selected = true;
          selCidade.appendChild(o);
        });
      }
    }
  },

  configurarFiltrosInline(container) {
    const selPais   = $('#fi-pais');
    const selEstado = $('#fi-estado');
    const selCidade = $('#fi-cidade');
    const form      = $('#form-busca-inline');
    if (!selPais || !form) return;

    selPais.addEventListener('change', () => {
      const pais = selPais.value;
      selEstado.innerHTML = '<option value="">Todos os estados</option>';
      selEstado.disabled = !pais;
      selCidade.innerHTML = '<option value="">Todas as cidades</option>';
      selCidade.disabled = true;
      if (pais && GEO_DATA[pais]) {
        Object.keys(GEO_DATA[pais]).forEach(e => {
          const o = document.createElement('option'); o.value = e; o.textContent = e;
          selEstado.appendChild(o);
        });
      }
    });

    selEstado.addEventListener('change', () => {
      const pais = selPais.value; const estado = selEstado.value;
      selCidade.innerHTML = '<option value="">Todas as cidades</option>';
      selCidade.disabled = !estado;
      if (pais && estado && GEO_DATA[pais] && GEO_DATA[pais][estado]) {
        GEO_DATA[pais][estado].forEach(ci => {
          const o = document.createElement('option'); o.value = ci; o.textContent = ci;
          selCidade.appendChild(o);
        });
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const p = selPais.value; const es = selEstado.value; const ci = selCidade.value;
      this._centrosAtuais = this.filtrar(p, es, ci);
      this.renderizarTotal(this._centrosAtuais.length);
      this.renderizarCentros(this._centrosAtuais, container);
      this.atualizarHeader(p, es, ci);
      const params = new URLSearchParams({ pais: p, estado: es, cidade: ci });
      history.replaceState({}, '', `ct-search.html?${params}`);
      ModuloAnimacoes.init();
    });
  },

  filtrar(pais, estado, cidade) {
    return DADOS_CENTROS.filter(c => {
      const matchPais   = !pais   || c.pais   === pais;
      const matchEstado = !estado || c.estado === estado;
      const matchCidade = !cidade || c.cidade === cidade;
      return matchPais && matchEstado && matchCidade;
    });
  },

  atualizarHeader(pais, estado, cidade) {
    const el = $('#resultados-localizacao');
    if (!el) return;
    const partes = [pais, estado, cidade].filter(Boolean);
    el.textContent = partes.length > 0 ? partes.join(' › ') : 'Todo o Brasil';

    const totalEl = $('#resultados-subtitulo');
    if (totalEl) totalEl.textContent = partes.length > 0
      ? `Centros de treinamento em ${partes.join(', ')}`
      : 'Todos os centros de treinamento';
  },

  renderizarTotal(total) {
    const el = $('#total-resultados');
    if (el) el.innerHTML = `<strong>${total}</strong> centro${total !== 1 ? 's' : ''} encontrado${total !== 1 ? 's' : ''}`;
  },

  renderizarCentros(centros, container) {
    if (centros.length === 0) {
      container.innerHTML = `
        <li style="text-align:center; padding: 4rem; list-style:none;">
          <div style="font-size:3rem;margin-bottom:1rem;">🔍</div>
          <p style="font-size:1.1rem;color:var(--cinza-medio);">Nenhum centro encontrado para a região selecionada.</p>
          <a href="../index.html#mundo" class="btn btn-primario" style="margin-top:1.5rem;display:inline-flex;">Voltar e buscar novamente</a>
        </li>`;
      return;
    }

    container.innerHTML = centros.map((c, i) => `
      <li class="centro-lista-item animacao-entrada delay-${(i % 4) + 1}">
        <section class="centro-lista-corpo">
          <a href="ct.html?id=${c.id}" class="centro-lista-link" aria-label="Ver ${c.nome}">
            <div class="centro-lista-foto">
              <img src="${c.foto}" alt="Foto de ${c.mestre}" loading="lazy">
            </div>
            <div class="centro-lista-info">
              <header class="centro-lista-cabecalho">
                <h3 class="centro-lista-nome">${c.nome}</h3>
                <span class="card-centro-badge">${c.graduacao}</span>
              </header>
              <p class="card-centro-mestre">👨‍🏫 ${c.mestre}</p>
              <div class="card-centro-info">
                <div class="card-info-linha"><span>📍</span><span>${c.cidade}, ${c.estado}, ${c.pais}</span></div>
                <div class="card-info-linha"><span>🏠</span><span>${c.endereco}</span></div>
                <div class="card-info-linha"><span>⏰</span><span>${c.horarios}</span></div>
                <div class="card-info-linha"><span>📞</span><span>${c.telefone}</span></div>
              </div>
            </div>
          </a>
          <footer class="centro-lista-rodape">
            <div class="card-centro-redes">
              ${c.instagram ? `<a href="${c.instagram}" class="rede-social-btn instagram" onclick="event.stopPropagation()" target="_blank" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>` : ''}
              ${c.facebook  ? `<a href="${c.facebook}"  class="rede-social-btn facebook"  onclick="event.stopPropagation()" target="_blank" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>` : ''}
              ${c.whatsapp  ? `<a href="${c.whatsapp}"  class="rede-social-btn whatsapp"  onclick="event.stopPropagation()" target="_blank" aria-label="WhatsApp"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM11.998 2.003C6.479 2.003 2 6.481 2 12c0 1.747.454 3.447 1.303 4.941L2 22l5.202-1.269A9.933 9.933 0 0 0 11.998 22C17.517 22 22 17.522 22 12s-4.483-9.997-10.002-9.997z"/></svg></a>` : ''}
            </div>
            <a href="ct.html?id=${c.id}" class="card-centro-ver">Ver centro →</a>
          </footer>
        </section>
      </li>
    `).join('');
  },

  configurarOrdenacao(container) {
    const sel = $('#ordenar-select');
    if (!sel) return;
    sel.addEventListener('change', () => {
      let ordenados = [...this._centrosAtuais];
      if (sel.value === 'nome')    ordenados.sort((a, b) => a.nome.localeCompare(b.nome));
      if (sel.value === 'cidade')  ordenados.sort((a, b) => a.cidade.localeCompare(b.cidade));
      if (sel.value === 'mestre')  ordenados.sort((a, b) => a.mestre.localeCompare(b.mestre));
      this.renderizarCentros(ordenados, container);
      ModuloAnimacoes.init();
    });
  }
};

// ============================================
// MÓDULO: PÁGINA DO CENTRO
// ============================================

const ModuloCentro = {
  init() {
    const container = $('#pagina-centro-conteudo');
    if (!container) return;

    const id = lerURLParam('id');
    const centro = DADOS_CENTROS.find(c => c.id === id);

    if (!centro) {
      container.innerHTML = '<p style="text-align:center; padding: 4rem;">Centro não encontrado. <a href="../pages/ct-search.html">Voltar aos resultados</a></p>';
      return;
    }

    document.title = `${centro.nome} — Grupo Beribazu`;
    this.renderizarHero(centro);
    this.renderizarInfo(centro);
    this.renderizarGaleria(centro.alunos);
    ModuloAnimacoes.init();
  },

  renderizarHero(c) {
    const el = $('#centro-hero');
    if (!el) return;
    el.innerHTML = `
      <div class="centro-hero-inner">
        <img src="${c.foto}" alt="Foto de ${c.mestre}" class="centro-foto-mestre">
        <div class="centro-hero-info">
          <div class="breadcrumb" style="margin-bottom: 1rem; justify-content: flex-start;">
            <a href="../index.html">Home</a>
            <span>›</span>
            <a href="ct-search.html">Centros</a>
            <span>›</span>
            <span>${c.cidade}</span>
          </div>
          <h1>${c.nome}</h1>
          <p class="mestre-nome">👨‍🏫 ${c.mestre} — ${c.graduacao}</p>
          <div class="centro-tags">
            <span class="tag">📍 ${c.cidade}, ${c.estado}</span>
            <span class="tag">👥 ${c.alunos.length} alunos</span>
            <span class="tag">🥋 Arte-Luta</span>
          </div>
          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 0.5rem;">
            ${c.whatsapp ? `<a href="${c.whatsapp}" target="_blank" class="btn btn-dourado">💬 WhatsApp</a>` : ''}
            <a href="mailto:${c.email}" class="btn btn-outline">✉️ Enviar e-mail</a>
          </div>
        </div>
      </div>`;
  },

  renderizarInfo(c) {
    const el = $('#centro-info');
    if (!el) return;
    el.innerHTML = `
      <div class="centro-info-grid">
        <div class="info-card">
          <h3>📋 Informações do Centro</h3>
          <div class="info-linha">
            <span class="info-icone">📖</span>
            <div class="info-conteudo">
              <span class="info-label">Sobre</span>
              <span class="info-valor">${c.bio}</span>
            </div>
          </div>
          <div class="info-linha">
            <span class="info-icone">📍</span>
            <div class="info-conteudo">
              <span class="info-label">Endereço</span>
              <span class="info-valor">${c.endereco} — ${c.cidade}, ${c.estado}</span>
            </div>
          </div>
          <div class="info-linha">
            <span class="info-icone">⏰</span>
            <div class="info-conteudo">
              <span class="info-label">Horários de Aula</span>
              <span class="info-valor">${c.horarios}</span>
            </div>
          </div>
          <div class="info-linha">
            <span class="info-icone">📞</span>
            <div class="info-conteudo">
              <span class="info-label">Telefone</span>
              <span class="info-valor"><a href="tel:${c.telefone}" style="color:var(--verde-claro)">${c.telefone}</a></span>
            </div>
          </div>
          <div class="info-linha">
            <span class="info-icone">✉️</span>
            <div class="info-conteudo">
              <span class="info-label">E-mail</span>
              <span class="info-valor"><a href="mailto:${c.email}" style="color:var(--verde-claro)">${c.email}</a></span>
            </div>
          </div>
        </div>
        <div class="info-card">
          <h3>🌐 Redes Sociais</h3>
          ${c.instagram ? `<div class="info-linha"><span class="info-icone">📸</span><div class="info-conteudo"><span class="info-label">Instagram</span><a href="${c.instagram}" target="_blank" class="info-valor" style="color:var(--verde-claro)">@beribazu_${slugify(c.cidade)}</a></div></div>` : ''}
          ${c.facebook  ? `<div class="info-linha"><span class="info-icone">👤</span><div class="info-conteudo"><span class="info-label">Facebook</span><a href="${c.facebook}"  target="_blank" class="info-valor" style="color:var(--verde-claro)">Beribazu ${c.cidade}</a></div></div>` : ''}
          ${c.whatsapp  ? `<div class="info-linha"><span class="info-icone">💬</span><div class="info-conteudo"><span class="info-label">WhatsApp</span><a href="${c.whatsapp}"  target="_blank" class="info-valor" style="color:var(--verde-claro)">${c.telefone}</a></div></div>` : ''}
          ${c.youtube   ? `<div class="info-linha"><span class="info-icone">▶️</span><div class="info-conteudo"><span class="info-label">YouTube</span><a href="${c.youtube}"   target="_blank" class="info-valor" style="color:var(--verde-claro)">Canal Beribazu ${c.cidade}</a></div></div>` : ''}
        </div>
      </div>`;
  },

  renderizarGaleria(alunos) {
    const el = $('#galeria-alunos');
    if (!el) return;

    const cordas = [...new Set(alunos.map(a => a.corda))].sort();

    // Filtros
    const filtrosEl = el.querySelector('.galeria-filtros');
    if (filtrosEl) {
      filtrosEl.innerHTML = `
        <button class="filtro-btn ativo" data-corda="todos">Todos (${alunos.length})</button>
        ${cordas.map(c => `<button class="filtro-btn" data-corda="${c}">${c.replace(/-/g, ' ')}</button>`).join('')}
      `;

      filtrosEl.addEventListener('click', (e) => {
        const btn = e.target.closest('.filtro-btn');
        if (!btn) return;
        $$('.filtro-btn', filtrosEl).forEach(b => b.classList.remove('ativo'));
        btn.classList.add('ativo');

        const corda = btn.dataset.corda;
        $$('.card-aluno').forEach(card => {
          if (corda === 'todos' || card.dataset.corda === corda) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    }

    const grid = el.querySelector('.alunos-grid');
    if (grid) {
      grid.innerHTML = alunos.map((a, i) => `
        <div class="card-aluno animacao-entrada delay-${(i % 4) + 1}" data-corda="${a.corda}">
          <div class="card-aluno-foto">
            <img src="${a.foto}" alt="${a.apelido}" loading="lazy">
          </div>
          <div class="card-aluno-info">
            <p class="card-aluno-apelido">${a.apelido}</p>
            <p class="card-aluno-nome">${a.nome}</p>
            <span class="corda-badge corda-${a.corda}">${a.corda.replace(/-/g, '&#8209;')}</span>
          </div>
        </div>
      `).join('');
    }
  }
};

// ============================================
// MÓDULO: ANIMAÇÕES DE ENTRADA (IntersectionObserver)
// ============================================

const ModuloAnimacoes = {
  init() {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visivel');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    // Só observa elementos que ainda não receberam a classe visivel
    $$('.animacao-entrada:not(.visivel)').forEach(el => obs.observe(el));
  }
};

// ============================================
// MÓDULO: EVENTOS (Home — apenas 3)
// ============================================

const ModuloEventos = {
  init() {
    const container = $('#eventos-grid');
    if (!container) return;
    this.renderizar(EVENTOS.slice(0, 3), container);
  },

  renderizar(eventos, container) {
    container.innerHTML = eventos.map((ev, i) => `
      <article class="card-evento animacao-entrada delay-${i + 1}">
        <div class="card-evento-img">
          <img src="${ev.foto}" alt="${ev.titulo}" loading="lazy">
          <div class="evento-data-badge">
            <span class="dia">${ev.dia}</span>
            <span class="mes">${ev.mes}</span>
          </div>
        </div>
        <div class="card-evento-corpo">
          <span class="evento-tipo-tag">${ev.tipo}</span>
          <h3>${ev.titulo}</h3>
          <p>${ev.descricao}</p>
          <div class="evento-local">📍 ${ev.cidade}</div>
        </div>
      </article>
    `).join('');
  }
};

// ============================================
// MÓDULO: PÁGINA TODOS OS EVENTOS
// ============================================

const ModuloEventosPagina = {
  init() {
    const container = $('#todos-eventos-grid');
    if (!container) return;

    this.renderizar(EVENTOS, container);
    this.configurarFiltros();
    ModuloAnimacoes.init();
  },

  renderizar(eventos, container) {
    if (eventos.length === 0) {
      container.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--cinza-claro);padding:3rem;">Nenhum evento encontrado.</p>`;
      return;
    }
    container.innerHTML = eventos.map((ev, i) => `
      <article class="card-evento animacao-entrada delay-${(i % 3) + 1}">
        <div class="card-evento-img">
          <img src="${ev.foto}" alt="${ev.titulo}" loading="lazy">
          <div class="evento-data-badge">
            <span class="dia">${ev.dia}</span>
            <span class="mes">${ev.mes}</span>
          </div>
        </div>
        <div class="card-evento-corpo">
          <span class="evento-tipo-tag">${ev.tipo}</span>
          <h3>${ev.titulo}</h3>
          <p>${ev.descricao}</p>
          <div class="evento-local">📍 ${ev.cidade}</div>
          <div style="margin-top:0.75rem;">
            <span style="font-size:0.78rem;color:var(--cinza-claro);">📅 ${ev.dia} de ${ev.mes} de ${ev.ano}</span>
          </div>
        </div>
      </article>
    `).join('');
  },

  configurarFiltros() {
    const filtros = $$('.evento-filtro-btn');
    const container = $('#todos-eventos-grid');
    if (!filtros.length || !container) return;

    filtros.forEach(btn => {
      btn.addEventListener('click', () => {
        filtros.forEach(b => b.classList.remove('ativo'));
        btn.classList.add('ativo');
        const tipo = btn.dataset.tipo;
        const filtrados = tipo === 'todos' ? EVENTOS : EVENTOS.filter(e => e.tipo === tipo);
        this.renderizar(filtrados, container);
        ModuloAnimacoes.init();
      });
    });
  }
};

// ============================================
// MÓDULO: FORMULÁRIO DE CONTATO
// ============================================

const ModuloContato = {
  init() {
    const form = $('#form-contato');
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const original = btn.textContent;
      btn.textContent = '✓ Mensagem enviada!';
      btn.style.background = 'var(--verde-claro)';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    });
  }
};

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  ModuloHeader.init();
  ModuloCarousel.init();
  ModuloFormBusca.init();
  ModuloEventos.init();
  ModuloEventosPagina.init();
  ModuloContato.init();
  ModuloAnimacoes.init();
  ModuloResultados.init();
  ModuloCentro.init();
});
