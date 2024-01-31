import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import "../../styles/home.css";
import People from "./people.jsx";
import Planets from "./planets.jsx";
import Starships from "./starships.jsx";

export const Home = () => {
  const { store } = useContext(Context);

  const cardStyle = { width: '18rem' };
  return (
    <div className="container">
      <>
        <h2 className="text-left mt-3 mb-4">Personajes</h2>
        <div className="d-flex flex-nowrap" style={{ overflowX: 'auto' }}>
          {store.peopleInfo && store.peopleInfo.map((item) => 
            <div key={item.url} style={cardStyle}>
              <People uid={item.uid} name={item.name} />
            </div>
          )}
        </div>

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
