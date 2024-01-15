import React from "react";
import notes from "../notes";



function Note(){
    return (
        notes.map(note => 
            <div className="note">
                <h1>{note.title}</h1>
                <p>{note.content}</p>
            </div>
            )
    );
}


export default Note;