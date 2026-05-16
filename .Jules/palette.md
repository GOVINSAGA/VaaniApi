## 2026-05-16 - Forms Without Native Labels
**Learning:** In the `improve.html` component, inputs (`textarea` and `select`) lack proper associated `<label>` elements which negatively impacts screen reader users.
**Action:** When working on Angular templates in this project, explicitly add `aria-label` attributes to inputs that lack a corresponding native `<label>` to improve accessibility without adding extra DOM elements or styles.

## 2026-05-16 - Announcing Dynamic Content
**Learning:** When displaying dynamic results (like the improved text API response), standard `*ngIf` implementations are not consistently announced by screen readers.
**Action:** Wrap conditionally rendered dynamic content in a persistent container with `aria-live="polite"` so screen readers are aware of the update when the state changes.
