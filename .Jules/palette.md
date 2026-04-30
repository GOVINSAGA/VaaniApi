## 2024-04-30 - Form Accessibility Wrapper Pattern
**Learning:** In Angular templates with conditionally rendered error messages (like those using `*ngIf`), adding `aria-live="polite"` directly on the conditional element doesn't consistently trigger screen readers.
**Action:** Always wrap dynamic form error/validation sections in a persistent `<div aria-live="polite">` container, and apply `role="alert"` on the specific message element. Additionally, ensure all input fields have explicitly paired `<label>` elements.
