import { ErrorMessage, Field } from "formik";
import MostrarErrorCampo from "./MostrarErrorCampo";

export default function FormGroupText(props: formGroupTextProps) {
    return (
        <div className="form-group">
                    {props.label ? <label htmlFor={props.campo}>{props.label}</label> : null}
                    <Field name="nombre" className="form-control"></Field>
                    <ErrorMessage name ='nombre'>{mensaje => <MostrarErrorCampo mensaje={mensaje}></MostrarErrorCampo> }</ErrorMessage>
                </div>
    );
}

interface formGroupTextProps {
    campo: string;
    label?: string;
    placeholder?: string;
}