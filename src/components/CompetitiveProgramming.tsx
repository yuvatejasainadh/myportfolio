/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, useSpring, useTransform, animate } from 'motion/react';
import { SOCIAL_LINKS } from '../constants';
import { Button } from './ui/button';
import { 
  Trophy, 
  ExternalLink, 
  Terminal, 
  Activity, 
  BarChart2, 
  ChevronRight,
  TrendingUp,
  Target
} from 'lucide-react';

const AnimatedCounter = ({ value }: { value: number }) => {
  const [count, setCount] = React.useState(0);
  
  React.useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      onUpdate: (latest) => setCount(Math.floor(latest)),
      ease: "easeOut"
    });
    return () => controls.stop();
  }, [value]);

  return <>{count}</>;
};

export const CompetitiveProgramming = () => {
  const cpLinks = SOCIAL_LINKS.filter(l => 
    ['LeetCode', 'CodeChef', 'HackerRank', 'Codeforces', 'GeeksforGeeks'].includes(l.name)
  );

  const stats = [
    { label: "Total Problems", value: 1000, suffix: "+", icon: <Target className="w-5 h-5" /> },
    { label: "Global Ranking", value: 200000, suffix: "", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Streaks", value: 100, suffix: "d", icon: <Activity className="w-5 h-5" /> },
  ];

  return (
    <section id="cp" className="py-40 px-8 lg:px-24 bg-grad-soft text-foreground dark:text-white rounded-[4rem] xl:rounded-[8rem] mx-4 my-20 transition-colors duration-500 border border-border/50 dark:border-none shadow-2xl shadow-black/5 dark:shadow-none">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 gap-12">
          <div className="space-y-4">
            <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase">Algorithms</span>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-none">
              Competitive <br/><span className="italic text-primary">Programming.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full lg:w-auto">
            {stats.map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-primary mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-black italic text-foreground dark:text-white">
                   <AnimatedCounter value={stat.value} />{stat.suffix}
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {cpLinks.map((platform, i) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, rotateZ: i % 2 === 0 ? 1 : -1 }}
              className="group h-[350px] p-10 bg-white/60 dark:bg-[#111827]/70 border border-gray-200 dark:border-primary/20 rounded-[3rem] backdrop-blur-xl flex flex-col justify-between transition-all hover:bg-white/80 dark:hover:bg-[#111827]/90 hover:border-primary/50 shadow-lg shadow-black/5 dark:shadow-[0_0_40px_rgba(0,161,155,0.1)] relative overflow-hidden"
            >
              {/* Card Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 bg-background dark:bg-white/10 rounded-2xl flex items-center justify-center text-3xl text-primary group-hover:bg-grad-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
                  <Terminal size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1 text-foreground dark:text-white">{platform.name}</h3>
                  <div className="flex items-center gap-2 text-xs font-bold text-primary tracking-widest uppercase">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Verified Profile
                  </div>
                </div>
              </div>

              <div className="relative z-10 space-y-6">
                {/* Platform Specific Visual (Simulated) */}
                <div className="flex items-end gap-1 h-8 opacity-20 dark:opacity-20 group-hover:opacity-60 transition-opacity">
                   {[40, 70, 50, 90, 60, 80].map((h, k) => (
                     <div key={k} className="w-2 rounded-full bg-foreground dark:bg-white" style={{ height: `${h}%` }} />
                   ))}
                </div>
                
                <Button 
                  asChild
                  variant="ghost" 
                  className="w-full justify-between h-14 rounded-2xl bg-background/50 dark:bg-white/5 border border-border dark:border-white/10 hover:bg-grad-primary hover:text-white transition-all group/btn"
                >
                  <a href={platform.url} target="_blank" rel="noreferrer">
                    <span className="text-[10px] uppercase font-black tracking-widest">Visit Profile</span>
                    <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
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
