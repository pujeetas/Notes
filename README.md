📝 React Notes App
Organize your thoughts effortlessly!
A sleek, user-friendly React app to create, edit, delete, and search notes — all saved locally for your convenience.

🚀 Features
✍️ Add Notes: Quickly jot down titles and details
✏️ Edit Notes: Seamless modal editing for your entries
❌ Delete Notes: Remove unwanted notes with a click
🔍 Live Search: Instantly filter notes as you type
💾 Persistence: Notes saved in your browser via localStorage
🧩 Modular Components: Clean, reusable React components for maintainability

🛠️ Tech Stack
React (Hooks & Functional Components)
localStorage for data persistence
Lucide Icons for sleek UI icons

🗂️ Project Structure Overview
Body.jsx — Main container & state manager
Search.jsx — Live search input and filtering logic
AddNotes.jsx — Note creation form
Edit.jsx — Modal popup to edit notes
DeleteNotes.jsx — Button component for note deletion
RefreshSearch.jsx — Reset and refresh search results

💡 How It Works
Notes are stored in React state and synced with your browser's localStorage.
The live search uses a controlled input that filters notes instantly as you type, powered by a React useEffect hook.
Editing a note opens a modal with editable fields — save your changes instantly.
Delete notes easily, and all changes reflect immediately and persist between sessions.

🌟 Future Improvements
Add note categories and tags for better organization
Sort notes by date or title
User authentication and cloud sync for cross-device access
Mobile-friendly responsive design enhancements

