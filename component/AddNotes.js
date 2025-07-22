import React from "react";

function AddNotes({
  notes,
  title,
  setNotes,
  setTitle,
  setNotesList,
  setTempNoteList,
}) {
  function handleAddNotes() {
    const newNote = {
      id: Date.now(),
      title: title,
      content: notes,
      createdAt: new Date().toLocaleDateString(),
    };

    setNotesList((prevNotes) => {
      const updatedNotes = [...prevNotes, newNote];
      setTempNoteList(updatedNotes);
      return updatedNotes;
    });
    setTitle("");
    setNotes("");
  }
  return (
    <div className="note-form">
      <h2>Add New Note</h2>
      <input
        type="text"
        placeholder="Note title..."
        className="title-input"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea
        placeholder="Write your note here..."
        className="content-textarea"
        rows="6"
        onChange={(e) => setNotes(e.target.value)}
        value={notes}
      />
      <div className="form-buttons">
        <button className="btn btn-add" onClick={handleAddNotes}>
          Add Note
        </button>
      </div>
    </div>
  );
}

export default AddNotes;
