# Professional Personal Portfolio

A modern, responsive personal portfolio built with React, TypeScript, Tailwind CSS and Framer Motion.

## 1. Requirements

Install Node.js (LTS) first.

Check:

```bash
node -v
npm -v
```

## 2. Install

Open this project folder in VS Code terminal:

```bash
npm install
```

## 3. Run

```bash
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## 4. Customize your portfolio

Open:

```text
src/App.tsx
```

At the top you will find:

```ts
const profile = {
  name: "Your Name",
  ...
};
```

Replace the placeholder information with your own.

Also update:

- projects
- certificates
- skills
- education
- achievements
- GitHub URL
- LinkedIn URL
- email
- phone
- CV

## 5. Add your photo

Put your photo here:

```text
public/profile.jpg
```

Then follow the comment in `src/App.tsx`.

## 6. Add your CV

Put your CV here:

```text
public/cv.pdf
```

The Download CV buttons already use `/cv.pdf`.

## 7. Build

```bash
npm run build
```

## 8. GitHub

```bash
git init
git add .
git commit -m "Initial professional portfolio"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## 9. Deploy

You can deploy the project with Vercel, Netlify or GitHub Pages.

For Vercel, import the GitHub repository. Vercel automatically detects Vite.

Build command:

```text
npm run build
```

Output directory:

```text
dist
```

## Important

Before publishing, replace every `yourusername`, `Your Name`, placeholder email, phone number, certificate and project entry with your real information.
