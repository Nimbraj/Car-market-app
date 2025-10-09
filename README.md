react-portfolio/                   # 🌟 Root project folder
│
├── 📄 index.html                   # Main HTML entry point (Vite default)
├── 📄 package.json                 # Project metadata and dependencies
├── 📄 vite.config.js               # Vite configuration
│
├── 📂 src/                         # All your source code
│   ├── 📄 main.jsx                 # App entry point (React root + routing)
│   ├── 📄 index.css                # Global Tailwind CSS imports
│
│   ├── 📂 components/              # Reusable UI components
│   │   ├── Footer.jsx              # Footer component
│   │   └── Navbar.jsx              # (optional) Navbar component
│
│   ├── 📂 pages/                   # Page-level components (routed)
│   │   ├── Home.jsx                # Homepage
│   │   ├── Contact.jsx             # Contact page (Clerk SignInButton)
│   │   ├── Profile.jsx             # Profile page
│   │   └── AddListing.jsx          # Add Listing page
│
│   ├── 📂 lib/                     # Helper or feature-specific modules
│   │   ├── Home.jsx                # (if Home is under lib)
│   │   └── Add-listing.jsx         # Add listing component
│
│   ├── 📂 assets/                  # Images, icons, or static files
│   │   ├── logo.svg
│   │   └── hero.jpg
│
│   ├── 📂 utils/                   # Helper functions (optional)
│   │   └── formatDate.js
│
│   └── 📂 styles/                  # Additional custom styles (optional)
│       └── custom.css
│
├── 📄 README.md                    # Project documentation (for GitHub)
├── 📄 .gitignore                   # Files to ignore by Git

| File / Folder        | Purpose                                                       |
| -------------------- | ------------------------------------------------------------- |
| `main.jsx`           | Entry point — sets up **React Router** and **ClerkProvider**  |
| `index.css`          | Imports Tailwind base styles                                  |
| `pages/`             | Contains all route-level pages (Home, Contact, Profile, etc.) |
| `components/`        | Shared UI parts like Footer, Navbar, etc.                     |
| `lib/`               | Additional feature modules (e.g., Add Listing, etc.)          |
| `assets/`            | Images and media                                              |
| `vite.config.js`     | Vite setup for development/build                              |
| `tailwind.config.js` | Tailwind theme/customization                                  |
| `README.md`          | Project overview for GitHub                                   |
| `.gitignore`         | Hides node_modules, build files, etc.                         |






└── 📄 tailwind.config.js           # Tailwind configuration

