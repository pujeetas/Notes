import React, { useEffect, useState } from "react";

function Search({
  noteList,
  setTempNoteList,
  searchText,
  setSearchText,
  setIsSearchActive,
}) {
  useEffect(() => {
    const filtered = noteList.filter((note) =>
      note.title.toLowerCase().includes(searchText.toLowerCase())
    );

    setTempNoteList(filtered);
  }, [searchText, noteList]);

  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          className="search-area"
          placeholder="Search Notes..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        ></input>
      </div>
    </div>
  );
}

export default Search;
