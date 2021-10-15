import FormulariGeneros from "./FormularioGeneros";

export default function CrearGenero() {

    return(
        <>
            <h3>crear generos</h3>

            <FormulariGeneros modelo={{nombre: ''}}
                onSubmit={async valores => {
                    await new Promise(r => setTimeout(r,3000))
                    console.log(valores);
            }}/>
        </>
    );
}