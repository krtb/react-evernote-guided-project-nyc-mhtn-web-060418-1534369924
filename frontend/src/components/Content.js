import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  renderContent = () => {
    if (this.props.showState === true && this.props.cancelState) {    
      // console.log('show edit', this.props.showState)  
      return <NoteEditor showState={this.props.showState} handleCancel={this.props.handleCancel} fetchNotes={this.props.fetchNotes} noteEdit={this.props.noteEdit} handleEdit={this.props.handleEdit} />;
    } else if (this.props.showState === true) {
      // console.log('show viewer', this.props.showState)  
      return <NoteViewer handleEdit={this.props.handleEdit} noteDetail={this.props.noteDetail} />;
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
