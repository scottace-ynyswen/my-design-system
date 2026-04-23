# Design System — Claude Code Instructions

## Project Overview
This is a shared design system built with **GlueStack UI** (component primitives) and
**Tailwind CSS / NativeWind** (visual styling). The goal is a fully typed, accessible,
cross-platform component library usable in React Native and Next.js.

---

## Stack
- **GlueStack UI v2** — headless, accessible primitives
- **NativeWind v4** — Tailwind for React Native
- **Tailwind CSS v3** — web styling
- **TypeScript** — strict mode, no `any`
- **Storybook** — component documentation (web)
- **Jest + Testing Library** — unit tests

---

## Architecture Rules

### Component structure (one folder per component)
```
src/components/Button/
  index.tsx          # public export
  Button.tsx         # implementation
  Button.types.ts    # prop types / variants
  Button.stories.tsx # Storybook stories
  Button.test.tsx    # unit tests
```

### Styling rules
1. **All visual styling goes in Tailwind classes** — never inline styles, never StyleSheet.
2. **GlueStack handles structure and accessibility** — use its primitives as the base.
3. **Never mix GlueStack's `sx` prop with Tailwind** — pick one per component, default to Tailwind.
4. **Design tokens live in `tailwind.config.js`** — colors, spacing, radii, shadows only there.

### Token naming convention
```js
// tailwind.config.js — extend, never replace defaults
colors: {
  brand: { 50: '...', 500: '...', 900: '...' },
  surface: { DEFAULT: '...', raised: '...', overlay: '...' },
  text: { primary: '...', secondary: '...', disabled: '...' },
  border: { DEFAULT: '...', focus: '...' },
  feedback: { error: '...', success: '...', warning: '...', info: '...' },
}
```

### Variant pattern
Use a `cva()` (class-variance-authority) function in each component file:
```ts
const buttonVariants = cva('base-classes', {
  variants: {
    intent: { primary: '...', ghost: '...', destructive: '...' },
    size:   { sm: '...', md: '...', lg: '...' },
  },
  defaultVariants: { intent: 'primary', size: 'md' },
})
```

---

## GlueStack + Tailwind Mapping Rules

### When to use GlueStack primitives
- GlueStack primitives (`Pressable`, etc.) are for **`.tsx` cross-platform files** (React Native)
- **`.web.tsx` files use native HTML elements** — `@gluestack-ui/pressable` uses CJS and breaks Vite
  - Interactive elements → `<button type="button" onClick={...}>`
  - Clickable containers → `<button type="button" onClick={...}>` (not `<div>`)
  - Backdrop overlays → `<div onClick={...} role="presentation">`
  - Display-only → `<div>`, `<span>`, `<img>` as normal

### Semantic token mapping (always prefer semantic over raw)
| Raw token | Semantic replacement |
|---|---|
| `bg-mono-white` | `bg-surface` |
| `bg-mono-lightGrey` | `bg-surface-overlay` |
| `border-mono-midGrey` | `border-border` |

### Font size tokens (paired size + line-height)
| Token | Size | Line height | Use for |
|---|---|---|---|
| `text-2xs` | 10px | 14px | xs initials, tiny labels |
| `text-heading` | 22px | 28px | lg button label, modal title |
| `text-body-lg` | 20px | 27px | md button label, md input |

### Inline style exceptions
Tailwind classes cannot express runtime-dynamic values. These two patterns are the approved exceptions:

