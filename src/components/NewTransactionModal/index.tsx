import Modal from 'react-modal'
import { Container, TransactionTypesContainer, RadioBox } from './styles'
import closeIcon from '../../assets/close.svg'
import incomeIcon from '../../assets/entradas.svg'
import outcomeIcon from '../../assets/saidas.svg'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

  const [transactionType, setTransactionType] = useState('deposit')
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  function handleCreateTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      title,
      value,
      type: transactionType,
      category
    }

    api.post('transactions', data)

    onRequestClose()
  }
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

        <input placeholder="Título" name="title" onChange={({ target }) => setTitle(target.value)} value={title} />
        <input type="number" step="0.01" placeholder="Valor" name="value" onChange={({ target }) => setValue(Number(target.value))} value={value} />

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

        <input placeholder="Categoria" name="category" onChange={({ target }) => setCategory(target.value)} value={category} />
        <button type="submit" onClick={handleCreateTransaction}>Cadastrar</button>
      </Container>
    </Modal>
  )
}
