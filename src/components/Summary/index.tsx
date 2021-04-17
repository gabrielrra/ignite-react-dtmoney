import React from 'react'
import { Container } from './styles'

import entradaImg from '../../assets/entradas.svg'
import saidaImg from '../../assets/saidas.svg'
import totalImg from '../../assets/cifrao_no_bg.svg'

export function Summary() {
  return (
    <Container >
      <div>
        <header>
          <p>Entradas</p>
          <img src={entradaImg} alt="" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={saidaImg} alt="" />
        </header>
        <strong>- R$ 500,00</strong>
      </div>
      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  )
}
