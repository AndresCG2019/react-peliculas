import { peliculaDTO } from "./peliculas.model";
import css from './PeliculaIndividual.module.css'
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import axios from "axios";
import { urlPeliculas } from "../utils/endpoints";
import { useContext } from "react";
import AlertaContext from "../utils/AlertaContext";
import confirmar from "../utils/Confirmar";

export default function PeliculaIndividual(props: peliculaIndividualProps){

    const construirLink = () => `/pelicula/${props.pelicula.id}`
    const alerta = useContext(AlertaContext);

    function borrarPelicula(){
        axios.delete(`${urlPeliculas}/${props.pelicula.id}`)
            .then(() => {
                alerta();
            })
    }

    return (
        <div className={css.div}>
            <a href={construirLink()}>
                <img src={props.pelicula.poster} alt="Poster" />
            </a>
            <p>
                <a href={construirLink()}>{props.pelicula.titulo}</a>
            </p>
            <div>
                <Link style={{marginRight: '1rem'}} className="btn btn-info"
                    to={`/peliculas/editar/${props.pelicula.id}`}>Editar</Link>
                <Button className="btn btn-danger" onClick={() => confirmar(() => borrarPelicula())} >Borrar</Button>
            </div>
        </div>
    )
}

interface peliculaIndividualProps{
    pelicula: peliculaDTO;
}