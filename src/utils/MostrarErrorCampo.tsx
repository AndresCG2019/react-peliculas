export default function MostrarErrorCampo(props: mostrarErrorCmpoProps) {
    return (
        <div className="text-danger">{props.mensaje}</div>
    );
}

interface mostrarErrorCmpoProps {
    mensaje: string;
}