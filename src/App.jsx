import {Route, Routes} from "react-router-dom";
import KierownikKatalog from "./pages/KierownikKatalog/KierownikKatalog.jsx";
import KlientKoszyk from "./pages/KlientKoszyk/KlientKoszyk.jsx";
import KlientReklamacja from "./pages/KlientReklamacja/KlientReklamacja.jsx";
import PracownikReklamacja from "./pages/PracownikReklamacja/PracownikReklamacja.jsx";
import IndexPage from "./pages/IndexPage/IndexPage.jsx";
import ReklamacjaInterfejs from "./pages/PracownikReklamacja/ReklamacjaInterfejs.jsx";
import ReklamacjaKlientInterfejs from "./pages/KlientReklamacja/ReklamacjaKlientInterfejs.jsx";
import CreateReklamacja from "./pages/KlientReklamacja/CreateReklamacja.jsx";
import Koszyk from "./pages/KlientKoszyk/Koszyk.jsx";

function App() {

  return (
      <div className="w-screen min-h-screen">
          <Routes>
              <Route path="/" element={<IndexPage />} />
              <Route path="/kierownik-katalog" element={<KierownikKatalog />} />
              <Route path="/klient-koszyk" element={<KlientKoszyk />} />
              <Route path="/klient-koszyk/koszyk" element={<Koszyk />} />
              <Route path="/klient-reklamacja" element={<KlientReklamacja />} />
              <Route path="/pracownik-reklamacja" element={<PracownikReklamacja />} />
              <Route path="/pracownik-reklamacja/reklamacja" element={<ReklamacjaInterfejs />} />
              <Route path="/klient-reklamacja/reklamacja" element={<ReklamacjaKlientInterfejs />} />
              <Route path="/klient-reklamacja/create-reklamacja" element={<CreateReklamacja />} />
          </Routes>
      </div>
  )
}

export default App
