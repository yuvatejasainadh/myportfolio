/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/button';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'CP', href: '#cp' },
  { name: 'Contact', href: '#contact' },
];

const MagneticLink = ({ children, href, onClick }: { children: React.ReactNode; href: string; onClick?: () => void }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Move up to 10px towards the cursor
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      className="relative px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-brand-charcoal dark:text-brand-bg opacity-70 hover:opacity-100 transition-opacity group"
    >
      <span className="relative z-10">{children}</span>
      <motion.span 
        className="absolute bottom-0 left-4 right-4 h-[2px] bg-grad-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
      />
    </motion.a>
  );
};

export const Navbar = () => {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollY } = useScroll();
  
  // Transform scroll position into height and backdrop blur
  const navHeight = useTransform(scrollY, [0, 100], ['5rem', '4rem']);
  const navBg = useTransform(
    scrollY, 
    [0, 100], 
    [
      theme === 'light' ? 'rgba(228, 221, 211, 0)' : 'rgba(15, 23, 42, 0)', 
      theme === 'light' ? 'rgba(228, 221, 211, 0.9)' : 'rgba(15, 23, 42, 0.9)'
    ]
  );
  const navShadow = useTransform(scrollY, [0, 100], ['0 0 0 rgba(0,0,0,0)', '0 10px 30px -10px rgba(0,0,0,0.1)']);
  const navBorder = useTransform(
    scrollY, 
    [0, 100], 
    ['rgba(0, 0, 0, 0)', theme === 'light' ? 'rgba(20, 20, 20, 0.1)' : 'rgba(255, 255, 255, 0.1)']
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'cp', 'contact'];
      const scrollPos = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPos >= element.offsetTop && scrollPos < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ 
        height: navHeight,
        background: navBg,
        boxShadow: navShadow,
        borderColor: navBorder
      }}
      className="fixed top-0 w-full z-50 border-b transition-[height] duration-500 backdrop-blur-md"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 h-full flex items-center justify-between">
        <motion.a 
          href="#"
          whileHover={{ scale: 1.05 }}
          className="relative group flex items-center gap-2"
        >
          <div className="relative">
            <span className="text-xl font-bold tracking-tight uppercase text-foreground relative z-10 transition-colors">YS<span className="text-primary">.</span></span>
            <motion.div 
              className="absolute -inset-2 glow-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>
          <div className="hidden sm:block overflow-hidden h-5">
            <motion.span 
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="block text-[10px] font-black uppercase tracking-[0.4em] text-primary opacity-0 group-hover:opacity-100 transition-all duration-500"
            >
              Engineer
            </motion.span>
          </div>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex gap-2 items-center">
            {navItems.map((item) => (
              <MagneticLink key={item.name} href={item.href}>
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div 
                    layoutId="activeDot"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_var(--primary)]"
                  />
                )}
              </MagneticLink>
            ))}
          </div>
          
          <div className="h-6 w-[1px] bg-border mx-4" />
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
  href="/Yuvateja Sainadh Resume.pdf" // 🔥 replace with your file or drive link
  target="_blank"
  rel="noopener noreferrer"
  className="hidden lg:flex"
>
  <Button
    size="sm"
    className="group relative rounded-full bg-grad-primary text-white px-6 gap-2 h-10 text-[10px] uppercase font-black tracking-widest 
    shadow-lg shadow-primary/10 hover:shadow-primary/30 hover:-translate-y-[2px] transition-all duration-300 overflow-hidden"
  >
    
    {/* Content */}
    <span className="flex items-center gap-2 relative z-10">
      Resume
      <ArrowUpRight
        size={14}
        className="opacity-0 translate-y-[2px] -translate-x-[2px] 
        group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 
        transition-all duration-300"
      />
    </span>

    {/* Subtle Shine */}
    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300"></span>

  </Button>
</a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-foreground relative z-50 overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div key="close" initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: -20 }}>
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ y: 20 }} animate={{ y: 0 }} exit={{ y: -20 }}>
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: { 
                opacity: 1, 
                scale: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  staggerChildren: 0.1,
                  delayChildren: 0.2
                }
              },
              closed: { 
                opacity: 0, 
                scale: 0.9,
                y: -20,
                transition: {
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1]
                }
              }
            }}
            className="md:hidden absolute top-0 left-0 w-full h-screen bg-background/98 backdrop-blur-3xl px-8 pt-32 flex flex-col gap-12"
          >
            <div className="flex flex-col gap-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  variants={{
                    open: { opacity: 1, x: 0 },
                    closed: { opacity: 0, x: -20 }
                  }}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-5xl font-bold tracking-tighter text-foreground hover:text-primary transition-colors flex items-center justify-between group"
                >
                  <span>{item.name}</span>
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowUpRight size={32} className="text-primary" />
                  </motion.div>
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: 20 }
              }}
              className="mt-auto pb-20 space-y-8 text-center"
            >
              <a
  href="/Yuvateja Sainadh Resume.pdf" // 🔥 replace with your actual resume path
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <Button
    className="group relative w-full h-16 rounded-2xl bg-grad-primary text-white text-sm font-bold uppercase tracking-widest shadow-xl shadow-primary/20 
    hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
  >
    
    {/* Content */}
    <span className="flex items-center justify-center gap-2 relative z-10">
      View Resume
      <ArrowUpRight
        size={18}
        className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
      />
    </span>

    {/* Shine Effect */}
    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300"></span>

  </Button>
</a>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                Built with Intention by Y.Sainadh
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
