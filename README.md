Creative Parking Showcase 🚗
Live Production Site: creative-parking.co.il

A high-performance, responsive web showcase for modern parking solutions. This project demonstrates clean UI/UX principles, efficient state management in React, and professional-grade deployment workflows using a custom Israeli domain.

🚀 Key Achievements
Custom Domain Integration: Successfully migrated from GitHub Pages sub-directory to a standalone .co.il production environment.

Performance Optimized: Built with Vite for lightning-fast HMR and optimized asset bundling.

Responsive Design: Fully fluid layout designed to work seamlessly across mobile, tablet, and desktop devices.

Secure Infrastructure: Configured with full SSL/HTTPS encryption via GitHub Pages and custom DNS A-records.

🛠️ Tech Stack
Frontend: React 18 (TypeScript)

Build Tool: Vite

Styling: Tailwind CSS / Shadcn UI

Deployment: GitHub Pages

Domain Management: JetServer / ISOC-IL

📂 Project Structure
Plaintext
├── src/           # Component logic and UI views
├── public/        # Static assets and CNAME configuration
├── dist/          # Compiled production-ready code
├── vite.config.ts # Custom build and path configuration
└── index.html     # Application entry point
🛠️ Local Development
Clone the repository:

Bash
git clone https://github.com/NathanIllounz/creative-parking-showcase.git
Install dependencies:

Bash
npm install
Run development server:

Bash
npm run dev
🚢 Deployment Workflow
To push updates to the live domain:

Ensure base: "/" is set in vite.config.ts.

Run the build: npm run build

Deploy to production: npx gh-pages -d dist
