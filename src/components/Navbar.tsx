"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/basio-logo-v2.png"
            alt="Basio Logo"
            width={48}
            height={48}
            className="rounded-full"
            priority
          />
          <span
            className={cn(
              "font-heading text-2xl font-bold tracking-wide transition-colors duration-300",
              scrolled ? "text-primary" : "text-white"
            )}
            style={{ fontFamily: "var(--font-heading)" }}
          >
            BASIO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative py-1 text-sm font-medium transition-colors duration-300",
                    scrolled
                      ? isActive
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                      : isActive
                        ? "text-secondary"
                        : "text-white/90 hover:text-white"
                  )}
                >
                  {link.label}
                  {/* Hover underline animation */}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-0.5 bg-secondary transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-0.5 bg-secondary transition-all duration-300 hover:w-full",
                      isActive ? "w-full" : "w-0"
                    )}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className={cn(
              "hidden rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 hover:scale-105 md:inline-block",
              "bg-secondary text-secondary-foreground hover:bg-secondary/90"
            )}
          >
            Reserve a Table
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "inline-flex items-center justify-center rounded-md p-2 transition-colors md:hidden",
              scrolled
                ? "text-foreground hover:bg-muted"
                : "text-white hover:bg-white/10"
            )}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-0 z-40 bg-black/50 md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[280px] flex-col bg-white shadow-xl md:hidden"
            >
              {/* Mobile header */}
              <div className="flex items-center justify-between border-b border-border px-4 py-4">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <Image
                    src="/images/basio-logo-v2.png"
                    alt="Basio Logo"
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                  <span
                    className="font-heading text-xl font-bold text-primary"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    BASIO
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md p-2 text-foreground hover:bg-muted"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Mobile links */}
              <nav className="flex-1 overflow-y-auto px-4 py-6">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "block rounded-lg px-4 py-3 text-base font-medium transition-colors",
                            isActive
                              ? "bg-primary/10 text-primary"
                              : "text-foreground hover:bg-muted"
                          )}
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Mobile CTA */}
              <div className="border-t border-border p-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full rounded-full bg-secondary py-3 text-center text-sm font-semibold text-secondary-foreground transition-colors hover:bg-secondary/90"
                >
                  Reserve a Table
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
