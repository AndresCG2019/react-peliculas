import { useHistory } from "react-router";
import Button from "../utils/Button";

export default function CrearGenero() {

    const history = useHistory();
    return(
        <>
            <h3>crear generos</h3>
            <Button onClick={() => history.push("/generos")}>Salvar</Button>
        </>
    );
}