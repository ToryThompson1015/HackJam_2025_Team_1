
  Cloud Cyber Showdown Quiz – Technical Documentation

   Overview

Cloud Cyber Showdown Quiz is a gamified, quiz-based web application designed to help users (students, mentors, admins) learn and track progress in technology domains such as AWS, Cybersecurity, Python, Java, AI, Data Engineering, and Crypto. The platform features user authentication, role-based dashboards, a quiz gameboard, progress tracking, and achievement badges.

   Tech Stack

-  Frontend Framework:  React (with Vite for fast development)
-  Styling:  Tailwind CSS, shadcn-ui (Radix UI primitives)
-  Type Checking:  TypeScript
-  State Management:  React Context API (for authentication and user state)
-  Data Fetching/Caching:  @tanstack/react-query
-  Routing:  react-router-dom
-  Charts/Visualization:  recharts
-  Other Libraries:  lucide-react (icons), date-fns, embla-carousel-react, zod (validation), react-hook-form

<img width="834" height="444" alt="Cloud Cyber Showdown Quiz – Technical Documentation - visual selection (1)" src="https://github.com/user-attachments/assets/29543cfa-09ff-4c97-9b89-7f92eff9252b" />

   Project Structure

```
cloud-cyber-showdown-quiz/
│
├── public/                  Static assets
├── src/
│   ├── components/          Main UI components (Dashboard, GameBoard, etc.)
│   │   └── ui/              Reusable UI primitives (Button, Modal, Toast, etc.)
│   ├── contexts/            React Contexts (AuthContext)
│   ├── data/                Static/mock data (quizData.ts)
│   ├── hooks/               Custom React hooks
│   ├── lib/                 Utility functions
│   ├── pages/               Top-level pages (Index, NotFound)
│   ├── types/               TypeScript type definitions
│   ├── App.tsx              Main app component (routing, providers)
│   ├── main.tsx             React entry point
│   └── index.css            Global styles
├── package.json             Project metadata and dependencies
├── tailwind.config.ts       Tailwind CSS configuration
├── vite.config.ts           Vite configuration
└── README.md                Project overview and setup
```

   Core Features & Technical Details

    1. Authentication & User Roles

- AuthContext  manages authentication state and user roles (`admin`, `user`, `mentor`).
- Demo users are hardcoded for local testing.
- User progress is persisted in `localStorage` (per user).
- The context provides:
  - `login(username, password)`
  - `logout()`
  - `updateProgress(completedQuestions, score)`

    2. Routing & App Structure

-  App.tsx  wraps the app in providers:
  - `QueryClientProvider` (react-query)
  - `TooltipProvider` (UI tooltips)
  - `AuthProvider` (authentication)
  - `BrowserRouter` (routing)
- Main routes:
  - `/` → `Index` (main game/landing/dashboard)
  - `*` → `NotFound`

    3. Main Page Logic (`Index.tsx`)

- Manages the game state: `'landing' | 'dashboard' | 'playing' | 'results'`
- Handles quiz flow:
  - Landing page → Dashboard (if logged in) → GameBoard (quiz) → ResultsPage
- Tracks score, answered questions, and current question.
- Integrates with AuthContext to persist progress.

    4. Dashboard

-  Dashboard.tsx  displays different content based on user role:
  -  Admin:  User management, analytics, system overview.
  -  Mentor:  Student progress, recent activity.
  -  User:  Progress bar, score, achievements, continue/start quiz.
- Uses shadcn-ui and Tailwind for a modern, responsive UI.

    5. Quiz Game

-  GameBoard.tsx : Displays categories and questions (Jeopardy-style).
-  QuestionModal.tsx : Modal for answering questions.
-  ResultsPage.tsx : Shows final score and allows restarting.
-  quizData.ts : Contains all quiz questions, organized by category.

    6. Achievements & Badges

-  BadgeShowcase.tsx : Displays earned and available badges.
- Progress and achievements are tracked and shown in the dashboard.

    7. UI Components

-  Reusable UI primitives  in `src/components/ui/` (Button, Modal, Toast, Table, etc.) built on Radix UI and shadcn-ui.
-  Toaster  and  Sonner  for notifications.
-  Lucide-react  for icons.

    8. TypeScript Types

-  Question, Category, QuizData  defined in `src/types/quiz.ts` for strong typing.
- User and Auth types in `src/contexts/AuthContext.tsx`.

    9. Data & State

- All quiz data is static (in `quizData.ts`), but the structure supports easy migration to a backend API.
- User progress and session state are managed in React state and persisted to `localStorage`.

    10. Development & Build

-  Vite  for fast local development and builds.
-  Tailwind CSS  for utility-first styling.
-  ESLint  and  TypeScript  for code quality.

   How to Run Locally

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser.

   Extensibility & Future Improvements

-  Backend Integration:  Easily connect to a real backend for user management, quiz data, and analytics.
-  Real Authentication:  Replace demo users with OAuth/JWT or Firebase Auth.
-  More Gamification:  Add leaderboards, more badge types, and social features.
-  AI Integration:  Personalized quiz recommendations, smart mentorship matching, or automated feedback.
<img width="900" height="864" alt="Cloud Cyber Showdown Quiz – Technical Documentation - visual selection" src="https://github.com/user-attachments/assets/20be58ee-5e9d-44e6-85dd-18f12104b246" />

   Security Considerations

- Current authentication is for demo only; do not use in production.
- All data is stored in localStorage; sensitive data should be handled securely in a real deployment.

   References

- [shadcn/ui documentation](https://ui.shadcn.com/)
- [Radix UI Primitives](https://www.radix-ui.com/primitives/docs/overview/introduction)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query/latest)

---

If you need a more detailed breakdown of any specific component, data model, or flow, let me know!
