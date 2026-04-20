## 2026-04-20 - Missing Form Labels
**Learning:** The forms across the application were missing `<label>` elements associated with input fields. This is a critical accessibility issue, as screen readers cannot identify the purpose of the input fields. I learned that adding proper labels and disabled states (when submitting) can make the app significantly more usable for users with disabilities and in general.
**Action:** When creating forms, make sure to always use `<label>` elements for each field using the `for` attribute mapping to the input's `id`.
