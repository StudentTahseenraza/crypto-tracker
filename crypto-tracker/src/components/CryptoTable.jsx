import { useSelector, useDispatch } from 'react-redux';
import { selectAssets } from '../redux/cryptoSlice';
import { useState } from 'react';
import CryptoRow from './CryptoRow';

function CryptoTable() {
  const dispatch = useDispatch();
  const assets = useSelector(selectAssets);
  const [sortByGainers, setSortByGainers] = useState(false);

  // Sort assets by 24h change if enabled
  const sortedAssets = [...assets].sort((a, b) => {
    if (sortByGainers) {
      return b.change24h - a.change24h; // Descending order (top gainers first)
    }
    return 0; // Default order
  });

  return (
    <div>
      <div className="controls">
        <button onClick={() => setSortByGainers(!sortByGainers)}>
          {sortByGainers ? 'Reset Sorting' : 'Sort by Top Gainers (24h)'}
        </button>
      </div>
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {sortedAssets.map((asset, index) => (
            <CryptoRow key={asset.id} asset={asset} index={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CryptoTable;