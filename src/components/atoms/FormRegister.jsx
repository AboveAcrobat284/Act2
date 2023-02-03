import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function FormRegister() {
    const navigate = useNavigate()
    const name = useRef()
    const username = useRef()
    const password = useRef()

    const form = useRef()
    const endpoint = 'http://34.225.239.102/api/registrar/usuario'

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
                nombre: newForm.get('nombre'),
                usuario: newForm.get('usuario'),
                correo: newForm.get('correo'),
                contrasenia: newForm.get('contrasenia')
            })
        }

        fetch(endpoint, options)
            .then(response => response.json())
            .then(data => {
                if(data.status === true)
                navigate('/')
                alert(JSON.stringify(data))
            })
    }

    return (
        <div class="vid-container">
            <div class="inner-containertwo">
                <div class="box">
                    <form ref={form}>
                        <h1>Register</h1>
                        <input type="text" placeholder='Name' name="nombre" />
                        <input type="text" placeholder='Username' name="usuario" />
                        <input type="text" placeholder='Mail' name="correo" />
                        <input type="password" placeholder='Password' name='contrasenia' />
                        <button type="button" onClick={handlerClick}>Register</button>
                        <p>Already user? <Link to="/"><span>Log in</span></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormRegister;