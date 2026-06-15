import React from 'react';
import { Award, Users, Shield } from 'lucide-react';

const Partners = () => {
  return (
    <section id="parceiros" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Parceiros e Certificações</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabalhamos com os principais players do mercado e mantemos as mais importantes certificações do setor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <img 
                src="/DEXNM.png"
                alt="Dell Expert Network Member"
                className="h-20 mx-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="hidden h-20 items-center justify-center" style={{display: 'none'}}>
                <Award className="h-16 w-16 text-blue-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Dell Expert Network</h3>
            <p className="text-gray-600">
              Membro da rede de especialistas Dell, garantindo expertise técnica avançada e acesso às mais modernas soluções Dell Technologies.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="mb-6">
              <img 
                src="/coopti.png"
                alt="CoopTI"
                className="h-20 mx-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="hidden h-20 items-center justify-center" style={{display: 'none'}}>
                <Users className="h-16 w-16 text-green-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Membro CoopTI</h3>
            <p className="text-gray-600">
              Participação ativa na Associação de Tecnologia da Informação, promovendo colaboração e desenvolvimento do setor.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="mb-6 flex items-center justify-center">
              <div className="bg-red-100 p-4 rounded-full">
                <Shield className="h-12 w-12 text-red-600" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Segurança Certificada</h3>
            <p className="text-gray-600">
              Especialização em segurança cibernética com certificações e metodologias reconhecidas internacionalmente.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Por que Escolher a NFO?</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">18+</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Anos de Experiência</h4>
              <p className="text-gray-600 text-sm">Desde 2006 no mercado de TI</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">24/7</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Monitoramento</h4>
              <p className="text-gray-600 text-sm">Suporte e monitoramento contínuo</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">500+</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Clientes Satisfeitos</h4>
              <p className="text-gray-600 text-sm">Empresas que confiam em nós</p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">100%</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Segurança</h4>
              <p className="text-gray-600 text-sm">Proteção total garantida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;