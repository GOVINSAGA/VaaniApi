## 2026-05-18 - Binding Button Disabled State to Loading
**Learning:** In async forms, simply adding a `<div *ngIf="loading">Processing...</div>` below the form does not physically stop the user from clicking the submit button multiple times.
**Action:** Always bind the submit button's `[disabled]` attribute to both the loading state and the form's validity. Additionally, providing inline text feedback (like changing "Submit" to "Processing...") inside the button itself keeps the user's focus exactly where they just interacted, improving the experience significantly.
