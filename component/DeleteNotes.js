import React from "react";

function DeleteNotes({ noteList, setTempNoteList, setNotesList, id }) {
  function handleDeleteNotes(id) {
    const updatedList = noteList.filter((note) => note.id !== id);
    setTempNoteList(updatedList);
    setNotesList(updatedList);
  }
  return (
    <button className="btn btn-delete" onClick={() => handleDeleteNotes(id)}>
      Delete
    </button>
  );
}

export default DeleteNotes;
