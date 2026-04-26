/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
}

export const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative cursor-pointer"
    >
      {/* Card */}
      <div className="relative p-8 md:p-10 rounded-3xl border border-border bg-white/5 dark:bg-white/5 backdrop-blur-xl transition-all duration-500 
        hover:-translate-y-2 hover:scale-[1.01]
        hover:border-primary/30 
        hover:shadow-[0_10px_40px_rgba(0,0,0,0.12)] 
        overflow-hidden">

        {/* Subtle Gradient Glow */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 
          bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />

        {/* Animated Border Glow */}
        <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-primary/20 transition duration-500 pointer-events-none" />

        {/* Light Sweep Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
          <div className="absolute -left-1/2 top-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-6">

          {/* Index + Arrow */}
          <div className="flex items-center justify-between">
            <span className="text-xs tracking-[0.3em] text-muted-foreground font-bold">
              0{index + 1}
            </span>

            <ArrowUpRight
              className="opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              size={18}
            />
          </div>

          {/* Title */}
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed text-lg max-w-xl">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full border border-border bg-white/5 
                hover:bg-grad-primary hover:text-white transition-all duration-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
<div className="flex gap-8 pt-4">

  {/* LIVE PROJECT */}
  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm font-bold tracking-widest group/link hover:text-primary transition"
    >
      <ExternalLink size={16} />
      VIEW PROJECT

      {/* Arrow (hover only) */}
      <ArrowUpRight
        size={16}
        className="opacity-0 -translate-x-1 translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all duration-300"
      />
    </a>
  )}

  {/* SOURCE CODE */}
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-sm font-bold tracking-widest group/link hover:text-primary transition"
  >
    <Github size={16} />
    SOURCE CODE

    {/* Arrow (hover only) */}
    <ArrowUpRight
      size={16}
      className="opacity-0 -translate-x-1 translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all duration-300"
    />
  </a>

</div>
        </div>
      </div>
    </motion.div>
  );
};