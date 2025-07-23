import { useEffect, useState } from "react";
import AddNotes from "./AddNotes";
import DeleteNotes from "./DeleteNotes";
import Edit from "./Edit";
import Search from "./Search";

const Body = () => {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteId, setNoteId] = useState(null);

  const [searchText, setSearchText] = useState("");

  const [activeDeleteId, setActiveDeleteId] = useState(null);

  const [noteList, setNotesList] = useState(() => {
    const stored = localStorage.getItem("notes");
    return stored ? JSON.parse(stored) : [];
  });

  const [tempNoteList, setTempNoteList] = useState([]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(noteList));
    setTempNoteList(noteList);
  }, [noteList]);

  function deleteConfirmationFunction(id) {
    const updatedList = noteList.filter((note) => note.id !== id);
    setTempNoteList(updatedList);
    setNotesList(updatedList);
    setActiveDeleteId(null);
  }

  function handleEditNotes(id) {
    const notesToEdit = noteList.find((note) => note.id === id);
    if (notesToEdit) {
      setTitle(notesToEdit.title);
      setNotes(notesToEdit.content);
      setNoteId(id);
      setIsModalOpen(true);
    }
  }

  return (
    <div className="notes-app">
      <div className="header">
        <h1>My Notes</h1>
        <p>Create, edit, and organize your thoughts</p>
      </div>

      {/* Search Component */}
      <Search
        noteList={noteList}
        setTempNoteList={setTempNoteList}
        searchText={searchText}
        setSearchText={setSearchText}
      />

      {/* Add Component */}
      <div className="main-container">
        <AddNotes
          setTitle={setTitle}
          setNotes={setNotes}
          setNotesList={setNotesList}
          setTempNoteList={setTempNoteList}
          title={title}
          notes={notes}
        />

        {/* Edit Component */}
        {isModalOpen && (
          <Edit
            noteId={noteId}
            tempNoteList={tempNoteList}
            setTempNoteList={setTempNoteList}
            noteList={noteList}
            setNotesList={setNotesList}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            title={title}
            setTitle={setTitle}
            notes={notes}
            setNotes={setNotes}
          />
        )}
        {activeDeleteId !== null && (
          <div className="modal-overlay">
            <div className="del-btn-modal">
              <h3>Are you sure you want to delete?</h3>
              <div className="del-box-btns">
                <button
                  className="btn btn-delete"
                  onClick={() => {
                    deleteConfirmationFunction(activeDeleteId);
                    setActiveDeleteId(null);
                  }}
                >
                  Delete
                </button>
                <button
                  className="btn cancel-btn"
                  onClick={() => setActiveDeleteId(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="notes-list">
          <div className="notes-refresh">
            <h2>Your Notes ({tempNoteList.length})</h2>
          </div>
          <div className="notes-grid">
            {tempNoteList.map((note) => (
              <div key={note.id} className="note-card">
                <div className="note-header">
                  <h3 className="note-title">{note.title}</h3>
                  <span className="note-date">{note.createdAt}</span>
                </div>
                <p className="note-content">{note.content}</p>
                <div className="note-actions">
                  <button
                    className="btn btn-edit"
                    onClick={() => handleEditNotes(note.id)}
                  >
                    Edit
                  </button>
                  <DeleteNotes
                    id={note.id}
                    setActiveDeleteId={setActiveDeleteId}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
