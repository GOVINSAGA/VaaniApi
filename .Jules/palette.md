## 2024-05-15 - Adding loading states to async form submissions
**Learning:** Async form submissions without explicit loading states and disabled submit buttons can lead to duplicate submissions and poor user experience, as observed across multiple forms in this app.
**Action:** Always bind the submit button's `disabled` state to a `loading` variable and provide clear text feedback (e.g., "Processing...") to prevent duplicate submissions and improve UX.
