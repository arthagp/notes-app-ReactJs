import React from "react";

class NotesInput extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            title : '',
            body : '', 
        }

        this.onAddTitleNotesHandler = this.onAddTitleNotesHandler.bind(this);
        this.onAddBodyNotesHandler = this.onAddBodyNotesHandler.bind(this);
        this.onSubmitNotesHandler = this.onSubmitNotesHandler.bind(this);
    }

    onAddTitleNotesHandler (event){
        // mereturn object yang ingin di set
        this.setState(() => {
            return {
                title : event.target.value
            }
        })
    }

    onAddBodyNotesHandler (event){
        this.setState(() => {
            return {
                body : event.target.value
            }
        })
    }

    onSubmitNotesHandler (event){
        event.preventDefault()
        // menambahkan sebuah fungsi di dalam props, yang mana fungsi tersebut berisi state
        this.props.addNotes(this.state)
    }

    render () {
        return (
            <form className="note-input" action="" onSubmit={this.onSubmitNotesHandler}>
                <input required type="text" value={this.state.title} onChange={this.onAddTitleNotesHandler} placeholder="Ini adalah Judul..."/>
                <textarea required type="text" value={this.state.body} onChange={this.onAddBodyNotesHandler} placeholder="Tuliskan Catatanmu Disini..."/>
                <button type="submit">Buat</button>
            </form>
        )
    }
}

export default NotesInput