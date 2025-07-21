# NEOV Landing Page

## 🚀 How to Run the Project Locally

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd neov-landing-page
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal) to view the site.

---

## 🏗️ Architecture Overview

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/) with React and TypeScript.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for utility-first, responsive design.
- **Component Structure:**
  - All major sections (Navbar, Hero, Benefits, Strategic Value, Investment Focus, Submit Pitch Deck, Footer) are implemented as modular React components in `src/components/`.
  - Each section has its own folder, with separate files for desktop and mobile layouts when needed (e.g., `HeroDesktop.tsx`, `HeroMobile.tsx`).
  - Responsive design is handled using Tailwind's breakpoint utilities and conditional rendering.
- **Assets:**
  - Images and SVGs are stored in the `public/` directory and referenced via `/public` paths for optimal performance.
- **Page Layout:**
  - The main layout is defined in `src/app/layout.tsx`, which includes the Navbar at the top, all main sections, and the Footer at the bottom.
  - The background color and spacing are set globally for a consistent look.

---

## 🌐 Live Demo Links

- **Production Demo:** [Add your Vercel/Netlify/other deployment link here]
- **Figma Design:** [Figma Project](https://www.figma.com/design/AJkjAGJOxNHPWTxCKwipDd/Untitled)

---

For any questions or contributions, please open an issue or pull request!
