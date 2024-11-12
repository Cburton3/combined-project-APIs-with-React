import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {GridMiembros} from './grid-miembros'
import { MiembroDetalle } from "./detalle-miembro/detalle-miembro";
import { Home } from './home/home'
import { GridPersonajes } from "./grid-mortadelo";
import { PersonajeDetalle } from "./detalle-personaje/detalle-personaje";
//BrowserRouter is the main component that enables routing in a React app
//as Router renames BrowserRouter to Router
//Routes is a component that wraps multiple route definitions
//Route is used to define individual routes.  Each Route specifies a path (the URL) and an element (the component to render when the path is matched)
//so it renders new info, when the user gets there
//CONC router wraps, routes contains multiple 'route's, route defines a specific path and which components renders for that path
// This setup allows you to navigate between different views in a single-page application without reloading the entire page (and loosing data), providing a seamless user experience

export const Rutas : React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/miembros" element={<GridMiembros></GridMiembros>}></Route>
                <Route path="/detalle-miembro/:id" element={<MiembroDetalle/>}></Route>
                <Route path="/personajes" element={<GridPersonajes></GridPersonajes>}></Route>
                <Route path="/detalle-personaje/:id" element={<PersonajeDetalle></PersonajeDetalle>}></Route>
 
            </Routes>
        </Router>
    )
}

//how to know when to use {} or <>
//{} are used for embedding JavaScript expressions within JSX. use when you want to include a var, a fx rsult eg {variableName} or {someFunction()} or {1+2} {user.name.toUpperCase()}
//<> used to include React components. Each component is essentially a function or class that returns JSX
//eg used for props <MyComponent prop1="value" />
/*
const Greeting = () => <h1>Hello!</h1>;
return <Greeting />; this woulnt work for {Greeting} as {} only used evaluate JS expressions while <> is to render react components. ie you are not rendering but just expressing it as a JS var which will not produce a JSX output. 
Render here means taking a React component and turning it into actual DOM elements (like HTML) that the browser can understand and display on the page.
*/

//add link in grid personaje to load the indiv character