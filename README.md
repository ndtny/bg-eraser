# BG Eraser — Free AI Background Remover

Remove image backgrounds instantly with AI. Free, fast, and no signup required.

## Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: TailwindCSS
- **AI Model**: BRIA RMBG-2.0 via Replicate API
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your REPLICATE_API_TOKEN

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|----------|-------------|
| `REPLICATE_API_TOKEN` | Replicate API token ([get one here](https://replicate.com/account/api-tokens)) |
| `NEXT_PUBLIC_BASE_URL` | Your domain (for sitemap & SEO) |

## Project Structure

```
src/
├── app/
│   ├── page.tsx                              # Homepage
│   ├── layout.tsx                            # Global layout + nav + footer
│   ├── api/remove-bg/route.ts                # Core API endpoint
│   ├── remove-background-from-image/         # SEO landing page
│   ├── remove-background-from-photo/         # SEO landing page
│   ├── transparent-background-maker/         # SEO landing page
│   ├── product-photo-background-remover/     # SEO landing page
│   ├── remove-white-background/              # SEO landing page
│   ├── sitemap.ts                            # Auto-generated sitemap
│   └── robots.ts                             # Robots.txt
├── components/
│   ├── ImageUploader.tsx                     # Drag & drop upload
│   ├── ImagePreview.tsx                      # Before/After comparison
│   └── LandingPage.tsx                       # Reusable SEO page template
```

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push to GitHub
2. Import repo in Vercel
3. Add `REPLICATE_API_TOKEN` to environment variables
4. Deploy

## License

MIT
