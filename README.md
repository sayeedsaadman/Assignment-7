# KeenKeeper 🌿

> Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.

\---

## 📖 About the Project

KeenKeeper is a relationship management web app that helps you stay intentionally connected with the people who matter most in your life. It tracks when you last reached out to friends, flags who needs attention, and logs every interaction — so no important relationship quietly fades away.

\---

## 🚀 Live Demo

https://b17-kinkeeper-272.netlify.app/

\---

## 🛠 Technologies Used

|Technology|Purpose|
|-|-|
|**React 19**|UI framework|
|**Vite**|Build tool and dev server|
|**React Router v7**|Client-side routing|
|**Tailwind CSS v4**|Utility-first styling|
|**DaisyUI v5**|Tailwind component plugin|
|**Recharts**|Pie chart on the Analytics page|
|**React Toastify**|Toast notifications|
|**React Spinners**|Loading animations|
|**React Icons**|Icon library|
|**Geist Font**|Typography|

\---

## ✨ Key Features

### 1\. 👫 Friend Tracking Dashboard

View all your friends at a glance in a responsive 4-column grid. Each card shows the friend's photo, name, how many days since last contact, their tags, and a color-coded status badge — **On Track**, **Almost Due**, or **Overdue** — so you always know who needs attention.

### 2\. ⚡ Quick Check-In with Timeline Logging

On every friend's detail page, you can log a **Call**, **Text**, or **Video** interaction with a single click. Each check-in is instantly recorded in the global Timeline with a timestamp and a toast notification confirms the action.

### 3\. 📊 Friendship Analytics

The Stats page renders a beautiful donut pie chart (powered by Recharts) that breaks down all your logged interactions by type — giving you a visual snapshot of how you're staying in touch.

\---

## 📁 Project Structure

```
keenkeeper/
├── public/
│   └── friends.json          # Friend data (8 realistic profiles)
├── src/
│   ├── components/
│   │   ├── shared/           # Navbar, Footer
│   │   ├── homepage/         # Banner with stat cards
│   │   └── ui/               # FriendCard, StatusBadge
│   ├── context/              # TimelineContext + TimelineProvider
│   ├── hooks/                # useFriends (fetch + loading state)
│   ├── layout/               # RootLayout (Navbar + Outlet + Footer)
│   ├── pages/
│   │   ├── Home/             # Friends grid with loading spinner
│   │   ├── FriendDetails/    # 2-col detail + Quick Check-In
│   │   ├── Timeline/         # Interaction history with filter
│   │   ├── Stats/            # Recharts analytics page
│   │   └── NotFound/         # 404 page
│   ├── router/               # React Router config
│   ├── index.css             # Tailwind + DaisyUI imports
│   └── main.jsx              # App entry point
├── vercel.json               # SPA rewrite rule for deployment
└── index.html
```

\---

## 

