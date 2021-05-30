import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export function App() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false)


  function handleModalOpen() {
    setIsTransactionModalOpen(true)
  }
  function handleModalClose() {
    setIsTransactionModalOpen(false)
  }
  return (
    <>
      <GlobalStyle />
      <Header openTransactionModal={handleModalOpen} />
      <Dashboard />

      <Modal
        isOpen={isTransactionModalOpen}
        onRequestClose={() => setIsTransactionModalOpen(false)}
      >
        <h2>Cadastrar Modal</h2>
      </Modal>
    </>
  );
}