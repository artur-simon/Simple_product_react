import React from 'react'
import ButtonLink from './ButtonLink'

const links = [
  { text: 'Conheça a Linx', url: 'https://www.linx.com.br' },
  { text: 'Ajude o algorítimo', url: '#' },
  { text: 'Seus produtos', url: '#products' },
  { text: 'Compartilhe', url: '#newsletter' }
]

const LinkBar = () => (
  <nav>
    {links.map(({ text, url }) => (
      <ButtonLink key={text} text={text} url={url} />
    ))}
  </nav>
)

export default LinkBar
