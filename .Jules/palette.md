## 2026-05-04 - Screen Reader Support for Dynamic Content in Angular
**Learning:** In Angular apps utilizing `*ngIf` to toggle dynamic states (like loading and result containers), placing `aria-live` directly on the toggled elements fails to reliably trigger screen reader announcements because the element itself is removed/added from the DOM.
**Action:** When implementing async states, wrap the conditionally rendered elements (`*ngIf="loading"`, `*ngIf="result"`) inside a persistent, parent container with `aria-live="polite"` to ensure status updates are consistently read by screen readers.
