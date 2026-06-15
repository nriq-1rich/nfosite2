import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src="/logosite.png" 
              alt="NFO Informática" 
              className="h-12 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            <div className="hidden items-center ml-3" style={{display: 'none'}}>
              <Shield className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">NFO Informática</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Início
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection('diretor')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Diretor
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Serviços
            </button>
            <button onClick={() => scrollToSection('parceiros')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Parceiros
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-red-600 transition-colors font-medium">
              Contato
            </button>
            <a 
              href="mailto:atendimento@nfo.com.br"
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center"
            >
              <Mail className="h-4 w-4 mr-2" />
              Contato
            </a>
          </nav>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-4">
            <nav className="flex flex-col space-y-4 pt-4">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left">
                Início
              </button>
              <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left">
                Sobre
              </button>
              <button onClick={() => scrollToSection('diretor')} className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left">
                Diretor
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left">
                Serviços
              </button>
              <button onClick={() => scrollToSection('parceiros')} className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left">
                Parceiros
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-red-600 transition-colors font-medium text-left">
                Contato
              </button>
              <a 
                href="mailto:atendimento@nfo.com.br"
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium text-center inline-flex items-center justify-center"
              >
                <Mail className="h-4 w-4 mr-2" />
                Contato
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;