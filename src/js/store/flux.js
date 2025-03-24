const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: { 
			characters:[],
			planets:[],
			vehicles:[],
			
		},
		actions: {
			
			getCharacters: async () => {
			try {
			const response = await fetch("https://swapi.dev/api/people")
			console.log (response)	
			const data = await response.json() 
			console.log("AQUI LOS PERSONAJES CARGADOS", "Characters loaded:", data.results);
			console.log (data.results)
			setStore({characters:data.results})
			} catch (error) {
				console.log (error)
			}	
			},

			getPlanets: async () => {
				try {
				const response = await fetch("https://swapi.dev/api/planets/")
				console.log (response)	
				const data = await response.json() 
				console.log("AQUI LOS PLANETAS CARGADOS", "Planets loaded:", data.results);
				console.log (data.results)
				setStore({planets:data.results})
				} catch (error) {
					console.log (error)
				}	
				},

			getVehicles: async () => {
					try {
					const response = await fetch("https://swapi.dev/api/vehicles/")
					console.log (response)	
					const data = await response.json() 
					console.log("AQUI LOS VEHICULOS CARGADOS", "Vehicles loaded:", data.results);
					console.log (data.results)
					setStore({vehicles:data.results})
					} catch (error) {
						console.log (error)
					}	
					},
			
		}
	};
};

export default getState;
