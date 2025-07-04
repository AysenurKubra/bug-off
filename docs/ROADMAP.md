# Project Roadmap: PR Auto Labeler 🤖

This document outlines the technical development steps for the GitHub App that automatically labels pull requests using AI.

---

## ✅ Completed Steps

- [x] ✅ Create GitHub repository
- [x] ✅ Initialize project with `Next.js` (app directory)
- [x] ✅ Tailwind CSS setup (PostCSS-based)
- [x] ✅ Install OpenAI SDK
- [x] ✅ Setup development server (`npm run dev` works)

---

## 🚧 In Progress

- [ ] Setup OpenAI configuration and API wrapper
- [ ] Create basic UI layout (input/output or log preview)
- [ ] Design label categories (feature, bugfix, refactor, etc.)
- [ ] Prepare sample PR descriptions for testing
- [ ] Build initial labeling function (prompt-based)
- [ ] Handle OpenAI API errors + loading states

---

## 🔜 Next Steps

- [ ] Integrate GitHub API (Octokit)
- [ ] Build GitHub App registration flow
- [ ] Authenticate GitHub App & access PR data
- [ ] Automatically assign labels based on OpenAI response
- [ ] UI: History/log of labeled PRs
- [ ] Deploy to Vercel or Railway (for testing)
- [ ] Add environment variables management

---

## ✨ Nice-to-Haves

- [ ] Add dark mode toggle
- [ ] Add dashboard with labeling analytics
- [ ] Allow user to customize prompt rules
- [ ] Test with real open-source repositories

---

## 📁 Tech Stack

- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS (PostCSS)
- Language: TypeScript
- AI: OpenAI API (via SDK)
- GitHub Integration: Octokit
- Hosting: Vercel / Railway (TBD)

---


