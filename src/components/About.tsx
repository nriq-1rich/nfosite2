import React from 'react';
import { Calendar, MapPin, Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Sobre a NFO Informática</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma trajetória de quase duas décadas dedicada à excelência em tecnologia da informação 
            e segurança cibernética em Porto Alegre.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                <Calendar className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fundada em 2006</h3>
                <p className="text-gray-600">
                  Nascemos com o propósito de democratizar o acesso à tecnologia de qualidade, 
                  oferecendo soluções inovadoras e seguras para empresas de todos os portes.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                <MapPin className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Porto Alegre - RS</h3>
                <p className="text-gray-600">
                  Estrategicamente localizada no coração do Sul do Brasil, atendemos clientes 
                  regionais e nacionais com a mesma dedicação e qualidade.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
                <Target className="h-6 w-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Foco em Segurança</h3>
                <p className="text-gray-600">
                  Especializados em segurança cibernética, oferecemos proteção completa contra 
                  as ameaças digitais mais sofisticadas do mercado atual.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nossa Missão</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Proteger e potencializar negócios através de soluções tecnológicas inovadoras, 
              garantindo segurança, eficiência e crescimento sustentável para nossos clientes.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">18+</div>
                <div className="text-sm text-gray-600">Anos de Mercado</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">500+</div>
                <div className="text-sm text-gray-600">Clientes Atendidos</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nossos Valores</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Comprometimento</h4>
              <p className="text-gray-600">
                Dedicação total ao sucesso de nossos clientes, com atendimento personalizado e soluções sob medida.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Excelência</h4>
              <p className="text-gray-600">
                Busca constante pela qualidade superior em todos os serviços e soluções oferecidas.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-red-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Inovação</h4>
              <p className="text-gray-600">
                Sempre à frente das tendências tecnológicas, oferecendo as mais modernas soluções do mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;