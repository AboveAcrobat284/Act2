import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function FormRegisterBus() {
    const navigate = useNavigate()
    const name = useRef()
    const username = useRef()
    const password = useRef()

    const form = useRef()
    const endpoint = 'http://34.225.239.102/api/autobus/register'

    const handlerClick = (e) => {
        e.preventDefault();
        //navigate("/home")
        const newForm = new FormData(form.current)
        //let newName = newForm.get('name')
        //alert(`Nombre: ${newForm.get('name')} \nUsername: ${newForm.get('username')}`)

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                clave: newForm.get('clave'),
                placa: newForm.get('placa'),
                numasientos: newForm.get('numasientos'),
                fecha: newForm.get('fecha'),
                tipo: newForm.get('tipo'),
                nombre: newForm.get('nombre'),
                licencia: newForm.get('licencia')
            })
        }

        fetch(endpoint, options)
            .then(response => response.json())
            .then(data => {
                alert(JSON.stringify(data))
            })
    }

    return (
        <div class="vid-container">
            <div class="inner-containertreeh">
                <div class="box">
                    <form ref={form}>
                        <h1>Register Bus</h1>
                        <input type="text" placeholder='Clave' name="clave" />
                        <input type="text" placeholder='Placa' name="placa" />
                        <input type="text" placeholder='Número de asientos' name="numasientos" />
                        <input type="date" name='fecha' />
                        <input type="text" placeholder='Tipo' name="tipo" />
                        <input type="text" placeholder='Nombre' name="nombre" />
                        <input type="text" placeholder='Licencia' name="licencia" />
                        <button type="button" onClick={handlerClick}>Register Bus</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormRegisterBus;