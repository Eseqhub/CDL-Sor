
import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EconomicBar from './components/EconomicBar';
import CategoryGrid from './components/CategoryGrid';
import BusinessCard from './components/BusinessCard';
import ServicesSection from './components/ServicesSection';
import NewsSection from './components/NewsSection';
import JobBoard from './components/JobBoard';
import TVLojista from './components/TVLojista';
import CommercialGuide from './components/CommercialGuide';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import Institutional from './components/Institutional';
import EventGallery from './components/EventGallery';
import NewsDetail from './components/NewsDetail';
import ServiceDetail from './components/ServiceDetail';
import NewsTicker from './components/NewsTicker';
import PartnersSection from './components/PartnersSection';
import CommercialGuideMap from './components/CommercialGuideMap';
import ProductLandingPage from './components/ProductLandingPage';
import { BUSINESS_DATA, JOB_OPPORTUNITIES } from './constants';
import { getNoticias, getProdutos } from './services/dataService'; // IMPORT UPDATED
import { FilterType, AppView, NewsPost, Service, Product } from './types';
import { LayoutGrid, ShoppingCart } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('public');
  const [selectedNews, setSelectedNews] = useState<NewsPost | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterType>(FilterType.ALL);
  
  // Dynamic Data States
  const [newsData, setNewsData] = useState<NewsPost[]>([]);
  const [productsData, setProductsData] = useState<Product[]>([]);

  // FETCH INITIAL DATA
  useEffect(() => {
    const initData = async () => {
        setNewsData(await getNoticias());
        setProductsData(await getProdutos());
    };
    initData();
  }, []);

  // Reset scroll when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  // Handlers for Navigation
  const handleViewNews = (post: NewsPost) => {
      setSelectedNews(post);
      setCurrentView('news-detail');
  };

  const handleViewService = (service: Service) => {
      setSelectedService(service);
      setCurrentView('service-detail');
  };

  const handleViewProduct = (product: Product) => {
      setSelectedProduct(product);
      setCurrentView('product-detail');
  };

  // Filter businesses logic
  const filteredBusinesses = useMemo(() => {
    return BUSINESS_DATA.filter(business => {
      const matchesSearch = 
        business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = activeFilter === FilterType.ALL || business.category === activeFilter;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeFilter]);

  const handleCategorySelect = (category: FilterType) => {
    setActiveFilter(prev => prev === category && category !== FilterType.ALL ? FilterType.ALL : category);
    
    if (category !== FilterType.ALL) {
        const element = document.getElementById('empresas');
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // ROUTER SWITCH
  if (currentView === 'login') {
    return <AdminLogin onLogin={() => setCurrentView('dashboard')} onBack={() => setCurrentView('public')} />;
  }

  if (currentView === 'dashboard') {
    return <AdminDashboard onLogout={() => setCurrentView('public')} />;
  }

  if (currentView === 'commercial-map') {
      return <CommercialGuideMap onBack={() => setCurrentView('public')} />;
  }

  if (currentView === 'product-detail' && selectedProduct) {
      return <ProductLandingPage product={selectedProduct} onBack={() => setCurrentView('public')} />;
  }

  if (currentView === 'news-detail' && selectedNews) {
      return (
          <div className="min-h-screen bg-slate-50 font-sans">
            <EconomicBar />
            <Header onNavigateLogin={() => setCurrentView('login')} />
            <div className="pt-14">
                 <NewsDetail news={selectedNews} onBack={() => setCurrentView('public')} />
            </div>
            <Footer />
          </div>
      );
  }

  if (currentView === 'service-detail' && selectedService) {
      return (
          <div className="min-h-screen bg-slate-50 font-sans">
            <EconomicBar />
            <Header onNavigateLogin={() => setCurrentView('login')} />
            <div className="pt-14">
                 <ServiceDetail service={selectedService} onBack={() => setCurrentView('public')} />
            </div>
            <Footer />
          </div>
      );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <EconomicBar />
      <Header onNavigateLogin={() => setCurrentView('login')} />
      
      <main>
        <Hero onSearch={setSearchTerm} />
        
        {/* Floating Quick Action Overrides for Hero (Simulated via props/context in real app or hardcoded link check) */}
        {/* Note: Hero component handles clicks internally but we added logic here for direct component mounting */}
        
        <PartnersSection />

        <Institutional />
        
        <CategoryGrid activeFilter={activeFilter} onSelectCategory={handleCategorySelect} />

        {/* Directory Section */}
        <section id="empresas" className="pt-12 pb-24 container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 px-2 border-b border-slate-200 pb-6">
                <div>
                    <span className="text-blue-600 font-bold tracking-wider text-xs uppercase mb-1 block">Guia Comercial</span>
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">
                       Empresas em Destaque
                    </h2>
                    <p className="text-slate-500 text-sm">
                        Procurando algo específico? <button onClick={() => setCurrentView('commercial-map')} className="text-blue-600 font-bold underline">Ver Mapa Completo da Cidade</button>
                    </p>
                </div>
                
                {activeFilter !== FilterType.ALL && (
                    <button 
                        onClick={() => setActiveFilter(FilterType.ALL)}
                        className="text-sm bg-slate-100 hover:bg-slate-200 text-slate-600 px-4 py-2 rounded-lg font-medium transition-colors mt-4 md:mt-0"
                    >
                        Limpar filtros
                    </button>
                )}
            </div>

            {/* Grid Results */}
            {filteredBusinesses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBusinesses.map(business => (
                  <BusinessCard key={business.id} business={business} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <div className="inline-block p-6 rounded-full bg-slate-50 mb-6 animate-bounce">
                   <LayoutGrid className="w-12 h-12 text-slate-300" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Nenhum resultado encontrado</h3>
                <p className="text-slate-500 max-w-md mx-auto">
                    Não encontramos empresas com os termos ou filtros selecionados. Tente buscar por outra categoria.
                </p>
                <button 
                  onClick={() => {setSearchTerm(''); setActiveFilter(FilterType.ALL);}}
                  className="mt-8 px-8 py-3 bg-blue-900 text-white rounded-xl font-bold hover:bg-blue-800 transition-colors"
                >
                  Limpar filtros
                </button>
              </div>
            )}
            
            <div className="mt-16 flex justify-center">
                 <button 
                    onClick={() => setCurrentView('commercial-map')}
                    className="group flex items-center gap-2 px-8 py-4 border-2 border-slate-200 text-slate-600 font-bold rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                >
                    Ver Todas no Mapa
                    <LayoutGrid className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </button>
            </div>
        </section>
        
        {/* Shop / Highlights Section */}
        <section className="py-16 bg-white border-y border-slate-100">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-3 mb-8">
                     <ShoppingCart className="w-6 h-6 text-yellow-500" />
                     <h2 className="text-2xl font-bold text-slate-800">Loja CDL & Eventos</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {productsData.map(product => (
                        <div key={product.id} className="flex gap-4 p-4 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow cursor-pointer bg-slate-50" onClick={() => handleViewProduct(product)}>
                             <img src={product.image} className="w-24 h-24 rounded-lg object-cover" alt={product.title} />
                             <div>
                                 <span className="text-[10px] font-bold text-blue-600 uppercase bg-blue-100 px-2 py-0.5 rounded-full">{product.type}</span>
                                 <h3 className="font-bold text-slate-800 mt-1">{product.title}</h3>
                                 <p className="text-slate-500 text-xs mt-1 line-clamp-2">{product.description}</p>
                                 <div className="mt-2 font-bold text-slate-900">R$ {product.price},00</div>
                             </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <ServicesSection onViewService={handleViewService} />
        <CommercialGuide />
        <JobBoard jobs={JOB_OPPORTUNITIES} />
        <TVLojista />
        
        {/* Use Dynamic News Data */}
        <NewsSection news={newsData} onViewNews={handleViewNews} />
        
        <EventGallery />

        {/* CTA */}
        <section className="py-32 relative overflow-hidden parallax-bg" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")' }}>
          <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent"></div>

          <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
              <span className="text-yellow-400 font-bold tracking-[0.2em] uppercase text-sm mb-6 block animate-pulse-soft">Faça parte do sucesso</span>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight max-w-4xl">
                A força do comércio <br/>move nossa cidade
              </h2>
              <p className="text-blue-100 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl">
                Mais de 1.500 empresas já fazem parte da CDL Sorriso. Acesse benefícios exclusivos e fortaleça sua rede de contatos.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-yellow-400 text-blue-950 font-bold py-4 px-10 rounded-full hover:bg-yellow-300 transition-all shadow-[0_0_30px_rgba(250,204,21,0.4)] transform hover:scale-105">
                  Quero me Associar
                </button>
                <button className="bg-transparent border-2 border-white/30 text-white font-bold py-4 px-10 rounded-full hover:bg-white hover:text-blue-900 transition-all backdrop-blur-sm">
                  Conhecer Benefícios
                </button>
              </div>
          </div>
        </section>
      </main>

      <NewsTicker />
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default App;
