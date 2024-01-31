import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import React, { useContext } from "react";


export const Navbar = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">
                    <img src="https://cdn.discordapp.com/attachments/1163524764309147730/1202294564715761756/starwars.png?ex=65ccef11&is=65ba7a11&hm=ebb4130784a8ef6bb07ebe385377f018456cc4875fe046788f61be95f258c615&" width="60" height="60" alt="Icono" />
                </a>
                <div className="ms-auto">
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Favoritos ( {store.myFavs.length} )
                    </button>
                </div>
            </nav>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Favoritos</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul>
                                {store.myFavs.map((item) => <li key={item.uid}>{item}</li>)}
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


