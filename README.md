# Welcome to [Slidev](https://github.com/slidevjs/slidev)!

To start the slide show:

- `pnpm install`
- `pnpm dev`
- visit <http://localhost:3030>

Edit the [slides.md](./slides.md) to see the changes.

Learn more about Slidev at the [documentation](https://sli.dev/).

## Deployment

### Deploy to Vercel

This project is configured for easy deployment to Vercel. Follow these steps:

1. **Build the project locally first:**
   ```bash
   pnpm install
   pnpm build
   ```

2. **Deploy to Vercel:**
   - Install Vercel CLI: `npm i -g vercel`
   - Run: `vercel`
   - Follow the prompts to connect your GitHub repository
   - Vercel will automatically detect the build settings

3. **Automatic deployments:**
   - Push to your main branch to trigger automatic deployments
   - Vercel will build and deploy your slides automatically

4. **Custom domain:**
   - Add your custom domain in the Vercel dashboard
   - Configure DNS settings as instructed

The project includes a `vercel.json` configuration file for optimal deployment settings.
