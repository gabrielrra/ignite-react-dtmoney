import { useState } from 'react'
import logo from '../../assets/logo.svg'
import { Container, Content } from './styles'
import Modal from 'react-modal'

interface HeaderProps {
  openTransactionModal: () => void;
}

export function Header({ openTransactionModal }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logo} alt="Money Me" />
        <button type="button" onClick={openTransactionModal}>Nova Transação</button>
      </Content>
    </Container>
  )
}
