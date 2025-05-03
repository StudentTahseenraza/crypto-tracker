function CryptoRow({ asset, index }) {
    const formatNumber = (num) => {
      if (num === null) return '∞';
      return num.toLocaleString('en-US', { maximumFractionDigits: 2 });
    };
  
    const formatCurrency = (num) => {
      return `$${num.toLocaleString('en-US', { maximumFractionDigits: 2 })}`;
    };
  
    return (
      <tr>
        <td>{index}</td>
        <td className="name-cell">
          <img src={asset.logo} alt={asset.name} className="logo" />
          <span>{asset.name}</span>
          <span className="symbol">{asset.symbol}</span>
        </td>
        <td>{formatCurrency(asset.price)}</td>
        <td className={asset.change1h >= 0 ? 'positive' : 'negative'}>
          {asset.change1h.toFixed(2)}%
        </td>
        <td className={asset.change24h >= 0 ? 'positive' : 'negative'}>
          {asset.change24h.toFixed(2)}%
        </td>
        <td className={asset.change7d >= 0 ? 'positive' : 'negative'}>
          {asset.change7d.toFixed(2)}%
        </td>
        <td>{formatCurrency(asset.marketCap)}</td>
        <td>{formatCurrency(asset.volume24h)}</td>
        <td>{formatNumber(asset.circulatingSupply)}</td>
        <td>{formatNumber(asset.maxSupply)}</td>
        <td>
          <img src={asset.chart} alt="7D Chart" className="chart" />
        </td>
      </tr>
    );
  }
  
  export default CryptoRow;