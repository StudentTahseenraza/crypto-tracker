# crypto-tracker
Live Demo ( https://crypto-tracker-nbf5.vercel.app/ )

 
📊 Data Structure (Redux State)
 {
  assets: [
    {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "BTC",
      price: 50123.45,
      change1h: 0.52,    // %
      change24h: -1.23,  // %
      change7d: 5.67,    // %
      marketCap: 950000000000,
      volume24h: 25000000000,
      circulatingSupply: 18900000,
      maxSupply: 21000000,
      sparkline: []      // 7D price history (optional)
    },
    // ...4 more assets
  ]
}

🛠 Tech Stack
Frontend: React.js, Redux Toolkit, CSS Modules

Build Tool: Vite

Data Simulation: Mock WebSocket class

Charts: Recharts (optional)

📦 Setup & Run

1. Clone the repo
git clone https://github.com/StudentTahseenraza/crypto-tracker.git
cd crypto-tracker

3. Install dependencies
npm install

5. Run the app
npm run dev

🚀 Features
✅ Real-time price updates (simulated via setInterval)
✅ Responsive table with color-coded % changes
✅ Redux Toolkit for state management
✅ 7D chart (static placeholder)
✅ Mocked WebSocket class for testing

Bonus (Optional):
🔹 Integrate real WebSocket (Binance/CoinGecko API)
🔹 Sorting/filtering (top gainers, market cap)
🔹 localStorage persistence
🔹 Unit tests (Jest/React Testing Library)

 📜 Scripts
Command	Description
npm run dev	Start dev server
npm run build	Production build
npm test	Run tests (optional)
📹 Demo Video
Watch Demo (Replace with your link)

🔄 State Management Flow
Mock WebSocket emits price updates every 2s.

Redux action (updateAssetPrice) dispatches new data.

Table re-renders efficiently via memoized selectors.

📚 Resources
Redux Toolkit Docs

CoinGecko API (for real data)

Recharts (for dynamic charts)
