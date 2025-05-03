import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// Load initial state from localStorage if available
const loadState = () => {
  const savedState = localStorage.getItem('cryptoAssets');
  return savedState
    ? JSON.parse(savedState)
    : [
        { id: nanoid(), name: 'Bitcoin', symbol: 'BTC', logo: '/assets/btc.svg', price: 93759.48, change1h: -0.43, change24h: 0.93, change7d: 11.11, marketCap: 186118902186, volume24h: 43874950947, circulatingSupply: 19.85e6, maxSupply: 21e6, chart: '/placeholder-chart.svg' },
        { id: nanoid(), name: 'Ethereum', symbol: 'ETH', logo: '/assets/eth.svg', price: 3802.46, change1h: -0.60, change24h: 3.21, change7d: 13.68, marketCap: 217581729327, volume24h: 2354746907, circulatingSupply: 120.71e6, maxSupply: null, chart: '/placeholder-chart.svg' },
        { id: nanoid(), name: 'Tether', symbol: 'USDT', logo: '/assets/usdt.svg', price: 1.00, change1h: 0.00, change24h: 0.00, change7d: -0.04, marketCap: 145320220085, volume24h: 92888002, circulatingSupply: 145.27e6, maxSupply: null, chart: '/placeholder-chart.svg' },
        { id: nanoid(), name: 'XRP', symbol: 'XRP', logo: '/assets/xrp.svg', price: 2.22, change1h: -0.46, change24h: 0.54, change7d: -6.18, marketCap: 130073814966, volume24h: 5134181491, circulatingSupply: 58.39e9, maxSupply: 100e9, chart: '/placeholder-chart.svg' },
        { id: nanoid(), name: 'BNB', symbol: 'BNB', logo: '/assets/bnb.svg', price: 606.65, change1h: 0.00, change24h: -1.18, change7d: -3.73, marketCap: 847195647, volume24h: 1874281784, circulatingSupply: 146.8e6, maxSupply: 200e6, chart: '/placeholder-chart.svg' },
      ];
};

const initialState = {
  assets: loadState(),
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updatePrices: (state, action) => {
      const updates = action.payload;
      state.assets = state.assets.map(asset => {
        const update = updates.find(u => u.symbol === asset.symbol);
        if (update) {
          return {
            ...asset,
            price: update.price,
            change1h: update.change1h,
            change24h: update.change24h,
            change7d: update.change7d,
            volume24h: update.volume24h,
            marketCap: asset.circulatingSupply * update.price,
          };
        }
        return asset;
      });
      // Save updated state to localStorage
      localStorage.setItem('cryptoAssets', JSON.stringify(state.assets));
    },
  },
});

export const { updatePrices } = cryptoSlice.actions;
export const selectAssets = (state) => state.crypto.assets;
export default cryptoSlice.reducer;