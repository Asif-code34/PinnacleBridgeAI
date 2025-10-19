import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import logo from '../pages/images/logo.PNG'

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', submenu: [
      { name: 'Website Development', href: '/services/website-development' },
      { name: 'Mobile App Development', href: '/services/mobile-app-development' },
      { name: 'UI/UX Design', href: '/services/ui-ux-design' },
      { name: 'E-commerce Development', href: '/services/ecommerce-development' },
      { name: 'Custom Software', href: '/services/custom-software' },
      { name: 'Website Maintenance', href: '/services/website-maintenance' },
    ]},
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-lift">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-[#00E1A1] to-[#00FF66] flex items-center justify-center">
             {/* <span className="text-black font-bold text-xl">P</span>*/}
              <img src={logo}/>
            </div>
            <span className="text-xl font-bold gradient-text bg-gradient-to-r from-[#00E1A1] to-[#00FF66]">Pinnacle Bridge AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="text-foreground hover:text-neon-green transition-colors duration-300 font-medium"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-gradient-to-r from-[#00E1A1] to-[#00FF66] hover:text-black transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <ThemeToggle />
            <Link
              to="/contact"
              className="bg-gradient-to-r from-[#00E1A1] to-[#00FF66] hover:from-[#00CC8A] hover:to-[#00E659] text-black px-6 py-2 rounded-lg font-medium    transition-all duration-300 hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-neon-green transition-colors duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border border-border rounded-lg mt-2 animate-fade-in">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-foreground hover:text-neon-green transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-neon-green transition-colors duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="block w-full text-center btn-neon bg-gradient-to-r from-[#00E1A1] to-[#00FF66] text-black px-6 py-2 rounded-lg font-medium   transition-all duration-300 mt-4"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
