import { Globe, Brain, Headphones, BarChart3, Shield, Clock, Phone, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: "Global Call Routing",
      description: "Intelligent routing across 90+ countries with local number provisioning and optimal path selection.",
    },
    {
      icon: Brain,
      title: "AI-Powered Call Recording",
      description: "Advanced transcription, sentiment analysis, and automated insights to improve your conversations.",
    },
    {
      icon: Headphones,
      title: "VoIP + CRM Sync",
      description: "Seamless integration with Salesforce, HubSpot, and other leading CRM platforms.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Live call metrics, performance dashboards, and detailed reporting for data-driven decisions.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC-2 compliance, end-to-end encryption, and advanced security protocols.",
    },
    {
      icon: Clock,
      title: "24/7 Voice Uptime",
      description: "99.9% uptime SLA with redundant infrastructure and automatic failover protection.",
    },
    {
      icon: Phone,
      title: "Multi-language IVR",
      description: "Interactive voice response in 50+ languages with smart call distribution.",
    },
    {
      icon: Zap,
      title: "Instant Provisioning",
      description: "Deploy new numbers and configure routing rules in minutes, not days.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-telecom-dark mb-6">
            Enterprise-Grade <span className="text-primary">Cloud Telephony</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Power your global communications with cutting-edge features designed for modern businesses.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-white rounded-xl p-6 shadow-elegant hover:shadow-telecom transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-telecom-gradient rounded-lg mb-4 group-hover:animate-glow-pulse">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-telecom-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold text-telecom-dark mb-4">
              Ready to scale your communications?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of businesses already using iGCT for their global telephony needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Start Free Trial
              </button>
              <button className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors">
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;