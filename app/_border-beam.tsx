"use client";

import { motion, useReducedMotion } from "motion/react";

/** Magic UI's gradient-square / motion-path technique, with four phased beams.
 * Source: https://magicui.design/r/border-beam.json
 */
export function BorderBeam() {
  const reducedMotion = useReducedMotion();

  return (
    <span className="border-beam" aria-hidden="true">
      {[0, 25, 50, 75].map((offset) => (
        <motion.span
          key={offset}
          className="border-beam-light"
          initial={{ offsetDistance: `${offset}%` }}
          animate={reducedMotion ? undefined : { offsetDistance: [`${offset}%`, `${offset + 100}%`] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 16 }}
        />
      ))}
    </span>
  );
}
