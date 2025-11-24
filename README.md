📝 React Productivity Suite
Notes + Tasks + Priority Manager — all in one clean, modern UI.
A unified React app that combines a Notes App, Task Management System, and Task Insights into one beautifully designed productivity tool.
Built with React, Tailwind, Lucide Icons, and localStorage for persistence.

🚀 Feature Overview
🗒️ Notes App
✔ Create, Edit, Delete Notes
Manage notes with titles, content, and attached data.

✔ Live Search
Filter notes instantly as you type.

✔ Tags for Notes
Add, remove, and manage tags for improved organization.

✔ Sidebar Navigation
Notes, Favorites, Images, Attachments, Recently Edited, etc.

✔ Modern Editor
Edit notes with a distraction-free interface.

✔ Persistent Notes
Saved in localStorage so your data stays even after a refresh.

✅ Task Management Dashboard
A fully redesigned Trello-style board with:

✔ To-Do, In-Progress, Done Columns
Each using a shared TaskCard component.

✔ Modern Task Cards
Priority badge
Status badge
Due date
Hover actions
Clean spacing & typography
✔ Task Drawer (Add + Edit)
A unified slide-in panel for:
Title
Subtitle
Description
Priority
Status
Due Date
Subtasks
Tags (optional)

✔ Subtasks
Add/remove subtasks inside the drawer.

✔ Tags for Tasks
Integrated system to label and organize tasks.

✔ Fully Tailwind

📊 TaskCentral — Smart Task Overview
A modern dashboard providing insights into your tasks:

✔ Priority Tasks
Color-coded, modern cards showing all high/medium/low priority items.

✔ Today’s Tasks
Tasks scheduled for today with clean card UI.

✔ Overdue Tasks
Highlight late tasks with red indicators and urgency badges.

✔ Completed Tasks
Beautiful completion cards + stats:
Completed today
This week
This month

✔ Modern Grid Cards
4-column responsive layout
Accent bars, icon bubbles, subtle shadows, and minimalist design.

🧩 Authentication
Includes UI for:
✔ Sign In
✔ Sign Up
✔ Reset Password
(Front-end only — connect to backend later.)

🛠️ Tech Stack
React
Tailwind CSS (fully migrated UI)
Lucide Icons
React Router
localStorage
Clean component architecture

💡 How It All Works
📝 Notes
Stored in React state
Synced to localStorage
Search updates via useEffect
Tags stored per note

📌 Tasks
Stored in central dashboard state
Drawer handles add/edit operations
Reusable TaskCard displays each task
Columns filter tasks by status
Insights pages filter by priority/date

🌟 Recent Enhancements
✔ Complete Tailwind migration (Removed all vanilla CSS)
✔ Modern TaskCentral UI
✔ Rewritten Priority, Today, Overdue, Completed pages
✔ Reusable TaskCard component
✔ TaskDrawer replacing modals
✔ UI matched across Notes + Tasks
✔ Responsive grid layouts
✔ Improved spacing, typography, card design
✔ New folder structure for scalability

🚧 Future Improvements
Drag & drop tasks (react-beautiful-dnd)
Cloud sync (Supabase / Firebase)
Full user auth with JWT
Dark mode toggle
Sorting and filtering tools for notes & tasks
Multi-device support
