import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import AsiakashankinnanSuunnittelu from './pages/myynnillinen-asiakashankinta/asiakashankinnan-suunnittelu';
import MyynninValmistelu from './pages/myynnillinen-asiakashankinta/myynnin-valmistelu';
import AsiakaskohtaamistenToteutus from './pages/myynnillinen-asiakashankinta/asiakaskohtaamisten-toteutus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/johdanto" replace />} />
          <Route path="/johdanto" element={<div>Johdanto</div>} />
          <Route path="/messujen-suunnittelu/*" element={<div>Messujen Suunnittelu</div>} />
          {/* Myynnillinen asiakashankinta routes */}
          <Route path="/myynnillinen-asiakashankinta/asiakashankinnan-suunnittelu" element={<AsiakashankinnanSuunnittelu />} />
          <Route path="/myynnillinen-asiakashankinta/myynnin-valmistelu" element={<MyynninValmistelu />} />
          <Route path="/myynnillinen-asiakashankinta/asiakaskohtaamisten-toteutus" element={<AsiakaskohtaamistenToteutus />} />
          <Route path="/visuaalinen-ilme/*" element={<div>Visuaalinen Ilme</div>} />
          <Route path="/markkinointi/*" element={<div>Markkinointi</div>} />
          <Route path="/henkilosto/*" element={<div>Henkilöstö</div>} />
          <Route path="/seuranta/*" element={<div>Seuranta</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
