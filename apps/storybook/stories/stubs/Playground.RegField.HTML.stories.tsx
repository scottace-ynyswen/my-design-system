import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

// ── Raw HTML snippet ────────────────────────────────────────────────────────

const htmlSnippet = `<div class="reg-field">
  <h2 class="reg-field__title">Enter car registration</h2>

  <div class="reg-field__controls">

    <div class="reg-field__input-wrap">
      <div class="reg-field__badge">GB</div>
      <input
        type="text"
        class="reg-field__input"
        placeholder="XX00XXX"
        maxlength="8"
        aria-label="Car registration number"
      />
    </div>

    <button type="button" class="reg-field__btn">
      Find car
      <svg width="24" height="25" viewBox="0 0 24 24.1" fill="none" aria-hidden="true">
        <path d="M12 0L9 3.1L15.8 9.9H0V14.2H15.8L9 21L12 24.1L23.9 12.1L12 0Z" fill="currentColor"/>
      </svg>
    </button>

    <div class="reg-field__or">
      <span>Or</span>
      <a href="#" class="reg-field__link">Search for car by make and model</a>
    </div>

  </div>
</div>`;

// ── Raw CSS snippet ─────────────────────────────────────────────────────────

const cssSnippet = `.reg-field {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}

.reg-field__title {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: #1f1f1f;
  white-space: nowrap;
  margin: 0;
}

.reg-field__controls {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
}

/* Input wrapper */
.reg-field__input-wrap {
  display: flex;
  border: 2px solid #1f1f1f;
  width: 230px;
  height: 50px;
  overflow: hidden;
}

.reg-field__input-wrap:focus-within {
  outline: 4px solid #58AAE0;
  outline-offset: 0;
}

/* GB badge */
.reg-field__badge {
  background: #efefef;
  width: 46px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: #3c3c3c;
}

/* Text input */
.reg-field__input {
  flex: 1;
  padding: 0 16px 0 8px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 26px;
  color: #1f1f1f;
  background: transparent;
  border: none;
  outline: none;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.reg-field__input::placeholder {
  font-weight: 400;
  letter-spacing: normal;
  color: #9ca3af;
}

/* CTA button */
.reg-field__btn {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #1f1f1f;
  color: #ffffff;
  border: none;
  padding: 16px 24px;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
}

.reg-field__btn svg {
  transition: transform 200ms ease;
}

.reg-field__btn:hover svg {
  transform: rotate(45deg);
}

/* Or / link row */
.reg-field__or {
  display: flex;
  gap: 4px;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  line-height: 26px;
  color: #1f1f1f;
}

.reg-field__link {
  color: #1f1f1f;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  line-height: 26px;
  text-decoration: underline;
  text-underline-offset: 2px;
  cursor: pointer;
  transition: opacity 200ms ease;
}

.reg-field__link:hover {
  opacity: 0.7;
}

.reg-field__link:focus {
  outline: 4px solid #58AAE0;
  border-radius: 2px;
  outline-offset: 2px;
}`;

// ── Sub-components ──────────────────────────────────────────────────────────

function CodeBlock({ label, code }: { label: string; code: string }) {
  return (
    <div style={{ marginTop: 32 }}>
      <p style={{
        fontFamily: "sans-serif",
        fontSize: 11,
        fontWeight: 700,
        textTransform: "uppercase" as const,
        letterSpacing: "0.1em",
        color: "#888",
        marginBottom: 8,
        marginTop: 0,
      }}>
        {label}
      </p>
      <pre style={{
        background: "#1a1a1a",
        color: "#d4d4d4",
        padding: "20px 24px",
        overflowX: "auto",
        fontSize: 13,
        lineHeight: 1.65,
        fontFamily: "'JetBrains Mono', 'Menlo', 'Consolas', monospace",
        margin: 0,
        borderRadius: 2,
      }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function RegFieldHTML() {
  return (
    <>
      <style>{cssSnippet}</style>
      <div className="reg-field">
        <h2 className="reg-field__title">Enter car registration</h2>
        <div className="reg-field__controls">
          <div className="reg-field__input-wrap">
            <div className="reg-field__badge">GB</div>
            <input
              type="text"
              className="reg-field__input"
              placeholder="XX00XXX"
              maxLength={8}
              aria-label="Car registration number"
            />
          </div>
          <button type="button" className="reg-field__btn">
            Find car
            <svg width="24" height="25" viewBox="0 0 24 24.1" fill="none" aria-hidden="true">
              <path d="M12 0L9 3.1L15.8 9.9H0V14.2H15.8L9 21L12 24.1L23.9 12.1L12 0Z" fill="currentColor" />
            </svg>
          </button>
          <div className="reg-field__or">
            <span>Or</span>
            <a href="#" className="reg-field__link">Search for car by make and model</a>
          </div>
        </div>
      </div>
    </>
  );
}

// ── Stories ─────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: "Playground/RegField HTML",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj;

export const WithCodeSnippets: Story = {
  name: "Rendered + Code",
  render: () => (
    <div style={{ padding: "48px 56px", maxWidth: 860 }}>
      <p style={{ fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#888", marginBottom: 8, marginTop: 0 }}>
        Preview
      </p>
      <div style={{ padding: "40px", background: "#f9fafb", display: "inline-block" }}>
        <RegFieldHTML />
      </div>
      <CodeBlock label="HTML" code={htmlSnippet} />
      <CodeBlock label="CSS" code={cssSnippet} />
    </div>
  ),
};

export const HTMLOnly: Story = {
  name: "HTML snippet",
  render: () => (
    <div style={{ padding: "48px 56px", maxWidth: 860 }}>
      <CodeBlock label="HTML" code={htmlSnippet} />
    </div>
  ),
};

export const CSSOnly: Story = {
  name: "CSS snippet",
  render: () => (
    <div style={{ padding: "48px 56px", maxWidth: 860 }}>
      <CodeBlock label="CSS" code={cssSnippet} />
    </div>
  ),
};
