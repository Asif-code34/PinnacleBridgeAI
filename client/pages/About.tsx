import { Link } from 'react-router-dom';
import { Target, Eye, CheckCircle, Users, Award, Clock, Shield, Lightbulb, TrendingUp } from 'lucide-react';

export default function About() {
  const coreValues = [
    {
      icon: Award,
      title: "Quality Over Quantity",
      description: "We focus on delivering exceptional results rather than rushing through projects."
    },
    {
      icon: Users,
      title: "Transparent Communication",
      description: "Clear, honest communication throughout every project milestone."
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Always learning and adapting to the latest technologies and best practices."
    },
    {
      icon: Users,
      title: "User-First Thinking",
      description: "Every decision we make prioritizes the end user's experience and needs."
    },
    {
      icon: Lightbulb,
      title: "Innovation-Driven",
      description: "Pushing boundaries with creative solutions and cutting-edge technology."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  const whyChooseUs = [
    "Custom-Built Solutions, No Templates",
    "Fast Turnaround & Scalable Code",
    "Mobile-First Development Approach",
    "Post-Launch Support & Maintenance",
    "SEO-Optimized from Day One",
    "Transparent Pricing & Communication"
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                About <span className="gradient-text">Pinnacle Bridge AI</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Pinnacle Bridge Ai is a modern digital agency helping startups and businesses bring their ideas to life through web, app, and UI/UX design services.
              </p>
              <Link
                to="/contact"
                className="btn-neon bg-neon-green text-black px-8 py-4 rounded-lg font-medium hover:bg-neon-green-bright transition-all duration-300 hover:scale-105 neon-glow"
              >
                Get in Touch
              </Link>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 animate-slide-up">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-neon-green mb-2">{stat.number}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 lg:px-8 mb-20 bg-card py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-background border border-border rounded-lg p-8 animate-fade-in">
              <Target className="h-12 w-12 text-neon-green mb-6" />
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg">
                To empower businesses with scalable and beautiful digital products that drive real growth and create meaningful connections with their customers.
              </p>
            </div>
            <div className="bg-background border border-border rounded-lg p-8 animate-fade-in">
              <Eye className="h-12 w-12 text-neon-green mb-6" />
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg">
                To be a trusted global partner in the development ecosystem, known for delivering innovative solutions that transform ideas into successful digital realities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every project we deliver.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                className="bg-card border border-border rounded-lg p-6 hover-lift hover:border-neon-green transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <value.icon className="h-10 w-10 text-neon-green mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 lg:px-8 mb-20 bg-card py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Weblix Solution?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                We combine technical expertise with creative vision to deliver solutions that not only look great but perform exceptionally.
              </p>
            </div>
            <div className="animate-fade-in">
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={item} className="flex items-center" style={{ animationDelay: `${index * 100}ms` }}>
                    <CheckCircle className="h-5 w-5 text-neon-green mr-3 flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures your project is delivered on time, within budget, and exceeds expectations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your vision and requirements" },
              { step: "02", title: "Design", description: "Creating wireframes and visual designs" },
              { step: "03", title: "Development", description: "Building your solution with best practices" },
              { step: "04", title: "Launch", description: "Deployment and ongoing support" }
            ].map((phase, index) => (
              <div
                key={phase.step}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-neon-green text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center bg-card border border-border rounded-lg p-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-neon bg-neon-green text-black px-8 py-4 rounded-lg font-medium hover:bg-neon-green-bright transition-all duration-300 hover:scale-105 neon-glow"
            >
              Start Your Project
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 rounded-lg font-medium border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 hover:scale-105"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
