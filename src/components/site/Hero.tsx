// // import { motion } from "framer-motion";
// // import { ArrowRight } from "lucide-react";

// // export function Hero() {
// //   return (
// //     <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
// //       <div className="container-tight relative">
// //         <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
// //           {/* Copy */}
// //           <div>
// //             <motion.div
// //               initial={{ opacity: 0, y: 8 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.5 }}
// //               className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
// //             >
// //               <span className="h-1.5 w-1.5 rounded-full bg-accent" />
// //               Based in Kigali · Building across Africa
// //             </motion.div>

// //             <motion.h1
// //               initial={{ opacity: 0, y: 12 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.05 }}
// //               className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[64px]"
// //             >
// //               Building Africa’s next generation of digital infrastructure.
// //             </motion.h1>

// //             <motion.p
// //               initial={{ opacity: 0, y: 12 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.12 }}
// //               className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
// //             >
// //               IshConnect engineers reliable products, platforms, and talent — turning
// //               ambitious ideas into systems that scale across the continent.
// //             </motion.p>

// //             <motion.div
// //               initial={{ opacity: 0, y: 12 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.2 }}
// //               className="mt-9 flex flex-col gap-3 sm:flex-row"
// //             >
// //               <a
// //                 href="#contact"
// //                 className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
// //               >
// //                 Start a Project
// //                 <ArrowRight className="h-4 w-4" />
// //               </a>
// //               <a
// //                 href="#academy"
// //                 className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-surface px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
// //               >
// //                 Join Training
// //               </a>
// //             </motion.div>

