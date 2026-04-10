import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#work" },
    { label: "SKILLS", href: "#skills" },
    { label: "CONTACT", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 max-w-7xl">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            {/* Stylized DA Logo */}
            <div className="w-10 h-10 flex items-center justify-center">
              <svg 
                viewBox="0 0 40 40" 
                className="w-full h-full"
                fill="none"
              >
                {/* Left chevron */}
                <path 
                  d="M 10 10 L 20 20 L 10 30" 
                  stroke="url(#gradient)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                {/* Right chevron */}
                <path 
                  d="M 20 10 L 30 20 L 20 30" 
                  stroke="url(#gradient)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(178 100% 50%)" />
                    <stop offset="100%" stopColor="hsl(188 95% 48%)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="font-bold text-lg hidden sm:inline text-foreground">DNYANESH ADKAR</span>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex gap-8"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors duration-200 tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4 space-y-3"
          >
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-sm font-semibold text-foreground/80 hover:text-primary transition-colors duration-200 py-2"
              >
                {item.label}
              </button>
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;
