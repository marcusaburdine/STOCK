import { Link } from 'react-router-dom';
import Data from '../stock-data';

export default function Home() {
  return (
    <section>
    <div>
      <h1>This is the Stock Component</h1>
     
      {
        Data.map((stock) => {
          const { name, symbol, lastPrice, change } = stock;

          return (
            <Link key={symbol} to={`/stock/${symbol}`}>
              <div className='dashboard'><h6>{name} ({symbol}) {lastPrice} {change}</h6></div>
            </Link>
          );
        })
      }
    </div>
    </section>
  )
}