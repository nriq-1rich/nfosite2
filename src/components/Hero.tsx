import React from 'react';
import { Shield, ArrowRight, Award, Users } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-gradient-to-br from-red-50 to-white pt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23dc2626%22 fill-opacity=%220.03%22 fill-rule=%22evenodd%22%3E%3Cpath d=%22M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20zM0 0v40c11.046 0 20-8.954 20-20S11.046 0 0 0z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-red-600 font-semibold">
                <Shield className="h-5 w-5" />
                <span>Segurança Cibernética & TI</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Protegendo sua
                <span className="text-red-600 block">Infraestrutura Digital</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Desde 2006, a NFO Informática é referência em segurança cibernética e serviços de TI em Porto Alegre, 
                oferecendo soluções completas para proteger e otimizar sua empresa.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contato')}
                className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-300 font-semibold flex items-center justify-center group shadow-lg hover:shadow-xl"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 font-semibold"
              >
                Nossos Serviços
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="bg-red-100 p-2 rounded-lg">
                  <Award className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">18+ Anos</p>
                  <p className="text-sm text-gray-600">de Experiência</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <img 
                    src="/DEXNM.png"
                    alt="Dell Expert Network"
                    className="h-6 w-6 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <Users className="h-6 w-6 text-blue-600 hidden" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Dell Expert</p>
                  <p className="text-sm text-gray-600">Network Member</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-xl p-6 text-white">
                <Shield className="h-16 w-16 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Segurança Garantida</h3>
                <p className="text-red-100">
                  Proteção completa contra ameaças cibernéticas com tecnologia de ponta e expertise comprovada.
                </p>
              </div>
              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Monitoramento 24/7</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Backup Automático</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Firewall Avançado</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;