// //             <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
// //               <span className="font-mono uppercase tracking-widest">Trusted by</span>
// //               <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
// //                 {["Ministry of ICT", "GreenAfrica", "AgriLink", "HealGuard"].map((n) => (
// //                   <span key={n} className="text-sm text-foreground/70">
// //                     {n}
// //                   </span>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           {/* 3D-ish node sphere */}
// //           <motion.div
// //             initial={{ opacity: 0, scale: 0.95 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
// //             className="relative mx-auto aspect-square w-full max-w-130"
// //           >
// //             <NodeSphere />
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function NodeSphere() {
// //   // Deterministic node positions on a sphere projected to 2D
// //   const nodes = Array.from({ length: 42 }).map((_, i) => {
// //     const phi = Math.acos(-1 + (2 * i) / 42);
// //     const theta = Math.sqrt(42 * Math.PI) * phi;
// //     const x = Math.cos(theta) * Math.sin(phi);
// //     const y = Math.sin(theta) * Math.sin(phi);
// //     const z = Math.cos(phi);
// //     return { x, y, z };
// //   });

// //   const R = 180;
// //   const CX = 260;
// //   const CY = 260;

// //   return (
// //     <div className="absolute inset-0 flex items-center justify-center">
// //       {/* Soft backdrop ring */}
// //       <div className="absolute inset-8 rounded-full border border-border" />
// //       <div className="absolute inset-16 rounded-full border border-border/70" />
// //       <div className="absolute inset-24 rounded-full border border-border/50" />

// //       <div className="animate-float-soft relative h-full w-full">
// //         <div className="animate-spin-slow absolute inset-0">
// //           <svg viewBox="0 0 520 520" className="h-full w-full">
// //             {/* Connections */}
// //             {nodes.map((a, i) =>
// //               nodes.slice(i + 1).map((b, j) => {
// //                 const d = Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
// //                 if (d > 0.55) return null;
// //                 const opacity = Math.max(0.04, 0.22 - d * 0.25);
// //                 return (
// //                   <line
// //                     key={`${i}-${j}`}
// //                     x1={CX + a.x * R}
// //                     y1={CY + a.y * R}
// //                     x2={CX + b.x * R}
// //                     y2={CY + b.y * R}
// //                     stroke="currentColor"
// //                     strokeWidth={0.6}
// //                     className="text-foreground"
// //                     opacity={opacity}
// //                   />
// //                 );
// //               }),
// //             )}
// //             {/* Nodes */}
// //             {nodes.map((n, i) => {
// //               const depth = (n.z + 1) / 2; // 0..1
// //               const r = 1.6 + depth * 2.4;
// //               const isAccent = i % 9 === 0;
// //               return (
// //                 <circle
// //                   key={i}
// //                   cx={CX + n.x * R}
// //                   cy={CY + n.y * R}
// //                   r={r}
// //                   className={isAccent ? "fill-accent" : "fill-foreground"}
// //                   opacity={0.35 + depth * 0.55}
// //                 />
// //               );
// //             })}
// //           </svg>
// //         </div>

// //         {/* Center mark */}
// //         <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_6px_color-mix(in_oklab,var(--color-accent)_18%,transparent)]" />
// //       </div>
// //     </div>
// //   );
// // }

// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// export function Hero() {
//   return (
//     <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
//       <div className="container-tight relative">
//         <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
//           {/* Copy */}
//           <div>
//             {/* Location pill */}
//             <motion.div
//               initial={{ opacity: 0, y: 8 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
//             >
//               <span className="h-1.5 w-1.5 rounded-full bg-accent" />
//               Based in Kigali · Building across Africa
//             </motion.div>

//             {/* Headline — split for emphasis */}
//             <motion.h1
//               initial={{ opacity: 0, y: 12 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.05 }}
//               className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[64px]"
//             >
//               Building the Future of{" "}
//               <span className="text-accent">Digital Africa.</span>
//             </motion.h1>

//             {/* Subheading — two natural sentences, not one run-on */}
//             <motion.p
//               initial={{ opacity: 0, y: 12 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.12 }}
//               className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
//             >
//               We craft software that works — and training that sticks. From
//               product studios to talent pipelines, IshConnect helps businesses
//               and individuals across Africa grow with confidence.
//             </motion.p>

//             {/* What we do — scannable at a glance */}
//             <motion.ul
//               initial={{ opacity: 0, y: 12 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.18 }}
//               className="mt-5 space-y-1.5 text-sm text-muted-foreground"
//             >
//               {[
//                 "Custom software & platform engineering",
//                 "World-class tech training & cohort programs",
//                 "End-to-end digital transformation for organisations",
//               ].map((item) => (
//                 <li key={item} className="flex items-start gap-2">
//                   <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
//                   {item}
//                 </li>
//               ))}
//             </motion.ul>

//             {/* CTAs */}
//             <motion.div
//               initial={{ opacity: 0, y: 12 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.24 }}
//               className="mt-9 flex flex-col gap-3 sm:flex-row"
//             >
//               <a
//                 href="#contact"
//                 className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
//               >
//                 Start a Project
//                 <ArrowRight className="h-4 w-4" />
//               </a>
//               <a
//                 href="#academy"
//                 className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-surface px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
//               >
//                 Join Training
//               </a>
//             </motion.div>

//             {/* Social proof */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.32 }}
//               className="mt-10 flex items-center gap-6 text-xs text-muted-foreground"
//             >
//               <span className="font-mono uppercase tracking-widest">Trusted by</span>
//               <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
//                 {["Ministry of ICT", "GreenAfrica", "AgriLink", "HealGuard"].map((n) => (
//                   <span key={n} className="text-sm text-foreground/70">
//                     {n}
//                   </span>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* 3D-ish node sphere */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             className="relative mx-auto aspect-square w-full max-w-130"
//           >
//             <NodeSphere />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function NodeSphere() {
//   const nodes = Array.from({ length: 42 }).map((_, i) => {
//     const phi = Math.acos(-1 + (2 * i) / 42);
//     const theta = Math.sqrt(42 * Math.PI) * phi;
//     const x = Math.cos(theta) * Math.sin(phi);
//     const y = Math.sin(theta) * Math.sin(phi);
//     const z = Math.cos(phi);
//     return { x, y, z };
//   });

//   const R = 180;
//   const CX = 260;
//   const CY = 260;

//   return (
//     <div className="absolute inset-0 flex items-center justify-center">
//       <div className="absolute inset-8 rounded-full border border-border" />
//       <div className="absolute inset-16 rounded-full border border-border/70" />
//       <div className="absolute inset-24 rounded-full border border-border/50" />

//       <div className="animate-float-soft relative h-full w-full">
//         <div className="animate-spin-slow absolute inset-0">
//           <svg viewBox="0 0 520 520" className="h-full w-full">
//             {nodes.map((a, i) =>
//               nodes.slice(i + 1).map((b, j) => {
//                 const d = Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
//                 if (d > 0.55) return null;
//                 const opacity = Math.max(0.04, 0.22 - d * 0.25);
//                 return (
//                   <line
//                     key={`${i}-${j}`}
//                     x1={CX + a.x * R}
//                     y1={CY + a.y * R}
//                     x2={CX + b.x * R}
//                     y2={CY + b.y * R}
//                     stroke="currentColor"
//                     strokeWidth={0.6}
//                     className="text-foreground"
//                     opacity={opacity}
//                   />
//                 );
//               }),
//             )}
//             {nodes.map((n, i) => {
//               const depth = (n.z + 1) / 2;
//               const r = 1.6 + depth * 2.4;
//               const isAccent = i % 9 === 0;
//               return (
//                 <circle
//                   key={i}
//                   cx={CX + n.x * R}
//                   cy={CY + n.y * R}
//                   r={r}
//                   className={isAccent ? "fill-accent" : "fill-foreground"}
//                   opacity={0.35 + depth * 0.55}
//                 />
//               );
//             })}
//           </svg>
//         </div>
//         <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_6px_color-mix(in_oklab,var(--color-accent)_18%,transparent)]" />
//       </div>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-tight relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Copy */}
          <div>
            {/* Location pill */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Based in Kigali · Building across Africa
            </motion.div>

            {/* Headline — split for emphasis */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[64px]"
            >
              Building the Future of <span className="text-accent">Digital Africa.</span>
            </motion.h1>

            {/* Subheading — two natural sentences, not one run-on */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              We craft software that works and training that sticks. From product studios to talent
              pipelines, IshConnect helps businesses and individuals across Africa grow with
              confidence.
            </motion.p>

            {/* What we do — scannable at a glance */}
            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-5 space-y-1.5 text-sm text-muted-foreground"
            >
              {[
                "Custom software & platform engineering",
                "World-class tech training & cohort programs",
                "End-to-end digital transformation for organisations",
                "DevQueens initiative empowering African women in tech",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span
                    className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${
                      item.startsWith("DevQueens") ? "bg-accent" : "bg-accent/60"
                    }`}
                  />
                  {item.startsWith("DevQueens") ? (
                    <span className="font-medium text-foreground">
                      <span className="text-accent">DevQueens</span>
                      {"  initiative  empowering African women in tech"}
                    </span>
                  ) : (
                    <span className="text-muted-foreground">{item}</span>
                  )}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#academy"
                className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-surface px-6 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
              >
                Join Training
              </a>
            </motion.div>
          </div>

          {/* 3D-ish node sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto aspect-square w-full max-w-130"
          >
            <NodeSphere />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function NodeSphere() {
  const nodes = Array.from({ length: 42 }).map((_, i) => {
    const phi = Math.acos(-1 + (2 * i) / 42);
    const theta = Math.sqrt(42 * Math.PI) * phi;
    const x = Math.cos(theta) * Math.sin(phi);
    const y = Math.sin(theta) * Math.sin(phi);
    const z = Math.cos(phi);
    return { x, y, z };
  });

  const R = 180;
  const CX = 260;
  const CY = 260;

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute inset-8 rounded-full border border-border" />
      <div className="absolute inset-16 rounded-full border border-border/70" />
      <div className="absolute inset-24 rounded-full border border-border/50" />

      <div className="animate-float-soft relative h-full w-full">
        <div className="animate-spin-slow absolute inset-0">
          <svg viewBox="0 0 520 520" className="h-full w-full">
            {nodes.map((a, i) =>
              nodes.slice(i + 1).map((b, j) => {
                const d = Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);
                if (d > 0.55) return null;
                const opacity = Math.max(0.04, 0.22 - d * 0.25);
                return (
                  <line
                    key={`${i}-${j}`}
                    x1={CX + a.x * R}
                    y1={CY + a.y * R}
                    x2={CX + b.x * R}
                    y2={CY + b.y * R}
                    stroke="currentColor"
                    strokeWidth={0.6}
                    className="text-foreground"
                    opacity={opacity}
                  />
                );
              }),
            )}
            {nodes.map((n, i) => {
              const depth = (n.z + 1) / 2;
              const r = 1.6 + depth * 2.4;
              const isAccent = i % 9 === 0;
              return (
                <circle
                  key={i}
                  cx={CX + n.x * R}
                  cy={CY + n.y * R}
                  r={r}
                  className={isAccent ? "fill-accent" : "fill-foreground"}
                  opacity={0.35 + depth * 0.55}
                />
              );
            })}
          </svg>
        </div>
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_0_6px_color-mix(in_oklab,var(--color-accent)_18%,transparent)]" />
      </div>
    </div>
  );
}
