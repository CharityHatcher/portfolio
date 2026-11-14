# Charity's Portfolio

## Project Milestone 3: Accessible & Designed

This portfolio includes three pages: Home, Projects, and About/Contact. For Milestone 3, I focused on improving accessibility, keeping the design consistent, and adding an accessible contact form.

## Accessibility Testing and Fixes

I tested all three pages using the WAVE accessibility evaluation tool.

- **Home:** 0 errors, 0 contrast errors, and 1 alert.
- **Projects:** 0 errors, 0 contrast errors, and 0 alerts.
- **About/Contact:** 0 errors, 0 contrast errors, and 0 alerts.

All three pages received an AIM Score of 10 out of 10.

### Accessibility Improvements

- **Image alternative text:** I added descriptive alternative text to my portfolio image so screen reader users can understand what the image represents.
- **Empty links:** I corrected empty links so visitors using assistive technology can understand where the links lead.
- **Contact form labels:** I added labels connected to each input field so users can identify what information they need to enter.
- **Form error messages:** I added error messages that appear directly on the page instead of using pop-up alerts, making it easier for users to identify and correct mistakes.
- **Form organization:** I used a fieldset and legend to group the contact information together.

The Home page has one redundant link alert involving the About/Contact page. I reviewed the alert, and WAVE reported no accessibility errors.

## Color Contrast

I checked my website's colors using the WebAIM Contrast Checker and WCAG contrast calculations.

- Dark text (#333333) on light gray (#F4F6F8): 11.66:1 — Pass.
- White text (#FFFFFF) on dark blue (#243447): 12.67:1 — Pass.
- Dark text (#333333) on white (#FFFFFF): 12.63:1 — Pass.
- Dark text (#222222) on white (#FFFFFF): 15.91:1 — Pass.
- White text (#FFFFFF) on blue (#174A70): 9.33:1 — Pass.
- White text (#FFFFFF) on darker blue (#103550): 12.75:1 — Pass.
- Red error text (#A11616) on white (#FFFFFF): 7.95:1 — Pass.

These combinations meet the WCAG AA contrast requirements. I also kept the same colors and styling across my three pages to make the website look consistent.

## Gestalt Design Principles

### 1. Proximity

I used proximity by placing related information together inside separate sections. On my Projects page, project information is grouped into its own sections so visitors can tell which details belong together. On the About/Contact page, I grouped the contact form fields inside a fieldset to make them easier to understand.

### 2. Similarity

I used similarity by keeping the same navigation menu, colors, fonts, and section styling throughout the website. This helps visitors recognize familiar elements when moving between the Home, Projects, and About/Contact pages.

## Accessible Contact Form

I added a contact form to the About/Contact page with four fields: Full Name, Email Address, Subject, and Message.

Each field has a connected label, and the form uses a fieldset and legend to organize the information. I also added JavaScript validation to display error messages when required fields are empty or an email address is invalid.

I tested the form with empty fields and completed fields. Both tests worked as expected. The form is currently a demonstration and does not send actual messages.

## Conclusion

This milestone helped me understand how accessibility and visual design work together. I learned that having a website that looks organized is important, but it also needs to be usable for people with different needs. Testing my website helped me identify accessibility issues, improve the contact form, and make sure my colors were easy to read.
