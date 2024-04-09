import { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

function NoteItem(props) {

    const context = useContext(NoteContext);
    const {deleteNote} = context;
    const {notes, updateNote} = props;

    return (
        <>
            <div className="card my-4 mx-4" style={{width: 18 + "rem", height: "auto"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.notes.tittle}</h5>
                    <p className="card-text">{props.notes.discription}</p>
                    <p className="card-text"><b>Tag: {props.notes.tag}</b></p>
                    <i className="fa-solid fa-pen" onClick={() => {updateNote(notes)}}></i>
                    <i className="fa-solid fa-trash mx-3" onClick={() => {deleteNote(notes._id)}}></i>
                </div>
            </div>
        </>
    )
}

export default NoteItem;