import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Email', href: '#' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-navy-deep py-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#CCFF00_1px,_transparent_1px)] bg-[size:30px_30px]"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="text-4xl font-display font-black text-lime-neon hover:scale-110 transition-transform duration-200"
          >
            Gunjan Sharma
          </button>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-lime-neon hover:text-navy-deep text-white transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-white/20"></div>

          {/* Copyright */}
          <div className="text-white/60 font-body text-sm text-center">
            © {new Date().getFullYear()} Boost. All rights reserved. Crafted with creative energy.
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group px-6 py-3 bg-white/5 hover:bg-lime-neon text-white hover:text-navy-deep rounded-full font-body font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
