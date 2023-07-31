import React from 'react'
import './button.css' 

export default function Button( {text, type}) {



  return (
    <button className={type} onClick={ ()=> alert('hola')}>{text}</button>
  )
}
