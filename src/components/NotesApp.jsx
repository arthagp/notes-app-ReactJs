import React from "react";
// nama import harus sama apa yang ada di dalam data
import { getInitialData } from "../utils";
import NotesList from "./NotesList";
import NotesHeader from "./NotesHeader";
import EmptyMessage from "./EmptyMessage";
import NotesInput from "./NotesInput";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onAddNotesHandler({title, body}){
    this.setState((prevState) => {
      return {
        
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date(),
            archived: false,
          },
        ],
      };
    })
  }

  render() {
    return (
      <div>
        <NotesHeader />
        <h2 className="note-header">Buat Catatan</h2>
        <NotesInput addNotes={this.onAddNotesHandler}/>
        <h2 className="note-heading">Daftar Catatan</h2>
        {this.state.notes.length === 0 ? (
          <EmptyMessage />
        ) : (
          <NotesList onDelete={this.onDeleteHandler} notes={this.state.notes} />
        )}
      </div>
    );
  }
}

export default NotesApp;
