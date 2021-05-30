import Modal from 'react-modal'
import { Container, TransactionTypesContainer, RadioBox } from './styles'
import closeIcon from '../../assets/close.svg'
import incomeIcon from '../../assets/entradas.svg'
import outcomeIcon from '../../assets/saidas.svg'
import { useState } from 'react'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

  const [transactionType, setTransactionType] = useState('deposit')

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button onClick={onRequestClose}><img src={closeIcon} alt="Close icon" className="react-modal-close" /></button>
      <Container>
        <h2>Cadastrar Modal</h2>

        <input placeholder="Título" name="title" />
        <input type="number" placeholder="Valor" name="value" />

        <TransactionTypesContainer>
          <RadioBox
            type="button"
            onClick={() => setTransactionType('deposit')}
            isActive={transactionType === 'deposit'}
            activeColor="green"
          >
            <img src={incomeIcon} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => setTransactionType('withdraw')}
            isActive={transactionType === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeIcon} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypesContainer>

        <input placeholder="Categoria" name="category" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
