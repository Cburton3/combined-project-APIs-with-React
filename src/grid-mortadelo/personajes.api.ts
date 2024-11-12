import {Personaje} from './modelo'

export const obtenerPersonajes = (): Promise<Personaje[]> =>
    fetch('http://localhost:3000/personajes').then((response) => response.json()
);