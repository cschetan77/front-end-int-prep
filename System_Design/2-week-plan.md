With **4+ years in React, Redux, TypeScript, Router**, interviewers will expect more than just *todo app*–level problems. They’ll want to see if you can:

* **Design scalable UIs** (not just code features).
* Handle **state management tradeoffs** (local vs global, caching, async).
* Build **composable, reusable components**.
* Optimize **performance** (large lists, re-renders, memoization).
* Think in terms of **user experience** (loading/error states, accessibility).
* Balance **developer experience vs. system design** (folder structure, testing, extensibility).

So yes — some problems like “Todo App” sound junior-level, but when framed as **“build this in a clean, extensible, production-ready way, with good architecture”**, they test senior-level thinking.

Let me show you what I mean:

---

### Example Reframe for a 4+ year candidate:

* **Junior ask**: *“Build a Todo app with add/delete/edit.”*
* **Mid/Senior ask**: *“Design a Todo app where tasks can be categorized, persisted in local storage, shared across routes, optimized for 5,000 tasks, and structured so that new features (like reminders) can be added easily.”*

Now the same problem becomes an **architectural & performance test**, not just CRUD.

---

### 14-Day Plan

I’ll reframe each problem to **push architecture, scalability, and tradeoffs**:

**Day 1 – GitHub User Search (Scalable Search)**

* Debounced search input hitting GitHub API.
* Handle loading, error, empty state.
* Design reusable `SearchList` component.
* Discuss caching search results (e.g., with Redux or SWR).

**Day 2 – Todo App (Extensible Design)**

* Tasks with categories & tags.
* Persist with localStorage.
* Optimize for 5k+ tasks (virtualization, memoization).
* Think about how you’d extend with “reminders.”

**Day 3 – Movie Explorer (API-driven Grid)**

* Search movies from TMDB API.
* Infinite scroll OR server-side pagination.
* Responsive card grid with skeleton loaders.
* Discuss tradeoffs between client vs server pagination.

**Day 4 – Editable Table (Enterprise-style)**

* Contacts table with inline editing.
* Column sorting, row-level validation.
* Make it generic so new columns can be added easily.

**Day 5 – Product Catalog (Filtering & Architecture)**

* Multi-filter (category, price, rating).
* Share filters across URL params (deep linking).
* Discuss how you’d implement server-side filtering in real life.

**Day 6 – Form Wizard (Complex Form State)**

* Multi-step form with progress indicator.
* Validation on each step.
* Persist progress across refresh (Redux or localStorage).
* Discuss tradeoffs between controlled/uncontrolled inputs.

**Day 7 – Notes App (Tagging & Search)**

* Notes with tags + search.
* Optimized search (debounce, indexing in memory).
* Add global hotkeys for “new note.”

---

**Day 8 – Hacker News Reader (Infinite Scroll)**

* Paginated/infinite API fetching.
* Optimistic updates for upvotes.
* Handle “back to top” efficiently.

**Day 9 – E-commerce Cart (Global State & Derived State)**

* Cart stored in Redux.
* Derived selectors: subtotal, tax, discounts.
* Sync with API (mock checkout).
* Discuss tradeoffs: Redux vs Context vs local state.

**Day 10 – GitHub Repo Explorer (Multi-route App)**

* Search page + Repo details page.
* Use React Router, preserve search state on back navigation.
* Prefetch repo details on hover.

**Day 11 – Kanban Board (Drag & Drop Architecture)**

* Build a Trello-like board with drag & drop.
* Persist state globally.
* Reusable `<Column>` and `<Card>` components.
* Discuss performance with 1000+ tasks.

**Day 12 – Chat App (Real-time Simulation)**

* Two-pane layout (sidebar + chat).
* Fake WebSocket API → live updates.
* Scroll-to-bottom on new message.
* Think about message batching.

**Day 13 – Virtualized Large List (Perf Engineering)**

* Render 10k+ rows.
* Implement virtualization (react-window).
* Row expansion (nested details).
* Compare naive vs optimized rendering.

**Day 14 – Admin Dashboard (Capstone, System Design)**

* Sidebar with routes: Users, Products, Reports.
* Each module has: Table with CRUD, Filters, Pagination.
* Reports page: charts + summary cards.
* Global state + lazy loading per module.
* Interview-style: explain folder structure, state strategy, performance optimizations.

---
They’re not testing “can you code a table,” they’re testing **“can you build a table UI that’s extensible, performant, and production-ready.”**

---
