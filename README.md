# Moses Oseh - Personal Portfolio

Welcome to the source code for my personal portfolio! I am a Full Stack Django Developer based in Lagos, Nigeria. This repository contains the code that powers my digital presence, showcasing my work experience, technical skills, design projects, and blog.

## Tech Stack

This portfolio is built using modern web technologies to ensure a fast, responsive, and accessible experience:

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **UI System:** [Once UI](https://once-ui.com/)
- **Styling:** SASS / SCSS Modules
- **Language:** TypeScript
- **Content:** MDX (Markdown with React components) for blog posts and project case studies.

## Project Structure

The project follows a clean, maintainable structure:

- `src/app/`: Contains the Next.js page routes (Home, About, Work, Blog, Gallery).
- `src/components/`: Reusable React components (like the custom Gallery lightbox).
- `src/resources/`: Centralized configuration files.
  - `content.tsx`: The single source of truth for all text, bio, social links, and skills across the site.
  - `once-ui.config.ts`: Configuration for the theme, colors, fonts, and layout.
- `public/`: Static assets like images, resumes, and icons.

## Local Development

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/TheDarkPhoenix15/magic-portfolio.git
   cd magic-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the site. Changes to files will hot-reload instantly.

## Customizations Made

- **Horizontal Scroll Lightbox:** Engineered a custom vanilla React/CSS lightbox (`GalleryImage.tsx`) that bypasses standard UI library limitations, allowing uniform 16:9 thumbnails in a scrollable container that fluidly expand to their true uncropped dimensions upon click.
- **Scrollbar Styling:** Implemented a minimalist, custom Webkit scrollbar that remains invisible by default and appears as a sleek 4px track on hover.

## Contact

Feel free to reach out if you have any questions or want to collaborate!

- **Email:** mosesuga123@gmail.com
- **LinkedIn:** [moses-oseh](https://www.linkedin.com/in/moses-oseh/)
- **GitHub:** [@TheDarkPhoenix15](https://github.com/TheDarkPhoenix15)
