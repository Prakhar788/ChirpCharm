"use client";
import Output from "@/components/home/Output";
import UserInput from "@/components/home/UserInput";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BioProvider } from "@/context/BioContext";
import { motion } from "framer-motion";


export default function Generate() {
  return (
    <>
    <main className="relative grid grid-cols-1 slg:grid-cols-2 gap-12 px-4 py-12 sm:py-16 sm:px-8 md:px-10 slg:p-16 lg:p-24">
      <BioProvider>
        <UserInput />
        <Output />
      </BioProvider>
    </main>
    </>
  );
}
