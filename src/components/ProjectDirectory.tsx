/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Shield, Sparkles, GitMerge, ArrowRight } from "lucide-react";
import { PROJECTS } from "../constants";
import { ProjectCard } from "./ProjectCard";

export const ProjectDirectory: React.FC = () => {
  const voiceShieldProject = PROJECTS.find((p) => p.slug === "voiceshield");
  const dripzoidProjects = PROJECTS.filter((p) => p.slug !== "voiceshield");

  return (
    <section
      id="projects"
      aria-label="Project Directory"
      className="py-32 md:py-40 bg-grad-soft text-foreground dark:text-white rounded-t-[3rem] xl:rounded-t-[6rem] transition-colors duration-500 border-t border-border/40"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-[11px] uppercase tracking-widest font-bold"
            >
              <Sparkles size={12} />
              <span>Project Directory</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05]"
            >
              Curated Systems & Ventures.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-muted-foreground text-lg sm:text-xl font-medium leading-relaxed"
            >
              Explore dedicated technical breakdowns across AI cybersecurity, next-gen fashion technology, and distributed automation backends.
            </motion.p>
          </div>

          <div className="hidden md:flex items-center gap-3 text-xs font-mono font-bold tracking-widest uppercase text-muted-foreground">
            <span className="w-8 h-[1px] bg-border" />
            <span>{PROJECTS.length.toString().padStart(2, "0")} Systems</span>
          </div>
        </div>

        {/* Directory Grid */}
        <div className="space-y-16">
          {/* 1. Independent AI Security System: VoiceShield */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary">
              <Shield size={14} />
              <span>AI Security Framework</span>
              <span className="h-[1px] flex-1 bg-border/60" />
            </div>

            {voiceShieldProject && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="md:col-span-2 lg:col-span-3">
                  <ProjectCard project={voiceShieldProject} index={0} />
                </div>
              </div>
            )}
          </div>

          {/* 2. Dripzoid Venture Suite & Ecosystem Evolution */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-[0.25em] text-primary">
                <GitMerge size={14} />
                <span>Dripzoid Venture Ecosystem</span>
                <span className="h-[1px] flex-1 bg-border/60" />
              </div>

              {/* Ecosystem Evolution Pipeline Visualizer */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/40 dark:bg-white/[0.02] border border-border/70 backdrop-blur-sm">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono font-medium text-muted-foreground">
                  <span className="font-bold text-foreground">Dripzoid V1.0</span>
                  <ArrowRight size={12} className="text-primary shrink-0" />
                  <span className="font-bold text-foreground">Automation</span>
                  <ArrowRight size={12} className="text-primary shrink-0" />
                  <span className="font-bold text-foreground">AskDrip V1.0</span>
                  <ArrowRight size={12} className="text-primary shrink-0" />
                  <span className="font-bold text-primary flex items-center gap-1.5">
                    Dripzoid V2.0 <span className="text-[10px] text-muted-foreground font-normal">(AskDrip Integrated)</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Dripzoid Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dripzoidProjects.map((project, idx) => (
                <ProjectCard key={project.slug} project={project} index={idx + 1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
