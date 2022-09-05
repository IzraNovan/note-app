import React, { Component } from "react";
import { getInitialData } from "../utils";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";

class NoteApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notes: getInitialData(),
			search: "",
		};
		this.submitHandler = this.submitHandler.bind(this);
		this.searchHandler = this.searchHandler.bind(this);
	}

	submitHandler = (title, content) => {
		const notes = this.state.notes;
		const id = +new Date();
		const today = new Date();
		const createdAt = today.toISOString();

		const newNote = { id, title, content, createdAt };
		if (newNote) {
			notes.push(newNote);
		}

		this.setState({
			notes,
		});
		console.log(notes);
	};

	deleteHandler = (id) => {
		console.log(id);
		const notes = this.state.notes;
		const deleteNote = notes.filter((note) => {
			console.log(note.id);
			return note.id !== id;
		});

		this.setState({
			notes: deleteNote,
		});
	};

	searchHandler(event) {
		this.setState(() => {
			return {
				search: event.target.value,
			};
		});
	}

	render() {
		return (
			<>
				<NoteHeader
					onSearchChange={this.searchHandler}
					search={this.state.search}
				/>
				<NoteBody
					notes={this.state.notes}
					onSubmit={this.submitHandler}
					onDelete={this.deleteHandler}
					search={this.state.search}
				/>
			</>
		);
	}
}

export default NoteApp;
