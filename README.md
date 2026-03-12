# Little Steps Child Care Clinic — Website

Pediatric clinic website built with **React**, **TypeScript**, **Tailwind CSS**, **React Hook Form**, and **Zod**. Content is based on `pediatric-website-content.md` and the clinic’s visual theme (red/orange headers, pastel tables, child-friendly palette).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview   # preview production build
```

## Tech stack

- **React 18** + **TypeScript**
- **Vite**
- **Tailwind CSS** (custom clinic colors: red, orange, pink, sky blue, cream/beige)
- **React Router DOM**
- **React Hook Form** + **@hookform/resolvers** + **Zod** (Appointment form validation)

## Pages

- **Home** — Hero, vaccination reminder, breastfeeding tagline, warning signs
- **About** — Dr. Rajat Patidar profile, qualifications, experience
- **Services** — Vaccination, neonatal/pediatric care, appointment policy
- **Appointment** — Booking form (name, age, gender, mother/father name, address, mobile) with validation
- **Contact** — Address, phone, email
- **Breastfeeding** — Why breastfeeding is best, advice, benefits
- **Vaccination** — Schedule by age, other vaccines, important notes
- **Growth Charts** — Weight & length tables (boys and girls, birth–16 years)
- **Baby Food** — Introduction to solids, when to start, first foods, table
- **For Parents** — Dosage guide, when to see the doctor, appointment reminder

## Theme (from clinic materials)

- Main headers: bright red
- Section headers: orange
- Tables: red (age), light blue (weight), light pink (length); alternating row colors
- Background: off-white/beige; cards: cream, pink, sky accents
