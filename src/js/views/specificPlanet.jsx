import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SpecificPlanet = () => {
    const { store, actions } = useContext(Context);
    const [myPlanet, setMyPlanet] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch("https://www.swapi.tech/api/planets/" + params.uid)
            .then(response => response.json())
            .then((data) => setMyPlanet(data.result.properties));
    }, []);

    const imageURL = `https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`;

    return (
        <div className="container my-4">
            <div className="row justify-content-center">
                <div className="col-md-3 pe-1">
                    <div className="card">
                        <img
                            src={imageURL}
                            onError={({ currentTarget }) => {
                                currentTarget.onerror = null;
                                currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                            }}
                            className="card-img-top"
                            alt="Planet"
                        />
                    </div>
                </div>
                <div className="col-md-7 ps-1">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-dark">{myPlanet.name}</h2>
                            <ul className="list-unstyled">
                                <li><strong>Diámetro: </strong> {myPlanet.diameter}</li>
                                <li><strong>Período de rotación: </strong>{myPlanet.rotation_period}</li>
                                <li><strong>Período orbital: </strong>{myPlanet.orbital_period}</li>
                                <li><strong>Gravedad: </strong> {myPlanet.gravity}</li>
                                <li><strong>Población: </strong>{myPlanet.population}</li>
                                <li><strong>Clima: </strong>{myPlanet.climate}</li>
                                <li><strong>Terreno: </strong>{myPlanet.terrain}</li>
                                <li><strong>Aguas superficiales: </strong>{myPlanet.surface_water}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecificPlanet;
