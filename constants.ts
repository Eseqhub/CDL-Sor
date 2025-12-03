
import { Business, FilterType, NewsPost, JobOpportunity, CalendarEvent, HeroSlide, BoardMember, GalleryItem, Service, TeamMember, TickerItem, Partner, Product } from './types';

// Coordinates for Sorriso: -12.5427, -55.7227
export const BUSINESS_DATA: Business[] = [
  {
    id: '1',
    name: 'AgroTech Sorriso',
    category: FilterType.AGRO,
    description: 'Soluções completas para o produtor rural, desde sementes até tecnologia de precisão.',
    address: 'Av. Blumenau, 1200 - Centro',
    phone: '(66) 3544-0000',
    whatsapp: '5566999999999',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=800',
    verified: true,
    rating: 4.9,
    lat: -12.5427,
    lng: -55.7227
  },
  {
    id: '2',
    name: 'Sorriso Center Modas',
    category: FilterType.RETAIL,
    description: 'Moda masculina, feminina e infantil com as melhores marcas do mercado.',
    address: 'Rua Mato Grosso, 500 - Centro',
    phone: '(66) 3544-1234',
    whatsapp: '5566999999999',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    verified: true,
    rating: 4.5,
    lat: -12.5450,
    lng: -55.7200
  },
  {
    id: '3',
    name: 'Clínica Bem Estar',
    category: FilterType.HEALTH,
    description: 'Fisioterapia, pilates e cuidados com a saúde integrada.',
    address: 'Av. Tancredo Neves, 800',
    phone: '(66) 99999-8888',
    whatsapp: '5566999999999',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    verified: false,
    rating: 4.8,
    lat: -12.5400,
    lng: -55.7250
  },
  {
    id: '4',
    name: 'Restaurante Sabor do Norte',
    category: FilterType.FOOD,
    description: 'O melhor da culinária regional e churrasco gaúcho.',
    address: 'Av. Natalino Brescansin, 300',
    phone: '(66) 3544-5555',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800',
    verified: true,
    rating: 4.7,
    lat: -12.5480,
    lng: -55.7180
  },
  {
    id: '5',
    name: 'Tech Soluções TI',
    category: FilterType.SERVICES,
    description: 'Consultoria em TI, desenvolvimento de software e segurança de redes.',
    address: 'Rua dos Imigrantes, 150',
    phone: '(66) 3544-9090',
    whatsapp: '5566999999999',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
    verified: true,
    rating: 5.0,
    lat: -12.5500,
    lng: -55.7300
  },
  {
    id: '6',
    name: 'Supermercado Aliança',
    category: FilterType.RETAIL,
    description: 'Variedade, qualidade e preço baixo todos os dias.',
    address: 'Av. Brasil, 2200',
    phone: '(66) 3545-1111',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
    verified: true,
    rating: 4.2,
    lat: -12.5350,
    lng: -55.7150
  }
];

