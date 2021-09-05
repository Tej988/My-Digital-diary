import React ,{useState} from 'react'
import { useHistory } from "react-router-dom";
import axios from 'axios'



function Create  ()  {
    let history = useHistory();
const [input, setInput] = useState({
    title:"",
    content:''
});

function handleChange(e){
    const {name,value} = e.target;

    setInput(prevInput =>{
        return{
            ...prevInput,
            [name]:value
        }
    })
     
}

function handleClick(e){
    e.preventDefault();


const newNote={
    title:input.title,
    content:input.content

}


    console.log(input);
    axios.post('http://localhost:2000/create',newNote).then(
        window.alert("Note add successfull")
    ).catch(()=>{
        window.alert("Error")

    })
    history.push("/view");


}


    return (
        <div className="container mt-5"> 
            <h3>Create Note</h3>

            <form>
  <div class="form-group mt-3">
    {/* <label for="exampleFormControlInput1">Head Line</label> */}
    <input  type="text" onChange={handleChange} name="title" value={input.title} class="form-control" id="exampleFormControlInput1" placeholder="Note*"/>
  </div>
  
  
  <div class="form-group mt-3">
    {/* <label for="exampleFormControlTextarea1">Blog</label> */}
    <textarea onChange={handleChange} name="content" value={input.content} class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message*"></textarea>
  </div>
  <button type="button"  onClick={handleClick} class="btn btn-success mt-2 btn-lg">Add Note</button>
</form>

        </div>
    )
}

export default Create;