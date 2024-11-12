import React from "react";
import { Miembro } from "./modelo";
import { MiembroFila } from "./miembro-fila";
import { obtenerMiembros } from "./miembro.api";

export const GridMiembros = () => {
  const [miembros, setMiembros] = React.useState<Miembro[]>([]);

  React.useEffect(() => {
    obtenerMiembros().then(miembros => setMiembros(miembros));
    // fetch(`https://api.github.com/orgs/lemoncode/members`)
    //   .then((response) => response.json())
    //   .then((json) => setMiembros(json))
    //   .catch((error) => console.log(error));
  }, []);
  //useEffect lets youperform side effects in fx components such as changing DOM
  //the empty array [] means  hook will only run once, when the component mounts (first appears on the screen)
//te toca es el siguente video
  return (
    <div className="user-list-container">
      <span className="header">Avatar</span>
      <span className="header">Id</span>
      <span className="header">Nombre</span>
      {miembros.map((miembro) => (
        <MiembroFila key={miembro.id} userData={miembro}></MiembroFila>
      ))}
    </div>
  );
};
