import './App.css'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/footer'
import Home from './pages/home'
import AMLPolicy from './pages/aml-policy'
import ContactUs from './pages/contact-us'
import PrivacyPolicy from './pages/privacy-policy'
import RefundPolicy from './pages/refund-policy'
import TermsConditions from './pages/terms-conditions'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aml-policy" element={<AMLPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App