import { useState } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";

export default function Autorizado(props: autorizadoProps){
    const [estaAutorizado, setEstaAutorizado] = useState(false);

    return (
        <>
            {estaAutorizado ? props.autorizado: props.noAutorizado}
        </>
    );
}

interface autorizadoProps{
    autorizado: ReactElement;
    noAutorizado?: ReactElement;
    role?: string;
}