1. **Combined focus + selection ring** (avoids CSS `box-shadow` override conflicts):
```tsx
const shadow = [
  `inset 0 0 0 ${selected ? 4 : 2}px #1f1f1f`,
  focused ? `0 0 0 4px ${accentColor}` : null,
].filter(Boolean).join(", ");
// Applied as: style={{ boxShadow: shadow }}
```

2. **Height animation** (maxHeight slide for help text / sub-questions):
```tsx
style={{ maxHeight: open ? `${ref.current?.scrollHeight}px` : 0, transition: "max-height 300ms ease-in-out", overflow: "hidden" }}
```

No other inline styles are permitted.

---

## Forbidden Operations
- Do NOT install additional styling libraries (emotion, styled-components, etc.)
- Do NOT use `any` in TypeScript
- Do NOT add platform-specific code (`Platform.OS`) inside shared components — use
  a `.native.tsx` / `.web.tsx` split instead
- Do NOT commit directly to `main` — always create a feature branch

---

## Component Checklist (before marking done)
- [ ] TypeScript props interface exported
- [ ] All variants covered in Storybook
- [ ] Keyboard navigable + screen-reader label
- [ ] `aria-*` props forwarded
- [ ] Unit test for each variant + interaction state
- [ ] Snapshot updated

---

## Commit Convention
`feat(button): add loading state variant`
`fix(input): focus ring not visible on dark bg`
`chore(tokens): update brand-500 to new hex`

---

## Session Management

### Saving progress
At the end of every session, or any time I type "save progress", do this:

1. Create or update a file called `PROGRESS.md` in the root with:
   - Date and time of this session
   - Every component marked as one of: ✅ approved | 🔄 in progress | ⏭️ skipped | ❌ removed
   - Any tokens added this session (name + hex)
   - Any tweaks made that weren't from a screenshot (so I remember why)
   - What component comes next

2. Commit everything with:
   ```
   git add .
   git commit -m "chore: save design system progress [session checkpoint]"
   ```

3. Print exactly:
   ```
   💾 Progress saved. Safe to close the terminal.
   Next up: <ComponentName>
   ```

### Resuming a session
At the start of a new session, read `PROGRESS.md` and print exactly:
```
▶️ Ready to resume. Last component completed: <name>
Next up: <name>
Type "continue" to pick up where we left off, or name a specific component to jump to it.
```

---

## Visual Review Mode (always active)

Every component goes through a visual confirmation loop before it is considered done.
**Never auto-proceed. Never batch components. One component at a time, always.**

### The loop for every component

1. Build the component with sensible default styling
2. Output a summary:
   - Component name and all variants built
   - Every Tailwind class applied and what it controls (color, spacing, radius, etc.)
   - Any new tokens added to `tailwind.config.js`
3. **STOP. Print exactly:**
   ```
   ✋ Waiting for visual review.
   — Type "approved" to accept and move on
   — Drop a screenshot of your design for me to match
   — Type a tweak e.g. "make the radius sharper" or "use a lighter border"
   ```
4. Wait. Do not proceed until one of the three responses is received.

---

### If a screenshot is dropped

1. Analyse the image carefully for:
   - Exact background, text, border, and shadow colors → map to nearest token or add a new one
   - Border radius (sharp / subtle / pill)
   - Font weight, size, and letter spacing
   - Internal padding and gap between elements
   - Elevation / shadow depth
   - Whether the style is filled, outlined, ghost, or tinted
2. Rewrite the component's Tailwind classes to match
3. If any new color or spacing value is needed, add it to `tailwind.config.js` under the correct token group
4. Output a **diff** showing only the classes that changed
5. **STOP again** and wait for approval — do not assume the screenshot match is approved

---

### If a tweak is typed

1. Apply only the change described — do not refactor anything else
2. Show a one-line diff of what changed
3. **STOP** and wait for approval

---

### Approval signals

| What you type | What happens |
|---|---|
| `approved` | Mark component done, move to next |
| `skip` | Do not build this component, remove if already built, move on |
| `remove this` | Delete the component folder entirely, move on |
| `redo` | Discard current implementation, start the component fresh |

---

### Screenshot tips (for best matching results)

- Crop tightly to just the component — exclude surrounding UI
- Include all states side by side if possible (default, hover, disabled, error)
- If the design has both light and dark mode, drop both images together
- If a specific font is used, state it explicitly e.g. "font is Geist Mono"
- For spacing precision, add a note e.g. "inner padding feels like 16px"

---

### Token updates from screenshots

When a screenshot introduces a new color not in the current token set:
1. Add it to `tailwind.config.js` under the most relevant group
2. Name it semantically, not by hex e.g. `brand-400` not `blue-custom`
3. List all new tokens added at the end of your diff summary
4. Ask: "Should I also apply this token to any previously approved components?"
   Wait for a yes/no before touching earlier components.

---

## Cleanup Audit (run after all components are approved)

Once every component has been approved, perform a full dead-code audit:

1. **Unused components** — any folder in `src/components/` not imported anywhere
2. **Unused Tailwind classes** — run a content scan against `tailwind.config.js`
3. **Unused tokens** — colors, spacing, or radius values defined but never used
4. **Unused exported types** — TypeScript interfaces with no consumers

Output findings as a markdown table:

| Type | File | Line | Reason flagged |
|---|---|---|---|

**Do NOT delete anything yet.**
Print exactly:
```
🗑️ Cleanup audit complete. Type "remove all" to delete everything listed,
or call out specific rows e.g. "remove row 1 and 3" to be selective.
```
Wait for instruction before touching any file.

---

## Starter Prompt for Claude Code
Paste this into Claude Code to kick off a new component:

```
Build a <ComponentName> component following the design system rules in CLAUDE.md.

Requirements:
- Variants: [list them]
- States: default, hover, focus, disabled, loading (if applicable)
- Sizes: sm, md, lg
- Props should be fully typed in ComponentName.types.ts
- Use GlueStack's <Pressable> / <Text> / etc. as base primitives
- Style exclusively with Tailwind classes via cva()
- Write a Storybook story for every variant
- Write unit tests for rendering and interaction

Follow the Visual Review Mode rules in CLAUDE.md — stop after building and
wait for screenshot or approval before proceeding.
```
