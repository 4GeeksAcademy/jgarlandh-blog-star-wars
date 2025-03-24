import React,{useState, useContext} from 'react' 
import { Context } from '../store/appContext'
import peopleData from "../../img/people.json"

const Example= ({name,gender,eye,id})=>{
    const[userName,setUserName]= useState("")
    const{store,actions}= useContext(Context)

    const peopleImage = peopleData.people.find(p => p.id === id)?.image || "https://via.placeholder.com/300";
    return(
        <div class="card" style={{width: "18rem",flex:"none",margin:"10px"}}>
        <img src={peopleImage} class="card-img-top" alt={name} style={{height:"25rem"}}/>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">gender: <strong>{gender}</strong></p>
          <p class="card-text">eye Color: <strong>{eye}</strong></p>
          <div className='d-flex justify-content-between'>
          <a href="#" class="btn btn-primary">More Info</a>
          <button className='btn btn-dark'>Like</button>
          </div>
         
        </div>
      </div>
    )
}

export default Example