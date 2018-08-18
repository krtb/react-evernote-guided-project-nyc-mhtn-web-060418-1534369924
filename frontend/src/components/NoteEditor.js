import React, { Component } from 'react';

class NoteEditor extends Component {
  state = {
    currentTitle: this.props.noteEdit.title,
    currentBody: this.props.noteEdit.body
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

  render() {
    return (
      <form className="note-editor">
        <input type="text" name="title" value={this.state.currentTitle} onChange={this.handleTitleChange} />
        <textarea name="body" value={this.state.currentBody} onChange={this.handleBodyChange} />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;