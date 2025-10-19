import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Palette, Users, Lightbulb, Target, Eye, Layers, Figma } from 'lucide-react';

export default function UIUXDesign() {
  const features = [
    {
      icon: Eye,
      title: "UX Research & Wireframes",
      description: "Deep user research and strategic wireframes that map user journeys"
    },
    {
      icon: Palette,
      title: "UI Prototypes", 
      description: "High-fidelity interactive prototypes that bring your vision to life"
    },
    {
      icon: Layers,
      title: "Design Systems",
      description: "Scalable design systems with components and style guides"
    },
    {
      icon: Users,
      title: "User Testing",
      description: "Validate designs with real users for optimal experience"
    },
    {
      icon: Target,
      title: "Developer Handoff",
      description: "Pixel-perfect specifications and assets for seamless development"
    },
    {
      icon: Lightbulb,
      title: "Design Strategy",
      description: "Strategic design thinking aligned with business goals"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Research & Discovery",
      description: "Understanding users, competitors, and business requirements"
    },
    {
      step: "02", 
      title: "Wireframing & Planning",
      description: "Creating user flows and low-fidelity wireframes"
    },
    {
      step: "03",
      title: "Visual Design",
      description: "High-fidelity designs with brand consistency"
    },
    {
      step: "04",
      title: "Prototyping & Testing",
      description: "Interactive prototypes and user testing validation"
    }
  ];

  const tools = ["Figma", "Adobe XD", "Sketch", "Principle", "InVision", "Miro"];

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
                UI/UX <span className="gradient-text">Design</span> Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We design intuitive, modern, and user-centered interfaces that keep users engaged and create impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-[#00E1A1] to-[#00FF66] hover:from-[#00CC8A] hover:to-[#00E659] text-black px-8 py-4 rounded-lg font-medium  transition-all duration-300 hover:scale-105 neon-glow text-center"
                >
                  Let's Design Together
                </Link>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 rounded-lg font-medium border border-neon-green text-neon-green hover:bg-gradient-to-r from-[#00E1A1] to-[#00FF66] hover:text-black transition-all duration-300 hover:scale-105 text-center"
                >
                  View Our Designs
                </Link>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 animate-slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">What's Included:</h3>
              <ul className="space-y-3">
                {["UX Research & Wireframes", "UI Prototypes", "Design Systems", "Developer Handoff"].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-neon-green mr-3 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <p className="text-muted-foreground"><strong>Tools:</strong> Figma, Adobe XD, Sketch</p>
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
              Complete Design Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From research to final handoff, we create designs that users love and businesses need.
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

      {/* Tools */}
      <section className="px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Design Tools We Use
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Industry-leading tools for creating exceptional user experiences.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div
                key={tool}
                className="bg-card border border-border rounded-lg p-4 text-center hover-lift hover:border-neon-green transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-foreground font-medium">{tool}</div>
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
              Our Design Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures designs that work for users and business.
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
            Ready to Create <span className="gradient-text">Amazing Designs?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's design interfaces that your users will love and that drive business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className=" text-black px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105  text-center bg-gradient-to-r from-[#00E1A1] to-[#00FF66] hover:from-[#00CC8A] hover:to-[#00E659]"
            >
              Start Design Project
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 rounded-lg font-medium border border-neon-green text-neon-green hover:bg-gradient-to-r from-[#00E1A1] to-[#00FF66] hover:text-black transition-all duration-300 hover:scale-105 text-center"
            >
              View Design Examples
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
