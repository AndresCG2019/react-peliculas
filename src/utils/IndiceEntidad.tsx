import axios, { AxiosResponse } from "axios";
import { useState, useEffect, ReactElement } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import confirmar from "./Confirmar";
import ListadoGenerico from "./ListadoGenerico";

export default function IndiceEntidad<T>(props: indiceEntidadProps<T>) {

    const [entidades, setEntidades] = useState<T[]>();

    useEffect(() => {
        cargarDatos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function cargarDatos() {
        axios.get(props.url)
            .then((respuesta: AxiosResponse<T[]>) => {
                setEntidades(respuesta.data);
            })
    }

    async function borrar(id: number) {
        try {
            await axios.delete(`${props.url}/${id}`)
            cargarDatos();
        }
        catch (error: any) {
            console.log(error.response.data);
        }
    }

    const botones = (urlEditar: string, id: number) => <>
        <Link className="btn btn-success" to={urlEditar}>Editar</Link>
        <Button
            onClick={() => confirmar(() => borrar(id))}
            className="btn btn-danger">Borrar</Button>
    </>

    return (
        <>
            <h3>{props.titulo}</h3>
            <Link className="btn btn-primary" to={props.urlCrear}>
                Crear {props.nombreEntidad}
            </Link>

            <ListadoGenerico listado={entidades}>
                <table className="table table-striped">
                    {props.children(entidades!, botones)}
                </table>
            </ListadoGenerico>
        </>
    )
}

interface indiceEntidadProps<T> {
    url: string;
    urlCrear: string;
    children(entidades: T[],
        botones: (urlEditar: string, id: number) => ReactElement): ReactElement;
    titulo: string;
    nombreEntidad: string;
}