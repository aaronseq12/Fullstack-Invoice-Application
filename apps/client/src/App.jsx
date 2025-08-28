import { Routes, Route, Link } from 'react-router-dom';
import { TermsPage } from './pages/TermsPage';
import { PricelistPage } from './pages/PricelistPage';

function App() {
  return (
    <div>
      <nav>
        <Link to="/terms">Terms</Link> | <Link to="/pricelist">Pricelist</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/pricelist" element={<PricelistPage />} />
      </Routes>
    </div>
  );
}

export default App;