import React from 'react';
import { Shield, Server, Cloud, Monitor, Lock, HardDrive, Wifi, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Segurança Cibernética',
      description: 'Proteção completa contra ameaças digitais com firewall avançado, antivírus corporativo e monitoramento 24/7.',
      features: ['Firewall Corporativo', 'Antivírus Avançado', 'Monitoramento 24/7', 'Análise de Vulnerabilidades']
    },
    {
      icon: Server,
      title: 'Infraestrutura de TI',
      description: 'Planejamento, implementação e manutenção de infraestruturas tecnológicas robustas e escaláveis.',
      features: ['Servidores', 'Redes Corporativas', 'Storage', 'Virtualização']
    },
    {
      icon: Cloud,
      title: 'Soluções em Nuvem',
      description: 'Migração e gerenciamento de ambientes cloud para maior flexibilidade e redução de custos.',
      features: ['Migração Cloud', 'Backup em Nuvem', 'Microsoft 365', 'AWS/Azure']
    },
    {
      icon: Monitor,
      title: 'Monitoramento Proativo',
      description: 'Supervisão contínua de sistemas e redes para prevenir problemas antes que afetem o negócio.',
      features: ['NOC 24/7', 'Alertas Automáticos', 'Relatórios Detalhados', 'Análise Preditiva']
    },
    {
      icon: Lock,
      title: 'Compliance e Auditoria',
      description: 'Adequação às normas de segurança e compliance, incluindo LGPD e padrões internacionais.',
      features: ['LGPD', 'ISO 27001', 'Auditoria de Segurança', 'Políticas de Compliance']
    },
    {
      icon: HardDrive,
      title: 'Backup e Recuperação',
      description: 'Soluções completas de backup e disaster recovery para garantir a continuidade do negócio.',
      features: ['Backup Automático', 'Disaster Recovery', 'Testes de Recuperação', 'Armazenamento Seguro']
    },
    {
      icon: Wifi,
      title: 'Redes e Conectividade',
      description: 'Projeto e implementação de redes corporativas seguras e de alta performance.',
      features: ['Redes Cabeadas', 'WiFi Corporativo', 'MPLS', 'SD-WAN']
    },
    {
      icon: Smartphone,
      title: 'Suporte Técnico',
      description: 'Atendimento especializado com diferentes níveis de SLA para garantir máxima disponibilidade.',
      features: ['Help Desk', 'Suporte Remoto', 'Manutenção Preventiva', 'SLA Personalizado']
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em TI e segurança cibernética para proteger e impulsionar seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <IconComponent className="h-6 w-6 text-red-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Precisa de uma Solução Personalizada?</h3>
          <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            Nossa equipe especializada pode desenvolver soluções sob medida para atender às necessidades específicas do seu negócio.
          </p>
          <a 
            href="mailto:atendimento@nfo.com.br"
            className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;