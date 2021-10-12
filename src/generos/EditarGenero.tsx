import { useParams } from "react-router";

export default function EditarGenero() {
    const {id}: any = useParams();
    return(
        <>
            <h3>editar genero</h3>
            <h4>el id es {id}</h4>
        </>

    );
}