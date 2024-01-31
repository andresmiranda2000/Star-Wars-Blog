import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/planets.css"; 

export const Planets = (props) => {
    const { store, actions } = useContext(Context);
    const params = useParams(props.uid);

    const [planetData, setPlanetData] = useState({});

    useEffect(() => {
        fetch("https://www.swapi.tech/api/planets/" + props.uid)
            .then(response => response.json())
            .then((data) => setPlanetData(data.result.properties));
    }, []);

    var imageURL = "https://starwars-visualguide.com/assets/img/planets/" + props.uid + ".jpg";

    return (
        <div className="card mx-1" key={props.url} style={{ overflow: 'hidden' }}>
            <img
                src={imageURL}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                }}
                className="card-img-top"
                alt="Planet"
                style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
            />
            <div className="card-body" id={props.uid}>
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text"><strong>Terreno: </strong>{planetData.terrain}</p>
                <p className="card-text"><strong>Población: </strong> {planetData.population}</p>
                <Link to={"/specificPlanet/" + props.uid}>
                    <button className="btn btn-outline-primary me-2 text-dark">Más información</button>
                </Link>
                <button onClick={() => actions.addToFavs(props.name)} className={`btn ${actions.corazonColor(props.name) ? 'btn-primary' : 'btn-outline-primary'}`}>
                    {actions.corazonColor(props.name) ?
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-heart" viewBox="0 0 16 16">
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                        </svg>
                    }
                </button>
            </div>
        </div>
    );
};

export default Planets;
