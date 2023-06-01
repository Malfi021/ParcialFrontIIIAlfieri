import React, { useState } from 'react'

const Form = () => {
    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [profesion,setProfesion] = useState("");
    const [color,setColor] = useState("");
    
    const handlerEnviar=(event)=>{
        event.preventDefault();
        if(nombre.length <=3 || nombre.includes(" ") || apellido.length <=5) {
            alert("Por favor chequea que la información sea correcta")
        } 
        return
    }

    return (
        <>
    <form className='form1' onSubmit={handlerEnviar}>
        <div>
        <label htmlFor= 'name'>
            Nombre: {" "}
        </label>
        <input id='name' 
        type= 'text'
        placeholder='Escriba su nombre'
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        />
        </div>
        <div>
        <label htmlFor= 'apellido'>
            Apellido: {" "}
        </label>
        <input id='apellido'
        type= 'text'
        placeholder='Escriba su apellido'
        value={apellido}
        onChange={e => setApellido(e.target.value)}
        />
        </div>
        <div>
        <label htmlFor= 'profesion'>
            Profesion: {" "}
        </label>
        <input id='profesion'
        type= 'text'
        placeholder='Escriba su profesion actual'
        value={profesion}
        onChange={e => setProfesion(e.target.value)}
        />
        </div>
        <div>
        <label htmlFor= 'color'>
            Color: {" "}
        </label>
        <input id='color'
        type= 'text'
        placeholder='Escriba su color favorito'
        value={color}
        onChange={e => setColor(e.target.value)}
        />
        </div>
        <button type='submit'>Enviar</button>
    </form>
    </>
    )
}
export default Form