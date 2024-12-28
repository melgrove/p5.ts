# p5.ts

A simple Node.js TypeScript environment for p5.js with modern frontend tooling

- TypeScript bundling with Vite
- JavaScript modules for dependencies
- Standard ESLint config with flat config format
- Standard prettier config
- Use non-minified p5.js version in development for meaningful error messages, use minified version in build

**Vite commands**  
`npm run dev`: serve the sketch locally with Vite hot reloading on changes to the codebase
`npm run build`: compile the sketch into a folder which can be served as a static web site
`npm run preview`: serve the build locally
