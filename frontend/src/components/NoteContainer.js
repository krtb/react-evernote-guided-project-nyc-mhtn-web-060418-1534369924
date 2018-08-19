import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  state = {
    notesData: [],
    noteDetail: [],
    noteEdit: [],
    cancelButton: false
  }

  fetchNotesAPI = () => {
    return fetch('http://localhost:3000/api/v1/notes').then(resp => resp.json()).then(data => this.setState({
      notesData: data
    })).then(() => console.log(this.state))
  }

  componentDidMount() {
    this.fetchNotesAPI()
  }

  handleClick = (event, obj) => {
    // console.log(event, obj)
    this.setState({
      noteDetail: obj,
      cancelButton: false
    })
  }

  handleEdit = (event, obj) => {
    this.setState({
      noteEdit: obj.noteDetail,
      cancelButton: true
    })
  }

  handleCancel = () => {
    this.setState({
      cancelButton: false
    })
  }

  handleNewNote = () => {
    console.log("posted note");
    let postTitle = 'default'
    let postBody = 'placeholder' 
    this.postNote(postTitle, postBody).then(()=>this.fetchNotesAPI())
  }

  postNote = (newTitle, newBody) => {
    let postURL = 'http://localhost:3000/api/v1/notes'
    let postNew = {
      method: 'POST',
      body: JSON.stringify({
        title: newTitle, 
        body: newBody
      }),
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    }
    return fetch(postURL, postNew).then(resp=>resp.json())
  }

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar handleNewNote={this.handleNewNote} handleClick={this.handleClick} mainNotesData={this.state.notesData}  />
          <Content handleCancel={this.handleCancel} cancelState={this.state.cancelButton} fetchNotes={this.fetchNotesAPI} noteDetail={this.state.noteDetail} handleEdit={this.handleEdit} noteEdit={this.state.noteEdit}  />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
