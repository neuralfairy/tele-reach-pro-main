import { Star, Quote } from "lucide-react";

const SocialProof = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "VP of Sales Operations",
      company: "TechCorp Global",
      content: "iGCT transformed our international sales calls. We've seen a 250% increase in call connection rates across EMEA markets.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c6ce?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      title: "Head of Customer Success",
      company: "ScaleUp Inc",
      content: "The AI-powered call analytics have given us insights we never had before. Customer satisfaction is up 40% since implementation.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emma Rodriguez",
      title: "CTO",
      company: "Innovation Labs",
      content: "Seamless integration with our existing CRM. Setup took minutes, not weeks. The reliability has been outstanding.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const logos = [
    { name: "Microsoft", width: "120" },
    { name: "Salesforce", width: "140" },
    { name: "HubSpot", width: "110" },
    { name: "Zendesk", width: "130" },
    { name: "Slack", width: "100" },
    { name: "Google", width: "120" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-green-50 border border-green-200 rounded-full text-green-800 font-medium mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            Trusted by over 8,000 organizations worldwide
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-telecom-dark mb-4">
            Join Industry Leaders
          </h2>
          <p className="text-xl text-gray-600">
            Companies worldwide rely on our cloud telephony platform
          </p>
        </div>

        {/* Company Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center mb-20 opacity-60">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className="flex items-center justify-center h-12 grayscale hover:grayscale-0 transition-all duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-2xl font-bold text-gray-400">
                {logo.name}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-gray-50 rounded-xl p-6 relative animate-fade-in"
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <Quote className="absolute top-4 right-4 w-6 h-6 text-primary/30" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-telecom-dark">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.title}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">8,000+</div>
            <div className="text-gray-600">Active Organizations</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">90+</div>
            <div className="text-gray-600">Countries Supported</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-gray-600">Uptime SLA</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;