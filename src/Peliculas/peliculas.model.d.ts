import { actorDTO } from './../actores/actores.model.d';
import { cineDTO } from './../cines/cines.model.d';
import { generoDTO } from './../generos/generos.model.d';


export interface peliculaDTO{
    id: number;
    titulo: string;
    poster: string;
    enCines: boolean;
    trailer: string;
    resumen?: string;
    fechaLanzamiento: Date;
    cines: cineDTO[];
    generos: generoDTO[];
    actores: actorPeliculaDTO[];
}

export interface peliculaCreacionDTO {
    titulo: string;
    enCines: boolean;
    trailer: string;
    fechaLanzamiento?: Date;
    poster?: File;
    resumen?: string;
    posterURL?: string;
    generosIds?: number[];
    cinesIds?: number[];
    actores?: actorPeliculaDTO[];
}

export interface landingPageDTO {
    enCartelera?: peliculaDTO[];
    proximosEstrenos?: peliculaDTO[];
}

export interface peliculasPostGetDTO {
    generos: generoDTO[];
    cines: cineDTO[];
}