function Edit({
  noteId,
  setTempNoteList,
  setNotesList,
  setIsModalOpen,
  title,
  notes,
  setNotes,
  noteList,
  setTitle,
}) {
  function handleEditCancel() {
    setIsModalOpen(false);
  }

  function handleEditSave() {
    const updatedNote = noteList.map((note) =>
      note.id === noteId ? { ...note, title: title, content: notes } : note
    );
    setTempNoteList(updatedNote);
    setNotesList(updatedNote);
    setTitle("");
    setNotes("");
    setIsModalOpen(false);
  }

  return (
    <div className="editFrom-container">
      <div className="edit-form">
        <h2>Edit Note</h2>
        <input
          type="text"
          className="editTitle-input"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <textarea
          className="editContent-textarea"
          rows="6"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />

        <div className="form-buttons">
          <button className="btn btn-edit" onClick={handleEditSave}>
            Save Note
          </button>
          <button className="btn cancel-btn" onClick={handleEditCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
