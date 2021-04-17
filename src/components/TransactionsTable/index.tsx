import { Container } from "./styles";

export function TransactionsTable() {
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
          <tr>
            <td>AAAAAAAAAAAAAAAAAAAAAAAAAAAA</td>
            <td className="income">R$ 100,00</td>
            <td>BBB</td>
            <td>24/01/2022</td>
          </tr>
          <tr>
            <td>AAA</td>
            <td className="outcome">- R$ 100,00</td>
            <td>BBB</td>
            <td>24/01/2022</td>
          </tr>
          <tr>
            <td>AAA</td>
            <td>R$ 100,00</td>
            <td>BBB</td>
            <td>24/01/2022</td>
          </tr>
          <tr>
            <td>AAA</td>
            <td>R$ 100,00</td>
            <td>BBB</td>
            <td>24/01/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
