import './App.css';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import { useState } from 'react';
// import notes from './notes';

function App() {
  const[notes,setNotes]=useState([]);
  function addNote(newNote){
    setNotes((prevNotes)=>{
      return [...prevNotes,newNote]
      })
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
   <Header/>
   <CreateArea onAdd={addNote}/>

   {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
    
   <Footer/>
   </>
  );
}

export default App;
