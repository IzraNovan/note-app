import React, { Component } from "react";

class NoteInput extends Component {
	constructor(props) {
		super(props);
		this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
		this.onContentChangeHandler = this.onContentChangeHandler.bind(this);
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}

	onTitleChangeHandler(event) {
		this.setState(() => {
			return {
				title: event.target.value,
			};
		});
	}

	onContentChangeHandler(event) {
		this.setState(() => {
			return {
				content: event.target.value,
			};
		});
	}

	onSubmitHandler(event) {
		event.preventDefault();
		const { title, content } = this.state;
		this.props.onSubmit(title, content);
	}

	render() {
		return (
			<div className="note-input">
				<h3 className="note-input__title">Buat Catatan</h3>
				<form className="note-input__body" onSubmit={this.onSubmitHandler}>
					<input
						type="text"
						placeholder="Masukan judul ..."
						value={this.props.title}
						onChange={this.onTitleChangeHandler}
					/>
					<textarea
						name="content"
						cols="30"
						rows="10"
						placeholder="Tuliskan catatanmu disini ..."
						value={this.props.content}
						onChange={this.onContentChangeHandler}
					></textarea>
					<button value="Buat" type="submit">
						Buat
					</button>
				</form>
			</div>
		);
	}
}

export default NoteInput;
