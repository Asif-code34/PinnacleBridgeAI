import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Website Development', href: '/services/website-development' },
    { name: 'Mobile App Development', href: '/services/mobile-app-development' },
    { name: 'UI/UX Design', href: '/services/ui-ux-design' },
    { name: 'E-commerce Development', href: '/services/ecommerce-development' },
    { name: 'Custom Software', href: '/services/custom-software' },
    { name: 'Website Maintenance', href: '/services/website-maintenance' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-neon-green flex items-center justify-center">
                <span className="text-black font-bold text-xl">W</span>
              </div>
              <span className="text-xl font-bold gradient-text">Pinnacle Bridge AI</span>
            </Link>
            <p className="text-muted-foreground">
              Modern digital agency helping startups and businesses bring their ideas to life through web, app, and UI/UX design services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-neon-green" />
                <span className="text-muted-foreground">Pinnaclebridgeai@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-neon-green" />
                <span className="text-muted-foreground">+91 8740864334</span>
                  <span className="text-muted-foreground">+91 7014066291 </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-neon-green" />
                <span className="text-muted-foreground">Udaipur , Rajasthan India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-neon-green transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-muted-foreground hover:text-neon-green transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">Follow Us</h3>
            <p className="text-muted-foreground mb-4">
              Connect with us on social media for updates and insights.
            </p>
            <div className="space-y-4">
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-neon-green transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-foreground">Legal</h4>
                <ul className="space-y-2">
                  {legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-muted-foreground hover:text-neon-green transition-colors duration-300 text-sm"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="text-center">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Pinnacle Bridge AI. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
