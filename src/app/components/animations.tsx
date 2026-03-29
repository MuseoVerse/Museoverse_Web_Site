import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: true, amount: 0.18 };

function createFadeUpVariants(
  reducedMotion: boolean,
  y: number,
  delay: number,
): Variants {
  if (reducedMotion) {
    return {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0, transition: { duration: 0 } },
    };
  }

  return {
    hidden: { opacity: 0, y, scale: 0.975, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        delay,
        ease: EASE_OUT,
      },
    },
  };
}

export function PageTransition({ children }: { children: ReactNode }) {
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.45, ease: EASE_OUT }}
    >
      {children}
    </motion.div>
  );
}

export function SectionReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.section
      className={className}
      variants={createFadeUpVariants(reducedMotion, 36, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.section>
  );
}

export function BlockReveal({
  children,
  className = "",
  delay = 0,
  y = 28,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={createFadeUpVariants(reducedMotion, y, delay)}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

export function StaggerGroup({
  children,
  className = "",
  delayChildren = 0.08,
  staggerChildren = 0.12,
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}) {
  const reducedMotion = useReducedMotion();

  const variants: Variants = reducedMotion
    ? {
        hidden: {},
        visible: {},
      }
    : {
        hidden: {},
        visible: {
          transition: {
            delayChildren,
            staggerChildren,
          },
        },
      };

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div className={className} variants={createFadeUpVariants(reducedMotion, y, 0)}>
      {children}
    </motion.div>
  );
}

export function FloatingElement({
  children,
  className = "",
  delay = 0,
  distance = 12,
  duration = 6,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  duration?: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <BlockReveal className={className} delay={delay} y={18}>
      <motion.div
        animate={reducedMotion ? undefined : { y: [0, -distance, 0] }}
        transition={
          reducedMotion
            ? undefined
            : {
                duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay,
              }
        }
      >
        {children}
      </motion.div>
    </BlockReveal>
  );
}

export function MarqueeRow({
  items,
  reverse = false,
  duration = 30,
  className = "",
}: {
  items: string[];
  reverse?: boolean;
  duration?: number;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();
  const renderedItems = reducedMotion ? items : [...items, ...items];

  return (
    <div className={`institution-marquee ${className}`.trim()}>
      <div
        className={[
          "institution-marquee-track",
          reverse ? "institution-marquee-track-reverse" : "",
          reducedMotion ? "institution-marquee-track-static" : "",
        ]
          .filter(Boolean)
          .join(" ")}
        style={{ "--institution-marquee-duration": `${duration}s` } as CSSProperties}
      >
        {renderedItems.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="institution-pill flex shrink-0 items-center gap-3 rounded-full border border-[#c9a84c]/15 bg-white/85 px-5 py-3 shadow-[0_10px_28px_rgba(52,23,1,0.06)] backdrop-blur-sm"
          >
            <div className="h-2.5 w-2.5 rounded-full bg-[#c9a84c]" />
            <span className="font-['Playfair_Display'] text-[15px] md:text-[16px] text-[#341701] whitespace-nowrap tracking-[-0.2px]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
