const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {

			getCharacters: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/people")
					console.log(response)
					const data = await response.json()
					console.log("AQUI LOS PERSONAJES CARGADOS", "Characters loaded:", data.results);
					console.log(data.results)
					setStore({ characters: data.results })
				} catch (error) {
					console.log(error)
				}
			},

			getPlanets: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/planets/")
					console.log(response)
					const data = await response.json()
					console.log("AQUI LOS PLANETAS CARGADOS", "Planets loaded:", data.results);
					console.log(data.results)
					setStore({ planets: data.results })
				} catch (error) {
					console.log(error)
				}
			},

			getVehicles: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/vehicles/")
					console.log(response)
					const data = await response.json()
					console.log("AQUI LOS VEHICULOS CARGADOS", "Vehicles loaded:", data.results);
					console.log(data.results)
					setStore({ vehicles: data.results })
				} catch (error) {
					console.log(error)
				}
			},
			addFavorite: (type, item) => {
				const store = getStore();
				const newFavorite = {
					id: `${type}_${item.id}`,
					type,
					data: item,
					name: item.name
				};
				setStore({
					favorites: [...store.favorites, newFavorite]
				});
			},

			removeFavorite: (id) => {
				const store = getStore();
				setStore({
					favorites: store.favorites.filter(item => item.id !== id)
				});
			}

		}
	};
};

export default getState;
