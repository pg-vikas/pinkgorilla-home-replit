import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "What We Do", href: "#what-we-do" },
    { name: "Core", href: "#core" },
    { name: "Apps", href: "#apps" },
    { name: "Process", href: "#process" },
    { name: "About Us", href: "/about" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    
    if (href.startsWith('/')) {
      window.location.href = href;
      return;
    }

    if (location !== "/") {
      // If we are not on the home page, redirect to home page and then anchor
      window.location.href = "/" + href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Animated Logo */}
        <Link href="/" className="text-2xl font-bold font-display tracking-tighter flex items-center gap-2 cursor-pointer group">
           <motion.span 
              className="text-primary inline-block"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
           >
              PINK
           </motion.span>
           <motion.span 
              className="text-foreground inline-block"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
           >
              GORILLA
           </motion.span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary cursor-pointer"
            >
                {link.name}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Client Login
          </a>
          <button onClick={() => {
              if (location !== "/") {
                window.location.href = "/#hero";
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
          }}>
            <Button className="rounded-full px-6 font-bold shadow-[0_0_15px_rgba(255,0,255,0.3)] hover:shadow-[0_0_25px_rgba(255,0,255,0.5)] transition-all">
              Book a Call
            </Button>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button 
                  key={link.name} 
                  onClick={() => handleNavClick(link.href)}
                  className="text-lg font-medium py-2 border-b border-white/5 cursor-pointer text-left"
                >
                    {link.name}
                </button>
              ))}
              <div className="pt-4 flex flex-col gap-4">
                <a href="#" className="text-center text-muted-foreground">
                  Client Login
                </a>
                <Button className="w-full rounded-full" onClick={() => {
                   setMobileMenuOpen(false);
                   window.scrollTo({ top: 0, behavior: "smooth" });
                }}>Book a Call</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
