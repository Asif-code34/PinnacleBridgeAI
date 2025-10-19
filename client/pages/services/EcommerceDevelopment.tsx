import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ShoppingCart, CreditCard, Smartphone, Search, Shield, TrendingUp } from 'lucide-react';

export default function EcommerceDevelopment() {
  const features = [
    {
      icon: ShoppingCart,
      title: "Shopify / WooCommerce",
      description: "Expert development on leading e-commerce platforms"
    },
    {
      icon: CreditCard,
      title: "Payment Integration", 
      description: "Secure payment gateways including Stripe, PayPal, Razorpay"
    },
    {
      icon: Search,
      title: "Product Filtering",
      description: "Advanced search and filtering for better product discovery"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Optimized shopping experience across all devices"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "PCI DSS compliance and advanced security measures"
    },
    {
      icon: TrendingUp,
      title: "Analytics & SEO",
      description: "Built-in analytics and SEO optimization for better visibility"
    }
  ];

  const platforms = [
    {
      name: "Shopify",
      description: "Custom themes and apps for Shopify stores"
    },
    {
      name: "WooCommerce",
      description: "WordPress-based e-commerce solutions"
    },
    {
      name: "Custom Solutions",
      description: "Fully custom e-commerce platforms"
    },
    {
      name: "Magento",
      description: "Enterprise-level e-commerce development"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Store Planning",
      description: "Understanding your products, target audience, and business goals"
    },
    {
      step: "02", 
      title: "Design & UX",
      description: "Creating user-friendly designs that convert visitors to customers"
    },
    {
      step: "03",
      title: "Development",
      description: "Building your store with all necessary features and integrations"
    },
    {
      step: "04",
      title: "Launch & Optimize",
      description: "Going live and optimizing for performance and conversions"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Breadcrumb */}
      <section className="px-6 lg:px-8 mb-8">
        <div className="mx-auto max-w-7xl">
          <Link to="/services" className="inline-flex items-center text-muted-foreground hover:text-neon-green transition-colors duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Services
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                E-commerce <span className="gradient-text">Development</span> Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                High-performing, secure, and modern online stores that sell 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="text-black px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 neon-glow text-center bg-gradient-to-r from-[#00E1A1] to-[#00FF66] hover:from-[#00CC8A] hover:to-[#00E659]"
                >
                  Get a Free Store Audit
                </Link>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 rounded-lg font-medium border border-neon-green text-neon-green hover:bg-gradient-to-r from-[#00E1A1] to-[#00FF66] hover:text-black transition-all duration-300 hover:scale-105 text-center"
                >
                  View Store Examples
                </Link>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 animate-slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">What We Offer:</h3>
              <ul className="space-y-3">
                {["Shopify / WooCommerce", "Payment integration", "Product filtering", "Mobile-first design"].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-neon-green mr-3 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <p className="text-muted-foreground"><strong>Tech:</strong> Shopify, WooCommerce, Stripe, Razorpay</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 lg:px-8 mb-20 bg-card py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Complete E-commerce Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build, launch, and grow your online store.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-background border border-border rounded-lg p-6 hover-lift hover:border-neon-green transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="h-10 w-10 text-neon-green mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              E-commerce Platforms
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We work with all major e-commerce platforms to build your perfect store.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform, index) => (
              <div
                key={platform.name}
                className="bg-card border border-border rounded-lg p-6 hover-lift hover:border-neon-green transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">{platform.name}</h3>
                <p className="text-muted-foreground">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 lg:px-8 mb-20 bg-card py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our E-commerce Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology for building stores that convert and scale.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <div
                key={phase.step}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-neon-green text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center bg-card border border-border rounded-lg p-8 md:p-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Launch Your <span className="gradient-text">Online Store?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's build an e-commerce platform that converts visitors into customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className=" text-black px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 neon-glow text-center bg-gradient-to-r from-[#00E1A1] to-[#00FF66] hover:from-[#00CC8A] hover:to-[#00E659]"
            >
              Start E-commerce Project
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 rounded-lg font-medium border border-neon-green  hover:text-black transition-all duration-300 hover:scale-105 text-center hover:text-black hover:bg-gradient-to-r from-[#00E1A1] to-[#00FF66]"
            >
              View Store Examples
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
