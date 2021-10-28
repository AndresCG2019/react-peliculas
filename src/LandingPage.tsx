import { useState, useEffect } from "react";
import { landingPageDTO } from './peliculas/peliculas.model'
import ListadoPeliculas from './peliculas/ListadoPeliculas'
import axios, { AxiosResponse } from "axios";
import { urlPeliculas } from "./utils/endpoints";
import alertaContext from "./utils/AlertaContext";
import Autorizado from "./auth/Autorizado";

export default function LandingPage() {

    const [peliculas, setPeliculas] = useState<landingPageDTO>({})

    useEffect(() => {
       cargarDatos();
    }, [])

    function cargarDatos(){
        axios.get(urlPeliculas)
       .then((respuesta: AxiosResponse<landingPageDTO>) => {
        setPeliculas(respuesta.data);
       })
    }

    return (
        <>
            <Autorizado autorizado={<>estas autorizdo</>} noAutorizado={<>no estas autorizado</>}></Autorizado>

            <alertaContext.Provider value={() => cargarDatos()}>
                <h3>En Cartelera</h3>
                <ListadoPeliculas peliculas={peliculas.enCines} />

                <h3>Próximos Estrenos</h3>
                <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
            </alertaContext.Provider>
        </>
    )
}