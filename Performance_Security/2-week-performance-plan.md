# Web App Performance — 2-Week Senior Engineer Plan

Below is a focused, practical 2-week plan tailored for a senior frontend engineer (4+ years). Each day pairs concise theory with hands-on tasks and measurable outcomes so you can both *understand* and *prove* improvements.

---

## Week 1 — Measurement, Critical Rendering, and Core Web Vitals

### Day 1 — Goals, Metrics & Baselines

* **Theory**: Learn metrics: TTFB, FCP, LCP, TTI, CLS, TBT, and First Input Delay (FID) vs Interaction to Next Paint (INP). Distinguish lab vs real-user (RUM) metrics.
* **Hands-on**: Run Lighthouse and WebPageTest on a production page. Record baseline metrics and create a one-page performance snapshot (screenshots + score).
* **Outcome**: Baseline report with top 5 performance bottlenecks.

### Day 2 — Critical Rendering Path & Optimizing Load Order

* **Theory**: How HTML/CSS/JS parsing, render tree, and critical path work. Critical CSS concept.
* **Hands-on**: Identify critical CSS for above-the-fold content; inline minimal critical CSS and defer the rest. Measure FCP/LCP before/after.
* **Outcome**: Reduced render blocking; show delta in FCP/LCP.

### Day 3 — Code Splitting & Lazy Loading

* **Theory**: Route-level splitting, component splitting, dynamic `import()`, prefetch vs preload.
* **Hands-on**: Implement code splitting in your app (webpack/CRA/Vite/Next). Lazy-load a heavy route/component and measure bundle size & TTI.
* **Outcome**: Smaller initial JS payload; screenshots of network waterfall.

### Day 4 — Bundler & Tree-Shaking Deep Dive

* **Theory**: How tree-shaking works, module formats (ESM vs CJS), sideEffects flag, and common bundler pitfalls.
* **Hands-on**: Run bundle analyzer (webpack-bundle-analyzer, source-map-explorer). Remove or lazy import a large dependency; swap with a lighter alternative if possible.
* **Outcome**: Reduced bundle size + before/after analyzer screenshots.

### Day 5 — Image & Media Optimization

* **Theory**: Formats (AVIF/WebP/optimized JPG/PNG), responsive images (`srcset`, `sizes`), lazy loading, modern codecs, and video fallback strategies.
* **Hands-on**: Convert hero images to WebP/AVIF, add `srcset` and `loading="lazy"`. Use `picture` for art direction. Measure payload and LCP.
* **Outcome**: Lower bytes transferred and improved LCP.

### Day 6 — Fonts & Critical Resources

* **Theory**: Font loading strategies (font-display: swap/fallback), preconnect/preload, FOIT/FOUT tradeoffs.
* **Hands-on**: Implement `preconnect` for font CDN, `font-display: swap`, and preload critical fonts. Measure FCP and CLS effects.
* **Outcome**: Reduced layout shift and better perceived load.

### Day 7 — Review & Small Sprint

* **Task**: Aggregate all changes so far into a mini PR. Run Lighthouse and RUM check. Create a one-page change log with metrics before/after.
* **Outcome**: Clear list of wins and remaining work.

---

## Week 2 — Network, Caching, Runtime, and Frameworks

### Day 8 — Network Layer: Caching, CDN & HTTP/2/3

* **Theory**: HTTP caching headers (Cache-Control, ETag), stale-while-revalidate, CDNs, and benefits of HTTP/2 and HTTP/3.
* **Hands-on**: Add or tweak cache headers for static assets, verify via curl/DevTools. Configure/CDN edge settings if available (or simulate).
* **Outcome**: Asset cacheability report and reduced median latency.

### Day 9 — Service Workers & Offline/Edge Caching

* **Theory**: Service Worker lifecycle, cache strategies (cache-first, network-first), risks (stale cache), and cache invalidation.
* **Hands-on**: Implement a simple service worker with Workbox to cache assets and API responses safely. Add versioning strategy.
* **Outcome**: Offline fallback demo + cache size and update behavior documented.

