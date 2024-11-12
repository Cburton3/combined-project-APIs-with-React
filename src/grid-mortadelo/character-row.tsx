import React from "react";
import { Personaje } from "./modelo";
import { Link } from "react-router-dom";

interface Props {
  characterData: Personaje;
}

export const CharacterRow: React.FC<Props> = (props) => {
  const { characterData } = props;
  console.log("character row");

  return (//instead of <> could have brought the reactFragment 
    <>
      <img src={`http://localhost:3000/${characterData.imagen}`} />
      <Link to={`/detalle-personaje/${characterData.id}`}>{characterData.nombre}</Link>
      <span>{characterData.especialidad}</span>
    </>
  );
};
