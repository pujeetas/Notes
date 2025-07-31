import { RefreshCw } from "lucide-react";

function RefreshSearch({
  setTempNoteList,
  noteList,
  setIsSearchActive,
  setSearchText,
}) {
  function refreshNotes() {
    setTempNoteList(noteList);
    setIsSearchActive(false);
    setSearchText("");
  }
  return (
    <div className="refresh-btn" onClick={refreshNotes}>
      <button>
        <RefreshCw />
      </button>
    </div>
  );
}

export default RefreshSearch;
