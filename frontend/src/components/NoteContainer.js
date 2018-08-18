import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  state = {
    notesData: [],
    noteDetail: [],
    noteEdit: [],
    newData: []
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
      noteDetail: obj
    })
  }

  handleEdit = (event, obj) => {
    // console.log('firstlevel',event, obj)
    this.setState({
      noteEdit: obj.noteDetail
    })
  }

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar handleClick={this.handleClick} mainNotesData={this.state.notesData}  />
          <Content fetchNotes={this.fetchNotesAPI} noteDetail={this.state.noteDetail} handleEdit={this.handleEdit} noteEdit={this.state.noteEdit}  />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
