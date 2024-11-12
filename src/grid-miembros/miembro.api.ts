import {Miembro} from './modelo';

export const obtenerMiembros =(): Promise<Miembro[]> =>
    fetch('https://api.github.com/orgs/lemoncode/members').then((response) => response.json()
); //re fetch returns a promice (response obj)
//.then runs code when previous promise resolves. it takes a callback function as an argument which is called with the resolved value  (resonpse obj) 
//.json() method on resposne obj used to parse the json data returning another promise that resolves with the parsed JSobj