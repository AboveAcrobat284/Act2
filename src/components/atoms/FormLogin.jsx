import { useState } from "react";
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function FormLogin() {
  const navigate = useNavigate()
  const name = useRef()
  const username = useRef()
  const password = useRef()

  const form = useRef()
  const endpoint = 'http://34.225.239.102/api/iniciar'

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
        usuario: newForm.get('usuario'),
        contrasenia: newForm.get('contrasenia')
      })
    }

    fetch(endpoint, options)
      .then(response => response.json())
      .then(data => {
        if (data.status === true) {
          alert("Bienvenido Programador Senior")
          navigate('/registerbus')
        }
        else
          alert("¿De quién eres?")
          alert(JSON.stringify(data))
      })
  }

  return (
    <div class="vid-container">
      <div class="inner-container">
        <div class="box">
          <form ref={form}>
            <h1>Login</h1>
            <input type="text" name="usuario" placeholder="Username" />
            <input type="password" name="contrasenia" placeholder="Password" />
            <button onClick={handlerClick}>Log in</button>
            <p>Not a member? <Link to="/register"><span>Sign Up</span></Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormLogin;