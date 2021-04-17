import React from 'react'
import { Container } from './styles'

import entradaImg from '../../assets/entradas.svg'
import saidaImg from '../../assets/saidas.svg'

export function Summary() {
  return (
    <Container >
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradaImg} alt="" />
          <strong>R$ 500,00</strong>
        </header>
      </div>
    </Container>
  )
}
