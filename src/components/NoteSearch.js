import React from "react";

function NoteSearch({ onSearchChange, search }) {
	return (
		<div className="note-search">
			<input
				type="search"
				placeholder="Cari catatan ..."
				onChange={onSearchChange}
				value={search}
			/>
		</div>
	);
}

export default NoteSearch;
