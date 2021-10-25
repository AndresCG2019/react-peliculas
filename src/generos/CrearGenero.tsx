import axios from "axios";
import FormularioGeneros from "./FormularioGeneros";
import { generoCreacionDTO } from "./generos.model";
import { urlGeneros } from "../utils/endpoints";
import { useHistory } from "react-router";
import { useState } from "react";
import MostrarErrores from "../utils/MostrarErrores";

export default function CrearGenero() {
    const history = useHistory();
    const [errores, setErrores] = useState<string[]>([])

    async function crear(genero: generoCreacionDTO){
        try {
            await axios.post(urlGeneros, genero);
            history.push("/generos");
        } catch (error: any) {
            console.error(error);
            setErrores(error.response.data);
        }
    }

    return (
        <>
            <h3>Crear Género</h3>

            <MostrarErrores errores={errores} />

            <FormularioGeneros modelo={{nombre: ''}} 
                 onSubmit={async valores => {
                    await crear(valores);
                 }}
            />
        </>
    )
}