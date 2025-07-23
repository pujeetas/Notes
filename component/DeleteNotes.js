function DeleteNotes({ id, setActiveDeleteId }) {
  function handleDeleteNotes(id) {
    setActiveDeleteId(id);
  }

  return (
    <>
      <button className="btn btn-delete" onClick={() => handleDeleteNotes(id)}>
        Delete
      </button>
    </>
  );
}

export default DeleteNotes;
