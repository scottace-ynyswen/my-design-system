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
