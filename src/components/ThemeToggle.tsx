/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="relative p-3 rounded-full bg-secondary/80 dark:bg-secondary/40 backdrop-blur-xl border border-border shadow-lg shadow-black/5 hover:border-primary transition-all focus:outline-none"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {theme === 'light' ? (
            <motion.div
              key="sun"
              initial={{ y: 20, opacity: 0, rotate: 45 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -20, opacity: 0, rotate: -45 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Sun className="w-5 h-5 text-foreground" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ y: 20, opacity: 0, rotate: 45 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              exit={{ y: -20, opacity: 0, rotate: -45 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Moon className="w-5 h-5 text-foreground" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Animated Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/20 blur-md -z-10"
        animate={{
          scale: theme === 'light' ? 0.8 : 1.2,
          opacity: theme === 'light' ? 0.3 : 0.6,
        }}
      />
    </motion.button>
  );
};
