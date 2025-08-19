# Welcome to [Slidev](https://github.com/slidevjs/slidev)!

A presentation slides project configured for Vercel deployment without PDF export functionality.

## Quick Start

```bash
pnpm install
pnpm dev
```

Visit <http://localhost:3030> to see your slides.

## Vercel Deployment Configuration

This project is specifically configured to work on Vercel without requiring Playwright (which has resource limitations on Vercel).

### Key Configuration Changes

#### 1. **Package.json Scripts**
```json
{
  "scripts": {
    "build": "slidev build",        // Only build, no export
    "dev": "slidev --open"
  }
}
```
- ❌ **Removed**: `export` and `start` scripts that would trigger Playwright
- ✅ **Kept**: Only `build` script for SPA generation

#### 2. **Slidev Configuration (slidev.config.ts)**
```typescript
export default defineConfig({
  export: false,                    // Disable export functionality
  build: {
    export: false,                  // Disable PDF export in build
    out: 'dist'                     // Output directory
  }
})
```

#### 3. **Frontmatter Settings (slides.md)**
```yaml
---
export: false                       // Disable export in slides
download: false                     // Hide download buttons
---
```

#### 4. **Vercel Configuration (vercel.json)**
```json
{
  "buildCommand": "pnpm install && pnpm build",
  "outputDirectory": "dist",
  "installCommand": "pnpm install"
}
```

### Why These Changes?

- **Playwright Dependency**: Slidev's export feature requires Playwright for PDF generation
- **Vercel Limitations**: Vercel has resource constraints that prevent Playwright installation
- **Solution**: Configure for web-only deployment (SPA) without export capabilities

### Deployment Steps

1. **Push your code** to GitHub
2. **Connect to Vercel** and import your repository
3. **Build settings** will be automatically detected:
   - Build Command: `pnpm install && pnpm build`
   - Output Directory: `dist`
4. **Deploy** - Vercel will build your slides as a static SPA

### What You Get

✅ **Working**: 
- Web presentation slides
- Interactive components
- Responsive design
- Fast loading

❌ **Not Available**:
- PDF export
- Download functionality
- Offline presentation files

### Local Development

```bash
pnpm install          # Install dependencies
pnpm dev             # Start development server
pnpm build           # Build for production (local testing)
```

### Learn More

- [Slidev Documentation](https://sli.dev/)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Slidev Themes](https://sli.dev/themes/gallery)
