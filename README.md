# Personal Website (Next.js)

Clean, professional personal website scaffold using Next.js App Router and TypeScript.

## 1) Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## 2) Where to fill in your real content

Edit one file first:

- `content/site-content.ts`

Replace all `TODO` values for:

- Name, title, tagline, location
- Email, LinkedIn, GitHub, resume link
- About paragraph
- Experience roles + measurable achievements
- Project summaries, stack, impact, and links
- Skills list

## 3) Professional polish checklist

- Use impact metrics in experience/project bullets (time saved, revenue, conversion, performance).
- Keep project descriptions outcome-focused, not just tech-focused.
- Add a real resume link or add `public/resume.pdf` and set `resume: "/resume.pdf"`.
- Update metadata in `app/layout.tsx` once your name/title are final.
- Optionally add a profile image in `public/` and place it in the hero.

## 4) Deploy

Recommended: Vercel.

1. Push repo to GitHub.
2. Import project in Vercel.
3. Deploy with default Next.js settings.
4. Add custom domain.

## 5) Git commands to commit and push

```bash
git add .
git commit -m "Scaffold clean Next.js personal website"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

If remote already exists, skip the `git remote add` line.
