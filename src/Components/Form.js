import React from 'react'
import useForm from '../Hooks/useForm'

const Form = () => {
  
  const login = () => {
    console.log(JSON.stringify(values));
  };

  const { values, handleChange, handleSubmit } = useForm(login);

  return (
    <section id="newsletter">
      <h2>Compartilhe a novidade</h2>
      <p>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="inputContainer">
          <div className="inputBox">
            <label id="name">Nome do seu amigo:</label>
            <input className="inputField" type="text" id="name" onChange={handleChange} value={values.name} required />
          </div>

          <div className="inputBox">
            <label id="email">Email:</label>
            <input className="inputField" type="email" id="email" onChange={handleChange} value={values.email} required />
          </div>
        </div>

        <input type="submit" value="Enviar agora" />
      </form>
    </section>
  )
}

export default Form
