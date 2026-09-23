/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Github, ExternalLink, Shield, Layers, Sparkles, CheckCircle2, Lock } from "lucide-react";
import type { ProjectItem } from "../constants";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isFlagship = project.status === "flagship";
  const isParentVenture = project.status === "parent-venture";
  const isEcosystemProduct = project.status === "ecosystem-product";

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`group relative ${isEcosystemProduct ? "lg:ml-12" : ""}`}
    >
      {/* Ecosystem Hierarchy Connector Line for AskDrip */}
      {isEcosystemProduct && (
        <div className="flex items-center gap-3 mb-4 -mt-16 text-xs font-mono font-bold tracking-widest text-primary/90 uppercase">
          <span className="w-8 h-[2px] bg-primary/40" />
          <span>Dripzoid Ecosystem ─── AskDrip Product</span>
        </div>
      )}

      {/* Card Container */}
      <div
        className={`relative p-8 md:p-12 rounded-3xl backdrop-blur-xl transition-all duration-500 overflow-hidden ${
          isFlagship
            ? "border-2 border-primary/40 bg-white/10 dark:bg-white/[0.07] shadow-[0_10px_50px_rgba(0,161,155,0.15)] hover:border-primary/70"
            : "border border-border bg-white/5 dark:bg-white/5 hover:border-primary/30 hover:shadow-[0_10px_40px_rgba(0,0,0,0.12)]"
        } hover:-translate-y-2 hover:scale-[1.005]`}
      >
        {/* Subtle Gradient Glow */}
        <div
          className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none ${
            isFlagship
              ? "bg-gradient-to-br from-primary/15 via-transparent to-primary/10"
              : "bg-gradient-to-br from-primary/10 via-transparent to-primary/5"
          }`}
        />

        {/* Light Sweep Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
          <div className="absolute -left-1/2 top-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-8">
          {/* Header Row: Index, Badges, Category */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono tracking-[0.3em] text-muted-foreground font-bold">
                0{index + 1}
              </span>

              {/* Status Badge */}
              <span
                className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full border inline-flex items-center gap-1.5 ${
                  isFlagship
                    ? "bg-primary text-white border-primary shadow-sm shadow-primary/20"
                    : isParentVenture
                    ? "bg-primary/15 text-primary border-primary/30"
                    : "bg-white/10 dark:bg-white/10 text-foreground border-border"
                }`}
              >
                {isFlagship && <Shield size={12} />}
                {isParentVenture && <Layers size={12} />}
                {isEcosystemProduct && <Sparkles size={12} />}
                {project.badge}
              </span>
            </div>

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
              {project.category}
            </span>
          </div>

          {/* Project Title & Role */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
            </div>
            <p className="text-sm font-semibold tracking-wide text-muted-foreground">
              Role: <span className="text-foreground font-bold">{project.role}</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed text-lg md:text-xl max-w-3xl font-medium">
            {project.description}
          </p>

          {/* Core Architectural Capabilities */}
          {project.capabilities && project.capabilities.length > 0 && (
            <div className="space-y-2.5 pt-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground/80 block">
                Engineering Focus & Core Capabilities
              </span>
              <div className="grid md:grid-cols-3 gap-3">
                {project.capabilities.map((cap, ci) => (
                  <div
                    key={ci}
                    className="p-3.5 rounded-xl bg-white/40 dark:bg-white/5 border border-border/60 flex items-start gap-2.5"
                  >
                    <CheckCircle2 size={15} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-xs leading-snug font-medium text-foreground/90">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-2 pt-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground/80 block">
              Technology Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3.5 py-1 text-[11px] uppercase tracking-wider font-bold rounded-lg border border-border bg-white/50 dark:bg-white/5 hover:bg-grad-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Actions & Verification Status */}
          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-border/40">
            {/* Verified Live Link */}
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-grad-primary text-white text-xs font-bold tracking-widest uppercase shadow-md shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <ExternalLink size={14} />
                <span>Visit Live Platform</span>
                <ArrowUpRight size={14} />
              </a>
            ) : null}

            {/* Verified Repository or Private Status */}
            {project.github && project.github !== "#" ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-foreground hover:text-primary transition-colors"
              >
                <Github size={15} />
                <span>Source Repository</span>
                <ArrowUpRight size={14} />
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 dark:bg-white/5 border border-border text-[11px] font-semibold text-muted-foreground tracking-wide">
                <Lock size={12} className="text-primary/70" />
                <span>{project.repoStatusText || "Proprietary Architecture"}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};