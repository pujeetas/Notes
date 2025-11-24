import React, { useState } from "react";
import Header from "../..//components/Header";
import NotesSidebar from "./Sidebar/NotesSidebar";
import NotesList from "./List/NotesList";
import Editor from "./Editor/Editor";
import DeleteNotes from "./Delete/DeleteNotes";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [newNoteMode, setNewNoteMode] = useState(false);

  const activeNote = notes.find((n) => n.id === activeId) || null;

  const [showDelete, setShowDelete] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState(null);

  const [tags, setTags] = useState([]);

  function addNote() {
    setNewNoteMode(true);
    setActiveId(null);
  }

  function saveNote(id, data) {
    if (newNoteMode) {
      const newNote = {
        id: Date.now(),
        title: data.title,
        body: data.body,
        image: data.image || null,
        file: data.file || null,
        updatedAt: Date.now(),
        tags: [], // NEW
      };
      setNotes((prev) => [newNote, ...prev]);
      setActiveId(newNote.id);
      setNewNoteMode(false);
      return;
    }

    setNotes((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, ...data, updatedAt: Date.now() } : n
      )
    );
  }

  function onAddTag(noteId, label) {
    const newTag = { id: crypto.randomUUID(), label };

    // 1. Add tag to the selected note
    setNotes((prev) =>
      prev.map((note) =>
        note.id === noteId
          ? { ...note, tags: [...(note.tags || []), newTag] }
          : note
      )
    );

    // 2. Add tag to global tag list (only if not duplicate)
    setTags((prev) => {
      const exists = prev.some(
        (t) => t.label.toLowerCase() === label.toLowerCase()
      );
      if (exists) return prev;
      return [...prev, newTag];
    });
  }

  function requestDelete(id) {
    setPendingDeleteId(id);
    setShowDelete(true);
  }

  function confirmDelete() {
    setNotes((prev) => prev.filter((n) => n.id !== pendingDeleteId));
    setPendingDeleteId(null);
    setShowDelete(false);
    setActiveId(null);
    setNewNoteMode(false);
  }

  function closeModal() {
    setPendingDeleteId(null);
    setShowDelete(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <div className="flex flex-1">
        <NotesSidebar tags={tags} setTags={setTags} />

        <div className="w-[240px] border-r bg-white p-4">
          <NotesList
            notes={notes}
            activeId={activeId}
            onSelect={setActiveId}
            onNew={addNote}
            onDelete={requestDelete}
            onAddTag={onAddTag}
          />

          <DeleteNotes
            show={showDelete}
            onClose={closeModal}
            onConfirm={confirmDelete}
          />
        </div>

        <div className="flex-1 p-6 bg-gray-50 overflow-auto">
          <Editor
            note={activeNote}
            newNoteMode={newNoteMode}
            onSave={saveNote}
          />
        </div>
      </div>
    </div>
  );
}
