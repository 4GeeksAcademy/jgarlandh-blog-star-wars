import React, {useContext, useEffect} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Example from "../component/Example.jsx";

export const Home = () => {
	const {actions,store} = useContext (Context)

	useEffect(()=>{
		actions.getCharacters()
	},[])
	return (
	<div className="text-center mt-5">
		<h1>Star Wars</h1>
		<h2>characters</h2>
		<div className="d-flex flex-row overflow-scroll">
			{store.characters.map((personaje,index)=>(
			<Example
			key={index} 
			name={personaje.name}
			gender={personaje.gender}
			eye={personaje.eye_color}
			id={index}
			/>	
			))}
		</div>
	</div>
);
}
