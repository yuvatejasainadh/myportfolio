/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../constants';
import { Badge } from './ui/badge';
import { Cpu, Globe, Code, Zap } from 'lucide-react';

export const AboutSection = () => {
  const highlights = [
    { label: "Applied AI Systems", icon: <Cpu className="w-5 h-5 text-primary" />, detail: "Real-Time AI Security & Intelligent Frameworks" },
    { label: "Systems Architecture", icon: <Zap className="w-5 h-5 text-primary" />, detail: "Scalable, Distributed & Event-Driven Backends" },
    { label: "Full-Stack Engineering", icon: <Globe className="w-5 h-5 text-primary" />, detail: "Production Systems from Concept to Deployment" },
    { label: "Backend Infrastructure", icon: <Code className="w-5 h-5 text-primary" />, detail: "Resilient APIs, Data Pipelines & Cloud Services" },
  ];

  return (
    <section id="about" className="py-40 px-8 lg:px-24 bg-grad-soft transition-colors duration-500">
      <div className="max-w-[1800px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary font-bold tracking-[0.2em] text-xs uppercase"
            >
              The Narrative
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none text-foreground transition-colors">
              Applied AI Engineer & <span className="bg-grad-primary bg-clip-text text-transparent italic">Systems Architect.</span>
            </h2>
            <div className="h-1 w-24 bg-primary" />
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-xl transition-colors">
            {PERSONAL_INFO.summary}
          </p>
          
          <div className="flex flex-wrap gap-3 pt-4">
            {["Applied AI", "Systems Architecture", "Full-Stack Engineering", "Backend Systems", "Product Engineering"].map((tag) => (
              <Badge key={tag} variant="outline" className="border-primary/30 text-primary px-4 py-1.5 rounded-full bg-white/50 dark:bg-white/5 dark:border-white/10 text-xs font-semibold transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Background Glow */}
          <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-8 bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-2xl rounded-[2.5rem] transition-all hover:bg-white/60 dark:hover:bg-white/10 group"
              >
                <div className="mb-6 p-4 bg-white dark:bg-white/10 rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2 transition-colors">{item.label}</h4>
                <p className="text-sm text-muted-foreground font-medium opacity-80 transition-colors">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
