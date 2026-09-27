/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Shield, Cpu, Layers } from "lucide-react";
import type { ProjectItem, ProjectStatus } from "../constants";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

const statusBadgeStyles: Record<ProjectStatus, { bg: string; text: string; dot: string; border: string }> = {
  "IN DEVELOPMENT": {
    bg: "bg-amber-500/10 dark:bg-amber-500/15",
    text: "text-amber-700 dark:text-amber-400",
    dot: "bg-amber-500 animate-pulse",
    border: "border-amber-500/30",
  },
  "COMPLETED": {
    bg: "bg-emerald-500/10 dark:bg-emerald-500/15",
    text: "text-emerald-700 dark:text-emerald-400",
    dot: "bg-emerald-500",
    border: "border-emerald-500/30",
  },
  "COMPLETED & LIVE": {
    bg: "bg-primary/10 dark:bg-primary/15",
    text: "text-primary dark:text-cyan-300",
    dot: "bg-primary shadow-[0_0_8px_var(--primary)]",
    border: "border-primary/40",
  },
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const badgeStyle = statusBadgeStyles[project.status] || statusBadgeStyles["IN DEVELOPMENT"];
  const isVoiceShield = project.slug === "voiceshield";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Link
        to={`/projects/${project.slug}`}
        aria-label={`View ${project.title} - ${project.shortDescription}`}
        className={`group relative flex flex-col justify-between h-full p-5 sm:p-6 md:p-7 rounded-2xl md:rounded-3xl backdrop-blur-xl transition-all duration-300 overflow-hidden border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
          isVoiceShield
            ? "bg-white/10 dark:bg-white/[0.04] border-primary/40 hover:border-primary hover:shadow-[0_12px_40px_rgba(0,138,245,0.18)]"
            : "bg-white/60 dark:bg-white/[0.03] border-border/80 hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(0,138,245,0.1)]"
        } hover:-translate-y-1.5`}
      >
        {/* Ambient Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Top Section: Logo, Status Badge, Category */}
        <div className="relative z-10 space-y-4 sm:space-y-5">
          <div className="flex items-start justify-between gap-3 flex-wrap xs:flex-nowrap">
            {/* Logo Container */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0B1120] border border-white/15 p-2 sm:p-2.5 flex items-center justify-center shrink-0 shadow-md shadow-black/20 group-hover:scale-105 transition-transform duration-300">
              <img
                src={project.logo}
                alt={project.logoAlt}
                width={56}
                height={56}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Status Badge */}
            <div
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider border shrink-0 ${badgeStyle.bg} ${badgeStyle.text} ${badgeStyle.border}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${badgeStyle.dot}`} />
              <span>{project.status}</span>
            </div>
          </div>

          {/* Project Titles & Category */}
          <div className="space-y-1 sm:space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                {project.category}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <p className="text-xs sm:text-sm font-medium text-muted-foreground line-clamp-2 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
        </div>

        {/* Bottom Action Footer */}
        <div className="relative z-10 pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-border/50 flex items-center justify-between gap-2">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-wider sm:tracking-widest uppercase text-muted-foreground font-semibold truncate">
            {project.tech.slice(0, 3).join(" • ")}
          </span>

          <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-primary group-hover:translate-x-1 transition-transform duration-300 shrink-0">
            <span>View Project</span>
            <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};