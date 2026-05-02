## 2024-05-02 - Form Accessibility & Validation Feedback
**Learning:** Forms across the app consistently lack explicit `<label>` associations (using `id` and `for`) and fail to use persistent `aria-live` containers for conditionally rendered validation errors, making them inaccessible to screen readers.
**Action:** Always add explicit `<label>` tags linked via `id`, and wrap dynamic `*ngIf` validation errors in a container with `aria-live="polite"` so they are reliably announced.
