import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import FixedIcons from './Components/FixedIcons';
import Home from './Components/Home';
import Footer from './Components/Includes/Footer';
import PrivacyPolicy from './Components/Includes/PrivacyPolicy';
import TermsAndCondition from './Components/Includes/TermsAndCondition';
import TopHeader from './Components/Includes/TopHeader';

function App() {
  return (
    <div>
      <Router>        
        <TopHeader />
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/terms-and-condition" element={<TermsAndCondition />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        </Routes>
        <Footer />
        <FixedIcons />
      </Router>
    </div>
  );
}

export default App;
