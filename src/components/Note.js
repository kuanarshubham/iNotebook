import { useContext, useEffect, useRef } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteItem from "./NoteItem";
import { AddNote } from "./AddNote";

function Note() {

    const context = useContext(NoteContext);
    const { note, getAllNotes } = context;

    useEffect(() => {
        getAllNotes();
    }, []);

    const ref = useRef(null);

    const updateNote = (note) => {
        ref.current.click();
    }

    return (
        <>
            <AddNote />
            {/* <button type="button" className="btn btn-primary my-3 mx-2" data-toggle="modal" data-target="#exampleModalCenter" ref = {ref}>
                Launch demo modal
            </button>


            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="row my-3">
                <h2>Your Note</h2>
                <div className="conatiner">
                    {note.length === 0 && "No notes available"}
                </div>
                {
                    note.map((notes) => {
                        return <NoteItem key={notes._id} updateNote={updateNote} notes={notes} />;
                    })
                }
            </div>
        </>
    )
}

export default Note;