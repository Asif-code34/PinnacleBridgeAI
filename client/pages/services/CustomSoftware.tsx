import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Settings, Database, Cloud, Shield, Code, Users } from 'lucide-react';

export default function CustomSoftware() {
  const features = [
    {
      icon: Settings,
      title: "SaaS Platforms",
      description: "Scalable software-as-a-service solutions with multi-tenancy"
    },
    {
      icon: Users,
      title: "Admin Panels", 
      description: "Powerful dashboards for managing users, content, and data"
    },
    {
      icon: Database,
      title: "Inventory Management",
      description: "Custom inventory tracking and management systems"
    },
    {
      icon: Cloud,
      title: "API Integrations",
      description: "Connect with third-party services and internal systems"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Enterprise-grade security and compliance features"
    },
    {
      icon: Code,
      title: "Custom Workflows",
      description: "Tailored business logic that matches your processes"
    }
  ];

  const solutions = [
    {
      title: "CRM Systems",
      description: "Customer relationship management tailored to your sales process"
    },
    {
      title: "Business Dashboards",
      description: "Real-time analytics and reporting for data-driven decisions"
    },
    {
      title: "Workflow Automation",
      description: "Automate repetitive tasks and streamline operations"
    },
    {
      title: "Data Management",
      description: "Custom databases and data processing solutions"
    }
  ];

  const techStack = ["Laravel", "React.js", "Node.js", "Python", "MongoDB", "PostgreSQL", "AWS", "Docker"];

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
                Custom Software <span className="gradient-text">Development</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Tailored solutions like CRMs, dashboards, and internal tools — built around your workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className=" text-black px-8 py-4 rounded-lg font-medium bg-gradient-to-r from-[#00E1A1] to-[#00FF66] hover:from-[#00CC8A] hover:to-[#00E659] transition-all duration-300 hover:scale-105  text-center"
                >
                  Talk to an Expert
                </Link>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 rounded-lg font-medium border border-neon-green text-neon-green hover:bg-gradient-to-r from-[#00E1A1] to-[#00FF66] hover:text-black transition-all duration-300 hover:scale-105 text-center"
                >
                  View Solutions
                </Link>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 animate-slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">Services Include:</h3>
              <ul className="space-y-3">
                {["SaaS platforms", "Admin Panels", "Inventory management", "API integrations"].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-neon-green mr-3 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <p className="text-muted-foreground"><strong>Stack:</strong> Laravel, React.js, MongoDB, Node.js</p>
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
              Custom Software Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We build software that perfectly fits your business requirements and scales with your growth.
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

      {/* Solutions */}
      <section className="px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common types of custom software we build for businesses.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className="bg-card border border-border rounded-lg p-6 hover-lift hover:border-neon-green transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-3">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 lg:px-8 mb-20 bg-card py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern, proven technologies for building robust custom software.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={tech}
                className="bg-background border border-border rounded-lg p-4 text-center hover-lift hover:border-neon-green transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-foreground font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center bg-card border border-border rounded-lg p-8 md:p-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Build <span className="gradient-text">Custom Software?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create software solutions that perfectly fit your business processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="text-black px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-center bg-gradient-to-r from-[#00E1A1] to-[#00FF66] hover:from-[#00CC8A] hover:to-[#00E659]"
            >
              Start Custom Project
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 rounded-lg font-medium border border-neon-green text-neon-green hover:bg-gradient-to-r from-[#00E1A1] to-[#00FF66] hover:text-black transition-all duration-300 hover:scale-105 text-center"
            >
              View Custom Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
