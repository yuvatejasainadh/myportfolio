/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Code, 
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  ArrowUpRight,
  Trophy,
  TrendingUp,
  BookOpen,
  Activity,
  Cpu,
  Cloud,
  Sparkles,
  ShieldCheck,
  Send,
  Zap,
  Globe
} from 'lucide-react';
import {
  SiLeetcode,
  SiCodechef,
  SiCodeforces,
  SiGeeksforgeeks,
  SiHackerrank
} from "react-icons/si";
import { TypeAnimation } from 'react-type-animation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  PERSONAL_INFO, 
  SOCIAL_LINKS, 
  SKILLS, 
  PROJECTS, 
  CERTIFICATIONS, 
  EDUCATION, 
  ACHIEVEMENTS 
} from './constants';
import { Link } from "react-scroll";
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { CompetitiveProgramming } from './components/CompetitiveProgramming';
import { ProjectCard } from './components/ProjectCard';
import { Navbar } from './components/Navbar';
import { StaggeredWord } from './components/StaggeredWord';
import Background3D from './components/Background3D';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

gsap.registerPlugin(ScrollTrigger);

const IconMap: Record<string, React.ReactNode> = {
  Github: <Github className="w-5 h-5" />,
  Linkedin: <Linkedin className="w-5 h-5" />,
  SiLeetcode: <SiLeetcode className="w-5 h-5" />,
  SiCodechef: <SiCodechef className="w-5 h-5" />,
  SiHackerRank: <SiHackerrank className="w-5 h-5" />,
  SiCodeforces: <SiCodeforces className="w-5 h-5" />,
  SiGeeksforgeeks: <SiGeeksforgeeks className="w-5 h-5" />,
  Cloud: <Cloud className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
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
  const [isLoading, setIsLoading] = useState(true);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    
    if (!isLoading) {
      gsap.from(".reveal-item", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".reveal-item",
          start: "top 90%",
        }
      });
    }
    
    return () => clearTimeout(timer);
  }, [isLoading]);

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
        <Background3D />
        
        <motion.div 
          className="fixed top-0 left-0 right-0 h-[2px] bg-grad-primary z-[100] origin-left shadow-[0_0_10px_var(--primary)]"
          style={{ scaleX }}
        />

        {/* Global Navigation */}
        <Navbar />

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
          <Zap size={10} className="animate-pulse" /> Available for opportunities
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
                'Yuvateja Sainadh. Building systems that bridge code and purpose.',
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
          src="/ProfilePic.png"
          alt="Yuvateja Sainadh"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name + Role */}
      <div className="mt-6 text-center">
        <h3 className="text-xl md:text-2xl font-semibold tracking-wide text-foreground">
          Yuvateja Sainadh
        </h3>
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground mt-2">
          AI Architect
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
        AI & ML Engineering '28
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
                tag="Case Studies" 
                title="Selective Projects" 
                subtitle="Turning complex logic into refined interfaces."
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
        <section id="education" className="py-60 px-8 lg:px-24">
          <div className="max-w-[1800px] mx-auto">
            <div className="grid lg:grid-cols-12 gap-24">
              <div className="lg:col-span-5">
                <EditorialHeading 
                  tag="Foundation" 
                  title="Education & Intellectual Milestones." 
                  subtitle="Academic rigor combined with consistent self-improvement."
                />
                
                <div className="space-y-12">
                   {EDUCATION.map((edu, i) => (
                     <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="p-10 border border-brand-beige-dark dark:border-white/10 bg-white/10 dark:bg-white/5 transition-colors"
                     >
                        <span className="text-[10px] font-black text-primary tracking-[0.2em]">{edu.year}</span>
                        <h4 className="text-2xl font-bold mt-4 mb-2 text-foreground">{edu.degree}</h4>
                        <p className="text-muted-foreground font-medium">{edu.institution}</p>
                        <div className="mt-6 inline-flex items-center gap-2 px-3 py-1 bg-grad-primary text-white text-[10px] font-bold tracking-widest uppercase shadow-lg shadow-primary/10">
                           CGPA: {edu.cgpa}
                        </div>
                     </motion.div>
                   ))}
                </div>
              </div>

              <div className="lg:col-span-1 border-l border-brand-beige-dark dark:border-white/10 hidden lg:block transition-colors" />

              <div className="lg:col-span-6 space-y-16">
                 <div>
                    <h3 className="text-3xl font-bold mb-10 italic dark:text-white">Core Accomplishments</h3>
                    <div className="grid gap-6">
                       {ACHIEVEMENTS.map((ach, i) => (
                         <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex gap-6 group"
                         >
                            <div className="w-12 h-12 rounded-full border border-brand-beige-dark dark:border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-charcoal dark:group-hover:bg-[#00A19B] group-hover:text-white transition-all">
                               <ChevronRight size={16} />
                            </div>
                            <div>
                               <h5 className="font-bold text-lg dark:text-white">{ach.title}</h5>
                               <p className="text-sm text-brand-gray dark:text-brand-bg/60">{ach.detail}</p>
                            </div>
                         </motion.div>
                       ))}
                    </div>
                 </div>

                 <div>
                    <h3 className="text-3xl font-bold mb-10 italic dark:text-white">Official Recognitions</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                       {CERTIFICATIONS.map((cert, i) => (
                         <div key={i} className="p-6 bg-brand-beige-dark/20 dark:bg-white/5 border border-white/40 dark:border-white/10 flex items-center gap-4 transition-colors">
                            <span className="p-2 bg-white/40 dark:bg-white/10 rounded-lg">{IconMap[cert.icon]}</span>
                            <div>
                               <p className="text-xs font-black uppercase text-[#00A19B]">{cert.issuer}</p>
                               <p className="font-bold leading-tight dark:text-white">{cert.name}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Connections: Contact */}
        <section id="contact" className="py-40 bg-grad-soft rounded-t-[4rem] px-8 lg:px-24 transition-colors duration-500">
          <div className="max-w-[1800px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-start">

  {/* LEFT SIDE */}
  <div className="space-y-10">

    <h2 className="text-5xl md:text-7xl lg:text-7xl font-bold tracking-tight leading-[0.9] text-foreground">
      LET'S START
      <br />
      A{" "}
      <span className="relative inline-block italic">
        <span className="inline-block bg-grad-primary bg-clip-text text-transparent pr-4 md:pr-6 lg:pr-8">
  CONVERSATION
</span>

        {/* subtle underline glow */}
        <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-grad-primary opacity-40 blur-sm"></span>
      </span>
    </h2>

    <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
      Have an idea, opportunity, or just want to connect?  
      I’m always open to building meaningful and impactful systems.
    </p>

    {/* CONTACT LINKS */}
    <div className="space-y-4">
      <a
        href={`mailto:${PERSONAL_INFO.email}`}
        className="group inline-block text-2xl md:text-3xl font-medium text-foreground/80"
      >
        <span className="relative">
          {PERSONAL_INFO.email}
          <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300"></span>
        </span>
      </a>

      <a
        href={`tel:${PERSONAL_INFO.phone}`}
        className="block text-lg text-muted-foreground hover:text-primary transition-colors"
      >
        {PERSONAL_INFO.phone}
      </a>
    </div>

  </div>

  {/* RIGHT SIDE FORM */}
  <div className="space-y-10">

    <form className="space-y-8 group" onSubmit={e => e.preventDefault()}>

      {/* INPUT FIELD */}
      {[
        { label: "Full Name", type: "text", placeholder: "John Doe" },
        { label: "Email Address", type: "email", placeholder: "example@domain.com" },
      ].map((field, i) => (
        <div
          key={i}
          className="relative border-b border-border pb-4 focus-within:border-primary transition-all duration-300"
        >
          <label className="text-[10px] font-bold uppercase tracking-widest text-primary">
            {field.label}
          </label>

          <input
            type={field.type}
            placeholder={field.placeholder}
            className="w-full bg-transparent outline-none text-lg md:text-xl font-medium pt-2 h-10 text-foreground placeholder:text-muted-foreground/40"
          />

          {/* Focus Glow Line */}
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary group-focus-within:w-full transition-all duration-300"></span>
        </div>
      ))}

      {/* TEXTAREA */}
      <div className="relative border-b border-border pb-6 focus-within:border-primary transition-all duration-300">
        <label className="text-[10px] font-bold uppercase tracking-widest text-primary">
          Project Details
        </label>

        <textarea
          placeholder="Tell me about your idea..."
          className="w-full bg-transparent outline-none text-lg md:text-xl font-medium pt-2 resize-none h-24 text-foreground placeholder:text-muted-foreground/40"
        />

        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary focus-within:w-full transition-all duration-300"></span>
      </div>

      {/* BUTTON */}
      <Button
        size="lg"
        className="group relative w-full h-16 overflow-hidden rounded-none bg-grad-primary text-white text-[11px] font-black tracking-[0.3em] uppercase transition-all duration-300 shadow-xl shadow-primary/20 hover:-translate-y-1 hover:shadow-primary/40"
      >
        <span className="relative z-10 flex items-center justify-center">
          Dispatch Inquiry
        </span>

        {/* Shine Effect */}
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-white/10"></span>
      </Button>

    </form>

  </div>
</div>
            
            <footer className="mt-40 border-t border-border pt-16 pb-10 px-6 lg:px-20">

  <div className="max-w-[1400px] mx-auto flex flex-col gap-12">

    {/* TOP SECTION */}
    <div className="flex flex-col md:flex-row justify-between gap-12">

      {/* LEFT - BRAND */}
      <div className="space-y-4 max-w-sm">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Yuvateja Sainadh
        </h2>
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
            >
              {IconMap[link.icon]}
            </a>
          ))}
        </div>
      </div>

    </div>

    {/* DIVIDER */}
    <div className="border-t border-border"></div>

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
  Turning ideas into scalable systems —{" "}
  <span className="text-foreground font-semibold">
    K Yuvateja Sainadh
  </span>
</div>

      {/* RIGHT */}
      <div>
       All Rights Reserved © {new Date().getFullYear()}
      </div>

    </div>

  </div>
</footer>
          </div>
        </section>
      </div>
    </TooltipProvider>
  );
}
