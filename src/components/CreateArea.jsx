import React, { useState } from "react";

function CreateArea(props) {

    const [note, setNote] = useState({
        title : "",
        content: "",
    });

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
      <form>
        <input 
            onChange={handleChange} 
            name="title" 
            placeholder="Title" 
            value={note.title}
        />
        <textarea 
            onChange={handleChange} 
            name="content" 
            placeholder="Take a note..." 
            rows="3" 
            value={note.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
