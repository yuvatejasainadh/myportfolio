/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  ArrowUpRight,
  Zap 
} from 'lucide-react';
import {
  SiLeetcode,
  SiCodechef,
  SiCodeforces,
  SiGeeksforgeeks,
  SiHackerrank
} from "react-icons/si";
import { TypeAnimation } from 'react-type-animation';
import { 
  PERSONAL_INFO, 
  SOCIAL_LINKS, 
  SKILLS, 
  PROJECTS 
} from './constants';
import { Link } from "react-scroll";
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { CompetitiveProgramming } from './components/CompetitiveProgramming';
import { ProjectCard } from './components/ProjectCard';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Navbar } from './components/Navbar';
import { StaggeredWord } from './components/StaggeredWord';
import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import { useTheme } from './components/ThemeContext';

const Background3D = lazy(() => import('./components/Background3D'));

const IconMap: Record<string, React.ReactNode> = {
  Github: <Github className="w-5 h-5" />,
  Linkedin: <Linkedin className="w-5 h-5" />,
  SiLeetcode: <SiLeetcode className="w-5 h-5" />,
  SiCodechef: <SiCodechef className="w-5 h-5" />,
  SiHackerRank: <SiHackerrank className="w-5 h-5" />,
  SiCodeforces: <SiCodeforces className="w-5 h-5" />,
  SiGeeksforgeeks: <SiGeeksforgeeks className="w-5 h-5" />,
};

const EditorialHeading = ({ title, tag, subtitle }: { title: string; tag?: string; subtitle?: string }) => (
  <div className="mb-20">
    {tag && (
      <motion.span 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="block text-[#00A19B] font-bold tracking-[0.2em] text-xs uppercase mb-4"
      >
        {tag}
      </motion.span>
    )}
    <motion.h2 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] max-w-4xl text-foreground dark:text-white transition-colors"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-muted-foreground text-xl md:text-2xl max-w-xl font-medium leading-tight"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default function App() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-background flex items-center justify-center z-[100] transition-colors duration-500">
        <div className="w-full max-w-xs space-y-4">
          <div className="h-[2px] w-full bg-border overflow-hidden">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              className="h-full w-1/3 bg-primary"
            />
          </div>
          <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-foreground opacity-40">
            <span>Loading Experience</span>
            <span>Est. 2006</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <div className="relative min-h-screen selection:bg-[#00A19B]/30 selection:text-brand-teal overflow-x-hidden bg-grad-soft transition-colors duration-500">
        <div className="theme-transition-gradient" />
        <Suspense fallback={null}>
          <Background3D />
        </Suspense>
        
        <motion.div 
          className="fixed top-0 left-0 right-0 h-[2px] bg-grad-primary z-[100] origin-left shadow-[0_0_10px_var(--primary)]"
          style={{ scaleX }}
        />

        {/* Global Navigation */}
        <Navbar />

        {/* Main Content Landmark */}
        <main id="main-content">
          {/* Hero Section */}
          <section ref={heroRef} className="relative min-h-screen flex items-center px-6 lg:px-20 pt-20 overflow-hidden">
  <div className="max-w-[1600px] mx-auto w-full">

    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

      {/* LEFT CONTENT */}
      <div className="flex-1 space-y-10 text-center lg:text-left">

        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/40 dark:bg-white/10 backdrop-blur border border-white/40 dark:border-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase text-primary"
        >
          <Zap size={10} className="animate-pulse" /> Applied AI & Systems Engineering
        </motion.div>

        {/* HERO TITLE */}
        <h1 className="flex flex-col leading-[0.85] font-bold tracking-tight text-foreground">
          
          <span className="text-5xl md:text-7xl lg:text-[9rem]">
            <StaggeredWord text="VISION" delay={0.3} />
          </span>

          <span className="text-5xl md:text-7xl lg:text-[9rem] bg-grad-primary bg-clip-text text-transparent italic">
            <StaggeredWord text="DRIVEN" delay={0.8} />
          </span>

          <span className="text-5xl md:text-7xl lg:text-[9rem]">
            <StaggeredWord text="ENGINEER" delay={1.3} />
          </span>

        </h1>

        {/* SUBTEXT + CTA */}
        <div className="flex flex-col md:flex-row items-center lg:items-start gap-8">

          <p className="max-w-md text-lg md:text-xl text-muted-foreground font-medium leading-relaxed">
            <TypeAnimation
              sequence={[
                'Applied AI Engineer & Systems Architect building intelligent, production-ready systems.',
                1000,
              ]}
              speed={50}
            />
          </p>

          <Link
  to="projects"
  smooth={true}
  duration={600}
  offset={-80} // adjust if you have fixed navbar
>
  <Button
  size="lg"
  className="group relative overflow-hidden rounded-none bg-grad-primary text-white px-8 h-14 transition-all duration-300 shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 cursor-pointer"
>
    
    {/* Button Content */}
    <span className="flex items-center relative z-10">
      View Works
      <ArrowUpRight
        className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        size={18}
      />
    </span>

    {/* Hover Shine Effect */}
    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300"></span>

  </Button>
