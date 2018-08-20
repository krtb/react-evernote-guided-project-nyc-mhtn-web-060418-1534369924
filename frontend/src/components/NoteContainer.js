import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  state = {
    notesData: [],
    notesToFilter: [],
    noteDetail: [],
    noteClicked: false,
    noteEdit: [],
    cancelButton: false,
    searchTerm: ''
  }

  fetchNotesAPI = () => {
    return fetch('http://localhost:3000/api/v1/notes').then(resp => resp.json()).then(data => this.setState({
      notesData: data,
      notesToFilter: data
    })).then(() => console.log(this.state))
  }

  componentDidMount() {
    this.fetchNotesAPI()
  }

  handleClick = (event, obj) => {
    // console.log(event, obj)
    this.setState({
      // can set state here!
      noteDetail: obj,
      noteClicked: true,
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
      cancelButton: false,
      noteClicked: false
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

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    }, () => this.filterSearch() )

  }

  filterSearch = () => {
    let findNote = this.state.notesData.filter((aNote) => (
      aNote.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      )
    )

    this.setState({
      notesToFilter: findNote 
    })
  }

  handleDelete = (objID) => {
    this.deleteRequest(objID).then(()=>this.fetchNotesAPI())
  }

  deleteRequest = (deleteID) => {
    let deleteURL = `${'http://localhost:3000/api/v1/notes'}/${deleteID}`
    let deleteMethod = {
      method: 'DELETE',
      headers: {
          "Content-type": "application/json",
          'Accept': 'application/json'
        }
    }
    return fetch(deleteURL, deleteMethod).then(resp=>resp.json())
  }

  render() {
    return (
      <Fragment>
        <Search handleSearch={this.handleSearch} />
        <div className='container'>
          <Sidebar handleDelete={this.handleDelete} handleNewNote={this.handleNewNote} handleClick={this.handleClick} mainNotesData={this.state.notesToFilter}  />
          <Content showState={this.state.noteClicked} handleCancel={this.handleCancel} cancelState={this.state.cancelButton} fetchNotes={this.fetchNotesAPI} noteDetail={this.state.noteDetail} handleEdit={this.handleEdit} noteEdit={this.state.noteEdit}  />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
