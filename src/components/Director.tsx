import React from 'react';
import { Shield, Award, Users, ExternalLink, Linkedin, Instagram } from 'lucide-react';

const Director = () => {
  return (
    <section id="diretor" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Liderança Especializada</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça Henrique Homrich, especialista em Segurança Cibernética que lidera 
            a NFO Informática com expertise e visão estratégica.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-8 lg:p-12 space-y-8">
              <div className="flex items-center space-x-4">
                <img 
                  src="/PERFIL.png"
                  alt="Henrique Homrich"
                  className="w-20 h-20 rounded-full object-cover border-4 border-red-100"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="hidden w-20 h-20 rounded-full bg-red-100 items-center justify-center border-4 border-red-200" style={{display: 'none'}}>
                  <Shield className="h-10 w-10 text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Henrique Homrich</h3>
                  <p className="text-red-600 font-semibold">Diretor & Especialista em Segurança Cibernética</p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Especialista reconhecido em Segurança Cibernética, Henrique Homrich lidera a NFO Informática 
                  com uma visão estratégica focada na proteção e inovação tecnológica.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <img 
                        src="/DEXNM.png"
                        alt="Dell Expert Network"
                        className="h-5 w-5 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'block';
                        }}
                      />
                      <Award className="h-5 w-5 text-blue-600 hidden" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Dell Expert Network Member</h4>
                      <p className="text-gray-600">Membro da rede de especialistas Dell Technologies, reconhecendo expertise técnica avançada.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                      <Users className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Membro CoopTI</h4>
                      <p className="text-gray-600">Participação ativa na Associação de Tecnologia da Informação.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-red-100 p-2 rounded-lg flex-shrink-0">
                      <Shield className="h-5 w-5 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Especialista em Segurança Cibernética</h4>
                      <p className="text-gray-600">Formação avançada e experiência prática em proteção digital empresarial.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Conecte-se</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.linkedin.com/in/henrique-homrich-04b4801a4/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span>LinkedIn</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                    <a 
                      href="https://www.instagram.com/cooptioficial/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-colors"
                    >
                      <Instagram className="h-4 w-4" />
                      <span>Instagram</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-500 to-red-700 p-8 lg:p-12 text-white">
              <h4 className="text-2xl font-bold mb-6">Experiência & Conhecimento</h4>
              
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h5 className="font-semibold mb-2">Segurança Cibernética</h5>
                  <p className="text-red-100 text-sm">
                    Proteção avançada contra ameaças digitais, implementação de políticas de segurança e monitoramento 24/7.
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h5 className="font-semibold mb-2">Infraestrutura de TI</h5>
                  <p className="text-red-100 text-sm">
                    Planejamento e implementação de infraestruturas tecnológicas robustas e escaláveis.
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h5 className="font-semibold mb-2">Consultoria Estratégica</h5>
                  <p className="text-red-100 text-sm">
                    Análise e desenvolvimento de estratégias tecnológicas alinhadas aos objetivos de negócio.
                  </p>
                </div>

                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                  <h5 className="font-semibold mb-2">Gestão de Projetos</h5>
                  <p className="text-red-100 text-sm">
                    Liderança em projetos complexos de TI com foco em resultados e prazos.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-red-100 italic">
                  "A segurança digital não é apenas uma necessidade, é um diferencial competitivo 
                  que pode determinar o futuro de uma empresa."
                </p>
                <p className="text-white font-semibold mt-2">- Henrique Homrich</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Director;