import {Personaje} from './model';

export const getCharacterById = (id: string): Promise<Personaje> => {
    return fetch (`http://localhost:3000/personajes/${id}`).then((response) => response.json()
);
};


