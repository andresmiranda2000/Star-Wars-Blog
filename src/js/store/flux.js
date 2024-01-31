const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			peopleInfo:[],
			planetsInfo:[],
			specificPlanetData:[],
			starshipsInfo:[],
			myFavs:[]
		},
			actions: {
			
			peopleData: () => {
				fetch("https://www.swapi.tech/api/people",)
				.then(response => response.json())
				.then((data) => setStore({peopleInfo: data.results}))
			},
			planetsData: () => {
				fetch("https://www.swapi.tech/api/planets",)
				.then(response => response.json())
				.then((data) => setStore({planetsInfo: data.results}))
			},
			starshipsData: () => {
				fetch("https://www.swapi.tech/api/starships",)
				.then(response => response.json())
				.then((data) => setStore({starshipsInfo: data.results}))
			},
			addToFavs: (favName) => {
				const store = getStore();
			 		if (store.myFavs.includes(favName)) {
						 setStore({ myFavs: store.myFavs.filter((duplicate) => duplicate != favName) });
			 		}
			 		else {
						 setStore({myFavs: [...store.myFavs, favName]});
						}
			},
			corazonColor: (name) => {
				const store = getStore();
				return store.myFavs.includes(name);
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			changeColor: (index, color) => { 

				const store = getStore();

				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				setStore({ demo: demo });
			},
		}
	};
};

export default getState;