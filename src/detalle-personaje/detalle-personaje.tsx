import React from "react";
import { useParams } from "react-router-dom";
import { Personaje, createEmptyCharacter } from "./model";
import { getCharacterById } from "./personaje-api";

export const PersonajeDetalle: React.FC = () => {
    const {id} = useParams<{id: string}>();

    const [personaje, setPersonaje] = React.useState<Personaje>(createEmptyCharacter());

    React.useEffect(() => {
        if(id) {
            getCharacterById(id).then(setPersonaje) 
        }
    }, []);

    return (
        <div className="contenedor-detalle">
            <h2>Detalle de Personaje</h2>
            <img src={`http://localhost:3000/${personaje.imagen}`}/>
            {/*issue here is that the imagen is on an api on you computer and can onlybe accessed on the port its on. If it were a url pesonaje.imagen would work */}
            <p>{personaje.nombre}</p>
            <p>{personaje.especialidad}</p>
        </div>
    );
};