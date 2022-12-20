import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../stock-data';

export default function Stock() {

  const [stock, setStock] = useState(null);
  const { symbol } = useParams();



  useEffect(() => {
    const getStock = async () => {
      try {
        const data = Data.find(stock => stock.symbol === symbol);
        setStock(data);
      } catch (error) {
        console.error(error);
      }
    }

    getStock();
  }, [symbol]);



  const loaded = () => {
    
    return (
      <>
      <h1>A Single Stock</h1>
      <div className='dashboard'>
        
       
        <br></br>
        <h2>{stock.name}/{stock.symbol}/${stock.lastPrice}</h2>

      </div>
      </>
    )
  }

  const loading = () => {
    return (
      <h2>...Loading...</h2>
    )
  }

  return (
    stock && stock.name ? loaded() : loading()
  )
}

