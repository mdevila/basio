"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Users, Music, UtensilsCrossed, Camera } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { eventTypes } from "@/data/content";

function AnimatedSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const venueHighlights = [
  {
    icon: Users,
    title: "Spacious Venue",
    description:
      "Accommodating up to 200 guests comfortably with flexible seating arrangements.",
  },
  {
    icon: Music,
    title: "Sound System",
    description:
      "Professional audio equipment for speeches, music, and entertainment.",
  },
  {
    icon: UtensilsCrossed,
    title: "Catering Included",
    description:
      "Full-service catering with customizable menus featuring our signature dishes.",
  },
  {
    icon: Camera,
    title: "Photo Area",
    description:
      "Beautifully styled photo spots for memorable snapshots of your celebration.",
  },
];

const galleryImages = [
  { src: "/images/catering-buffet-chicken.jpg", alt: "Buffet chicken spread" },
  { src: "/images/catering-pasta.jpg", alt: "Catering pasta" },
  { src: "/images/catering-buffet-veggies.jpg", alt: "Vegetable buffet" },
  { src: "/images/ambiance-spread.jpg", alt: "Full dining spread" },
  { src: "/images/dish-chicken-stuffed.jpg", alt: "Stuffed chicken" },
  { src: "/images/hero-beef-ribs.jpg", alt: "Beef ribs platter" },
];

export default function EventsPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/catering-buffet-chicken.jpg"
          alt="Basio events venue"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-heading text-white text-center px-4"
        >
          Events &amp; Celebrations
        </motion.h1>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Basio is more than a restaurant — it is a destination for life's
              most meaningful moments. From intimate gatherings to grand
              celebrations, our versatile venue and world-class catering
              transform every event into an extraordinary experience your guests
              will never forget.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 md:py-24 px-4 bg-warm">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl text-primary text-center mb-16">
              Events We Host
            </h2>
          </AnimatedSection>

          <div className="space-y-20">
            {eventTypes.map((event, index) => (
              <AnimatedSection key={event.title}>
                <div
                  className={cn(
                    "grid md:grid-cols-2 gap-8 md:gap-12 items-center",
                    index % 2 === 1 && "md:[&>*:first-child]:order-2"
                  )}
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl md:text-3xl text-primary mb-4">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {event.description}
                    </p>
                    <span className="inline-flex items-center gap-2 bg-secondary/15 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      <Users className="w-4 h-4" />
                      {event.capacity}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Highlights */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl text-primary text-center mb-12">
              Venue Highlights
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {venueHighlights.map((highlight, index) => (
              <AnimatedSection key={highlight.title} delay={index * 0.1}>
                <Card className="h-full text-center">
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-secondary/15 flex items-center justify-center mb-4">
                      <highlight.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="font-heading text-lg text-primary mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 px-4 bg-warm">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl text-primary text-center mb-12">
              Event Gallery
            </h2>
          </AnimatedSection>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <AnimatedSection key={image.src} delay={index * 0.08}>
                <div className="relative overflow-hidden rounded-xl group break-inside-avoid">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={index % 3 === 0 ? 500 : index % 3 === 1 ? 400 : 350}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Book Your Event */}
      <section className="py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-primary mb-6">
              Book Your Event
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to create an unforgettable celebration? Get in touch with our
              events team and let us bring your vision to life.
            </p>
            <Button asChild size="lg" className="text-base">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
