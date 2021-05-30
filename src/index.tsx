import { render } from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

interface TransactionType {
  id: number;
  title: string;
  value: number;
  type: 'deposit' | 'withdraw';
  category: string;
  createdAt: Date;
}
let transactions: TransactionType[]

createServer({
  models: {
    transaction: Model,

  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Transação 1',
          value: 300,
          type: 'deposit',
          category: 'a',
          createdAt: new Date('05-07-2021 12:30:00')
        },
        {
          id: 2,
          title: 'Transação 2',
          value: 236.45,
          type: 'withdraw',
          category: 'b',
          createdAt: new Date('05-08-2021 09:27:15')
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => this.schema.all('transaction'))

    this.post('/transactions', (schema, req) => {
      let data = JSON.parse(req.requestBody)
      data.createdAt = new Date()
      return schema.create('transaction', data)
    })
  }
})

render(
  <App />,
  document.getElementById('root')
);
