# 💼 Job Portal

A modern **Job Portal** web application where candidates can search & apply for jobs and recruiters can post opportunities.  
Built with **Clerk** for authentication, **Supabase** for backend & database, and **shadcn/ui** for a polished UI.  
Deployed seamlessly on **Vercel** 🚀.

---

## ✨ Features
- 🔐 Secure authentication with [Clerk](https://clerk.com/)  
- 🗄️ Backend & database powered by [Supabase](https://supabase.com/)  
- 🎨 Beautiful and customizable UI with [shadcn/ui](https://ui.shadcn.com/)  
- ⚡ Fully responsive and mobile-friendly design  
- 🚀 One-click deployment on [Vercel](https://vercel.com/)  
- 👨‍💼 Role-based system (Recruiter / Job Seeker)  
- 📑 Job posting, browsing, and application management  

---

## 🛠️ Tech Stack
- **Frontend**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)  
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) + [TailwindCSS](https://tailwindcss.com/)  
- **Authentication**: [Clerk](https://clerk.com/)  
- **Backend / Database**: [Supabase](https://supabase.com/)  
- **Deployment**: [Vercel](https://vercel.com/)  

---

## ⚙️ Getting Started

### 1. Clone the repo

git clone https://github.com/<your-username>/job-portal.git

cd job-portal

2. Install dependencies

npm install

3. Set up environment variables

Create a .env.local file in the root and add:

## Clerk
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

## Supabase
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

You can get these keys from:

Clerk Dashboard → https://dashboard.clerk.com

Supabase Project → https://supabase.com/dashboard

---

## 🚀 Deployment

The project is deployed on **Vercel**.  
To deploy your own version:

1. Push your repo to GitHub.  
2. Go to [Vercel](https://vercel.com/).  
3. Import your repo.  
4. Add the same environment variables in **Vercel Project Settings → Environment Variables**.  
5. Deploy 🎉.

Live Demo: 👉 [https://careerixjobs.vercel.app](careerixjobs-git-main-withmates.vercel.app)


---

## 🔑 Authentication

This project uses **Clerk** for authentication:

- Sign in / Sign up with Email, Google, GitHub, etc.
- Secure session handling.
- Role management for **Recruiters** & **Candidates**.

Docs: [Clerk Docs](https://clerk.com/docs)

---

## 🗄️ Database

The backend is powered by **Supabase**:

- Jobs table
- Users table
- Applications table

Docs: [Supabase Docs](https://supabase.com/docs)

---

## 🎨 UI

Styled with **shadcn/ui** + **TailwindCSS**:

- Prebuilt, accessible, and themeable components.

Docs: [https://ui.shadcn.com](https://ui.shadcn.com)

---

## 🌐 Links

- Live Site: [https://careerixjobs.vercel.app](careerixjobs-git-main-withmates.vercel.app)  
- Clerk Dashboard: [https://dashboard.clerk.com](https://dashboard.clerk.com)  
- Supabase Dashboard: [https://supabase.com/dashboard](https://supabase.com/dashboard)  
- shadcn/ui Docs: [https://ui.shadcn.com](https://ui.shadcn.com)  
- Vercel: [https://vercel.com](https://vercel.com)
---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
