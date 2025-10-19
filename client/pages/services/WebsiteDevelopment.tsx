import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Code, Smartphone, Search, Zap, Shield, Headphones } from 'lucide-react';

export default function WebsiteDevelopment() {
  const features = [
    {
      icon: Code,
      title: "Fully Custom Design",
      description: "Unique designs tailored to your brand, no templates"
    },
    {
      icon: Smartphone,
      title: "Mobile-Optimized Design", 
      description: "Perfect experience across all devices and screen sizes"
    },
    {
      icon: Search,
      title: "SEO & Speed Optimization",
      description: "Built for search engines and lightning-fast performance"
    },
    {
      icon: Zap,
      title: "CMS Integration",
      description: "Easy content management with WordPress, Sanity, or custom CMS"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "SSL certificates, secure hosting, and regular updates"
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description: "Post-launch maintenance and technical support"
    }
  ];

  const techStack = [
    { name: "HTML5", category: "Frontend" },
    { name: "CSS3", category: "Frontend" },
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "WordPress", category: "CMS" },
    { name: "Sanity", category: "CMS" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, target audience, and business goals to create a detailed project roadmap."
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Our designers create wireframes and high-fidelity mockups that align with your brand identity."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your website using modern technologies, ensuring cross-browser compatibility and performance."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your website and provide ongoing maintenance, updates, and technical support."
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$2,999",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 5 pages",
        "Responsive design",
        "Basic SEO setup",
        "Contact form",
        "3 months support"
      ]
    },
    {
      name: "Professional",
      price: "$5,999",
      description: "Ideal for growing businesses",
      features: [
        "Up to 15 pages",
        "Custom CMS integration",
        "Advanced SEO",
        "E-commerce ready",
        "6 months support",
        "Analytics setup"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale projects",
      features: [
        "Unlimited pages",
        "Custom development",
        "API integrations",
        "Advanced security",
        "1 year support",
        "Dedicated manager"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Breadcrumb */}
      <section className="px-6 lg:px-8 mb-8">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/services"
            className="inline-flex items-center text-muted-foreground hover:text-neon-green transition-colors duration-300"
          >
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
                Website <span className="gradient-text">Development</span> Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Clean, scalable websites that are designed to perform and convert — built using the latest technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-[#00E1A1] to-[#00FF66] text-black px-8 py-4 rounded-lg font-medium  hover:from-[#00CC8A] hover:to-[#00E659]  transition-all duration-300 hover:scale-105 "
                >
                  Get a Free Quote
                </Link>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 rounded-lg font-medium border border-neon-green text-neon-green hover:bg-gradient-to-r from-[#00E1A1] to-[#00FF66] hover:text-black transition-all duration-300 hover:scale-105"
                >
                  View Our Work
                </Link>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 animate-slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">What's Included:</h3>
              <ul className="space-y-3">
                {["Fully Custom Design", "CMS Integration", "Mobile-Optimized Design", "SEO & Speed Optimization"].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-neon-green mr-3 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 lg:px-8 mb-20 bg-card py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Website Development?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We build websites that not only look great but perform exceptionally well.
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

      {/* Tech Stack */}
      <section className="px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We use modern, proven technologies to build fast, secure, and scalable websites.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="bg-card border border-border rounded-lg p-4 text-center hover-lift hover:border-neon-green transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-sm text-muted-foreground mb-1">{tech.category}</div>
                <div className="text-foreground font-medium">{tech.name}</div>
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
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures your website is delivered on time and exceeds expectations.
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

      {/* Pricing */}
      <section className="px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Website Development Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with no hidden costs. Choose the package that fits your needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div
                key={plan.name}
                className={`bg-card border rounded-lg p-8 hover-lift transition-all duration-300 animate-fade-in ${
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
                    ? 'bg-gradient-to-r from-[#00E1A1] to-[#00FF66] text-black hover:from-[#00CC8A] hover:to-[#00E659]'
                    : 'border border-neon-green text-neon-green hover:bg-gradient-to-r from-[#00E1A1] to-[#00FF66] hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center bg-card border border-border rounded-lg p-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Build Your <span className="gradient-text">Website?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project requirements and create a website that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#00E1A1] to-[#00FF66] text-black px-8 py-4 rounded-lg font-medium hover:bg-neon-green-bright transition-all duration-300 hover:scale-105 neon-glow"
            >
              Start Your Project
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 rounded-lg font-medium border border-neon-green text-neon-green hover:bg-gradient-to-r from-[#00E1A1] to-[#00FF66] hover:text-black transition-all duration-300 hover:scale-105"
            >
              View Examples
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
