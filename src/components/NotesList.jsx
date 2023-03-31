import React from "react";
import NotesItem from "./NotesItem";

// ini merupakan parent component dari beberapa component (NotesBody->NotesItem, DeleteButton->NotesItem)
// parameter note ini berisi properti2 (id,title,body,createdAt)
function NotesList ({notes, onDelete}){
    return (
        <div className="notes-list">
            {
                notes.map((note) => (
                    // ini akan mereturn semua yang ada di dalam notes
                    <NotesItem
                    key={note.id}
                    id={note.id}
                    onDelete={onDelete}
                    //menggunakan spread operator untuk ngespread semua yang ada di dalam note
                    {...note}
                    />
                ))
            }
        </div>
    )
}

export default NotesList