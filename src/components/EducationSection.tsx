/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { EDUCATION } from '../constants';
import { 
  GraduationCap, 
  Sparkles, 
  BookOpen, 
  Cpu, 
  Binary, 
  Layers, 
  CheckCircle2, 
  Calendar, 
  Building2 
} from 'lucide-react';

export const EducationSection: React.FC = () => {
  const edu = EDUCATION[0];

  const academicPillars = [
    {
      title: "Core AI & Machine Learning",
      desc: "Neural architectures, statistical learning, and predictive modeling algorithms.",
      icon: <Cpu className="w-4 h-4 text-primary" />,
    },
    {
      title: "Distributed Systems Architecture",
      desc: "Scalable backend systems, cloud infra, and low-latency data pipelines.",
      icon: <Layers className="w-4 h-4 text-primary" />,
    },
    {
      title: "Algorithmic Analysis & Complexity",
      desc: "Data structures, computational logic, and efficient problem solving.",
      icon: <Binary className="w-4 h-4 text-primary" />,
    },
    {
      title: "Systems Security & Applied AI",
      desc: "Real-time AI security frameworks, voice biometrics, and threat mitigation.",
      icon: <CheckCircle2 className="w-4 h-4 text-primary" />,
    },
  ];

  return (
    <section id="education" className="py-40 px-8 lg:px-24 bg-grad-soft transition-colors duration-500">
      <div className="max-w-[1800px] mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="block text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4"
          >
            Foundation
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.95] max-w-4xl text-foreground transition-colors"
          >
            Education & <span className="bg-grad-primary bg-clip-text text-transparent italic">Academic Background.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-muted-foreground text-xl md:text-2xl max-w-2xl font-medium leading-tight"
          >
            Rigorous foundations in Artificial Intelligence, Machine Learning, and Systems Engineering.
          </motion.p>
        </div>

        {/* Balanced Full-Width Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-stretch">
          
          {/* LEFT COLUMN: Main Degree Card & Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col justify-between p-8 md:p-12 rounded-[2.5rem] bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-2xl relative overflow-hidden group hover:border-primary/40 transition-all duration-500"
          >
            {/* Background Glow Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/15 transition-all duration-500" />

            <div className="relative z-10 space-y-8">
              {/* Header Badges: Year & CGPA */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold tracking-wider">
                  <Calendar size={13} className="text-primary" />
                  <span>{edu.year}</span>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-grad-primary text-white text-xs font-bold tracking-widest uppercase rounded-full shadow-lg shadow-primary/20">
                  <Sparkles size={13} />
                  <span>CGPA: {edu.cgpa}</span>
                </div>
              </div>

              {/* Degree Title & Institution */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  <GraduationCap size={16} />
                  <span>Undergraduate Degree</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                  {edu.degree}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground text-sm md:text-base font-medium">
                  <Building2 size={16} className="text-primary shrink-0" />
                  <span>{edu.institution}</span>
                </div>
              </div>

              {/* Core Academic Focus List */}
              {edu.focus && (
                <div className="space-y-3 pt-4 border-t border-border/40">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground/80 block">
                    Core Coursework & Specializations
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {edu.focus.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-white/50 dark:bg-white/5 border border-border/50 text-xs font-medium text-foreground/90"
                      >
                        <CheckCircle2 size={14} className="text-primary shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Status / Summary Tag */}
            <div className="mt-8 pt-6 border-t border-border/40 relative z-10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Active Academic Progression
              </span>
              <span className="font-semibold text-foreground/80">
                Department of AI & ML
              </span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Sophisticated Abstract Academic & AI Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between p-8 md:p-10 rounded-[2.5rem] bg-white/30 dark:bg-white/[0.04] backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-2xl relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
          >
            {/* Background Glow */}
            <div className="absolute -inset-10 bg-primary/10 blur-[90px] rounded-full pointer-events-none" />

            {/* Top Visual Card Header */}
            <div className="relative z-10 mb-6 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-primary uppercase">
                <BookOpen size={14} />
                <span>Academic & Systems Core</span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/80">
                V-Matrix
              </span>
            </div>

            {/* Interactive / Animated AI & Academic Vector Graphic */}
            <div className="relative z-10 my-4 flex items-center justify-center min-h-[220px]">
              <div className="relative w-full max-w-[280px] aspect-square flex items-center justify-center">
                {/* Outer Orbiting Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-primary/30"
                />

                {/* Inner Pulsing Ring */}
                <motion.div
                  animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-6 rounded-full border border-primary/40 bg-primary/5"
                />

                {/* Connecting Crosslines */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
                  <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent" />
                </div>

                {/* Orbiting Satellite Node 1: AI / Neural */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-xl bg-background/90 dark:bg-[#0B1120] border border-primary/40 shadow-md shadow-primary/10 flex items-center gap-1.5 text-[10px] font-mono font-bold text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>AI / ML</span>
                </div>

                {/* Orbiting Satellite Node 2: Systems */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 translate-y-1/2 p-2 rounded-xl bg-background/90 dark:bg-[#0B1120] border border-primary/40 shadow-md shadow-primary/10 flex items-center gap-1.5 text-[10px] font-mono font-bold text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Systems</span>
                </div>

                {/* Orbiting Satellite Node 3: Algorithms */}
                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-xl bg-background/90 dark:bg-[#0B1120] border border-primary/40 shadow-md shadow-primary/10 flex items-center gap-1.5 text-[10px] font-mono font-bold text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Algorithms</span>
                </div>

                {/* Orbiting Satellite Node 4: Security */}
                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 p-2 rounded-xl bg-background/90 dark:bg-[#0B1120] border border-primary/40 shadow-md shadow-primary/10 flex items-center gap-1.5 text-[10px] font-mono font-bold text-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Security</span>
                </div>

                {/* Central AI Computing Core */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-grad-primary flex flex-col items-center justify-center text-white shadow-xl shadow-primary/30 p-2 text-center group-hover:scale-105 transition-transform duration-300">
                  <Cpu size={24} className="animate-pulse" />
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider mt-1">Core Engine</span>
                </div>
              </div>
            </div>

            {/* Academic Specialization Matrix */}
            <div className="relative z-10 space-y-3 mt-6 pt-6 border-t border-border/40">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground/80 block">
                Academic Pillars & Engineering Focus
              </span>
              <div className="space-y-2.5">
                {academicPillars.map((pillar, pi) => (
                  <div
                    key={pi}
                    className="p-3 rounded-2xl bg-white/40 dark:bg-white/5 border border-border/40 hover:border-primary/40 transition-all flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 shrink-0 mt-0.5">
                      {pillar.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-foreground">{pillar.title}</h4>
                      <p className="text-[11px] text-muted-foreground leading-snug mt-0.5">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
