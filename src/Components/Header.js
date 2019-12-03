import React from 'react'
import LinkBar from './LinkBar'

const Header = () => {
  return (
    <header>
      <div>
        <p className="header1">uma seleção de produtos</p>
        <p className="header2">especial para você</p>
        <h3>
          Todos os produtos desta lista foram selecionados a partir da sua
          navegação. Aproveite!
        </h3>
      </div>
      <LinkBar></LinkBar>
    </header>
  )
}

export default Header
