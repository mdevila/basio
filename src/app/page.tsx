"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ChevronDown, Star, ArrowRight, Quote } from "lucide-react";

import { menuItems, testimonials } from "@/data/content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/* ------------------------------------------------------------------ */
/*  Animation variants                                                 */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

/* ------------------------------------------------------------------ */
/*  Featured dishes (pick from mains + appetizers)                     */
/* ------------------------------------------------------------------ */

const featuredDishes = [
  menuItems.mains[0],   // Basio Beef Ribs Tadyang
  menuItems.appetizers[0], // Crispy Tempura Platter
  menuItems.mains[1],   // Roasted Chicken Leg
  menuItems.appetizers[1], // Stuffed Chicken Roulade
];

/* ------------------------------------------------------------------ */
/*  Section helper – uses useInView for scroll-triggered animations    */
/* ------------------------------------------------------------------ */

function AnimatedSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className={className}>
      {typeof children === "function"
        ? (children as (inView: boolean) => React.ReactNode)(inView)
        : children}
    </section>
  );
}

/* ================================================================== */
/*  HOME PAGE                                                          */
/* ================================================================== */

export default function HomePage() {
  /* refs for each section's inView tracking */
  const dishesRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const dishesInView = useInView(dishesRef, { once: true, margin: "-80px" });
  const aboutInView = useInView(aboutRef, { once: true, margin: "-80px" });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-80px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  return (
    <main>
      {/* ============================================================ */}
      {/*  1. HERO SECTION                                             */}
      {/* ============================================================ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with cinematic zoom-in */}
        <motion.div
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero-chicken-leg.jpg"
            alt="Basio roasted chicken leg"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Animated overlay — fades from full black to subtle */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 bg-black"
        />



        {/* Content with staggered reveal */}
        <div className="relative z-10 text-center px-4">
          {/* Subtitle appears first */}
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="text-sm md:text-base text-secondary uppercase mb-6 font-medium"
          >
            Restaurant &bull; Events &bull; Catering
          </motion.p>

          {/* Main heading with clip reveal */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-heading text-white mb-2"
            >
              Experience
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-heading text-white mb-8"
            >
              <span className="text-secondary">Basio</span>
            </motion.h1>
          </div>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
            className="mx-auto mb-8 h-0.5 w-24 bg-secondary origin-center"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.7, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-xl mx-auto"
          >
            Where every meal tells a story
          </motion.p>

          {/* Buttons with stagger */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button asChild variant="secondary" size="lg">
              <Link href="/menu">View Menu</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border border-white bg-transparent text-white hover:bg-white/10"
            >
              <Link href="/events">Book an Event</Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll-down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown className="w-8 h-8 text-white/70 animate-bounce" />
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/*  2. FEATURED DISHES SECTION                                  */}
      {/* ============================================================ */}
      <section
        ref={dishesRef}
        className="py-20 md:py-28 px-4 max-w-7xl mx-auto"
      >
        {/* Section heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={dishesInView ? "visible" : "hidden"}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-heading text-primary mb-4">
            Our Signature Dishes
          </h2>
          <div className="mx-auto w-24 h-[2px] bg-secondary" />
        </motion.div>

        {/* Dish grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              animate={dishesInView ? "visible" : "hidden"}
            >
              <Card
                className={cn(
                  "group overflow-hidden transition-all duration-300",
                  "hover:scale-[1.03] hover:shadow-xl"
                )}
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-xl"
                  />
                </div>
                <CardContent className="pt-5 pb-6">
                  <h3 className="text-lg font-heading font-semibold text-primary mb-1">
                    {dish.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {dish.description}
                  </p>
                  <span className="text-secondary font-semibold">
                    {dish.price}
                  </span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3. ABOUT PREVIEW SECTION                                    */}
      {/* ============================================================ */}
      <section
        ref={aboutRef}
        className="py-20 md:py-28 bg-warm"
      >
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/ambiance-spread.jpg"
              alt="Basio restaurant ambiance"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
          >
            <h2 className="text-3xl md:text-5xl font-heading text-primary mb-6">
              Welcome to Basio
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Basio is more than just a restaurant — it is a place where every
              meal tells a story. Nestled in the heart of the community, we
              blend the warmth of a neighborhood cafe with the sophistication of
              fine dining, creating an experience that feels both familiar and
              extraordinary.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Beyond our daily menu, Basio is your partner for life&apos;s most
              important moments. From intimate gatherings to grand celebrations,
              our events and catering services are crafted with the same passion
              and attention to detail that goes into every dish we serve.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/about" className="gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  4. TESTIMONIALS SECTION                                     */}
      {/* ============================================================ */}
      <section
        ref={testimonialsRef}
        className="py-20 md:py-28 bg-warm px-4"
      >
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-5xl font-heading text-primary mb-4">
              What Our Guests Say
            </h2>
            <div className="mx-auto w-24 h-[2px] bg-secondary" />
          </motion.div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={testimonialsInView ? "visible" : "hidden"}
              >
                <Card className="p-6 md:p-8 h-full flex flex-col">
                  <Quote className="w-8 h-8 text-secondary/60 mb-4 shrink-0" />
                  <p className="text-muted-foreground leading-relaxed italic flex-1 mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    {/* Star rating */}
                    <div className="flex gap-0.5 mb-2">
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <Star
                          key={idx}
                          className="w-4 h-4 fill-secondary text-secondary"
                        />
                      ))}
                    </div>
                    <p className="font-semibold text-primary">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5. CTA BANNER SECTION                                       */}
      {/* ============================================================ */}
      <section
        ref={ctaRef}
        className="relative py-20 md:py-28 bg-primary overflow-hidden"
      >
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('/images/hero-beef-ribs.jpg')] bg-cover bg-center bg-fixed opacity-10" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          className="relative z-10 max-w-3xl mx-auto text-center px-4"
        >
          <h2 className="text-3xl md:text-5xl font-heading text-white mb-6">
            Ready to Experience Basio?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Whether you are craving our signature dishes or planning your next
            celebration, we are here to make it unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="secondary" size="lg">
              <Link href="/menu">View Our Menu</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="border border-white bg-transparent text-white hover:bg-white/10"
            >
              <Link href="/events">Book an Event</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
