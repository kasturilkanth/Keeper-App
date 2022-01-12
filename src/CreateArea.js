import React,{useState} from "react";


function CreateArea(props){
    const [note,setNote]=useState({
        title:"",
        content:""
    });
    
    
    function handleChange(event){
        const{name,value}=event.target;
        setNote((prevNote)=>{
            return {
                ...prevNote,
            [name]: value
        };
    });
    }
    function submitNote(e){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        });
        e.preventDefault();
    }
    return(
        
        <form>
            <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />
            <textarea onChange={handleChange}     rows="3" name="content" value={note.content} placeholder="Take a note...."></textarea>
            <button onClick={submitNote}>ADD</button>
        </form>
       
    )
}
export default CreateArea;