import React from "react";
import NoteSearch from "./NoteSearch";

function NoteHeader({ onSearchChange, search }) {
	return (
		<header className="note-app__header">
			<h1>Notes</h1>
			<NoteSearch onSearchChange={onSearchChange} search={search} />
		</header>
	);
}

export default NoteHeader;
