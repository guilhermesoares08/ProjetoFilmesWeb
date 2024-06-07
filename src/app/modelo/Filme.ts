import { Ator } from "./Ator";

export interface Filme {
    id: number;
    titulo: string;
    genero: string;
    atorId: number;
    nota: number;
    resenha: string;
    ator: Ator;
}
