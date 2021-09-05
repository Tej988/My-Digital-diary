import React ,{useState,useEffect}from 'react'
import './App.css';

function View  ()  {

const [notes, setNotes] = useState([{
    title:"",
    content:""
}])

const info = async()=>{
    const res = await fetch("/notes");
    const data = await res.json();
    setNotes(data);
}


useEffect(() => {

info()

})

    return (
        <div classNameNameName="container mt-5">
            <h3 className="heading">View page</h3>
            <div className="cards">
            {
                notes.map(function(note){
                    return(
                      
                        <div className="card" style={{width: "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">{note.title}</h5>
                            <p className="card-text">{note.content}</p>
                            <a href="#" className="card-link">Photos</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                        </div>
                                    
                    )
                })
            }
            </div>
            
           
        </div>
    )
}

export default View;

  {/* <div classNameNameName="content">
                <h2>{note.title}</h2>
                <p>{note.content}</p>
                </div>  */}


