import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import NewTransactionModal from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global'
import { TransactionsProvider } from './TransactionsContext';

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
    <TransactionsProvider>
      <GlobalStyle />
      <Header openTransactionModal={handleModalOpen} />
      <Dashboard />
      <NewTransactionModal isOpen={isTransactionModalOpen} closeNewTransactionModal={handleModalClose} />
    </TransactionsProvider>
  );
}