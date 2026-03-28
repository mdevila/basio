"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check, ChevronRight, Users, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { cateringPackages } from "@/data/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const steps = [
  { number: 1, title: "Contact Us", description: "Reach out via form or phone" },
  { number: 2, title: "Choose Package", description: "Select the right fit for your event" },
  { number: 3, title: "Customize Menu", description: "Tailor dishes to your taste" },
  { number: 4, title: "Enjoy Your Event", description: "Sit back and let us handle it all" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function CateringPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Banner */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <Image
          src="/images/catering-pasta.jpg"
          alt="Basio Catering Services"
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
            Catering Services
          </motion.h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
            Bring Basio to Your Event
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From intimate gatherings to grand celebrations, Basio&apos;s catering
            services bring our restaurant-quality food directly to any venue. Our
            dedicated team ensures every detail is handled with the same care and
            passion that defines the Basio dining experience. Let us turn your
            next event into something truly memorable.
          </p>
        </motion.div>
      </section>

      {/* Packages Section */}
      <section className="py-16 md:py-20 px-4 bg-warm">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-12"
          >
            Our Catering Packages
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            {cateringPackages.map((pkg, i) => {
              const isPopular = "popular" in pkg && pkg.popular;
              return (
                <motion.div
                  key={pkg.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={cn(
                    "relative rounded-2xl bg-card p-6 lg:p-8 shadow-sm transition-shadow hover:shadow-md flex flex-col",
                    isPopular
                      ? "border-2 border-secondary md:scale-105 md:-my-4 shadow-md z-10"
                      : "border border-border"
                  )}
                >
                  {isPopular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                      Popular
                    </span>
                  )}

                  <h3 className="font-heading text-xl lg:text-2xl font-bold text-primary mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {pkg.description}
                  </p>

                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <Users className="h-4 w-4" />
                    <span>{pkg.guests}</span>
                  </div>

                  <p className="text-3xl lg:text-4xl font-bold text-secondary mb-6">
                    {pkg.price}
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={isPopular ? "secondary" : "outline"}
                    size="lg"
                    className="w-full"
                  >
                    Inquire Now
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl md:text-4xl font-bold text-primary text-center mb-14"
          >
            How It Works
          </motion.h2>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-secondary/30" />

            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-secondary text-secondary-foreground font-heading text-2xl font-bold mb-4 shadow-md">
                  {step.number}
                </div>
                <h3 className="font-heading text-lg font-bold text-primary mb-1">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-16 md:py-20 px-4 bg-warm">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-3">
              Request a Quote
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border space-y-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="catering-name">Name</Label>
                <Input id="catering-name" placeholder="Your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="catering-email">Email</Label>
                <Input id="catering-email" type="email" placeholder="your@email.com" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="catering-phone">Phone</Label>
                <Input id="catering-phone" type="tel" placeholder="+63 9XX XXX XXXX" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="catering-date">Event Date</Label>
                <Input id="catering-date" type="date" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="catering-guests">Number of Guests</Label>
                <Input id="catering-guests" type="number" placeholder="e.g. 80" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="catering-package">Package Interest</Label>
                <select
                  id="catering-package"
                  className={cn(
                    "flex h-10 w-full rounded-lg border border-primary/20 bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
                  )}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a package
                  </option>
                  {cateringPackages.map((pkg) => (
                    <option key={pkg.name} value={pkg.name}>
                      {pkg.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="catering-message">Message</Label>
              <Textarea
                id="catering-message"
                placeholder="Tell us about your event, special requests, dietary needs..."
                rows={4}
              />
            </div>

            <Button variant="secondary" size="lg" className="w-full">
              <Send className="h-4 w-4 mr-2" />
              Submit Inquiry
            </Button>
          </motion.form>
        </div>
      </section>
    </main>
  );
}
