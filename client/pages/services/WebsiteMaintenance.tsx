import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Shield, Zap, Monitor, AlertTriangle, Clock, Headphones } from 'lucide-react';

export default function WebsiteMaintenance() {
  const features = [
    {
      icon: Shield,
      title: "Backups & Monitoring",
      description: "Automated daily backups and 24/7 uptime monitoring"
    },
    {
      icon: AlertTriangle,
      title: "Security Patches", 
      description: "Regular security updates and vulnerability assessments"
    },
    {
      icon: Zap,
      title: "Speed & SEO Optimization",
      description: "Performance optimization and SEO improvements"
    },
    {
      icon: Monitor,
      title: "Bug Fixing",
      description: "Quick resolution of issues and technical problems"
    },
    {
      icon: Clock,
      title: "Content Updates",
      description: "Regular content updates and feature additions"
    },
    {
      icon: Headphones,
      title: "Priority Support",
      description: "Dedicated support team for urgent issues"
    }
  ];

  const plans = [
    {
      name: "Basic",
      price: "$199/month",
      description: "Essential maintenance for small websites",
      features: [
        "Weekly backups",
        "Monthly security updates",
        "Basic performance monitoring",
        "Email support",
        "Up to 2 hours of updates"
      ]
    },
    {
      name: "Professional",
      price: "$399/month",
      description: "Comprehensive maintenance for business sites",
      features: [
        "Daily backups",
        "Weekly security updates",
        "Advanced monitoring",
        "Priority support",
        "Up to 5 hours of updates",
        "Monthly reports"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799/month",
      description: "Full-service maintenance for large sites",
      features: [
        "Real-time backups",
        "Daily security scans",
        "Performance optimization",
        "24/7 support",
        "Unlimited updates",
        "Dedicated manager"
      ]
    }
  ];

  const services = [
    "Regular WordPress/CMS updates",
    "Plugin and theme updates",
    "Database optimization",
    "Broken link checking",
    "Form testing and optimization",
    "Mobile responsiveness checks"
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
                Website <span className="gradient-text">Maintenance</span> Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We handle speed, security, and updates so you can focus on growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-[#00E1A1] to-[#00FF66] text-black px-8 py-4 rounded-lg font-medium hover:from-[#00CC8A] hover:to-[#00E659] transition-all duration-300 hover:scale-105  text-center"
                >
                  Book a Maintenance Plan
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-lg font-medium border border-neon-green text-neon-green hover:bg-gradient-to-r from-[#00E1A1] to-[#00FF66] hover:text-black transition-all duration-300 hover:scale-105 text-center"
                >
                  Get Free Audit
                </Link>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 animate-slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">Services Include:</h3>
              <ul className="space-y-3">
                {["Backups & monitoring", "Security patches", "Speed & SEO optimization", "Bug fixing"].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-neon-green mr-3 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <p className="text-muted-foreground"><strong>Response Time:</strong> Within 24 hours for all plans</p>
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
              Complete Website Care
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive maintenance services to keep your website secure, fast, and up-to-date.
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

      {/* Additional Services */}
      <section className="px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What's Included
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive maintenance tasks to ensure optimal website performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div
                key={service}
                className="bg-card border border-border rounded-lg p-4 hover-lift hover:border-neon-green transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-neon-green mr-3 flex-shrink-0" />
                  <span className="text-foreground">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 lg:px-8 mb-20 bg-card py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Maintenance Plans
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the maintenance plan that fits your website's needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`bg-background border rounded-lg p-8 hover-lift transition-all duration-300 animate-fade-in ${
                  plan.popular ? 'border-neon-green scale-105' : 'border-border hover:border-neon-green'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="bg-neon-green text-black text-sm font-medium py-1 px-3 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-neon-green mb-2">{plan.price}</div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-neon-green mr-3 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`w-full inline-block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                    plan.popular
                      ? 'bg-neon-green text-black hover:bg-gradient-to-r from-[#00E1A1] to-[#00FF66]'
                      : 'border border-neon-green text-neon-green hover:bg-gradient-to-r from-[#00E1A1] to-[#00FF66] hover:text-black'
                  }`}
                >
                  Choose Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center bg-card border border-border rounded-lg p-8 md:p-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Keep Your Website <span className="gradient-text">Running Smoothly</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Regular maintenance ensures your website stays secure, fast, and up-to-date.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#00E1A1] to-[#00FF66] text-black px-8 py-4 rounded-lg font-medium hover:bg-neon-green-bright transition-all duration-300 hover:scale-105 text-center"
            >
              Get Maintenance Quote
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-lg font-medium border border-neon-green text-neon-green hover:bg-gradient-to-r from-[#00E1A1] to-[#00FF66] hover:text-black transition-all duration-300 hover:scale-105 text-center"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
