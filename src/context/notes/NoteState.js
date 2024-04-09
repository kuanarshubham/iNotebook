import NoteContext from "./NoteContext";
import {  useState } from "react";


const NoteState = (props) => {

  const host = "http://localhost:5000";

  const noteInitial = [];

  const [note, setNote] = useState(noteInitial);

  //get all notes
  const getAllNotes = async () => {

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwMTU5NDM2MmRkNWI5NTI2ZGIzMDMzIn0sImlhdCI6MTcxMTM2NDQxOX0.kROHih03uTX9iwhTaa53azPIP0bWExpOeoeqIWyYc5I"
      }
    })

    const json = await response.json();
    setNote(json);
  }



  // add note
  const addNote = async (tittle, discription, tag) => {

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwMTU5NDM2MmRkNWI5NTI2ZGIzMDMzIn0sImlhdCI6MTcxMTM2NDQxOX0.kROHih03uTX9iwhTaa53azPIP0bWExpOeoeqIWyYc5I"
      },
      body: JSON.stringify({ tittle, discription, tag })
    });

    const notes = {
      "_id": "0101",
      "tittle": tittle,
      "discription": discription,
      "tag": tag,
      "date": "2024-03-22T18:11:19.201Z",
      "__v": 0
    }

    setNote(note.concat(notes));
  }

  //delete note
  const deleteNote = async (id) => {

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwMTU5NDM2MmRkNWI5NTI2ZGIzMDMzIn0sImlhdCI6MTcxMTM2NDQxOX0.kROHih03uTX9iwhTaa53azPIP0bWExpOeoeqIWyYc5I"
      }
    });

    const json = await response.json();

    console.log(json);
    const newNote = note.filter((notes) => { return notes._id !== id });
    setNote(newNote);
  }

  //edit note
  const editNote = (id, tittle, discription, tag) => {



    for (let i = 0; i < note.length; i++) {
      const element = note[i];
      if (element._id === id) {
        element.tittle = tittle;
        element.discription = discription;
        element.tag = tag;
      }
    }
  }

  return (
    <NoteContext.Provider value={{ note, getAllNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;