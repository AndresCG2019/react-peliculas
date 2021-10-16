import FormularioCines from "./FormularioCines";

export default function EditarCines() {
    return(
        <>
            <h3>editar cines</h3>
            <FormularioCines modelo={{nombre: "Cinemex", latitud: 24.019744750932905, longitud: -104.6455521583721}} 
            onSubmit={valores => console.log(valores)}
            ></FormularioCines>
        </>
    );
}