# Chartwell Partners — Cloned Website

This project is a clone of the Chartwell Partners homepage, built as part of the Pathline Web Development Level I tasks.

## Project Files
- `index.html` — Main page structure
- `style.css` — All styling, animations, and responsive rules
- `script.js` — All interactivity (navigation, form validation, dark mode, etc.)

---

## Task I — Personal Touches (5 Added Features)

The following 5 features were added on top of the original site clone:

### 1. Dark Mode Toggle
A toggle switch in the navbar lets users switch between light and dark themes. The user's choice is saved using `localStorage`, so the theme stays the same the next time they visit the page.

### 2. Animated Statistics Counters
The numbers in the "Why Companies Trust Us" section (45+ placements, 80%, 20+ years) count up from 0 to their final value when the user scrolls them into view, using the `IntersectionObserver` API.

### 3. Scroll-Triggered Section Animations
Sections like the Services Bar, Expertise, Team, and Testimonials fade in and slide up smoothly as the user scrolls down the page, instead of appearing all at once.

### 4. Expandable Search Bar
A search icon in the navbar expands into a text input field when clicked, and collapses again when clicking the close icon or anywhere outside it.

### 5. Back-to-Top Button
A floating circular button appears in the bottom-right corner once the user scrolls down 300px, and smoothly scrolls the page back to the top when clicked.

---

## Task II — Multi-Level Navigation Bar

The original simple navbar was rebuilt into a multi-level dropdown navigation:
- **Level 1 dropdowns**: "Our Firm", "Expertise", and "Services" each open a dropdown menu on click.
- **Level 2 sub-dropdowns**: Inside "Expertise", hovering over "Financial Services" or "Real Estate" reveals a nested sub-menu (e.g., Commercial Banking, Wealth Management).
- **Animations**: Dropdowns fade and slide in/out smoothly (`opacity` + `transform` transitions), and arrows rotate to indicate open/closed state.
- **Responsiveness**: On screens under 900px wide, the navbar switches to a hamburger menu with an accordion-style mobile menu, so all dropdown levels remain accessible on mobile.

## Task III — Contact Form with Validation

A contact form was added at the end of the main page with full client-side validation:
- **Required fields**: First name, last name, email, company, service selection, and message all show inline error messages if invalid or empty.
- **Email validation**: Checks for a valid email format using a regular expression.
- **Phone validation**: Optional field, but validates format if filled in.
- **Character counter**: Live character count for the message field (max 500 characters), turning red when nearing the limit.
- **Consent checkbox**: Required before submission.
- On successful submission, the form is replaced with a confirmation message.

### Bonus — Light/Dark Theme Toggle
As listed in Task I's features above, a fully working dark mode toggle was implemented site-wide (navbar, sections, cards, form, and footer all adapt to the selected theme), with the preference persisted across visits via `localStorage`.

---

## How to Run
Simply open `index.html` in any modern browser — no build steps or dependencies required.
