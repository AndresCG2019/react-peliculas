import { useState, useEffect } from "react";
import { landingPageDTO } from './peliculas/peliculas.model'
import ListadoPeliculas from './peliculas/ListadoPeliculas'
import axios, { AxiosResponse } from "axios";
import { urlPeliculas } from "./utils/endpoints";

export default function LandingPage() {

    const [peliculas, setPeliculas] = useState<landingPageDTO>({})

    useEffect(() => {
       axios.get(urlPeliculas)
       .then((respuesta: AxiosResponse<landingPageDTO>) => {
        setPeliculas(respuesta.data);
       })
    }, [])

    return (
        <>
            <h3>En Cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCines} />

            <h3>Próximos Estrenos</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
        </>
    )
}