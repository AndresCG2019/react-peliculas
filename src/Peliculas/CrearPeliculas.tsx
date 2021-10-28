
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { cineDTO } from "../cines/cines.model";
import { generoDTO } from "../generos/generos.model";
import Cargando from "../utils/Cargando";
import { urlPeliculas } from "../utils/endpoints";
import { convertirPeliculaAFormData } from "../utils/formDataUtils";
import MostrarErrores from "../utils/MostrarErrores";
import FormularioPeliculas from "./FormularioPeliculas";
import { peliculaCreacionDTO, peliculasPostGetDTO } from "./peliculas.model";

export default function CrearPeliculas() {

    const [generosNoSeleccionados, setgenerosNoSeleccionados] = useState<generoDTO[]>([]);
    const [cinesNoSeleccionados, setCinesNoSeleccionados] = useState<cineDTO[]>([]);
    const [cargado, setcargado] = useState(false);
    const [errores, seterrores] = useState<string[]>([]);

    const history = useHistory();

    useEffect(() => {
        axios.get(`${urlPeliculas}/postget`)
        .then((respuesta: AxiosResponse<peliculasPostGetDTO>) => {
            setgenerosNoSeleccionados(respuesta.data.generos);
            setCinesNoSeleccionados(respuesta.data.cines);
            setcargado(true);
        })
    },[])

    async function crear(pelicula: peliculaCreacionDTO){
        try {
            const formData = convertirPeliculaAFormData(pelicula);

            await axios({
                method: "post",
                url: urlPeliculas,
                data: formData,
                headers: {"Content-Type": "multipart/form-data"}
            }).then((respuesta: AxiosResponse<number>) => {
                history.push(`/peliculas/${respuesta.data}`);
            });
        } catch (error: any) {
            seterrores(error.response.data);
        }
    }

    return (
        <>
            <h3>Crear Película</h3>

            <MostrarErrores errores={errores}/>
            {cargado ? <FormularioPeliculas
            actoresSeleccionados={[]}
            cinesNoSeleccionados={cinesNoSeleccionados}
            cinesSeleccionados={[]}
            generosNoSeleccionados={generosNoSeleccionados}
            generosSeleccionados={[]}
                modelo={{ titulo: '', enCines: false, trailer: '' }}
                onSubmit={async valores => crear(valores)}
            /> : <Cargando/>}
        </>
    )
}