/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../constants';
import { Badge } from './ui/badge';
import { Code2, Terminal, Database, Cloud, Layout, Wrench } from 'lucide-react';

const IconMap: Record<string, React.ReactNode> = {
  Languages: <Code2 className="w-6 h-6" />,
  Frontend: <Layout className="w-6 h-6" />,
  Backend: <Terminal className="w-6 h-6" />,
  Databases: <Database className="w-6 h-6" />,
  Cloud: <Cloud className="w-6 h-6" />,
  Tools: <Wrench className="w-6 h-6" />,
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-40 px-8 lg:px-24 bg-grad-soft transition-colors duration-500">
      <div className="max-w-[1800px] mx-auto">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-4">
            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">Capabilites</span>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-foreground leading-none transition-colors">
              My Technical <span className="bg-grad-primary bg-clip-text text-transparent italic">Arsenal.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground text-lg font-medium transition-colors">
            Bridging the gap between conceptual design and robust engineering through a curated selection of modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative p-10 bg-white/60 dark:bg-[#111827]/70 backdrop-blur-md rounded-[3rem] border border-gray-200 dark:border-primary/20 overflow-hidden transition-all hover:bg-white/80 dark:hover:bg-[#111827]/90 hover:border-primary/50 shadow-xl shadow-black/5 dark:shadow-none"
            >
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="mb-8 flex items-center justify-between">
                  <div className="p-4 bg-background dark:bg-white/10 rounded-2xl text-primary shadow-sm transform group-hover:scale-110 transition-transform duration-500">
                    {IconMap[category.category] || <Code2 className="w-6 h-6" />}
                  </div>
                  <div className="w-12 h-[1px] bg-border/50" />
                </div>
                
                <h3 className="text-2xl font-bold mb-6 text-foreground transition-colors">{category.category}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, si) => (
                    <Badge 
                      key={si}
                      variant="secondary" 
                      className="px-4 py-1.5 bg-background dark:bg-white/10 text-foreground rounded-xl text-xs font-bold border border-border hover:bg-grad-primary hover:text-white hover:border-primary transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                {/* Simulated Progress Level */}
                <div className="mt-8 h-[2px] w-full bg-border/20 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: idx * 0.1 }}
                    className="h-full bg-grad-primary"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
