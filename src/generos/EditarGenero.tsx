import FormulariGeneros from "./FormularioGeneros";

export default function EditarGenero() {
    //const {id}: any = useParams();
    return(
        <>
            <h3>editar genero</h3>
            <FormulariGeneros modelo={{nombre: 'Acción'}}
                onSubmit={async valores => {
                    await new Promise(r => setTimeout(r,3000))
                    console.log(valores);
            }}/>
        </>

    );
}