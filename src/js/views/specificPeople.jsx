import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SpecificPeople = () => {
    const { store, actions } = useContext(Context);
    const [myPeople, setMyPeople] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch("https://www.swapi.tech/api/people/" + params.uid)
            .then(response => response.json())
            .then((data) => setMyPeople(data.result.properties));
    }, []);

    const imageURL = `https://starwars-visualguide.com/assets/img/people/${params.uid}.jpg`;

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
                            alt="People"
                        />
                    </div>
                </div>
                <div className="col-md-7 ps-1">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-dark">{myPeople.name}</h2>
                            <ul className="list-unstyled">
                                <li><strong>Género: </strong> {myPeople.gender}</li>
                                <li><strong>Nacimiento: </strong>{myPeople.birth_year}</li>
                                <li><strong>Color de Ojos: </strong>{myPeople.eye_color}</li>
                                <li><strong>Películas en las que aparece: </strong>{myPeople.films}</li>
                                <li><strong>Color de Cabello: </strong>{myPeople.hair_color}</li>
                                <li><strong>Altura: </strong>{myPeople.height}</li>
                                <li><strong>Hogar: </strong>{myPeople.homeworld}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecificPeople;