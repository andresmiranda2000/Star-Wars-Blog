import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const People = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [peopleData, setPeopleData] = useState({});

    useEffect(() => {
        fetch(`https://swapi.dev/api/people`)
            .then(response => response.json())
            .then((data) => setPeopleData(data.result.properties));
    }, [params.uid]);

    var imageURL = `https://starwars-visualguide.com/assets/img/people`;

    return (
        <div className="card mx-2 my-3" style={{ width: '18rem' }}>
            <img
                src={imageURL}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                }}
                className="card-img-top"
                alt="People"
                style={{ width: '100%', maxHeight: '200px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{peopleData.name}</h5>
                <p className="card-text"><strong>Género: </strong>{peopleData.gender}</p>
                <p className="card-text"><strong>Año de nacimiento: </strong> {peopleData.birth_year}</p>
                <div className="mt-auto">
                    <Link to={`/specificPeople/${params.uid}`} className="btn btn-outline-primary me-2 text-dark">
                        Más información
                    </Link>
                    <button
                        onClick={() => actions.addToFavs(peopleData.name)}
                        className={`btn ${actions.corazonColor(peopleData.name) ? 'btn-primary' : 'btn-outline-primary'}`}>
                        {actions.corazonColor(peopleData.name) ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.920 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.920 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                            </svg>
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default People;
