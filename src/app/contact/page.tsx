"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "123 Main Street, Quezon City, Philippines",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+63 912 345 6789",
    href: "tel:+639123456789",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@basiocafe.com",
    href: "mailto:hello@basiocafe.com",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Sat: 10AM - 10PM\nSun: 8AM - 9PM",
  },
];

const FacebookIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
);
const InstagramIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);

const socials = [
  { icon: FacebookIcon, label: "Facebook", href: "https://facebook.com" },
  { icon: InstagramIcon, label: "Instagram", href: "https://instagram.com" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/images/ambiance-spread.jpg"
          alt="Get in Touch with Basio"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-warm-dark/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center"
          >
            Get in Touch
          </motion.h1>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">
              Send Us a Message
            </h2>
            <p className="text-muted-foreground mb-8">
              Have a question or want to make a reservation? We&apos;d love to hear
              from you.
            </p>

            <form
              className="space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-2">
                <Label htmlFor="contact-name">Name</Label>
                <Input id="contact-name" placeholder="Your full name" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-subject">Subject</Label>
                <Input
                  id="contact-subject"
                  placeholder="How can we help you?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Write your message here..."
                  rows={5}
                />
              </div>

              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-2">
              Contact Information
            </h2>
            <p className="text-muted-foreground mb-4">
              Visit us or reach out through any of the channels below.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex items-start gap-4 rounded-xl bg-card border border-border p-5 shadow-sm"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/15 shrink-0">
                      <Icon className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary text-sm mb-0.5">
                        {info.label}
                      </h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground text-sm hover:text-secondary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm whitespace-pre-line">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-20 px-4 bg-warm">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-10"
          >
            Find Us
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl overflow-hidden border border-border shadow-sm"
          >
            <div className="relative w-full h-[350px] md:h-[400px] bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-10 w-10 text-secondary mx-auto mb-3" />
                <p className="text-muted-foreground font-medium">
                  Map Placeholder
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  123 Main Street, Quezon City, Philippines
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            Follow Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground mb-8"
          >
            Stay updated with our latest dishes, events, and promotions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center gap-3 rounded-xl bg-card border border-border px-6 py-4 shadow-sm",
                    "hover:border-secondary hover:shadow-md transition-all"
                  )}
                >
                  <span className="text-secondary"><Icon /></span>
                  <span className="font-medium text-primary">{social.label}</span>
                </a>
              );
            })}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
