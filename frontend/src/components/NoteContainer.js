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
    console.log('at the click level')
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

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar handleClick={this.handleClick} mainNotesData={this.state.notesData}  />
          <Content handleCancel={this.handleCancel} cancelState={this.state.cancelButton} fetchNotes={this.fetchNotesAPI} noteDetail={this.state.noteDetail} handleEdit={this.handleEdit} noteEdit={this.state.noteEdit}  />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
