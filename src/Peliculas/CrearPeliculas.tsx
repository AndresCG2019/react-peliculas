import FormularioPeliculas from "./FormularioPeliculas";

export default function CrearPeliculas() {
    return(
        <>
            <h3>crear peliculas</h3>
            <FormularioPeliculas
                modelo={{titulo: '', enCines: true, trailer: ''}}
                onSubmit={valores => console.log(valores)}/>
        </>
    );
}