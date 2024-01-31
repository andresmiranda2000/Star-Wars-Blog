import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import People from "./people.jsx";
import Planets from "./planets.jsx";
import Starships from "./starships.jsx";

export const Home = () => {
  const { store } = useContext(Context);

  return (
    <div className="container">
      <>

       // aquí iría lo de Personajes pero lo sigo trabajando, por tiempos lo subo así, hasta ver el error. 

        <h2 className="text-left mt-3 mb-4">Planetas</h2>
        <div className="planets" style={{ width: '100%', overflowX: 'auto' }}>
          <div className="planetCards">
            <div className="planetLot">
              {store.planetsInfo.map((item) => <Planets uid={item.uid} key={item.url} name={item.name} />)}
            </div>
          </div>
        </div>

        <h2 className="text-left mt-3 mb-4">Naves</h2>
        <div className="starships" style={{ width: '100%', overflowX: 'auto' }}>
          <div className="starshipCards">
            <div className="starshipLot">
              {store.starshipsInfo.map((item) => <Starships uid={item.uid} key={item.url} name={item.name} />)}
            </div>
          </div>
        </div>
      </>
    </div>
  );
};
