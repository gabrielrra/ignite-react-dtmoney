import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'

interface Transaction {
  id: number;
  title: string;
  value: number;
  type: 'deposit' | 'withdraw';
  category: string;
  createdAt: string;
}
export type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionsContextType {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}
export const TransactionsContext = createContext<TransactionsContextType>({} as TransactionsContextType)

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  useEffect(() => {
    api.get('transactions').then(res => res.data).then(res => setTransactions(res.transactions))
  }, [])

  async function createTransaction(transaction: TransactionInput) {
    const response = await api.post('transactions', transaction)

    const { transaction: newTransaction } = response.data;
    setTransactions([...transactions, newTransaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}