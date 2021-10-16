import { Form, Formik, FormikHelpers } from "formik";
import { cineCreacionDTO } from "./cines.model";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import MapaFormulario from "../utils/MapaFormulario";
import { coordenadasDTO } from "../utils/coordenadas.model";

export default function FormularioCines (props: formularioCinesProps) {

    function transformarCoordenada(): coordenadasDTO[] | undefined {
        if (props.modelo.latitud && props.modelo.longitud) {
            const respuesta : coordenadasDTO = {lat: props.modelo.latitud, lng: props.modelo.longitud}
            console.log("bien");
            console.log([respuesta]);
            return [respuesta];
        }
        console.log("mal");
        return undefined;
    }

    return (
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required("este campo es obligatorio").primeraLetraMayuscula()
            })}>

            {(formikProps) => (
                <Form >
                    <FormGroupText label="Nombre" campo="nombre"/>

                    <div style={{marginBottom: '1rem'}}>
                        <MapaFormulario campoLat="latitud" campoLng="longitud"
                            coordenadas={transformarCoordenada()}/>
                    </div>
                    <Button disabled={formikProps.isSubmitting} type="submit">Salvar</Button>
                    <Link className="btn btn-secondary" to="/cines">Cancelar</Link>
                </Form>
            )}

        </Formik>
    );
}

interface formularioCinesProps {
    modelo: cineCreacionDTO;
    onSubmit (valores: cineCreacionDTO, acciones: FormikHelpers<cineCreacionDTO>): void
}