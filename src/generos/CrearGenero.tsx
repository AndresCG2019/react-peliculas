import { Field, Form, Formik } from "formik";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Button from "../utils/Button";

export default function CrearGenero() {

    const history = useHistory();
    return(
        <>
            <h3>crear generos</h3>

            <Formik initialValues={{
                nombre: ''
            }}
                onSubmit={values => {
                    console.log(values);
                }}>

            <Form>
                <div className="form-group">
                    <label htmlFor='nombre'>Nombre</label>
                    <Field name="nombre" className="form-control"></Field>
                </div>

                <Button type="submit">Salvar</Button>
                <Link className="btn btn-secondary" to="/generos">Cancelar</Link>
            </Form>
            
            </Formik>
            
        </>
    );
}