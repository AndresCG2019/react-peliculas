import axios from "axios";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { urlCuentas } from "../utils/endpoints";
import MostrarErrores from "../utils/MostrarErrores";
import AutenticacionContext from "./AutenticacionContext";
import { credencialesUsuario, respuestaAutenticacion } from "./auth.model";
import FormularioAuth from "./FormularioAuth";
import { guardarTokenLocalStorage, obtenerClaims } from "./ManejadorJWT";

export default function Registro(){
    const [errores, seterrores] = useState<string[]>([]);
    const {actualizar} = useContext(AutenticacionContext);
    const history = useHistory();

    async function registrar(credenciales: credencialesUsuario){
        try {
            const respuesta = await axios.post<respuestaAutenticacion>(`${urlCuentas}/crear`, credenciales);
            console.log(respuesta.data);

            guardarTokenLocalStorage(respuesta.data);
            actualizar(obtenerClaims());
            history.push("/");

        } catch (error: any) {
            seterrores(error.response.data);
        }
    }

    return (
        <>
            <h3>Registro</h3>
            <MostrarErrores errores={errores}/>
            <FormularioAuth modelo={{email: '', password: ''}} onSubmit={async valores => await registrar(valores)}/>
        </>
    );
}