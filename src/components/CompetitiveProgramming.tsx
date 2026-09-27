/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { SOCIAL_LINKS } from '../constants';
import { Button } from './ui/button';
import { ExternalLink, Terminal } from 'lucide-react';

export const CompetitiveProgramming = () => {
  const cpLinks = SOCIAL_LINKS.filter(l => 
    ['LeetCode', 'CodeChef', 'HackerRank', 'Codeforces', 'GeeksforGeeks'].includes(l.name)
  );

  return (
    <section id="cp" className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-8 lg:px-24 bg-grad-soft text-foreground dark:text-white rounded-[2.5rem] sm:rounded-[4rem] xl:rounded-[8rem] mx-2 sm:mx-4 my-12 sm:my-20 transition-colors duration-500 border border-border/50 dark:border-none shadow-2xl shadow-black/5 dark:shadow-none overflow-hidden">
      <div className="max-w-[1800px] mx-auto">
        <div className="mb-12 sm:mb-16 md:mb-20 space-y-3 sm:space-y-4">
          <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">Algorithms</span>
          <h2 className="text-3xl xs:text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter leading-tight sm:leading-none">
            Competitive <br/><span className="italic text-primary">Programming.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {cpLinks.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6, rotateZ: i % 2 === 0 ? 1 : -1 }}
              className="group min-h-[280px] sm:min-h-[340px] p-6 sm:p-8 md:p-10 bg-white/60 dark:bg-[#0A1222]/80 border border-border/80 dark:border-primary/20 rounded-3xl md:rounded-[3rem] backdrop-blur-xl flex flex-col justify-between transition-all hover:bg-white/80 dark:hover:bg-[#0A1222] hover:border-primary/50 shadow-lg shadow-black/5 dark:shadow-[0_0_40px_rgba(0,138,245,0.15)] relative overflow-hidden"
            >
              {/* Card Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative z-10 space-y-4 sm:space-y-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-background dark:bg-white/10 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl text-primary group-hover:bg-grad-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <Terminal size={26} className="sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 text-foreground dark:text-white">{platform.name}</h3>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold text-primary tracking-widest uppercase">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
                    Verified Profile
                  </div>
                </div>
              </div>

              <div className="relative z-10 space-y-4 sm:space-y-6 pt-4">
                {/* Platform Specific Visual (Simulated) */}
                <div className="flex items-end gap-1 h-6 sm:h-8 opacity-20 dark:opacity-20 group-hover:opacity-60 transition-opacity">
                  {[40, 70, 50, 90, 60, 80].map((h, k) => (
                    <div key={k} className="w-2 rounded-full bg-foreground dark:bg-white" style={{ height: `${h}%` }} />
                  ))}
                </div>
                
                <Button 
                  asChild
                  variant="ghost" 
                  className="w-full justify-between h-12 sm:h-14 rounded-2xl bg-background/50 dark:bg-white/5 border border-border dark:border-white/10 hover:bg-grad-primary hover:text-white transition-all group/btn"
                >
                  <a href={platform.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit Yuvateja Sainadh on ${platform.name} (opens in new tab)`}>
                    <span className="text-[10px] uppercase font-black tracking-widest">Visit Profile</span>
                    <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform shrink-0" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
