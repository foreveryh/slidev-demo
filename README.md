# Welcome to [Slidev](https://github.com/slidevjs/slidev)!

To start the slide show:

- `pnpm install`
- `pnpm dev`
- visit <http://localhost:3030>

Edit the [slides.md](./slides.md) to see the changes.

Learn more about Slidev at the [documentation](https://sli.dev/).

## Deployment

### First-time Deployment

⚠️ **Important Notes for First Deployment:**

- **Web-only Deployment**: This deployment is configured for web presentation only (no PDF export functionality)
- **Chunk Size Warning**: You may see warnings about large chunks (>2000 kB). This is normal for Slidev and can be ignored for now.
- **Build Optimization**: The project includes Vite configuration to optimize chunk sizes and build performance

### Deploy to Vercel

This project is configured for easy deployment to Vercel. Follow these steps:

1. **Install dependencies (including Playwright):**
   ```bash
   pnpm install
   ```

2. **Build the project locally first:**
   ```bash
   pnpm build
   ```

3. **Deploy to Vercel:**
   - Install Vercel CLI: `npm i -g vercel`
   - Run: `vercel`
   - Follow the prompts to connect your GitHub repository
   - Vercel will automatically detect the build settings

4. **Automatic deployments:**
   - Push to your main branch to trigger automatic deployments
   - Vercel will build and deploy your slides automatically

5. **Custom domain:**
   - Add your custom domain in the Vercel dashboard
   - Configure DNS settings as instructed

The project includes:
- `vercel.json` configuration for optimal deployment settings
- `slidev.config.ts` for Slidev-specific configuration and build optimization
- Web-only deployment configuration (export functionality disabled)
