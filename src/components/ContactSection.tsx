/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Button } from './ui/button';
import { PERSONAL_INFO, CONTACT_API_URL } from '../constants';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Mail, 
  RotateCcw,
  ExternalLink 
} from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  honeypot: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type SubmissionState = 'idle' | 'submitting' | 'success' | 'error';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmissionState>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');
  const [inquiryId, setInquiryId] = useState<string>('');
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  const validateField = (name: keyof ContactFormData, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Please enter your full name.';
        if (value.trim().length < 2) return 'Name must be at least 2 characters.';
        if (value.length > 100) return 'Name cannot exceed 100 characters.';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Please enter your email address.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid email address (e.g. name@domain.com).';
        }
        if (value.length > 150) return 'Email cannot exceed 150 characters.';
        return undefined;
      case 'subject':
        if (!value.trim()) return 'Please enter a subject.';
        if (value.trim().length < 3) return 'Subject must be at least 3 characters.';
        if (value.length > 150) return 'Subject cannot exceed 150 characters.';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Please describe your inquiry or project details.';
        if (value.trim().length < 10) return 'Message must be at least 10 characters long.';
        if (value.length > 2000) return 'Message cannot exceed 2000 characters.';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error for field as user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
    
    // Clear global error message when user resumes typing
    if (status === 'error') {
      setStatus('idle');
      setStatusMessage('');
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'honeypot') return;
    const error = validateField(name as keyof ContactFormData, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 1. Spam honeypot detection
    if (formData.honeypot) {
      // Silently simulate success for bots without calling API
      setStatus('submitting');
      setTimeout(() => {
        setStatus('success');
        setStatusMessage('Your inquiry has been received.');
        setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      }, 600);
      return;
    }

    // 2. Submission cooldown check (15-second rate-limit)
    const now = Date.now();
    if (now - lastSubmitTime < 15000 && lastSubmitTime > 0) {
      const waitSec = Math.ceil((15000 - (now - lastSubmitTime)) / 1000);
      setStatus('error');
      setStatusMessage(`Please wait ${waitSec} second${waitSec > 1 ? 's' : ''} before submitting another inquiry.`);
      return;
    }

    // 3. Client-side validation
    const newErrors: FormErrors = {};
    const nameErr = validateField('name', formData.name);
    const emailErr = validateField('email', formData.email);
    const subjectErr = validateField('subject', formData.subject);
    const messageErr = validateField('message', formData.message);

    if (nameErr) newErrors.name = nameErr;
    if (emailErr) newErrors.email = emailErr;
    if (subjectErr) newErrors.subject = subjectErr;
    if (messageErr) newErrors.message = messageErr;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus('idle');
      return;
    }

    // 4. Submit to Google Apps Script API endpoint
    setStatus('submitting');
    setStatusMessage('');
    setInquiryId('');

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (data && data.success) {
        setStatus('success');
        setStatusMessage(data.message || 'Your inquiry has been dispatched successfully.');
        if (data.inquiryId) {
          setInquiryId(data.inquiryId);
        }
        setLastSubmitTime(Date.now());
        // Reset form on confirmed success
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          honeypot: '',
        });
        setErrors({});
      } else {
        setStatus('error');
        setStatusMessage(
          data?.message ||
            'Unable to dispatch your inquiry right now. Please try again or contact me directly by email.'
        );
      }
    } catch {
      setStatus('error');
      setStatusMessage(
        'Unable to dispatch your inquiry right now. Please try again or contact me directly by email.'
      );
    }
  };

  const mailtoFallbackUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry - Yuvateja Sainadh'
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-40 bg-grad-soft rounded-t-[4rem] px-8 lg:px-24 transition-colors duration-500">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-start">
          
          {/* LEFT COLUMN: Narrative & Direct Channels */}
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="block text-primary font-bold tracking-[0.2em] text-xs uppercase">
                Direct Communication
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-7xl font-bold tracking-tight leading-[0.9] text-foreground">
                LET'S START
                <br />
                A{' '}
                <span className="relative inline-block italic">
                  <span className="inline-block bg-grad-primary bg-clip-text text-transparent pr-4 md:pr-6 lg:pr-8">
                    CONVERSATION
                  </span>
                  {/* Subtle underline glow */}
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-grad-primary opacity-40 blur-sm" />
                </span>
              </h2>
            </div>

            <p className="text-muted-foreground max-w-md text-lg leading-relaxed">
              Have an idea, opportunity, or just want to connect? I’m always open to building meaningful and impactful systems.
            </p>

            {/* Direct Contact Links */}
            <div className="space-y-4 pt-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary block mb-1">
                  Primary Email
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  aria-label="Send email to Yuvateja Sainadh"
                  className="group inline-block text-2xl md:text-3xl font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  <span className="relative">
                    {PERSONAL_INFO.email}
                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" />
                  </span>
                </a>
              </div>

              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary block mb-1">
                  Telephone Contact
                </span>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  aria-label="Call Yuvateja Sainadh"
                  className="block text-lg text-muted-foreground hover:text-primary transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Functional Contact Form */}
          <div className="space-y-8 bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-border/80 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-xl shadow-black/5 dark:shadow-none">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                Send an Inquiry
              </h3>
              <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                Direct Inquiries & Architecture Discussions
              </p>
            </div>

            {/* Live Notification Region */}
            {status === 'success' && (
              <div 
                role="status" 
                aria-live="polite"
                className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 space-y-3 animate-in fade-in duration-300"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold text-sm">Message Dispatched</p>
                    <p className="text-xs leading-relaxed opacity-90">{statusMessage}</p>
                    {inquiryId && (
                      <p className="text-xs font-mono font-semibold tracking-wide text-emerald-700 dark:text-emerald-400 pt-1">
                        Reference: {inquiryId}
                      </p>
                    )}
                  </div>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setStatus('idle');
                    setStatusMessage('');
                    setInquiryId('');
                  }}
                  className="text-xs border-emerald-500/40 hover:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                  Send Another Message
                </Button>
              </div>
            )}

            {status === 'error' && (
              <div 
                role="alert" 
                aria-live="polite"
                className="p-5 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-800 dark:text-red-300 space-y-3 animate-in fade-in duration-300"
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold text-sm">Delivery Notice</p>
                    <p className="text-xs leading-relaxed opacity-90">{statusMessage}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href={mailtoFallbackUrl}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 text-white hover:bg-red-700 text-xs font-semibold transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send via Email Client</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setStatusMessage('');
                    }}
                    className="px-3 py-1.5 rounded-lg border border-red-500/30 hover:bg-red-500/10 text-xs font-semibold transition-colors"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              {/* Spam Honeypot - hidden from sighted users & screen readers */}
              <div aria-hidden="true" style={{ opacity: 0, position: 'absolute', top: '-9999px', left: '-9999px', pointerEvents: 'none' }}>
                <label htmlFor="company_fax">Company Fax</label>
                <input
                  type="text"
                  id="company_fax"
                  name="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={handleChange}
                />
              </div>

              {/* Name Field */}
              <div className="space-y-1.5">
                <label 
                  htmlFor="contact-name"
                  className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center justify-between"
                >
                  <span>Full Name <span className="text-primary">*</span></span>
                  <span className="text-[9px] text-muted-foreground font-normal">Max 100 chars</span>
                </label>
                <div className="relative border-b border-border focus-within:border-primary transition-all duration-300">
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    maxLength={100}
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    disabled={status === 'submitting'}
                    className="w-full bg-transparent outline-none text-base md:text-lg font-medium py-2 text-foreground placeholder:text-muted-foreground/40 disabled:opacity-50"
                  />
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary focus-within:w-full transition-all duration-300" />
                </div>
                {errors.name && (
                  <p id="contact-name-error" role="alert" className="text-xs text-red-600 dark:text-red-400 font-medium flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <label 
                  htmlFor="contact-email"
                  className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center justify-between"
                >
                  <span>Email Address <span className="text-primary">*</span></span>
                  <span className="text-[9px] text-muted-foreground font-normal">Max 150 chars</span>
                </label>
                <div className="relative border-b border-border focus-within:border-primary transition-all duration-300">
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={150}
                    placeholder="e.g. alex.morgan@organization.com"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    disabled={status === 'submitting'}
                    className="w-full bg-transparent outline-none text-base md:text-lg font-medium py-2 text-foreground placeholder:text-muted-foreground/40 disabled:opacity-50"
                  />
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary focus-within:w-full transition-all duration-300" />
                </div>
                {errors.email && (
                  <p id="contact-email-error" role="alert" className="text-xs text-red-600 dark:text-red-400 font-medium flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div className="space-y-1.5">
                <label 
                  htmlFor="contact-subject"
                  className="text-[10px] font-bold uppercase tracking-widest text-primary flex items-center justify-between"
                >
                  <span>Subject <span className="text-primary">*</span></span>
                  <span className="text-[9px] text-muted-foreground font-normal">Max 150 chars</span>
                </label>
                <div className="relative border-b border-border focus-within:border-primary transition-all duration-300">
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    autoComplete="off"
                    required
                    maxLength={150}
                    placeholder="e.g. AI Security Architecture / Project Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                    disabled={status === 'submitting'}
                    className="w-full bg-transparent outline-none text-base md:text-lg font-medium py-2 text-foreground placeholder:text-muted-foreground/40 disabled:opacity-50"
                  />
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary focus-within:w-full transition-all duration-300" />
                </div>
                {errors.subject && (
                  <p id="contact-subject-error" role="alert" className="text-xs text-red-600 dark:text-red-400 font-medium flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label 
                    htmlFor="contact-message"
                    className="text-[10px] font-bold uppercase tracking-widest text-primary"
                  >
                    Project Details & Message <span className="text-primary">*</span>
                  </label>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    {formData.message.length}/2000
                  </span>
                </div>
                <div className="relative border-b border-border focus-within:border-primary transition-all duration-300">
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    maxLength={2000}
                    rows={4}
                    placeholder="Provide context regarding your architectural needs, project timeline, or questions..."
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'contact-message-error' : undefined}
                    disabled={status === 'submitting'}
                    className="w-full bg-transparent outline-none text-base md:text-lg font-medium py-2 resize-none text-foreground placeholder:text-muted-foreground/40 disabled:opacity-50"
                  />
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary focus-within:w-full transition-all duration-300" />
                </div>
                {errors.message && (
                  <p id="contact-message-error" role="alert" className="text-xs text-red-600 dark:text-red-400 font-medium flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={status === 'submitting'}
                aria-label={status === 'submitting' ? 'Dispatching...' : 'Dispatch Inquiry'}
                className="group relative w-full h-16 overflow-hidden rounded-none bg-grad-primary text-white text-[11px] font-black tracking-[0.3em] uppercase transition-all duration-300 shadow-xl shadow-primary/20 hover:-translate-y-1 hover:shadow-primary/40 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed cursor-pointer"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>DISPATCHING...</span>
                    </>
                  ) : (
                    <>
                      <span>DISPATCH INQUIRY</span>
                      <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </span>

                {/* Shine Effect */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 bg-white/10" />
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
