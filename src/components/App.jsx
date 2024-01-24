import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
    const [notes, setNotes] = useState([]);


    function addNote(newNote){
        setNotes((prevNote)=>{
            return [...prevNote, newNote];
        })
        //console.log(note);
    }

    function deleteNote(id){
        //console.log("delete was triggered");
        setNotes(((prevNote) =>{
            return (prevNote.filter((noteItem , index)=>{
                return id !== index;
            }));
        }));
    }

    return (
        <div>
            <Header />
            <CreateArea
                //here we are passing a function as a prop onAdd 
                onAdd={addNote}
            />
            {notes.map((note, index)=>{
                return <Note 
                    key={index}
                    id={index}
                    title= {note.title}
                    content= {note.content}
                    onDelete={deleteNote}
                />
            })}
            
            <Footer />
        </div>
    );
}

export default App;