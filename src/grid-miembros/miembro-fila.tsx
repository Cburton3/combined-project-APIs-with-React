import React from "react";
import { Miembro } from "./modelo";
import { Link } from "react-router-dom";

interface Props {
    userData: Miembro;
}

export const MiembroFila : React.FC<Props> = (props) => {
    const {userData} = props;
    //Destructuring allows you to "pick out" specific properties from an object. It takes the miembro property from the props object and creates a new variable called miembro
  return (
    <>
          <img src={userData.avatar_url} />
          <Link to={`/detalle-miembro/${userData.id}`}>{userData.id}</Link>
          <span>{userData.login}</span>
        </>
  )  
}