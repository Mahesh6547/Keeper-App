import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

    const [note, setNote] = useState({
        title : "",
        content: "",
    });

    const [clicked, setClicked] = useState(false);

    function handleClick(){
      setClicked(true);
    }

    function handleChange(event){
        const {name, value} = event.target;

        setNote((prevValue)=>{
            return {
            ...prevValue,
            //here we created a key (i.e. name using []) value pair 
            [name] : value,
        }
        });
    }

    // handling event when a button is clicked
    function submitNote(event){
        // here we are accessing the function from App.jsx using props
        props.onAdd(note)
        setNote({
            title : "",
            content: "",
        })
        // this will prevent react from getting refreshed every time button is clicked
        event.preventDefault();
    }

  return (
    <div>
      <form className="create-note">
        {clicked && 
        <input 
            onChange={handleChange} 
            name="title" 
            placeholder="Title" 
            value={note.title}
        />}
        
        <textarea 
            onChange={handleChange} 
            onClick={handleClick}
            name="content" 
            placeholder="Take a note..." 
            rows={clicked ? "3" : "1"} 
            value={note.content}
        />
        <Zoom in={true}>
          <Fab onClick={submitNote}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
