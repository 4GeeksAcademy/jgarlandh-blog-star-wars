const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: { 
			characters:[],
			
		},
		actions: {
			
			getCharacters: async () => {
			try {
			const response = await fetch("https://swapi.dev/api/people")
			console.log (response)	
			const data = await response.json() 
			console.log (data.results)
			setStore({characters:data.results})
			} catch (error) {
				console.log (error)
			}	
			},
			
		}
	};
};

export default getState;
