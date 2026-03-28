"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

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

const galleryImages = [
  { src: "/images/ambiance-spread.jpg", alt: "Basio dining spread" },
  { src: "/images/hero-signature.jpg", alt: "Signature beef ribs" },
  { src: "/images/drinks-iced-coffee.jpg", alt: "Basio iced coffee" },
  { src: "/images/hero-beef-ribs.jpg", alt: "Beef ribs close-up" },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-signature.jpg"
          alt="Basio restaurant interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-heading text-white text-center"
        >
          Our Story
        </motion.h1>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl text-primary mb-6">
              A Passion for Filipino Cuisine
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Basio was born from a deep-rooted passion for Filipino cuisine,
                reimagined with a modern flair that honors tradition while
                embracing innovation. What started as a humble dream has grown
                into a beloved cafe and restaurant that brings people together
                over exceptional food.
              </p>
              <p>
                Our journey began with a simple belief: that the rich, bold
                flavors of Filipino cooking deserve a contemporary stage. Every
                dish on our menu tells a story — of family recipes passed down
                through generations, of local ingredients sourced with care, and
                of a team that pours heart into every plate.
              </p>
              <p>
                From our signature Beef Ribs Tadyang to our carefully crafted
                beverages, Basio is more than a restaurant. It is a gathering
                place where memories are made, milestones are celebrated, and
                every guest is treated like family.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/images/ambiance-spread.jpg"
                alt="Basio food spread"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 px-4 bg-warm">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl text-primary text-center mb-12">
              Mission &amp; Vision
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl text-primary mb-4">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To serve exceptional food that celebrates Filipino flavors,
                    create a warm and welcoming atmosphere for every guest, and
                    deliver an unforgettable dining experience rooted in
                    hospitality, quality, and passion.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl text-primary mb-4">
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the most beloved Filipino restaurant and events venue
                    in the community — known for culinary excellence, heartfelt
                    service, and a space where every celebration feels
                    extraordinary.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading text-3xl md:text-4xl text-primary text-center mb-12">
              Our Space
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <AnimatedSection
                key={image.src}
                delay={index * 0.1}
                className={cn(
                  index === 0 && "lg:col-span-2 lg:row-span-2"
                )}
              >
                <div
                  className={cn(
                    "relative overflow-hidden rounded-xl group",
                    index === 0
                      ? "aspect-square lg:aspect-auto lg:h-full"
                      : "aspect-[4/3]"
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
