export interface Miembro {
    avatar_url: string;
    id: string;
    login: string;
    blog: string;
    }

    export const creaMiembroVacio = (): Miembro => ({
    avatar_url: '',
    id: '',
    login: '',
    blog: '',
    });