import React from "react";
import { Personaje } from "./modelo";
import { obtenerPersonajes } from "./personajes.api";
import { CharacterRow } from "./character-row";

// const datosMock: Personaje[] = [
//   {
//     id: "2",
//     nombre: "Filemón",
//     apodo: "Filemón",
//     especialidad: "Ingeniería improvisada",
//     habilidades: ["Inventor", "Construcción rápida", "Cálculos mentales"],
//     amigo: "Mortadelo",
//     imagen: "filemon.webp"
//   },
//   {
//     id: "3",
//     nombre: "Ofelia",
//     apodo: "Ofelia",
//     especialidad: "Inteligencia",
//     habilidades: ["Investigación", "Hacker", "Descifrado de códigos"],
//     amigo: "Rompetechos",
//     imagen: "ofelia.webp"
//   }
// ];

export const GridPersonajes = () => {
  const [personajes, setPersonajes] = React.useState<Personaje[]>([]); //the ([]) is the initial state being passed into React.useState son in this case an empty array.
  //also useful cos if you makea fn with map, on an empy array just returns an empty array so no errors. we put (datosMock) for testing

  React.useEffect(() => {
    //re used to acces things outside of fx components
    // fetch('http://localhost:3000/personajes')
    // .then((response) => response.json())
    obtenerPersonajes().then((personajes) => setPersonajes(personajes));
  }, []);

  return (
    //so first returns these 3 and then the result of the map
    <div className="personaje-container">
      <span className="header">Avatar</span>
      <span className="header">Nombre</span>
      <span className="header">Especialidad</span>
      {personajes.map((personaje) => (
        <CharacterRow key={personaje.id} characterData={personaje}></CharacterRow>
        //<div key={personaje.id}>{personaje.nombre}</div>
        // <React.Fragment key={personaje.id}>
        //   <img src={`http://localhost:3000/${personaje.imagen}`} />
        //   <span>{personaje.nombre}</span>
        //   <span>{personaje.especialidad}</span>
        // </React.Fragment>
      ))}
    </div> //this doesnt work as <>...</> is only for wrapping multiple elements without creating an extra <div> (a "React fragment"). key elements must be on proper elements
    //CONC when you want to use attributes and such use a div. <> empty just fro wrapping

    // <div className="personaje-container">
    // {/* //   <span className="Name">Name</span> */}
    //   {/* <span className=""></span> */}
    //   {personajes.map((personaje) => (
    //     <CharacterRow
    //       key={personaje.id}
    //       characterData={personaje}
    //     ></CharacterRow>

    //     // <>
    //     //     {/* <img src={personaje.imagen}/>
    //     //     <span>{personaje.nombre}</span>
    //     //     <span>{personaje.id}</span> */}
    //     // </>
    //   ))}
    //  </div>
  );
};
