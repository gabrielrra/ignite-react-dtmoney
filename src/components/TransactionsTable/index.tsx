import { transitions } from "polished";
import { useEffect, useState, /*useState*/ } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transaction {
  id: number;
  title: string;
  value: number;
  type: 'deposit' | 'witdraw';
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  useEffect(() => {
    api.get('transactions').then(res => res.data).then(res => setTransactions(res.transactions))
  }, [])
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categorias</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {
                    new Intl.NumberFormat('pt-BR',
                      {
                        style: 'currency',
                        currency: 'BRL'
                      }
                    ).format(transaction.value)
                  }
                </td>
                <td>{transaction.category}</td>
                <td>
                  {
                    new Intl.DateTimeFormat('pt-BR'
                    ).format(new Date(transaction.createdAt))
                  }
                </td>
              </tr>

            )
          })}
        </tbody>
      </table>
    </Container>
  )
}
