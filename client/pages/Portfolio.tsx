import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Clock, TrendingUp, Users, Award } from 'lucide-react';

export default function Portfolio() {
  const featuredProject = {
    title: "Jkv Global Trading Platform",
    description: "JKV Global Trading CRM is a smart customer relationship management platform designed to streamline trading operations, manage clients, track deals, and enhance business efficiency seamlessly.",
    liveUrl: "https://digitalbrainscrm.vercel.app/",
    category: "Fintech",
    client: "Trading CRM",
    duration: "8 weeks",
    tech: ["React", "Node.js", "MongoDB", "Stripe API"],
    img: "client/pages/images/jkv.PNG", 
    goals: [
      "Simplify Client Management",
      "Streamline Trading Operations", 
      "Enhance Business Efficiency",
      "Boost Deal Tracking"
    ],
    deliverables: [
    "Client management system",
    "Trading dashboard & analytics",
    "Advanced security & encryption",
    "Mobile-friendly interface"
  ],
  results: [
    "Efficient client handling",
    "Real-time trade insights",
    "Robust data protection",
    "Seamless mobile experience"
  ],
  testimonial: {
    text: "JKV Global Trading CRM has transformed our trading workflow with powerful tools, excellent security, and a user-friendly design.",
    author: "Asif Shah"
  }
  };

  const projects = [
{
  id: 2,
  title: "DigitalBrains Trading Platform",
  description: "A powerful trading platform designed to simplify investment management, streamline trading operations, and provide real-time analytics with high security and a seamless user experience.",
  category: "Fintech",
  tech: ["React", "Node.js", "MongoDB", "Express.js", "Chart.js"],
  liveUrl: "https://digital-brains.vercel.app/", 
  img: "client/pages/images/trading-dashboard.PNG", // ✅ add your trading platform image here
  results: [
    "Real-time trading analytics",
    "Secure client management",
    "Streamlined operations",
    "Mobile-optimized experience"
  ]
},
  {
    id: 4,
    title: "Mizan Restaurant",
    description: "A visually appealing restaurant website...",
    category: "Restaurant",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveUrl: "https://mizanrestaurant.netlify.app",
    img: "client/pages/images/Mizan.PNG", // ✅ add image
    results: ["Visual appeal", "Menu showcase", "Mobile-friendly"]
  },
  {
    id: 5,
    title: "Crown Digital",
    description: "Landing page for 'Ella, The Robot Barista'...",
    category: "Landing Page",
    tech: ["React", "Animation", "Modern Design", "AI Theme"],
    liveUrl: "https://crowndigital.io",
    img: "client/pages/images/Crown.PNG", // ✅ add image
    results: ["Futuristic design", "AI showcase", "Interactive elements"]
  },
  {
    id: 6,
    title: "Star Wars Product Online",
    description: "A Star Wars-themed product showcase...",
    category: "E-commerce",
    tech: ["React", "Product Catalog", "Theme Design", "Shopping Cart"],
    liveUrl: "https://starwarsprdctonline.netlify.app",
    img: "client/pages/images/Star-war.PNG", // ✅ add image
    results: ["Themed design", "Product showcase", "Purchase system"]
  },
  {
    id: 7,
    title: "Power-fit",
    description: "An e-commerce web app for Gym Services...",
    category: "E-commerce",
    tech: ["React", "Tailwind Css", "Express", "Stripe"],
    liveUrl: "https://power-lift.netlify.app/",
    img: "client/pages/images/power-fit.PNG", // ✅ add image
    results: ["Full e-commerce", "Shopping cart", "Product management"]
  }
];

  const categories = ["All", "Website", "E-commerce", "MERN Stack", "Landing Page", "Finance Tool", "Developer Tool", "Utility App"];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-7xl text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Explore our real projects and see how we've helped bring digital ideas to life with innovative solutions across various industries.
          </p>
        </div>
      </section>

<section className="px-6 lg:px-8 mb-20">
  <div className="mx-auto max-w-7xl">
    <div className="bg-card border border-border rounded-lg overflow-hidden animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left: Details */}
        <div className="p-8 lg:p-12">
          <div className="inline-block px-3 py-1 bg-neon-green text-black rounded-full text-sm font-medium mb-4">
            Featured Project
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">{featuredProject.title}</h2>
          <p className="text-muted-foreground mb-6">{featuredProject.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <div className="text-sm text-muted-foreground">Category</div>
              <div className="text-foreground font-medium">{featuredProject.category}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Duration</div>
              <div className="text-foreground font-medium">{featuredProject.duration}</div>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-foreground mb-3">Tech Stack:</h4>
            <div className="flex flex-wrap gap-2">
              {featuredProject.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={featuredProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-neon-green font-medium hover:text-neon-green-bright transition-colors duration-300 group"
            >
              View Live Project
              <ExternalLink className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center text-muted-foreground font-medium hover:text-neon-green transition-colors duration-300 group"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Right: Image + Results + Testimonial */}
        <div className="bg-background p-8 lg:p-12 space-y-6">
          
          {/* ✅ Project Image */}
          <div className="w-full">
            <img 
              src={featuredProject.img} 
              alt={featuredProject.title} 
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Key Results */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
              <Award className="h-5 w-5 text-neon-green mr-2" />
              Key Results
            </h4>
            <ul className="space-y-2">
              {featuredProject.results.map((result, idx) => (
                <li key={idx} className="flex items-center">
                  <TrendingUp className="h-4 w-4 text-neon-green mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{result}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Testimonial */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="mb-4">
              <Users className="h-8 w-8 text-neon-green" />
            </div>
            <blockquote className="text-foreground mb-3 italic">
              "{featuredProject.testimonial.text}"
            </blockquote>
            <cite className="text-muted-foreground text-sm">— {featuredProject.testimonial.author}</cite>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Project Categories */}
      <section className="px-6 lg:px-8 mb-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-border text-foreground hover:border-neon-green hover:text-neon-green transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="px-6 lg:px-8 mb-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              All Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              A comprehensive showcase of our development work across different technologies and industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover-lift hover:border-neon-green transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-gradient-to-br from-background to-accent relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img className="w-full h-full" src={project.img}/>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon-green hover:text-neon-green-bright transition-colors duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-background text-foreground rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-background text-muted-foreground rounded text-xs">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    {project.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-neon-green rounded-full mr-2"></div>
                        <span className="text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center bg-card border border-border rounded-lg p-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Create Something <span className="gradient-text">Amazing?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project and see how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="btn-neon bg-neon-green text-black px-8 py-4 rounded-lg font-medium hover:bg-neon-green-bright transition-all duration-300 hover:scale-105 neon-glow"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="px-8 py-4 rounded-lg font-medium border border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 hover:scale-105"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
