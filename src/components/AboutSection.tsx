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
    { label: "1000+ Problems Solved", icon: <Code className="w-5 h-5 text-[#00A19B]" />, detail: "Data Structures & Algorithms" },
    { label: "Full Stack Developer", icon: <Globe className="w-5 h-5 text-[#00A19B]" />, detail: "Scalable Web Architecture" },
    { label: "AI Enthusiast", icon: <Cpu className="w-5 h-5 text-[#00A19B]" />, detail: "ML & Intelligent Systems" },
    { label: "Google Cloud Learner", icon: <Zap className="w-5 h-5 text-[#00A19B]" />, detail: "Cloud Infrastructure & APIs" },
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
              Aspiring Software Engineer with a <span className="bg-grad-primary bg-clip-text text-transparent italic">Purpose.</span>
            </h2>
            <div className="h-1 w-24 bg-primary" />
          </div>

          <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed max-w-xl transition-colors">
            {PERSONAL_INFO.summary}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            {["DSA", "Full Stack", "AI", "Google Cloud"].map((tag) => (
              <Badge key={tag} variant="outline" className="border-primary/30 text-primary px-4 py-1 rounded-full bg-white/50 dark:bg-white/5 dark:border-white/10 transition-colors">
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
          <div className="absolute -inset-10 bg-[#00A19B]/5 blur-[100px] rounded-full" />
          
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
                <h4 className="text-xl font-bold text-brand-charcoal dark:text-white mb-2 transition-colors">{item.label}</h4>
                <p className="text-sm text-brand-gray dark:text-brand-bg/60 font-medium opacity-70 transition-colors">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
