"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <SplashScreen onComplete={() => setLoaded(true)} />}

      <div
        style={{
          visibility: loaded ? "visible" : "hidden",
          position: loaded ? "relative" : "fixed",
          inset: 0,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={loaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </motion.div>
      </div>
    </>
  );
}
