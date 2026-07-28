# Global Design System & Dark/Light Mode Implementation Plan

## Goal
Establish a unified, consistent design system for the entire application that supports automatic Dark and Light modes without requiring manual theme props per component. Eliminate inconsistencies in background colors and maintenance overhead of hardcoded hex values.

## Current State Analysis
- Components use local props like `theme="v2-dark"` to toggle styles.
- Colors are often hardcoded (e.g., `bg-[#0B1120]`, `bg-accent/10`).
- Inconsistent background shades across different pages (Architecture vs. others).
- Scaling the design is difficult; changing "Dark Mode" requires editing multiple files.

## Proposed Solution
1. **Centralized Variables**: Move all color definitions to `globals.css` using CSS variables (e.g., `--background`, `--card`, `--muted`).
2. **Theme Provider**: Use `next-themes` to handle class switching (`light` vs. `dark`) on the `html` or `body` tag.
3. **Tailwind Configuration**: Update `tailwind.config.ts` to map utility classes (like `bg-background`) to these CSS variables.
4. **Component Clean-up**: Strip out manual `if (isDark)` logic from components and rely on Tailwind's native handling.

## Implementation Steps

### Phase 1: Infrastructure & Safety
- [x] Create Restoration Point (Tag: `checkpoint-pre-theming-overhaul`)
- [x] Document Plan (This file)

### Phase 2: Setup & Configuration
- [ ] Install `next-themes`: `npm install next-themes`
- [ ] Create `components/theme-provider.tsx` wrapper.
- [ ] Update `app/layout.tsx` to wrap the application in the provider.

### Phase 3: The Design System
- [ ] Refactor `app/globals.css`:
    - Define semantic colors for `:root` (Light Mode).
    - Define semantic colors for `.dark` (Dark Mode).
- [ ] Update `tailwind.config.ts` to reference these variables.

### Phase 4: Component Refactoring
- [ ] Update `EnhancedSolutionTemplate`
- [ ] Update `StatsSection` & `StatsTemplate`
- [ ] Update `ChallengesSection`
- [ ] Update `WorkflowTabsTemplate`
- [ ] Update `SolutionHero`
