import React from "react";

function NoteItem({ id, title, createdAt, content, onDelete }) {
	return (
		<div className="note-item">
			<article className="note-item__body">
				<h4 className="note-item__title">{title}</h4>
				<p className="note-item__date">{createdAt}</p>
				<p className="note-item__content">{content}</p>
				<div className="note-item__action">
					<button
						className="note-item__delete-button"
						onClick={() => {
							onDelete(id);
							console.log(id);
						}}
					>
						Delete
					</button>
					<button className="note-item__archive-button">Archive</button>
				</div>
			</article>
		</div>
	);
}

export default NoteItem;