</Link>

        </div>
      </div>

      {/* RIGHT SIDE - PROFILE FRAME */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="flex justify-center items-center"
>
  <div className="relative w-[340px] md:w-[420px] lg:w-[480px]">

    {/* Frame Container */}
    <div className="bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

      {/* Image */}
      <div className="w-full aspect-square rounded-2xl overflow-hidden">
        <img
          src="/ProfilePic.webp"
          alt="Yuvateja Sainadh"
          width={480}
          height={480}
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name + Role */}
      <div className="mt-6 text-center">
        <h3 className="text-xl md:text-2xl font-semibold tracking-wide text-foreground">
          Yuvateja Sainadh
        </h3>
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">
          Applied AI Engineer & Systems Architect
        </p>
      </div>

    </div>

    {/* Subtle Background Frame Accent */}
    <div className="absolute -inset-3 rounded-3xl border border-primary/20 opacity-40"></div>

  </div>
</motion.div>

    </div>

    {/* FOOTER STRIP */}
    <div className="mt-20 flex flex-col sm:flex-row justify-between items-center border-t border-border pt-6 gap-4 text-center sm:text-left">

      <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
        Based in Andhra Pradesh, IN
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="hidden sm:block w-[1px] h-16 bg-foreground/20 opacity-20"
      />

      <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
        Applied AI & Systems Architecture
      </div>

    </div>

  </div>
</section>

        {/* About: The Narrative */}
        <AboutSection />

        {/* Skills: The Arsenal */}
        <SkillsSection />

        {/* Selected Works - The Showcase */}
        <section id="projects" className="py-40 bg-grad-soft text-foreground dark:text-white rounded-t-[4rem] xl:rounded-t-[8rem] transition-colors duration-500">
          <div className="max-w-[1800px] mx-auto px-8 lg:px-24">
            <div className="flex flex-col md:flex-row justify-between items-end mb-32">
              <EditorialHeading 
                tag="Flagship Showcase" 
                title="Featured Systems & Ventures." 
                subtitle="Production AI architectures, intelligent applications, and scalable ventures."
              />
              <div className="hidden md:block pb-24 text-[10px] font-bold uppercase tracking-widest opacity-40">
                SCROLL TO DISCOVER ({PROJECTS.length.toString().padStart(2, '0')})
              </div>
            </div>

            <div className="space-y-40">
              {PROJECTS.map((project, idx) => (
                <ProjectCard key={idx} project={project} index={idx} />
              ))}
            </div>
          </div>
        </section>

        {/* Algorithm Mastery: The Stats */}
        <CompetitiveProgramming />

        {/* Experience & Intellectual Growth */}
        <EducationSection />

        {/* Global Connections: Contact Section */}
        <ContactSection />

        {/* Global Footer */}
        <footer role="contentinfo" className="border-t border-border pt-16 pb-10 px-6 lg:px-20 bg-grad-soft transition-colors duration-500">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
            {/* TOP SECTION */}
            <div className="flex flex-col md:flex-row justify-between gap-12">
              {/* LEFT - BRAND */}
              <div className="space-y-4 max-w-sm">
                <div className="flex items-center gap-3">
                  <img
                    src={theme === 'dark' ? PERSONAL_INFO.logos.dark : PERSONAL_INFO.logos.light}
                    alt={PERSONAL_INFO.logoAlt}
                    width={36}
                    height={36}
                    className="h-8 md:h-9 w-auto object-contain"
                  />
                  <h2 className="text-xl font-semibold tracking-tight text-foreground">
                    {PERSONAL_INFO.name}
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Building scalable web applications and AI-powered systems with a focus on performance and real-world impact.
                </p>
              </div>

              {/* CENTER - NAV LINKS */}
              <div className="flex flex-col gap-4 text-sm">
                <span className="font-semibold text-foreground uppercase tracking-wider">Navigation</span>
                <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
                <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              </div>

              {/* RIGHT - SOCIAL */}
              <div className="flex flex-col gap-4 text-sm">
                <span className="font-semibold text-foreground uppercase tracking-wider">Connect</span>

                <div className="flex gap-6">
                  {SOCIAL_LINKS.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                      title={link.name}
                      aria-label={`Visit Yuvateja Sainadh on ${link.name} (opens in new tab)`}
                    >
                      {IconMap[link.icon]}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="border-t border-border" />

            {/* BOTTOM SECTION */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-widest text-muted-foreground">
              {/* LEFT */}
              <div className="flex gap-8">
                <span className="cursor-pointer hover:text-primary transition-colors">
                  Privacy Policy
                </span>
                <span className="cursor-pointer hover:text-primary transition-colors">
                  Terms & Conditions
                </span>
              </div>

              {/* CENTER */}
              <div className="text-center text-xs md:text-sm text-muted-foreground tracking-wide">
                Turning ideas into scalable systems —{' '}
                <span className="text-foreground font-semibold">
                  Yuvateja Sainadh
                </span>
              </div>

              {/* RIGHT */}
              <div>
                All Rights Reserved © {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </footer>
        </main>
      </div>
    </TooltipProvider>
  );
}
