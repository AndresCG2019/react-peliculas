import FormularioCines from "./FormularioCines";

export default function CrearCines() {
    return(
        <>
            <h3>crear cines</h3>
            <FormularioCines modelo={{nombre: ""}} onSubmit={valores => console.log(valores)}></FormularioCines>
        </>
    );
}