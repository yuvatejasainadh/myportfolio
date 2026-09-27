/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  ArrowUpRight, 
  Github, 
  ExternalLink, 
  Lock, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Sparkles, 
  ShieldAlert,
  GitBranch
} from "lucide-react";
import { PROJECTS, type ProjectStatus } from "../constants";
import { Navbar } from "./Navbar";
import { useTheme } from "./ThemeContext";

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

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { theme } = useTheme();

  const project = PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.seoTitle} | Yuvateja Sainadh`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", project.seoDescription);
      }
    } else {
      document.title = "Project Not Found | Yuvateja Sainadh";
    }

    return () => {
      document.title = "Yuvateja Sainadh | Applied AI Engineer & Systems Architect";
    };
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-grad-soft text-foreground flex flex-col items-center justify-center px-6">
        <Navbar />
        <div className="text-center space-y-6 max-w-md pt-20">
          <ShieldAlert size={48} className="mx-auto text-primary" />
          <h1 className="text-3xl font-bold tracking-tight">Project Not Found</h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            The project you are looking for does not exist or may have been repositioned.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-grad-primary text-white text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
          >
            <ArrowLeft size={14} />
            <span>Return to Projects</span>
          </Link>
        </div>
      </div>
    );
  }

  const badgeStyle = statusBadgeStyles[project.status] || statusBadgeStyles["IN DEVELOPMENT"];

  return (
    <div className="min-h-screen bg-grad-soft text-foreground dark:text-white transition-colors duration-500 overflow-x-hidden">
      {/* Global Navigation */}
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-12 pt-24 sm:pt-32 pb-16 sm:pb-28 space-y-10 sm:space-y-16">
        {/* Top Breadcrumb / Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group py-1"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300 shrink-0" />
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        {/* Project Hero Header */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-3xl bg-white/70 dark:bg-white/[0.04] border border-border/80 backdrop-blur-xl shadow-xl space-y-8 sm:space-y-10"
        >
          {/* Top Meta Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-6 sm:pb-8">
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Logo Container */}
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-[#0B1120] border border-white/15 p-2.5 sm:p-3 flex items-center justify-center shrink-0 shadow-lg shadow-black/25">
                <img
                  src={project.logo}
                  alt={project.logoAlt}
                  width={80}
                  height={80}
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-primary block mb-0.5 sm:mb-1">
                  {project.category}
                </span>
                <h1 className="text-2xl xs:text-3xl sm:text-5xl font-bold tracking-tight text-foreground">
                  {project.title}
                </h1>
              </div>
            </div>

            {/* Status Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider border self-start sm:self-auto shrink-0 ${badgeStyle.bg} ${badgeStyle.text} ${badgeStyle.border}`}
            >
              <span className={`w-2 h-2 rounded-full ${badgeStyle.dot}`} />
              <span>{project.status}</span>
            </div>
          </div>

          {/* Full Formal Title */}
          <div className="space-y-2.5 sm:space-y-4">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-muted-foreground block">
              Formal Architecture Title
            </span>
            <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-foreground/90 leading-snug break-words">
              {project.fullTitle}
            </p>
          </div>

          {/* Role & Ecosystem Context */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-border/50 text-sm">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">
                Engineering Role
              </span>
              <p className="font-semibold text-foreground">{project.role}</p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">
                Domain / Positioning
              </span>
              <p className="font-semibold text-foreground">{project.category}</p>
            </div>

            {project.ecosystem && (
              <div className="space-y-1 sm:col-span-2 lg:col-span-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">
                  Venture Architecture
                </span>
                <p className="font-semibold text-foreground">{project.ecosystem}</p>
              </div>
            )}
          </div>
        </motion.section>

        {/* Ecosystem & Venture Relationship (If applicable) */}
        {project.relationship && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-5 sm:p-8 rounded-2xl bg-primary/5 dark:bg-primary/[0.04] border border-primary/20 backdrop-blur-sm space-y-2.5 sm:space-y-3"
          >
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-primary">
              <GitBranch size={15} className="shrink-0" />
              <span>Ecosystem Relationship</span>
            </div>
            <p className="text-foreground/90 text-sm sm:text-base font-medium leading-relaxed">
              {project.relationship}
            </p>
          </motion.section>
        )}

        {/* About the Project */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-primary shrink-0" />
            <h2 className="text-lg sm:text-2xl font-bold uppercase tracking-wider text-foreground">
              About the Project
            </h2>
          </div>
          <div className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-white/60 dark:bg-white/[0.03] border border-border/80 backdrop-blur-xl">
            <p className="text-sm sm:text-lg text-muted-foreground font-medium leading-relaxed">
              {project.description}
            </p>
          </div>
        </motion.section>

        {/* Technology Stack */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-primary shrink-0" />
            <h2 className="text-lg sm:text-2xl font-bold uppercase tracking-wider text-foreground">
              Technology Stack
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-2.5">
            {project.tech.map((technology) => (
              <span
                key={technology}
                className="px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider rounded-xl border border-border bg-white/70 dark:bg-white/5 text-foreground shadow-sm hover:border-primary/60 hover:text-primary transition-all duration-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Key Features / Architectural Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-primary shrink-0" />
            <h2 className="text-lg sm:text-2xl font-bold uppercase tracking-wider text-foreground">
              Key Features & Architectural Highlights
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {project.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white/60 dark:bg-white/[0.03] border border-border/80 backdrop-blur-xl flex items-start gap-3"
              >
                <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-foreground leading-relaxed">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Project Links / Verification */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="w-6 h-[2px] bg-primary shrink-0" />
            <h2 className="text-lg sm:text-2xl font-bold uppercase tracking-wider text-foreground">
              Project Access & Links
            </h2>
          </div>
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/60 dark:bg-white/[0.03] border border-border/80 backdrop-blur-xl flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            {/* Live Deployment Link (Only if verified URL exists) */}
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-grad-primary text-white text-xs font-bold tracking-widest uppercase shadow-md shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
              >
                <ExternalLink size={15} />
                <span>Visit Live Platform</span>
                <ArrowUpRight size={15} />
              </a>
            ) : null}

            {/* Public Source Code Link (Only if verified URL exists) */}
            {project.github && project.github !== "#" ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-border bg-white/70 dark:bg-white/5 text-xs font-bold tracking-widest uppercase text-foreground hover:text-primary hover:border-primary transition-all duration-300 w-full sm:w-auto"
              >
                <Github size={16} />
                <span>Source Code</span>
                <ArrowUpRight size={15} />
              </a>
            ) : null}

            {/* Proprietary / In-Development Notice */}
            {!project.live && (!project.github || project.github === "#") && (
              <div className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/50 dark:bg-white/5 border border-border text-xs font-mono font-semibold text-muted-foreground w-full sm:w-auto text-center">
                <Lock size={14} className="text-primary/70 shrink-0" />
                <span>{project.repoStatusText || "Proprietary Architecture"}</span>
              </div>
            )}
          </div>
        </motion.section>

        {/* Bottom Back Navigation */}
        <div className="pt-8 sm:pt-12 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors group py-1"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform duration-300 shrink-0" />
            <span>Back to Projects</span>
          </Link>

          <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            {project.title} • {project.status}
          </span>
        </div>
      </main>
    </div>
  );
};
