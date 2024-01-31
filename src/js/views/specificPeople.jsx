import { Context } from "../store/appContext";
import React, {useContext, useState, useEffect}  from "react";
import { useParams } from "react-router-dom";


export const specificPeople = (props) => {
     const {store, actions} = useContext(Context)
       const [myPeople, setMyPeople] = useState({})

    const params = useParams();

       useEffect(()=>{
           fetch("https://www.swapi.tech/api/people/" + params.uid)
           .then(response => response.json())
           .then((data) => setMyPeople(data.result.properties))
        },[])

    return(
        <>  
            <div className="card mx-1" key={props.url}>
                <h1 className="text-dark">{myPeople.name}</h1>
                <ul>
                    <li><strong>Name: </strong> {myPeople.name}</li>
                    <li><strong>Birth Date: </strong>{myPeople.birth_year}</li>
                    <li><strong>Eye Color: </strong>{myPeople.eye_color}</li>
                    <li><strong>Films: </strong> {myPeople.films}</li>
                    <li><strong>Gender: </strong>{myPeople.gender}</li>
                    <li><strong>Hair Color:  </strong>{myPeople.hair_color}</li>
                </ul>
            </div>
        </>
    )
};

 export default specificPeople;