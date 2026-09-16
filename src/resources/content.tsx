import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Moses",
  lastName: "Oseh",
  name: `Moses Oseh`,
  role: "Systems & Full-Stack Engineer",
  avatar: "/images/projects/project-01/avatar_2.jpg",
  email: "mosesuga123@gmail.com",
  location: "Africa/Lagos", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Nigerian Pidgin 😅"], // optional: Leave the array empty if you don't want to display languages
  locale: "en", // BCP 47 language tag for the HTML lang attribute, e.g., 'en', 'ja', 'zh-TW'
};

const newsletter: Newsletter = {
  display: true,
  title: <>Let's Build Reliable Systems</>,
  description: <>Available for contract development, systems architecture, and backend infrastructure projects.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/TheDarkPhoenix15",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/moses-oseh/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/d.estiny.oseh_/",
    essential: true,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@d.estiny.oseh_",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Engineering scalable systems, distributed logic, and resilient backends.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Available for Contract and Remote Engineering
        </Text>
      </Row>
    ),
    href: "/work/luxa-crave",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role.toLowerCase()}. <br />Co-founder & Lead Full-Stack Architect at {" "}
      <a href="https://www.luxa.ng" target="_blank" rel="noopener noreferrer">
        <Text as="span" size="xl" weight="strong">LUXA</Text>
      </a> 
      <br />I bridge mechanical systems logic with scalable cloud infrastructure—specializing in real-time logistics engines, asynchronous queues, and high-concurrency architectures. 
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm an Abuja-based {person.role.toLowerCase()} with a passion for transforming complex ecommerce and system challenges
        into simple, elegant design solutions. My work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "LUXA-Crave",
        timeframe: "March, 2026 - Present",
        role: "Chief Technological Officer, Full-Stack Systems Engineer, UI/UX Designer",
        achievements: [
          <>
            Helped to build the Luxa Crave Platform with the goal of solving food delivery in Nigerian 
            Univeristy Campuses in a systematic an efficient manner. 
            It has been launched with over 1000 orders processed in the first 3 months.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate up to 100% faster.
          </>,
          <>
            Created the UI and UX for the Luxa Crave Platform, which has been praised for its intuitive design and user-friendly interface.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/crave_cover.jpg",
            alt: "Crave landing page",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/crave_cover_2.jpg",
            alt: "Crave Outlets terminal page",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "LUXA-Ecommerce",
        timeframe: "November, 2025 - Present",
        role: "Chief Technological Officer, Full-Stack Systems Engineer, UI/UX Designer",
        achievements: [
          <>
            Developed a fully functional MVP e-commerce platform. Complete with user authentication,
            product management, and web escrow payment integration.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate up to 100% faster.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/ecommerce_cover_1.jpg",
            alt: "Ecommerce landing page",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "LUXA-Merch",
        timeframe: "September, 2026 - Present",
        role: "Chief Technological Officer, Full-Stack Systems Engineer, UI/UX Designer",
        achievements: [
          <>
            Participated in developing from scratch, the end-to-end merchandise customization engine for LUXA Merch, delivering an interactive, 
            consumer-ready web platform capable of processing real-time custom orders. 
          </>,
          <>
            Helped in creating a lightweight, mobile-first 3D visualization interface that allows users to customize, 
            inspect, and render dynamic product designs in the browser, complemented by integrated AI ideation tools and a "Design Assist" request pipeline to streamline asset creation 
            for non-technical users.
          </>,
          <>
            Engineered robust spatial logistics and fulfillment workflows to overcome regional last-mile delivery constraints. 
            Integrated Mapbox APIs with interactive pin-drop coordinate capture to bypass ambiguous address data, 
            while developing custom routing and dispatch logic to manage specialized delivery protocols for customers located outside standard delivery perimeters.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/merch_cover_1.jpg",
            alt: "Merch Landing page",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/merch_cover_2.jpg",
            alt: "Mobile Design Workspace",
            width: 9,
            height: 16,
          },
          {
            src: "/images/projects/project-01/merch_cover_3.jpg",
            alt: "Checkout Page",
            width: 16,
            height: 11,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Landmark University",
        description: <>Studied Mechanical Engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma UI Design",
        description: (
          <>Able to prototype and build mobile and web UI for hyper portable and modular Applications.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/figma_cover_1.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/figma_cover_2.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Backend & Systems",
        description: (
          <>Python, Django, REST APIs, Relational Data Modeling. Developing reliable backend architecture that can handle concurrent load and scale rapidly.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Django",
            icon: "django",
          },
          {
            name: "REST APIs",
            icon: "api",
          }
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Databases & Storage",
        description: (
          <>PostgreSQL, SQLite, Query Optimization, Database Normalization. Building hyper-scalable and modular database systems.</>
        ),
        tags: [
          {
            name: "PostgreSQL",
            icon: "postgresql",
          },
          {
            name: "SQLite",
            icon: "sqlite",
          }
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Cloud and Infrastructure",
        description: (
          <>AWS (Lightsail, EC2, S3, SES), Linux Administration (Ubuntu), Nginx, Gunicorn, Git. Creating and Managing reliable, production-ready infrastructure and deployment workflows.</>
        ),
        tags: [
          {
            name: "AWS S3",
            icon: "cloud",
          },
          {
            name: "Ubuntu",
            icon: "ubuntu",
          },
          {
            name: "Gunicorn",
            icon: "gunicorn",
          }

        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Dynamic Interfaces & Frontend",
        description: (
          <>HTMX, JavaScript, HTML5/Vanilla CSS, Mapbox API, Payment Integration API (Paystack). Designing and deployment of fast, engaging, and user-friendly interfaces (Hyper UI/UX).</>
        ),
        tags: [
          {
            name: "Javascript",
            icon: "javascript",
          },
          {
            name: "CSS 3",
            icon: "css",
          },
          {
            name: "HTMX",
            icon: "htmx",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [],
      }
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Systems Architecture & Engineering Notes",
  description: `Architectural deep dives, case studies, and engineering thoughts by ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Systems and full-stack engineering projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Project Gallery – ${person.name}`,
  description: `Visual systems, architecture workflows, and interface snapshots by ${person.name}`,
  images: [
    {
      src: "/images/projects/project-01/systems_breakdown.jpg",
      alt: "LUXA Systems Architecture & Infrastructure Topology",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/merch_cover_2.jpg",
      alt: "LUXA Merch – Interactive Mobile 3D Customizer",
      orientation: "vertical",
    },
    {
      src: "/images/projects/project-01/crave_cover.jpg",
      alt: "LUXA Crave – Campus Food Delivery & Routing Platform",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/figma_cover_1.jpg",
      alt: "LUXA Merch – Precision Product Specification in Figma",
      orientation: "vertical",
    },
    {
      src: "/images/projects/project-01/merch_cover_3.jpg",
      alt: "LUXA Merch – Coordinate-Based Delivery & Checkout Flow",
      orientation: "vertical",
    },
    {
      src: "/images/projects/project-01/ecommerce_cover_1.jpg",
      alt: "LUXA E-Commerce – Multi-Tenant Escrow Marketplace",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/crave_cover_2.jpg",
      alt: "LUXA Crave – Live Kitchen Dispatch & Terminal Dashboard",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/merch_cover_1.jpg",
      alt: "LUXA Merch – 3D Custom Merchandise Studio",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/figma_cover_2.jpg",
      alt: "LUXA UX Systems – Multi-Screen Order & Wallet Dashboards",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
