import React, { useEffect, useState } from "react";

export default function Editor({ note, newNoteMode, onSave, onDelete }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (newNoteMode) {
      setTitle("");
      setBody("");
      setImage(null);
      setFile(null);
      return;
    }

    setTitle(note?.title || "");
    setBody(note?.body || "");
    setImage(note?.image || null);
    setFile(note?.file || null);
  }, [note, newNoteMode]);

  if (!note && !newNoteMode) {
    return <div className="text-gray-500">Select or create a note.</div>;
  }

  function save() {
    const data = { title: title.trim(), body: body.trim(), image, file };
    onSave(note?.id, data);
  }

  function uploadImage(e) {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImage(url);
  }

  function attachFile(e) {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f.name);
  }

  return (
    <div className="max-w-3xl mx-auto relative">
      {/* Toolbar */}
      <div className="flex items-center gap-3 mb-4">
        {/* Upload Image */}
        <label className="px-3 py-1 text-sm rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer">
          Image
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={uploadImage}
          />
        </label>

        {/* Attach File */}
        <label className="px-3 py-1 text-sm rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer">
          Attach
          <input type="file" className="hidden" onChange={attachFile} />
        </label>

        <div className="flex-1" />

        {/* Dropdown */}
        <button
          onClick={() => setMenu((v) => !v)}
          className="cursor-pointer px-2 py-1 rounded-md hover:bg-gray-200 text-xl"
        >
          ⋯
        </button>

        <button
          onClick={save}
          className=" cursor-pointer **:px-4 p-1.5 text-sm rounded-md bg-slate-900 text-white"
        >
          Save
        </button>
      </div>

      {/* Dropdown Menu */}
      {menu && (
        <div className="absolute top-12 right-0 w-48 bg-white border rounded-md shadow p-1 text-sm">
          <button className="w-full text-left px-3 py-2 hover:bg-gray-100">
            Duplicate
          </button>
          <button className="w-full text-left px-3 py-2 hover:bg-gray-100">
            Move to Folder
          </button>

          {image && (
            <button
              onClick={() => setImage(null)}
              className="w-full text-left px-3 py-2 hover:bg-gray-100 text-red-600"
            >
              Remove Image
            </button>
          )}

          {file && (
            <button
              onClick={() => setFile(null)}
              className="w-full text-left px-3 py-2 hover:bg-gray-100 text-red-600"
            >
              Remove File
            </button>
          )}

          <div className="border-t my-1" />

          <button
            onClick={() => onDelete(note.id)}
            className="w-full text-left px-3 py-2 hover:bg-red-50 text-red-600"
          >
            Delete Note
          </button>
        </div>
      )}

      {/* Image Preview */}
      {image && (
        <div className="mb-4">
          <img
            src={image}
            alt="preview"
            className="w-full max-h-64 object-cover rounded-lg"
          />
        </div>
      )}

      {/* File Name */}
      {file && (
        <div className="text-sm mb-3 text-gray-600">Attached: {file}</div>
      )}

      {/* Title */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className=" w-full text-3xl font-semibold outline-none mb-4 bg-transparent"
      />

      {/* Body */}
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Write here..."
        className="w-full h-[60vh] outline-none resize-none text-gray-700 bg-transparent"
      />
    </div>
  );
}
