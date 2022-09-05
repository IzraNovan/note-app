import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
	return (
		<>
			<h3 className="notes-list-title">Catatan Aktif</h3>
			<div className="notes-list">
				{notes.map((note) => (
					<NoteItem key={note.id} {...note} onDelete={onDelete} id={note.id} />
				))}
			</div>
		</>
	);
}

export default NoteList;
