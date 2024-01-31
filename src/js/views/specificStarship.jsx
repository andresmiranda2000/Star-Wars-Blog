import { Context } from "../store/appContext";
import React, {useContext, useState, useEffect}  from "react";
import { useParams } from "react-router-dom";

const SpecificStarship = () => {
    const { store, actions } = useContext(Context);
    const [myStarship, setMyStarship] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch("https://www.swapi.tech/api/starships/" + params.uid)
            .then(response => response.json())
            .then((data) => setMyStarship(data.result.properties));
    }, []);

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-4">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/starships/${params.uid}.jpg`}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                        }}
                        className="img-fluid"
                        alt="Starship"
                    />
                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-dark">{myStarship.name}</h2>
                            <ul className="list-unstyled">
                                <li><strong>Modelo: </strong> {myStarship.model}</li>
                                <li><strong>Clase de nave: </strong>{myStarship.starship_class}</li>
                                <li><strong>Fabricante: </strong>{myStarship.manufacturer}</li>
                                <li><strong>Precio: </strong> {myStarship.cost_in_credits}</li>
                                <li><strong>Longitud: </strong>{myStarship.length}</li>
                                <li><strong>Pasajeros: </strong>{myStarship.passengers}</li>
                                <li><strong>Capacidad de Carga: </strong>{myStarship.cargo_capacity}</li>
                                <li><strong>Consumibles: </strong>{myStarship.consumables}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecificStarship;
