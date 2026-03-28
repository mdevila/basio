"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { menuItems } from "@/data/content";

const categories = [
  { value: "appetizers", label: "Appetizers" },
  { value: "mains", label: "Main Course" },
  { value: "desserts", label: "Desserts" },
  { value: "drinks", label: "Drinks" },
] as const;

type CategoryKey = (typeof categories)[number]["value"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<string>("mains");

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/dish-tempura.jpg"
          alt="Basio menu selection"
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
          Our Menu
        </motion.h1>
      </section>

      {/* Menu Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs
            defaultValue="mains"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <div className="flex justify-center mb-10">
              <TabsList className="flex flex-wrap">
                {categories.map((cat) => (
                  <TabsTrigger key={cat.value} value={cat.value}>
                    {cat.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((cat) => (
              <TabsContent key={cat.value} value={cat.value}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={cat.value}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {menuItems[cat.value as CategoryKey]?.map((item) => (
                      <motion.div key={item.name} variants={cardVariants}>
                        <Card className="overflow-hidden h-full group">
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-t-xl"
                            />
                            {"featured" in item && item.featured && (
                              <span className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                Featured
                              </span>
                            )}
                          </div>
                          <CardContent className="p-5">
                            <h3 className="font-heading text-lg text-primary mb-1">
                              {item.name}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                              {item.description}
                            </p>
                            <p className="text-secondary font-bold text-lg">
                              {item.price}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </main>
  );
}
