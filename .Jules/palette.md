## 2026-05-19 - Form Accessibility and Submit Button UX
**Learning:** Adding dynamic disabled states with inline loading indicators prevents duplicate submissions, and missing `aria-label` or `role="alert"` attributes on simple forms dramatically hinders screen reader use.
**Action:** Always ensure form submit buttons are explicitly disabled during loading and invalid states. Verify every form input has an associated `label` or `aria-label`, and error messages use `role="alert"`.
