"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function FadeIn({
  children,
  className,
  delay = 0,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={fadeUp}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  stagger = 0.08,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-8% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div variants={fadeUp} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}
