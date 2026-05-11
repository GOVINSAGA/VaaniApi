## 2024-03-24 - Async Form Submissions
**Learning:** Adding a separate loading indicator `div` for async forms can confuse screen readers and visually disjoint the loading state from the action button.
**Action:** Always bind the submit button's `disabled` state to the loading variable and provide clear text feedback (e.g., 'Processing...') inside the button itself to prevent duplicate submissions and improve user UX.
