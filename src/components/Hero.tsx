import { Button } from "@/components/ui/button";
import { Play, Globe, Zap, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Global Cloud Telephony Network" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-telecom-gradient-dark/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8">
            <Globe className="w-4 h-4 mr-2" />
            Trusted by 8,000+ organizations worldwide
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Connect Globally.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Speak Locally.
            </span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-white/90">
              Powered by Cloud.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Tigerspromotion's iGCT powers real-time, scalable telephony across 90+ countries with enterprise-grade security and AI-enhanced features.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <Zap className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            <Button variant="cta-outline" size="lg" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-telecom-dark">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/70">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>SOC-2 Compliant</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>GDPR Ready</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span>99.9% Uptime SLA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-glow-pulse">
        <div className="w-3 h-3 bg-primary rounded-full"></div>
      </div>
      <div className="absolute top-40 right-20 animate-glow-pulse animation-delay-1000">
        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
      </div>
      <div className="absolute bottom-40 left-20 animate-glow-pulse animation-delay-2000">
        <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;