## 2026-04-23 - Form Accessibility
**Learning:** Forms in the `vaani-ui` application are missing explicit `<label>` associations and `role="alert"` on error messages, making them inaccessible to screen readers.
**Action:** Add `<label>` elements with `for` attributes corresponding to input `id`s, and `role="alert"` on dynamic validation messages in all forms.
