import { Link } from 'react-router-dom';
import { Code, Smartphone, Palette, ShoppingCart, Settings, Shield, ArrowRight, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Clean, scalable websites built to convert and perform.",
      features: [
        "Fully Custom Design",
        "CMS Integration", 
        "Mobile-Optimized Design",
        "SEO & Speed Optimization"
      ],
      tech: ["HTML5", "CSS3", "React", "WordPress", "Next.js", "Tailwind"],
      href: "/services/website-development"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Cross-platform apps with stunning UI and solid backend.",
      features: [
        "Cross-platform development (Flutter / React Native)",
        "Android & iOS deployment",
        "Backend integration",
        "Push notifications",
        "Login & user features"
      ],
      tech: ["Flutter", "React Native", "Firebase", "Node.js"],
      href: "/services/mobile-app-development"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-first interfaces that your customers will love.",
      features: [
        "UX Research & Wireframes",
        "UI Prototypes",
        "Design Systems", 
        "Developer Handoff"
      ],
      tech: ["Figma", "Adobe XD", "Sketch"],
      href: "/services/ui-ux-design"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Customized online stores that sell 24/7.",
      features: [
        "Shopify / WooCommerce",
        "Payment integration",
        "Product filtering",
        "Mobile-first design"
      ],
      tech: ["Shopify", "WooCommerce", "Stripe", "Razorpay"],
      href: "/services/ecommerce-development"
    },
    {
      icon: Settings,
      title: "Custom Software",
      description: "Tailor-made digital products to match your business goals.",
      features: [
        "SaaS platforms",
        "Admin Panels",
        "Inventory management",
        "API integrations"
      ],
      tech: ["Laravel", "React.js", "MongoDB", "Node.js"],
      href: "/services/custom-software"
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description: "We've got your back—updates, security, and support.",
      features: [
        "Backups & monitoring",
        "Security patches",
        "Speed & SEO optimization",
        "Bug fixing"
      ],
      tech: ["24/7 Support", "Monthly Reports", "Performance Monitoring"],
      href: "/services/website-maintenance"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-7xl text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Development <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            From concept to launch, we provide end-to-end digital solutions that help your business thrive in the digital landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-card border border-border rounded-lg p-8 hover-lift hover:border-neon-green transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <service.icon className="h-12 w-12 text-neon-green" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-neon-green mr-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center text-neon-green font-medium hover:text-neon-green-bright transition-colors duration-300 group"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-card border border-border rounded-lg p-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your <span className="gradient-text">Project?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create a solution that perfectly fits your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-[#00E1A1] to-[#00FF66] text-black px-8 py-4 rounded-lg font-medium hover: transition-all duration-300 hover:scale-105 neon-glow"
              >
                Get a Free Quote
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 rounded-lg font-medium border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 hover:scale-105"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
