import FormularioCines from "./FormularioCines";

export default function EditarCines() {
    return(
        <>
            <h3>editar cines</h3>
            <FormularioCines modelo={{nombre: "Cinemex"}} onSubmit={valores => console.log(valores)}></FormularioCines>
        </>
    );
}