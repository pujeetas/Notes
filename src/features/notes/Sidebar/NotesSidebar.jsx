import {
  Archive,
  Bell,
  Clock,
  Folder,
  ImageIcon,
  Layers,
  Mic,
  Paperclip,
  Pin,
  Plus,
  Search,
  Share2,
  Star,
  Tag,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import TagCreateModal from "./TagCreateModal";
import TagManagerModal from "./TagManagerModal";

export default function NotesSidebar({ tags, setTags }) {
  const [isTagModalOpen, setIsTagModalOpen] = useState(false);

  const [isTagManagerOpen, setIsTagManagerOpen] = useState(false);

  const handleCreateTag = () => {
    setIsTagModalOpen(true);
  };

  return (
    <div className="w-[260px] bg-gray-100 border-r p-4 space-y-6">
      {/* SEARCH */}
      <div className="flex items-center gap-2 bg-white border px-2 py-1 rounded-lg">
        <Search size={16} className="text-gray-600" />
        <input
          type="text"
          placeholder="Search notes..."
          className="text-sm outline-none w-full"
        />
      </div>

      {/* CREATE NOTE */}
      <button className="flex items-center gap-2 w-full bg-black text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-900 transition">
        <Plus size={16} /> New Note
      </button>

      {/* SECTIONS */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 mb-2">SECTIONS</h3>
        <SidebarList
          items={[
            { icon: Layers, label: "All Notes" },
            { icon: Star, label: "Favorites" },
            { icon: Archive, label: "Archived" },
            { icon: Trash2, label: "Trash" },
            { icon: Share2, label: "Shared With Me" },
            { icon: Clock, label: "Recently Edited" },
            { icon: Bell, label: "Reminders" },
          ]}
        />
      </div>

      {/* FILTERS */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 mb-2">FILTERS</h3>
        <SidebarList
          items={[
            { icon: ImageIcon, label: "Images" },
            { icon: Paperclip, label: "Attachments" },
            { icon: Mic, label: "Audio Notes" },
            { icon: Pin, label: "Pinned Notes" },
          ]}
        />
      </div>

      {/* TAGS */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 mb-2">TAGS</h3>
        <SidebarList
          items={[
            { icon: Tag, label: "All Tags" },
            ...tags.map((t) => ({ icon: Tag, label: t.label })),
          ]}
        />

        <div className="flex items-center gap-2">
          <button
            onClick={handleCreateTag}
            className="mt-2 text-xs font-medium text-blue-600 hover:underline"
          >
            + Create Tag
          </button>
          <button
            onClick={() => setIsTagManagerOpen(true)}
            className="mt-2 text-xs font-medium text-blue-600 hover:underline"
          >
            Manage Tags
          </button>
        </div>
      </div>
      {/* create tags */}
      <TagCreateModal
        open={isTagModalOpen}
        onClose={() => setIsTagModalOpen(false)}
        onCreate={(label) => {
          const newTag = {
            id: crypto.randomUUID(),
            label,
          };
          setTags((prev) => [...prev, newTag]);
          setIsTagModalOpen(false);
        }}
      />
      {/* manage tags */}
      <TagManagerModal
        open={isTagManagerOpen}
        tags={tags}
        onDelete={(id) =>
          setTags((prev) => prev.filter((tag) => tag.id !== id))
        }
        onClose={() => setIsTagManagerOpen(false)}
      />

      {/* FOLDERS */}
      <div>
        <h3 className="text-xs font-semibold text-gray-500 mb-2">FOLDERS</h3>
        <SidebarList
          items={[
            { icon: Folder, label: "All Folders" },
            { icon: Folder, label: "Personal" },
            { icon: Folder, label: "Work" },
            { icon: Folder, label: "Projects" },
            { icon: Folder, label: "Ideas" },
          ]}
        />
        <button className="mt-2 text-xs font-medium text-blue-600 hover:underline">
          + Create Folder
        </button>
      </div>
    </div>
  );
}

/* Reusable List Component */
function SidebarList({ items = [] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="flex items-center gap-2 text-gray-700 text-sm cursor-pointer hover:text-black"
        >
          <item.icon size={15} />
          {item.label}
        </li>
      ))}
    </ul>
  );
}
