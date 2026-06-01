# Movie Review System

A web app to browse movies, search for your favorite films, and view movie details.

## Live Demo

[https://moviereviewsystemproject.netlify.app/](https://moviereviewsystemproject.netlify.app/)

## GitHub Repo

[https://github.com/venkatNagamalla/clgmajorproject](https://github.com/venkatNagamalla/clgmajorproject)

---

## What This App Does

- Browse **Popular**, **Top Rated**, and **Upcoming** movies
- **Search** for any movie by name
- View **Movie Details** like cast, overview, and ratings
- Clean and simple UI that works on all screen sizes

---

## Technologies Used

- **React JS** - for building the UI
- **React Router** - for page navigation
- **Tailwind CSS** - for styling
- **TMDB API** - for fetching movie data
- **Vite** - for development and build
- **Netlify** - for hosting

---

## How to Run This Project Locally

### Step 1 - Clone the repo

```bash
git clone https://github.com/venkatNagamalla/clgmajorproject.git
```

### Step 2 - Go into the project folder

```bash
cd clgmajorproject/myapp
```

### Step 3 - Install dependencies

```bash
npm install
```

### Step 4 - Start the app

```bash
npm run dev
```

Now open your browser and go to `http://localhost:5173`

---

## Project Structure

```
myapp/
├── src/
│   ├── components/
│   │   ├── Headers.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieBannerSection.jsx
│   │   ├── MovieDetails.jsx
│   │   ├── MovieSearch.jsx
│   │   ├── Popular.jsx
│   │   ├── TopRated.jsx
│   │   ├── UpcomingMovies.jsx
│   │   ├── CastCard.jsx
│   │   ├── LoaderView.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

---

## Pages

| Page | Path |
|------|------|
| Popular Movies | `/` |
| Top Rated Movies | `/top-rated` |
| Upcoming Movies | `/upcoming-movies` |
| Search Movies | `/search` |
| Movie Details | `/movie/:id` |
| Not Found | `*` |

---

## Developers

**Venkat Nagamalla**
**Dasari Sriya**