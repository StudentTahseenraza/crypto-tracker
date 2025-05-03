import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updatePrices } from './redux/cryptoSlice';
import CryptoTable from './components/CryptoTable';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const ws = new WebSocket('wss://stream.binance.com:9443/ws/!ticker@arr');

    ws.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      // Filter for the assets we care about (BTC, ETH, USDT, XRP, BNB)
      const relevantTickers = data.filter(ticker =>
        ['BTCUSDT', 'ETHUSDT', 'USDTUSDT', 'XRPUSDT', 'BNBUSDT'].includes(ticker.s)
      );

      // Map Binance data to our Redux state
      const updates = relevantTickers.map(ticker => ({
        symbol: ticker.s.replace('USDT', ''), // e.g., BTCUSDT -> BTC
        price: parseFloat(ticker.c), // Last price
        change1h: parseFloat(ticker.P), // 1h price change %
        change24h: parseFloat(ticker.p), // 24h price change %
        change7d: parseFloat(ticker.w), // 7d change (approximate, Binance doesn't provide this directly)
        volume24h: parseFloat(ticker.v), // 24h volume
      }));

      // Dispatch updates to Redux
      dispatch(updatePrices(updates));
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = () => {
      console.log('WebSocket closed');
    };

    return () => {
      ws.close(); // Cleanup on unmount
    };
  }, [dispatch]);

  return (
    <div className="app">
      <h1>Crypto Tracker</h1>
      <CryptoTable />
    </div>
  );
}

export default App;