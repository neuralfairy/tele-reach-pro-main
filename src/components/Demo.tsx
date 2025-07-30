import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Settings, BarChart3, ArrowRight, Globe, Phone } from "lucide-react";

const Demo = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Choose Region",
      description: "Select your target markets and get local numbers instantly",
      icon: MapPin,
      content: (
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["United States", "United Kingdom", "Germany", "Japan", "Australia", "Brazil"].map((country) => (
              <div key={country} className="p-4 border-2 border-gray-200 rounded-lg hover:border-primary cursor-pointer transition-colors">
                <div className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Set Routing Rules",
      description: "Configure intelligent call routing and IVR settings",
      icon: Settings,
      content: (
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="font-medium">Business Hours Routing</span>
              <div className="w-12 h-6 bg-primary rounded-full flex items-center justify-end px-1">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="font-medium">AI Call Transcription</span>
              <div className="w-12 h-6 bg-primary rounded-full flex items-center justify-end px-1">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <span className="font-medium">CRM Integration</span>
              <div className="w-12 h-6 bg-gray-300 rounded-full flex items-center justify-start px-1">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Track Live Metrics",
      description: "Monitor call performance and analytics in real-time",
      icon: BarChart3,
      content: (
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">98.5%</div>
              <div className="text-sm text-gray-600">Call Success Rate</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">1.2s</div>
              <div className="text-sm text-gray-600">Avg Connect Time</div>
            </div>
          </div>
          <div className="h-32 bg-gradient-to-r from-primary/20 to-primary/40 rounded-lg flex items-end p-4">
            <div className="text-sm text-gray-600">Live call volume visualization</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-telecom-dark mb-6">
            See iGCT in <span className="text-primary">Action</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with global cloud telephony in three simple steps
          </p>
        </div>

        {/* Demo Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps Navigation */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`cursor-pointer transition-all duration-300 ${
                  activeStep === step.id
                    ? 'opacity-100'
                    : 'opacity-60 hover:opacity-80'
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                    activeStep === step.id
                      ? 'bg-primary text-white shadow-glow-blue'
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-semibold text-primary">
                        Step {step.id}
                      </span>
                      {activeStep === step.id && (
                        <ArrowRight className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-telecom-dark mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Demo Content */}
          <div className="animate-fade-in">
            {steps.find(step => step.id === activeStep)?.content}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-telecom-gradient-dark rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to experience iGCT yourself?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Book a 10-minute consultation with our cloud specialists and see how iGCT can transform your global communications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="bg-white text-telecom-dark hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
              <Button variant="cta-outline" size="lg" className="border-white text-white hover:bg-white hover:text-telecom-dark">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;