import React from "react";
import NotesItemBody from "./NotesItemBody";
import DeleteButton from "./DeleteButton";
import { showFormattedDate } from "../utils"; 

function NotesItem({ title, createdAt, body, id, onDelete }) {
  return (
    <div className="note-item">
      <NotesItemBody title={title} createdAt={showFormattedDate(createdAt)} body={body} />
      <DeleteButton id={id} onDelete={onDelete}/>
    </div>
  );
}

export default NotesItem;
