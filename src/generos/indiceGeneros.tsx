import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import { urlGeneros } from "../utils/endpoints";
import ListadoGenerico from "../utils/ListadoGenerico";
import { generoDTO } from "./generos.model";

export default function IndiceGeneros() {

    const [generos, setGeneros] = useState<generoDTO[]>();
    
    useEffect(() => {
       cargarDatos();
    }, [])

    function cargarDatos(){
        axios.get(urlGeneros)
        .then((respuesta: AxiosResponse<generoDTO[]>) => {
            console.log(respuesta)
            setGeneros(respuesta.data);
        })
    }

    async function borrar(id: number){
      try {
          await axios.delete(`${urlGeneros}/${id}`);
          cargarDatos();
      } catch (error: any) {
          console.log(error.response.data);
      }  
    }
    return (
        <>
            <h3>Géneros</h3>
            <Link className="btn btn-primary" to="generos/crear">Crear Género</Link>
            
            <ListadoGenerico listado={generos}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generos?.map(genero => 

                            <tr key={genero.id}>
                                 <td>
                                <Link className="btn btn-success" to={`/generos/editar/${genero.id}`}>Editar</Link>
                                <Button className="btn btn-danger" onClick={() => borrar(genero.id)}>Borrar</Button>
                            </td>

                            <td>{genero.nombre}</td>
                            
                            </tr>)}
                           
                    </tbody>
                </table>
            </ListadoGenerico>
        </>

    )
}