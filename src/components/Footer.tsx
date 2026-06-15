import React from 'react';
import { Shield, Mail, MapPin, Calendar, Linkedin, Instagram, ExternalLink } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
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
              <div className="hidden items-center" style={{display: 'none'}}>
                <Shield className="h-8 w-8 text-red-500" />
                <span className="ml-2 text-xl font-bold">NFO Informática</span>
              </div>
            </div>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
              Especialistas em segurança cibernética e serviços de TI desde 2006. 
              Protegendo e modernizando empresas em todo o Brasil.
            </p>
            
            <div className="flex items-center space-x-2 text-gray-400 mb-4">
              <Calendar className="h-4 w-4" />
              <span>Fundada em 2006 • 18+ anos de experiência</span>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>Porto Alegre - Rio Grande do Sul</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Navegação</h3>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('diretor')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Diretor
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('parceiros')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Parceiros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-500 flex-shrink-0" />
                <a 
                  href="mailto:atendimento@nfo.com.br"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  atendimento@nfo.com.br
                </a>
              </div>
              
              <div className="pt-4">
                <h4 className="font-semibold mb-3">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com/in/henrique-homrich-04b4801a4/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                    title="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://www.instagram.com/cooptioficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors flex items-center"
                    title="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 NFO Informática. Todos os direitos reservados.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Henrique Homrich - Dell Expert Network Member</span>
              <span>•</span>
              <span>Membro CoopTI</span>
            </div>
          </div>
          
          <div className="mt-4 text-center text-xs text-gray-500">
            Especialistas em Segurança Cibernética • Infraestrutura de TI • Soluções em Nuvem
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;