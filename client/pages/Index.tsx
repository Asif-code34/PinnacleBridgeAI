import { Link } from 'react-router-dom';
import { ArrowRight, Check, Code, Smartphone, Palette, ShoppingCart, Settings, Shield, Star, ExternalLink } from 'lucide-react';

export default function Index() {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Clean, scalable websites built to convert and perform.",
      href: "/services/website-development"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development", 
      description: "Cross-platform apps with stunning UI and solid backend.",
      href: "/services/mobile-app-development"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-first interfaces that your customers will love.",
      href: "/services/ui-ux-design"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Customized online stores that sell 24/7.",
      href: "/services/ecommerce-development"
    },
    {
      icon: Settings,
      title: "Custom Software",
      description: "Tailor-made digital products to match your business goals.",
      href: "/services/custom-software"
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "We've got your back—updates, security, and support.",
      href: "/services/website-maintenance"
    }
  ];

  const whyChooseUs = [
    "Custom-Built, No Templates",
    "Fast Turnaround & Scalable Code", 
    "Transparent Communication",
    "Mobile-First Approach",
    "Post-Launch Support",
    "SEO-Optimized Development"
  ];

  const blogPosts = [
    "Top Web Development Trends in 2025",
    "Why SEO Matters From Day One",
    "Mobile App vs Web App – What Should You Build?"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-50"></div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Building Modern Websites &{' '}
              <span className="gradient-text">Apps That Drive Real Results</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              At Weblix Solution, we design and develop digital experiences that empower startups and businesses to grow faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-neon bg-gradient-to-r from-[#00E1A1] to-[#00FF66] text-black px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:from-[#00CC8A] hover:to-[#00E659] neon-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
              >
                Get a Free Quote
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 rounded-lg font-medium border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r from-[#00E1A1] to-[#00FF66]"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Development Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                to={service.href}
                className="group bg-background border border-border rounded-lg p-6 hover-lift hover:border-neon-green transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <service.icon className="h-12 w-12 text-neon-green mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex items-center text-neon-green group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-neon-green font-medium hover:text-neon-green-bright transition-colors duration-300"
            >
              Explore All Services
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Us
              </h2>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={item} className="flex items-center" style={{ animationDelay: `${index * 100}ms` }}>
                    <Check className="h-5 w-5 text-neon-green mr-3 flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 animate-fade-in">
              <h3 className="text-2xl font-bold text-foreground mb-4">Featured Project</h3>
              <h4 className="text-xl font-semibold text-neon-green mb-2">EcomFlow – Shopify Store for Lifestyle Brand</h4>
              <p className="text-muted-foreground mb-4">Tech Used: Shopify, Liquid, JS</p>
              <Link
                to="/portfolio"
                className="inline-flex items-center text-neon-green font-medium hover:text-neon-green-bright transition-colors duration-300"
              >
                See Our Full Portfolio
                <ExternalLink className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 lg:px-8 bg-card">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="bg-background border border-border rounded-lg p-8 animate-fade-in">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-neon-green fill-current" />
              ))}
            </div>
            <blockquote className="text-lg text-foreground mb-4">
              "Weblix Solution helped us launch in 6 weeks flat. The design is clean, the backend is solid, and their support is incredible."
            </blockquote>
            <cite className="text-muted-foreground font-medium">— Rohit Sharma, Tryonic App</cite>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Latest Blog Posts
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={post}
                className="bg-card border border-border rounded-lg p-6 hover-lift hover:border-neon-green transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-2">{post}</h3>
                <Link
                  to="/blog"
                  className="inline-flex items-center text-neon-green font-medium hover:text-neon-green-bright transition-colors duration-300"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-flex items-center text-neon-green font-medium hover:text-neon-green-bright transition-colors duration-300"
            >
              Explore More
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 lg:px-8 bg-card text-center">
        <div className="mx-auto max-w-4xl animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Build Your <span className="gradient-text">Digital Product?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's turn your idea into a powerful, functional, and beautiful product.
          </p>
          <Link
            to="/contact"
            className="btn-neon bg-gradient-to-r from-[#00E1A1] to-[#00FF66] text-black px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:scale-105 hover:brightness-110  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
