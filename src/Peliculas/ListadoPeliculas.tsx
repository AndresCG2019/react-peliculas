import PeliculaIndividual from "./PeliculaIndividual";
import { pelicula } from "./peliculas.model";
import css from './ListadoPeliculas.module.css'
import ListadoGenerico from "../utils/ListadoGenerico";

export default function ListadoPeliculas(props: ListadoPeliculasProps ) {
      
    return (
        <ListadoGenerico listado={props.peliculas}>
        <div className={css.div}>
            {props.peliculas?.map(pelicula => 
                <PeliculaIndividual pelicula={pelicula} 
                                    key={pelicula.id}
                />)}
        </div>
    </ListadoGenerico>   
    );
}
interface ListadoPeliculasProps {
    peliculas?: pelicula[];
}