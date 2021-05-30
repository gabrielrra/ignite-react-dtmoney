import { render } from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Titulo',
          amount: 400,
          type: 'deposit',
          category: 'food',
          createdAt: new Date()
        }
      ]
    })
  }
})

render(
  <App />,
  document.getElementById('root')
);
