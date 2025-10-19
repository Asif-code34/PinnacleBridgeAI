import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Smartphone, Users, Bell, Database, Cloud, Zap } from 'lucide-react';

export default function MobileAppDevelopment() {
  const features = [
    {
      icon: Smartphone,
      title: "Cross-platform Development",
      description: "Build once, deploy everywhere with Flutter and React Native"
    },
    {
      icon: Users,
      title: "User Authentication", 
      description: "Secure login systems with social media integration"
    },
    {
      icon: Bell,
      title: "Push Notifications",
      description: "Keep users engaged with timely, relevant notifications"
    },
    {
      icon: Database,
      title: "Backend Integration",
      description: "Robust backend systems for data management and APIs"
    },
    {
      icon: Cloud,
      title: "Cloud Storage",
      description: "Scalable cloud infrastructure for your app's data"
    },
    {
      icon: Zap,
      title: "Real-time Features",
      description: "Live chat, real-time updates, and instant synchronization"
    }
  ];

  const techStack = [
    { name: "Flutter", category: "Cross-Platform" },
    { name: "React Native", category: "Cross-Platform" },
    { name: "Swift", category: "iOS" },
    { name: "Kotlin", category: "Android" },
    { name: "Firebase", category: "Backend" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" }
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
                Mobile App <span className="gradient-text">Development</span> Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Weblix Solution crafts fast, reliable, and user-friendly cross-platform apps — from MVPs to full-scale products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-[#00E1A1] to-[#00FF66] hover:from-[#00CC8A] hover:to-[#00E659]  text-black px-8 py-4 rounded-lg font-medium  transition-all duration-300 hover:scale-105"
                >
                  Get in Touch
                </Link>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 rounded-lg font-medium border border-neon-green text-neon-green hover:bg-gradient-to-r from-[#00E1A1] to-[#00FF66] hover:text-black transition-all duration-300 hover:scale-105"
                >
                  View Our Apps
                </Link>
              </div>
            </div>
            <div className="bg-card border border-border rounded-lg p-8 animate-slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">What We Offer:</h3>
              <ul className="space-y-3">
                {[
                  "Cross-platform development (Flutter / React Native)",
                  "Android & iOS deployment",
                  "Backend integration", 
                  "Push notifications",
                  "Login & user features"
                ].map((item, index) => (
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
              Complete Mobile App Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept to App Store, we handle every aspect of mobile app development.
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
              Technology Stack
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tech Stack: Flutter, React Native, Firebase, Node.js
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

      {/* CTA */}
      <section className="px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center bg-card border border-border rounded-lg p-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Build Your <span className="gradient-text">Mobile App?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's turn your app idea into a successful mobile application that users love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className=" text-black px-8 py-4 rounded-lg font-medium bg-gradient-to-r from-[#00E1A1] to-[#00FF66] hover:from-[#00CC8A] hover:to-[#00E659] transition-all duration-300 hover:scale-105 neon-glow"
            >
              Start Your App Project
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 rounded-lg font-medium border border-neon-green text-neon-green hover:bg-gradient-to-r from-[#00E1A1] to-[#00FF66] hover:text-black transition-all duration-300 hover:scale-105"
            >
              View App Examples
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
