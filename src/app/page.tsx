"use client";
import Link from "next/link";
import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import FlickeringGrid from "@/components/ui/flickering-grid";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import InteractiveHoverButton from "@/components/ui/interactive-hover-button";
import { RainbowButton } from "@/components/ui/rainbow-button";
import ShimmerButton from "@/components/ui/shimmer-button";
import { FaGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <>

        <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <Link
          href="https://github.com/prakhar788/ChirpCharm"
          target="_blank"
          className="mb-8"
        >
          <ShimmerButton className="shadow-2xl">
          <span><FaGithub /></span>

      </ShimmerButton>
        </Link>
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          Welcome to ChirpCharm
          </div>
          <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Standout Twitter bios instantly
          </div>
          <Link href="/generate">
          <InteractiveHoverButton />
          </Link>
        </motion.div>
      </AuroraBackground>

    </>
  );
}
