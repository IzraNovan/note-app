import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteBody({ notes, onSubmit, onDelete, search }) {
	const Notes = notes.filter((note) =>
		note.title.toLowerCase().includes(search.toLowerCase())
	);
	const enableNotes = notes.filter((note) => {
		return note.archived === false;
	});

	return (
		<div className="note-body">
			<NoteInput notes={Notes} onSubmit={onSubmit} />
			{enableNotes.length !== 0 ? (
				<NoteList notes={enableNotes} onDelete={onDelete} />
			) : (
				<>
					<h3 className="notes-list-title">Catatan Aktif</h3>
					<p className="notes-list__empty-message">Tidak ada catatan</p>
				</>
			)}
		</div>
	);
}

export default NoteBody;