// PRODUTOS ATUALIZADOS COM DADOS REAIS SOLICITADOS (CHÁ E GROWTH)
export const PRODUCTS_DATA: Product[] = [
    {
        id: '1',
        title: 'Chá das Mulheres 2024',
        type: 'event',
        price: 180.00,
        description: 'Uma tarde exclusiva para celebrar o empreendedorismo feminino em Sorriso. Este evento é destinado estritamente a Proprietárias de empresas associadas, Esposas de proprietários ou Gerentes (cargos de confiança). Prepare-se para networking de alto nível, palestras inspiradoras e um coquetel especial.',
        image: 'https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&w=800&q=80',
        features: ['Acesso Exclusivo a Decisoras', 'Coquetel Premium', 'Palestra: Liderança Feminina', 'Brindes Especiais'],
        date: '08/03/2024 - 16h',
        location: 'Centro de Eventos Ari José Riedi',
        formType: 'women_event',
        speakers: [
            { name: "Alessandra Alkmim", role: "Presidente do Conselho da Mulher", image: "https://images.unsplash.com/photo-1573496359-7013cdddb7ce?auto=format&fit=crop&w=200&q=80" },
            { name: "Convidada Especial", role: "Empresária de Sucesso", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80" }
        ]
    },
    {
        id: '2',
        title: 'Conexão Growth: Gestão & Escala',
        type: 'course',
        price: 450.00,
        description: 'Imersão total em estratégias de crescimento acelerado para empresas do agronegócio e varejo. Um treinamento prático focado em Vendas B2B, Gestão de Equipes e Processos Escaláveis. Ideal para levar sua equipe comercial.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
        features: ['8h de Imersão Prática', 'Material Didático Completo', 'Planilhas de Gestão', 'Certificado CDL'],
        date: '20/04/2024 - 08h às 18h',
        location: 'Auditório CDL Sorriso',
        formType: 'growth_event',
        speakers: [
            { name: "Thiago Concer", role: "Maior especialista em Vendas do Brasil", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80" }
        ]
    }
];

export const SERVICES_DATA: Service[] = [
    {
      id: '1',
      iconName: 'ShieldCheck',
      title: "Certificado Digital",
      description: "Emissão de e-CPF e e-CNPJ com agilidade. Segurança jurídica para suas transações online.",
      color: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      id: '2',
      iconName: 'CreditCard',
      title: "SPC / Serasa",
      description: "O maior banco de dados da América Latina. Consulte crédito e negative inadimplentes com facilidade.",
      color: "bg-gradient-to-br from-green-500 to-green-600"
    },
    {
      id: '3',
      iconName: 'Building2',
      title: "Auditório e Salas",
      description: "Espaço moderno e equipado para palestras, reuniões e treinamentos da sua empresa.",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600"
    },
    {
      id: '4',
      iconName: 'Smartphone',
      title: "CDL Celular",
      description: "Planos corporativos de telefonia móvel com tarifas reduzidas exclusivas para associados.",
      color: "bg-gradient-to-br from-purple-500 to-purple-600"
    },
    {
      id: '5',
      iconName: 'Megaphone',
      title: "Campanhas",
      description: "Participação em grandes promoções como Natal Premiado e Liquida Sorriso.",
      color: "bg-gradient-to-br from-red-500 to-red-600"
    },
    {
      id: '6',
      iconName: 'Gavel',
      title: "Assessoria Jurídica",
      description: "Suporte legal para orientar sua empresa nas decisões e dúvidas trabalhistas.",
      color: "bg-gradient-to-br from-orange-500 to-orange-600"
    }
];

export const NEWS_DATA: NewsPost[] = [
  {
    id: '1',
    title: 'CDL Lança Campanha "Natal Premiado"',
    excerpt: 'Participe da maior campanha de prêmios da história de Sorriso. São mais de R$ 100 mil em prêmios.',
    content: `A Câmara de Dirigentes Lojistas de Sorriso lançou oficialmente a campanha "Natal Premiado", que promete movimentar o comércio local neste fim de ano. Com premiações que somam mais de R$ 100 mil, a iniciativa busca incentivar as compras nas lojas associadas e premiar os consumidores da cidade.

    A campanha terá início no dia 1º de novembro e seguirá até o final de dezembro. A cada R$ 50,00 em compras nas lojas participantes, o consumidor ganha um cupom para concorrer a:
    - 01 Carro 0km
    - 02 Motos
    - 10 Vales-compra de R$ 1.000,00
    
    "É uma oportunidade única para fortalecer nossa economia e presentear quem prestigia o comércio de Sorriso", afirmou o presidente da CDL.`,
    date: '12 Out 2023',
    image: 'https://images.unsplash.com/photo-1512389142860-9c449ded37fd?auto=format&fit=crop&q=80&w=800',
    category: 'Eventos',
    author: 'Assessoria de Imprensa'
  },
  {
    id: '2',
    title: 'Workshop de Gestão Financeira',
    excerpt: 'Capacitação exclusiva para associados com foco em fluxo de caixa e investimentos.',
    content: 'Gestão financeira eficiente é o pilar de qualquer negócio de sucesso. Pensando nisso, a CDL Sorriso traz o renomado consultor Marcos Vinícius para um workshop intensivo de 8 horas. Serão abordados temas como separação de contas PF/PJ, fluxo de caixa projetado e investimentos inteligentes para capital de giro.',
    date: '05 Nov 2023',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
    category: 'Capacitação',
    author: 'Departamento de Cursos'
  },
  {
    id: '3',
    title: 'Novas regras para o comércio local',
    excerpt: 'Entenda as mudanças na legislação municipal que impactam o horário de funcionamento.',
    content: 'A Prefeitura de Sorriso sancionou ontem a nova lei que flexibiliza o horário de funcionamento do comércio em datas especiais. A CDL participou ativamente das negociações para garantir que os direitos dos lojistas fossem preservados.',
    date: '28 Out 2023',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800',
    category: 'Notícias',
    author: 'Jurídico CDL'
  }
];

export const JOB_OPPORTUNITIES: JobOpportunity[] = [
  {
    id: '1',
    title: 'Vendedor Interno',
    company: 'AgroTech Sorriso',
    type: 'CLT',
    location: 'Centro',
    date: 'Hoje'
  },
  {
    id: '2',
    title: 'Assistente Administrativo',
    company: 'Transportadora TransNorte',
    type: 'CLT',
    location: 'Industrial',
    date: 'Ontem'
  },
  {
    id: '3',
    title: 'Estagiário de Marketing',
    company: 'Grupo Comex',
    type: 'Estágio',
    location: 'Centro',
    date: 'Há 2 dias'
  }
];

// CALENDÁRIO OTIMIZADO - Focado em Comércio, Agro e Profissões Associadas
export const CALENDAR_EVENTS: CalendarEvent[] = [
  // JANEIRO
  { id: 'jan1', date: '01/01', title: 'Confraternização Universal', type: 'holiday', details: 'Feriado - Comércio Fechado' },
  { id: 'jan2', date: '02/01', title: 'Início Liquidações', type: 'commemorative', details: 'Ações de Pós-Natal' },
  { id: 'jan3', date: '20/01', title: 'Dia do Farmacêutico', type: 'commemorative', details: 'Setor de Saúde' },

  // FEVEREIRO
  { id: 'feb1', date: '01/02', title: 'Dia do Publicitário', type: 'commemorative', details: 'Agências e Marketing' },
  { id: 'feb2', date: '16/02', title: 'Dia do Repórter', type: 'commemorative', details: 'Imprensa Local' },
  { id: 'feb3', date: '12/02', title: 'Carnaval', type: 'holiday', details: 'Ponto Facultativo' },

  // MARÇO
  { id: 'mar1', date: '08/03', title: 'Dia Internacional da Mulher', type: 'commemorative', details: 'Campanha Mulheres de Negócios' },
  { id: 'mar2', date: '15/03', title: 'Dia do Consumidor', type: 'commemorative', details: 'Semana do Consumidor CDL' },
  
  // ABRIL
  { id: 'apr1', date: '21/04', title: 'Tiradentes', type: 'holiday', details: 'Feriado Nacional' },
  { id: 'apr2', date: '25/04', title: 'Dia da Contabilidade', type: 'commemorative', details: 'Parabéns Contadores' },
  { id: 'apr3', date: '28/04', title: 'Dia da Sogra', type: 'commemorative', details: 'Ações no Varejo' },

  // MAIO - Aniversário de Sorriso
  { id: 'may1', date: '01/05', title: 'Dia do Trabalho', type: 'holiday', details: 'Feriado - Comércio Fechado' },
  { id: 'may2', date: '13/05', title: 'Aniversário de Sorriso', type: 'holiday', details: 'Feriado Municipal - Capital do Agro' },
  { id: 'may3', date: '25/05', title: 'Dia da Indústria', type: 'commemorative', details: 'Setor Industrial' },
  { id: 'may4', date: '25/05', title: 'Dia do Trabalhador Rural', type: 'commemorative', details: 'Homenagem ao Agro' },

  // JUNHO
  { id: 'jun1', date: '12/06', title: 'Dia dos Namorados', type: 'commemorative', details: '2ª Melhor Data do Varejo' },
  { id: 'jun2', date: '24/06', title: 'São João', type: 'commemorative', details: 'Festas Juninas' },

  // JULHO - Mês Forte para CDL
  { id: 'jul1', date: '16/07', title: 'Dia do Comerciante', type: 'commemorative', details: 'Parabéns Lojistas CDL' },
  { id: 'jul2', date: '25/07', title: 'Dia do Motorista', type: 'commemorative', details: 'Logística e Transportadoras' },
  { id: 'jul3', date: '28/07', title: 'Dia do Agricultor', type: 'commemorative', details: 'Motor da nossa Economia' },

  // AGOSTO
  { id: 'aug1', date: '11/08', title: 'Dia dos Pais', type: 'commemorative', details: 'Campanha Promocional' },
  { id: 'aug2', date: '11/08', title: 'Dia do Advogado', type: 'commemorative', details: 'Setor Jurídico' },
  { id: 'aug3', date: '27/08', title: 'Dia do Corretor de Imóveis', type: 'commemorative', details: 'Setor Imobiliário' },
  { id: 'aug4', date: '27/08', title: 'Dia do Psicólogo', type: 'commemorative', details: 'Setor de Saúde' },

  // SETEMBRO
  { id: 'sep1', date: '07/09', title: 'Independência do Brasil', type: 'holiday', details: 'Feriado Nacional' },
  { id: 'sep2', date: '09/09', title: 'Dia do Administrador', type: 'commemorative', details: 'Gestão Empresarial' },
  { id: 'sep3', date: '15/09', title: 'Dia do Cliente', type: 'commemorative', details: 'Foco no Consumidor' },
  { id: 'sep4', date: '22/09', title: 'Dia do Contador', type: 'commemorative', details: 'Parceiros do Empresário' },
  { id: 'sep5', date: '30/09', title: 'Dia da Secretária', type: 'commemorative', details: 'Essenciais nas Empresas' },

  // OUTUBRO
  { id: 'oct1', date: '01/10', title: 'Dia do Vendedor', type: 'commemorative', details: 'Força de Vendas' },
  { id: 'oct2', date: '05/10', title: 'Dia do Empreendedor', type: 'commemorative', details: 'Pequenos Negócios' },
  { id: 'oct3', date: '12/10', title: 'Dia do Engenheiro Agrônomo', type: 'commemorative', details: 'Técnica no Campo' },
  { id: 'oct4', date: '12/10', title: 'N. Sra. Aparecida', type: 'holiday', details: 'Dia das Crianças' },
  { id: 'oct5', date: '18/10', title: 'Dia do Médico', type: 'commemorative', details: 'Setor de Saúde' },
  { id: 'oct6', date: '25/10', title: 'Dia do Dentista', type: 'commemorative', details: 'Odontologia' },
  { id: 'oct7', date: '30/10', title: 'Dia do Comerciário', type: 'holiday', details: 'Feriado da Categoria' },

  // NOVEMBRO
  { id: 'nov1', date: '02/11', title: 'Finados', type: 'holiday', details: 'Comércio Fechado' },
  { id: 'nov2', date: '15/11', title: 'Proclamação da República', type: 'holiday', details: 'Feriado Nacional' },
  { id: 'nov3', date: '20/11', title: 'Dia da Consciência Negra', type: 'holiday', details: 'Feriado Estadual' },
  { id: 'nov4', date: '29/11', title: 'Black Friday', type: 'commemorative', details: 'Maior Liquidação do Ano' },

  // DEZEMBRO
  { id: 'dec1', date: '11/12', title: 'Dia do Engenheiro', type: 'commemorative', details: 'Construção Civil' },
  { id: 'dec2', date: '13/12', title: 'Dia do Pedreiro', type: 'commemorative', details: 'Construção Civil' },
  { id: 'dec3', date: '25/12', title: 'Natal', type: 'holiday', details: 'Comércio Fechado' },
  { id: 'dec4', date: '31/12', title: 'Véspera de Ano Novo', type: 'holiday', details: 'Horário Especial' }
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: '1',
    title: 'Conectando quem produz',
    highlight: 'a quem consome',
    description: 'O portal oficial da CDL Sorriso. Encontre empresas, serviços e oportunidades na cidade que mais cresce no Brasil.',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    ctaText: 'Conhecer Benefícios',
    ctaLink: '#clube-de-vantagens',
    badge: 'Capital do Agronegócio'
  },
  {
    id: '2',
    title: 'Natal Premiado',
    highlight: 'CDL Sorriso',
    description: 'Participe da maior campanha de prêmios do norte de Mato Grosso. Compre no comércio local e concorra a carros e motos.',
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    ctaText: 'Saiba como Participar',
    ctaLink: '#natal',
    badge: 'Evento Especial'
  },
  {
    id: '3',
    title: 'Certificado Digital',
    highlight: 'com Desconto',
    description: 'Emita seu e-CPF e e-CNPJ com condições especiais para associados. Segurança e agilidade para sua empresa.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    ctaText: 'Agendar Emissão',
    ctaLink: '#certificado',
    badge: 'Serviço Exclusivo'
  }
];

// REALISTIC BOARD MEMBERS (Ready for Image Swapping)
export const BOARD_MEMBERS: BoardMember[] = [
    { id: '1', name: 'Rodrigo Guerra', role: 'Presidente', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80&align=top' },
    { id: '2', name: 'Paulo Silveira', role: 'Vice-Presidente', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80&align=top' },
    { id: '3', name: 'Cesar Schevinski', role: 'Diretor Financeiro', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80&align=top' },
    { id: '4', name: 'Sérgio Bedin', role: 'Diretor Comercial', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80&align=top' },
    { id: '5', name: 'Eliane Vigolo', role: 'Diretora de Eventos', image: 'https://images.unsplash.com/photo-1573496359-7013cdddb7ce?auto=format&fit=crop&w=300&q=80&align=top' },
    { id: '6', name: 'Gustavo Pizzatto', role: 'Diretor SPC', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80&align=top' },
];

// REALISTIC COLLABORATORS
export const COLLABORATORS: TeamMember[] = [
    { id: '1', name: 'Marisa Santos', role: 'Gerente Executiva', department: 'Gerência', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80&align=top' },
    { id: '2', name: 'Fábio Junior', role: 'Coord. SPC', department: 'SPC/Serasa', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80&align=top' },
    { id: '3', name: 'Camila Rossi', role: 'Agente Certificadora', department: 'Certificado', image: 'https://images.unsplash.com/photo-1598550874175-4d7112ee7f38?auto=format&fit=crop&w=300&q=80&align=top' },
    { id: '4', name: 'Ana Paula', role: 'Financeiro', department: 'Financeiro', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80&align=top' },
    { id: '5', name: 'Rafael Souza', role: 'Comercial', department: 'Vendas', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80&align=top' },
];

export const GALLERY_IMAGES: GalleryItem[] = [
    { id: '1', title: 'Jantar do Empresário 2023', date: '15 Dez', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80', count: 45 },
    { id: '2', title: 'Inauguração Sede Nova', date: '20 Nov', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80', count: 22 },
    { id: '3', title: 'Café com Lojistas', date: '05 Out', image: 'https://images.unsplash.com/photo-1515169067750-d51a73b50981?auto=format&fit=crop&w=1200&q=80', count: 18 },
    { id: '4', title: 'Premiação Destaque', date: '10 Set', image: 'https://images.unsplash.com/photo-1561489413-985b06da5bee?auto=format&fit=crop&w=1200&q=80', count: 50 },
    { id: '5', title: 'Workshop Vendas', date: '15 Ago', image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=1200&q=80', count: 34 },
    { id: '6', title: 'Posse Diretoria', date: '01 Jan', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80', count: 80 },
];

export const TICKER_NEWS: TickerItem[] = [
    { id: '1', source: 'Google News', headline: 'Varejo cresce 2.5% em Sorriso impulsionado pelo agro', url: '#', time: '2h atrás' },
    { id: '2', source: 'Economia MT', headline: 'Novas linhas de crédito para pequenos empresários aprovadas', url: '#', time: '4h atrás' },
    { id: '3', source: 'Tecnologia', headline: 'Pix automático deve revolucionar pagamentos recorrentes no comércio', url: '#', time: '5h atrás' },
    { id: '4', source: 'Mercado', headline: 'Black Friday promete movimentar R$ 50 milhões na região norte', url: '#', time: '6h atrás' },
    { id: '5', source: 'Legislação', headline: 'Entenda as mudanças na reforma tributária para o Simples Nacional', url: '#', time: '1d atrás' },
];

export const PARTNERS_DATA: Partner[] = [
    { id: '1', name: 'Unimed', category: 'Saúde', discount: 'Carência Zero', image: 'https://images.unsplash.com/photo-1631217868269-dfc1c5c05295?w=200&h=100&fit=crop', phone: '3544-0000' },
    { id: '2', name: 'Faculdade Facem', category: 'Educação', discount: '20% Desc.', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=100&fit=crop', phone: '3544-1234' },
    { id: '3', name: 'Academia Atleta', category: 'Fitness', discount: '15% Desc.', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&h=100&fit=crop', phone: '3544-2222' },
    { id: '4', name: 'Farmácia Preço Baixo', category: 'Saúde', discount: 'Até 50% OFF', image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=200&h=100&fit=crop', phone: '3544-3333' },
    { id: '5', name: 'Laboratório Exame', category: 'Saúde', discount: 'Tabela Especial', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=200&h=100&fit=crop', phone: '3544-4444' },
    { id: '6', name: 'CNA Inglês', category: 'Educação', discount: '30% na Matrícula', image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=200&h=100&fit=crop', phone: '3544-5555' },
    { id: '7', name: 'Ótica Visual', category: 'Saúde', discount: '15% à vista', image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=200&h=100&fit=crop', phone: '3544-6666' },
    { id: '8', name: 'Posto Estradão', category: 'Combustível', discount: 'R$ 0,10/L Desc', image: 'https://images.unsplash.com/photo-1527018601619-a508a2be00cd?w=200&h=100&fit=crop', phone: '3544-7777' },
    { id: '9', name: 'Hotel Imperial', category: 'Hospedagem', discount: 'Tarifa Corporativa', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=100&fit=crop', phone: '3544-8888' },
    { id: '10', name: 'Cartório 2º Ofício', category: 'Serviços', discount: 'Atendimento VIP', image: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?w=200&h=100&fit=crop', phone: '3544-9999' },
    { id: '11', name: 'Seguradora Confiança', category: 'Seguros', discount: '10% em Apólices', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&h=100&fit=crop', phone: '3544-1010' },
    { id: '12', name: 'Gráfica Rápida', category: 'Serviços', discount: '15% Cartões', image: 'https://images.unsplash.com/photo-1606836591695-4d58a73eba1e?w=200&h=100&fit=crop', phone: '3544-2020' },
    { id: '13', name: 'Clínica Sorriso', category: 'Odontologia', discount: 'Avaliação Grátis', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=200&h=100&fit=crop', phone: '3544-3030' },
    { id: '14', name: 'Escola Futuro', category: 'Educação', discount: '10% Mensalidade', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=200&h=100&fit=crop', phone: '3544-4040' },
    { id: '15', name: 'Auto Center Silva', category: 'Automotivo', discount: 'Alinhamento Grátis', image: 'https://images.unsplash.com/photo-1486262715619-01b802457299?w=200&h=100&fit=crop', phone: '3544-5050' },
    { id: '16', name: 'Papelaria Central', category: 'Varejo', discount: '10% Material', image: 'https://images.unsplash.com/photo-1531297461137-813247395c3e?w=200&h=100&fit=crop', phone: '3544-6060' },
    { id: '17', name: 'Tech Computer', category: 'Informática', discount: '5% Hardware', image: 'https://images.unsplash.com/photo-1531297461137-813247395c3e?w=200&h=100&fit=crop', phone: '3544-7070' },
    { id: '18', name: 'Pet Shop Amigo', category: 'Pet', discount: 'Banho: 4 por 3', image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=200&h=100&fit=crop', phone: '3544-8080' },
    { id: '19', name: 'Lavanderia Limpa', category: 'Serviços', discount: '15% Edredom', image: 'https://images.unsplash.com/photo-1517677208171-0bc12dd16ac5?w=200&h=100&fit=crop', phone: '3544-9090' },
    { id: '20', name: 'Studio Pilates', category: 'Saúde', discount: 'Matrícula Grátis', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=200&h=100&fit=crop', phone: '3544-0101' },
    { id: '21', name: 'Escritório Contábil', category: 'Serviços', discount: '1 Mês Honorário', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff0a77?w=200&h=100&fit=crop', phone: '3544-1111' },
    { id: '22', name: 'Cinema Sorriso', category: 'Lazer', discount: 'Meia Entrada', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=200&h=100&fit=crop', phone: '3544-2222' },
    { id: '23', name: 'Clube Recreativo', category: 'Lazer', discount: 'Convite Sócio', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=200&h=100&fit=crop', phone: '3544-3333' },
    { id: '24', name: 'Curso de Oratória', category: 'Educação', discount: '20% na Turma', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=200&h=100&fit=crop', phone: '3544-4444' },
    { id: '25', name: 'Coworking Space', category: 'Serviços', discount: '1ª Hora Grátis', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=100&fit=crop', phone: '3544-5555' },
];