### Day 10 — Rendering Strategies: SSR, SSG, ISR, CSR

* **Theory**: SSR benefits for LCP, SSG for predictable performance, ISR for hybrid. Hydration costs and partial hydration concepts.
* **Hands-on**: If using Next.js or similar, convert a route to SSR or SSG and measure LCP/TTI. Inspect hydration JS size.
* **Outcome**: Show how SSR/SSG changed critical metrics.

### Day 11 — Runtime Performance in React (and other frameworks)

* **Theory**: Reconciliation cost, expensive renders, memoization (`React.memo`, `useMemo`, `useCallback`), virtualization/windowing, avoids re-renders, and keys.
* **Hands-on**: Profile using React Profiler. Fix one expensive render (memoize or split component). Implement virtualization for a long list (react-window/react-virtual).
* **Outcome**: Reduced render time and flamegraph screenshot.

### Day 12 — Web Workers, Offloading & Long Tasks

* **Theory**: Offload heavy computations to Web Workers, use requestIdleCallback, avoid long tasks blocking main thread.
* **Hands-on**: Move a CPU-heavy function (e.g., large JSON parsing, image processing) into a web worker. Measure TBT and main thread blocking.
* **Outcome**: Improved TBT and smoother main thread.

### Day 13 — Monitoring, RUM & Performance Budgets

* **Theory**: Set performance budgets; integrate RUM (e.g., PerformanceObserver, paint timings) and alerting; CI Lighthouse checks.
* **Hands-on**: Add a basic RUM metric collector (send FCP/LCP/CLS to a small endpoint or Sentry/Datadog). Add Lighthouse CI or bundler size checks to CI pipeline.
* **Outcome**: Alerts and failing CI step when budgets exceeded.

### Day 14 — Hardening, Mobile Perf & Final Review

* **Theory**: Mobile-first perf (slow CPU & network), power management, battery considerations, accessibility/perf tradeoffs.
* **Hands-on**: Test site on a simulated slow-4G & CPU-throttled device. Produce a final performance plan (prioritized backlog) and a before/after dashboard.
* **Outcome**: Final report with prioritized next actions and measurable targets (e.g., LCP < 2.5s, CLS < 0.1, TBT < 150ms).

---

## Practical Exercises & Example Tasks (pick 4–6)

* Implement critical CSS + lazy CSS and show FCP/LCP delta.
* Replace a heavy npm dependency with a lightweight alternative and document bundle size savings.
* Build a simple service worker that caches API responses with a cache-then-network fallback.
* Add Web Worker to offload a CPU task → measure TBT improvement.
* Add RUM and surface a dashboard of LCP and CLS for real users.

---

## Tools & Commands You Should Be Fluent With

* **Lab & Dev**: Chrome DevTools (Performance, Lighthouse, Network), React Profiler.
* **Lab & External**: Lighthouse CLI, WebPageTest, PageSpeed Insights, GTmetrix.
* **Bundlers**: webpack, Vite, Rollup; bundle analyzers.
* **CI/Automation**: Lighthouse CI, bundlesize, GitHub Actions.
* **Monitoring/RUM**: Sentry, New Relic, Datadog, or a lightweight custom endpoint + PerformanceObserver.
* **Image tooling**: sharp, imagemin, Squoosh, or CDN image transforms.
* **Fonts**: fonttools, Google Fonts optimizations.

---

## Senior Interview / Discussion Prep (what to be ready to explain)

* How you chose which metric to prioritize and why (user-impact reasoning).
* The tradeoffs of aggressive code splitting vs. more requests.
* Caching invalidation strategies and pitfalls you’ve seen in production.
* Why FID is being replaced by INP and what that means for interaction design.
* Cost/complexity tradeoffs of SSR vs CSR and how hydration affects TTI.
* Mobile perf strategies for low-end devices.

---