import React, { useState } from 'react'

const ButtonLink = ({ text = '', url = '' }) => {
  const [buttonText, setButtonText] = useState(text)

  return (
    <a href={url}>
      <button className="ButtonLink">{buttonText}</button>
    </a>
  )
}

export default ButtonLink
