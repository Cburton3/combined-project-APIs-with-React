import {Miembro} from './model'

export const getMiembroById = (id: string): Promise<Miembro> => {
    return fetch (`https://api.github.com/user/${id}`).then((response) => response.json()
);
};