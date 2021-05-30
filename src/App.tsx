import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import NewTransactionModal from './components/NewTransactionModal';
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
      <NewTransactionModal isOpen={isTransactionModalOpen} onRequestClose={handleModalClose} />
    </>
  );
}