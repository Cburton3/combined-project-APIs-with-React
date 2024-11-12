import React from "react";
import { useParams } from "react-router-dom";
import { creaMiembroVacio, Miembro } from "./model";
import { getMiembroById } from "./member-api";

export const MiembroDetalle: React.FC = () => {
    const {id} = useParams<{id: string}>();// expects a generic type that describes the shape of the parameters object rather than a single primitive type like string
    // When you use useParams<{ id: string }>(), you're specifying that the parameter object will have a key id of type string
    //useParams<string>() implies that useParams would return a string directly
    //CON dont work cos useParams returns an obj not a simple primitive
    const [miembro, setMiembro] = React.useState<Miembro>(creaMiembroVacio());

    React.useEffect(() => {//this will only run when id changes and will run once
        if(id) {//2) checks if truthy
            getMiembroById(id).then(setMiembro) //cuando este el id, llama a setMiembro.
            //.then re the then if for promises, you need it for promise resolution
        }
    }, []);//1) empty so will only run once. after component mounts and will not run again. we put dependencies her, those that should trigger the effect. nromally you'd put id here inside [] so that it can keep updating but as we are chagning page we dont need it. 

    return (
        <div className="contenedor-detalle">
            <h2>Detalle de Miembro</h2>
            <img src={miembro.avatar_url}/>
            <p>{miembro.login}</p>
            <p>{miembro.blog}</p>
            {/* <h1>Detalle de Miembro: {id}</h1>
            <h2>El login es: {miembro.login}</h2> */}
        </div>
    );
};

//enlace to naigvate to list of github
//enlace for mortadelo and filemon
//te toca home create a home page and link those 2