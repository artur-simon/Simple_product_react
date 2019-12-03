import React from 'react'

const Form = () => {
  return (
    <section id="newsletter">
      <h2>Compartilhe a novidade</h2>
      <p>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </p>
      <form>
        <div className="inputContainer">
          <div className="inputBox">
            <label id="name">Nome do seu amigo:</label>
            <input className="inputField" type="text" id="name" required />
          </div>

          <div className="inputBox">
            <label id="email">Email:</label>
            <input className="inputField" type="text" id="email" required />
          </div>
        </div>

        <input type="submit" value="Enviar agora" />
      </form>
    </section>
  )
}

export default Form
