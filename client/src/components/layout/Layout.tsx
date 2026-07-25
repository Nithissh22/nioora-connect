import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";

const LOGO_URL = "/logo-loader.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/support", label: "Customer Support" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <img 
            src={LOGO_URL} 
            alt="Nioora Logo" 
            className="h-10 w-10 rounded-lg object-contain"
          />
          <span className={`text-2xl font-heading font-bold tracking-tight ${scrolled ? "text-foreground" : "text-foreground"}`}>
            Nioora
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                location === link.href ? "text-primary font-semibold" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className={buttonVariants({ size: "sm", className: "rounded-full px-6 cursor-pointer" })}
          >
            Book Service
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg animate-in slide-in-from-top-5">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="text-lg font-medium p-2 hover:bg-muted rounded-md cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className={buttonVariants({ className: "w-full mt-2 cursor-pointer" })}
            >
              Book Service
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src={LOGO_URL} 
                alt="Nioora Logo" 
                className="h-8 w-8 rounded-md object-contain"
              />
              <span className="text-xl font-heading font-bold text-white">Nioora</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your trusted partner for home appliance repair and maintenance. Fast, reliable, and customer-focused service at your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors cursor-pointer">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors cursor-pointer">Services</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors cursor-pointer">Contact Us</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-white font-semibold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="hover:text-primary transition-colors cursor-pointer">Terms & Conditions</Link></li>
              <li><Link href="/cancellation-refund" className="hover:text-primary transition-colors cursor-pointer">Cancellation & Refund</Link></li>
              <li><Link href="/shipping-policy" className="hover:text-primary transition-colors cursor-pointer">Shipping Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-slate-400">Nioora Private Limited</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+916374105733" className="hover:text-white transition-colors">+91 6374105733</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:niooraservice@gmail.com" className="hover:text-white transition-colors">niooraservice@gmail.com</a>
              </li>
              <li className="text-slate-400 text-xs mt-2">
                Mon - Sat: 9:00 AM - 8:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Nioora Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
