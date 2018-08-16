import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  state = {
    notesData: [],
    noteDetail: []
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
    // console.log(obj)
    this.setState({
      noteDetail: obj
    })
  }

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar showDetail={this.handleDetailClick} handleClick={this.handleClick} mainNotesData={this.state.notesData}  />
          <Content noteDetail={this.state.noteDetail} />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
