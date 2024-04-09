import React, { useState } from 'react';
import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

export const AddNote = () => {

    const context = useContext(NoteContext);
    const { addNote } = context;

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.tittle, note.discription, note.tag);
    }

    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value});
    }

    const [note, setNote] = useState({tittle: "", discription: "", tag: ""});

    

    

    return (
        <>
            <div className="container">
                <h2>Add a Note</h2>

                <form>
                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">Tittle</label>
                        <input type="text" className="form-control" id="tittle" aria-describedby="emailHelp" name= "tittle" onChange={onChange} minLength="5" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Discription</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" name= "discription" onChange={onChange} minLength="5" required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" aria-describedby="emailHelp" name= "tag" onChange={onChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleClick} >Add Note</button>
                </form>
            </div>
        </>
    )
}
