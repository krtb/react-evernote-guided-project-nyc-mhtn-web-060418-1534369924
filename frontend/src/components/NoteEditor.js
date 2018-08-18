import React, { Component } from 'react';

class NoteEditor extends Component {
  state = {
    currentTitle: this.props.noteEdit.title,
    currentBody: this.props.noteEdit.body,
  }

  handleTitleChange = (event) => {
    this.setState({
      currentTitle: event.target.value
    })
  }

  handleBodyChange = (event) => {
    this.setState({
      currentBody: event.target.value
    })
  }

  updatePatch = (editID, editTitle, editBody) => {
    let editURL = `${'http://localhost:3000/api/v1/notes'}/${editID}`
    let editPatch = {
      method: 'PATCH',
      body: JSON.stringify({
        title: editTitle,
        body: editBody
      }),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
      }
    }
    return fetch(editURL, editPatch).then(resp=>resp.json())
  }


  handleSubmit = (event, props, state) => {
    event.preventDefault()
    let editID = props.noteEdit.oneNote.id
    let editTitle = state.currentTitle
    let editBody = state.currentBody
    // console.log(event, props.noteEdit.oneNote.id, state.currentTitle, state.currentBody);
    this.updatePatch(editID, editTitle, editBody).then(()=> this.props.fetchNotes())
  }

  render() {
    return (
      // you were about to work on the on submit portion below
      <form className="note-editor" onSubmit={(event) => this.handleSubmit(event, this.props, this.state)}>
        <input type="text" name="title" value={this.state.currentTitle} onChange={this.handleTitleChange} />
        <textarea name="body" value={this.state.currentBody} onChange={this.handleBodyChange} />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={this.props.handleCancel}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;