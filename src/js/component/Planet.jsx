import React,{useState, useContext} from 'react' 
import { Context } from '../store/appContext'
import planetData from "../../img/planet.json"

const Planet= ({name,population,terrain,id})=>{
    const[userName,setUserName]= useState("")
    const{store,actions}= useContext(Context)

    const planetImage = planetData.planet.find(p => p.id === id)?.image || "https://via.placeholder.com/300";
    return(
        <div class="card" style={{width: "18rem",flex:"none",margin:"10px"}}>
        <img src={planetImage} class="card-img-top" alt={name} style={{height:"25rem"}}/>
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">Population: <strong>{population}</strong></p>
          <p class="card-text">Terrain: <strong>{terrain}</strong></p>
          <div className='d-flex justify-content-between'>
          <a href="#" class="btn btn-primary">More Info</a>
          <button className='btn btn-dark'>Like</button>
          </div>
         
        </div>
      </div>
    )
}

export default Planet