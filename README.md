<p align="center">
LAKARA — Langkah Kebaikan, Rasa dan Asa
</p>  

<p align="center">
  <img src="public/favicon.svg" alt="LAKARA Logo" width="100" />
</p>

<h3 align="center">Small Steps, Meaningful Impact.</h3>

<p align="center">
  A digital home for compassion, community, and meaningful acts of kindness.
</p>

<p align="center">
  <a href="#about">About</a> •
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a>
</p>

---

## About

**LAKARA (Langkah Kebaikan, Rasa dan Asa)** is a social community built around the belief that meaningful change begins with small acts of kindness.

The community focuses on social assistance, visits to orphanages and social care institutions, humanitarian initiatives, and community-driven activities that bring people together through empathy and collective action.

This website serves as LAKARA's digital presence, introducing the community, communicating its mission, showcasing its activities, and encouraging people to participate in meaningful social initiatives.

More than a landing page, LAKARA aims to create a welcoming digital space where kindness becomes action and every contribution has the opportunity to make a difference.

## Vision & Mission

### Vision

To cultivate a compassionate society where kindness, solidarity, and collective responsibility inspire meaningful and sustainable change.

### Mission

* **Spread Kindness** — Encourage small, meaningful actions that create a positive impact.
* **Build Connections** — Bring together people who share a commitment to social responsibility.
* **Support Communities** — Participate in social assistance programs and humanitarian activities.
* **Inspire Participation** — Make it easier for individuals to discover and contribute to community initiatives.

## Features

* **Community Landing Page** — Introduces LAKARA's identity, values, and purpose.
* **Mission-Driven Storytelling** — Communicates the community's vision through thoughtful content and visual design.
* **Social Activity Showcase** — Provides a dedicated space to present community programs and humanitarian initiatives.
* **Volunteer Engagement** — Creates opportunities for visitors to learn about participating in social activities.
* **Responsive Design** — Designed to provide a consistent experience across desktop, tablet, and mobile devices.
* **Brand-Centered UI** — Uses LAKARA's visual identity, typography, and color palette to maintain a cohesive experience.
* **Search and Social Metadata** — Supports page titles, descriptions, favicon, and Open Graph metadata.

## Design Philosophy

LAKARA's visual direction emphasizes warmth, clarity, restraint, and human connection.

The interface prioritizes purposeful layouts, generous whitespace, expressive typography, and carefully considered visual details instead of unnecessary decoration.

### Brand Colors

| Color       | Hex       | Purpose                              |
| ----------- | --------- | ------------------------------------ |
| Lakara Blue | `#384CA0` | Primary brand identity               |
| Warm White  | `#FAFAF7` | Background and visual breathing room |
| Near Black  | `#111111` | Primary text                         |
| White       | `#FFFFFF` | Contrast and supporting surfaces     |

### Typography

* **Inter** — Used for interface elements and body text.
* **Cormorant Garamond** — Used for expressive headings and editorial accents.

## Tech Stack

| Technology                                    | Purpose                                 |
| --------------------------------------------- | --------------------------------------- |
| [Next.js](https://nextjs.org/)                | React framework and application routing |
| [React](https://react.dev/)                   | Component-based user interface          |
| [TypeScript](https://www.typescriptlang.org/) | Type safety and maintainable code       |
| [Tailwind CSS](https://tailwindcss.com/)      | Utility-first styling                   |
| [Google Fonts](https://fonts.google.com/)     | Inter and Cormorant Garamond typography |

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js (LTS recommended)
* npm, pnpm, yarn, or bun
* Git

### Installation

**1. Clone the repository**

```bash
git clone <YOUR_REPOSITORY_URL>
cd <YOUR_PROJECT_DIRECTORY>
```

**2. Install dependencies**

```bash
npm install
```

**3. Start the development server**

```bash
npm run dev
```

**4. Open the application**

Visit http://localhost:3000 in your browser.

### Available Scripts

Run the scripts defined in `package.json`:

```bash
npm run dev
npm run build
npm run start
npm run lint
```

The available scripts may vary depending on the project configuration.

## Project Structure

A typical structure for the LAKARA application:

```text
lakara/
├── public/
│   └── favicon.svg
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── Providers.tsx
├── package.json
├── tsconfig.json
└── README.md
```

The structure may evolve as the project grows.

## Favicon & Brand Assets

The LAKARA logo is available as an SVG vector asset for sharp rendering at different sizes.

For a favicon served from the `public` directory, configure the application metadata in `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "LAKARA — Langkah Kebaikan, Rasa dan Asa",
  description:
    "A community bringing people together through kindness and social action.",
  icons: {
    icon: "/favicon.svg",
  },
};
```

Place the favicon at `public/favicon.svg` so it can be accessed at `/favicon.svg`.

## Project Status

**Status:** In Development

LAKARA's website is being developed to establish a thoughtful digital identity for the community and provide a foundation for future community engagement features.

## Contributing

Contributions, ideas, and suggestions that align with LAKARA's mission are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes with a clear message.
4. Open a pull request describing your improvements.

Please keep contributions accessible, maintainable, and consistent with the project's design philosophy.

## Community

LAKARA — Langkah Kebaikan, Rasa dan Asa.

We believe that kindness does not need to begin with something extraordinary. It begins with the willingness to care, the courage to act, and the hope to make a difference together.

**Small steps. Sincere intentions. Meaningful impact.**

---

<p align="center">
  Made with care for a kinder world.
</p>
