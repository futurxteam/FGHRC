import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import FutureaceHospital from './pages/FutureaceHospital';
import FutureaceAcademy from './pages/FutureaceAcademy';
import Medibridge from './pages/Medibridge';
import Sereniche from './pages/Sereniche';
import SageJourney from './pages/SageJourney';
import FutuRx from './pages/FutuRx';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/company/futureace-hospital" element={<FutureaceHospital />} />
                    <Route path="/company/futureace-academy" element={<FutureaceAcademy />} />
                    <Route path="/company/medibridge" element={<Medibridge />} />
                    <Route path="/company/sereniche" element={<Sereniche />} />
                    <Route path="/company/sage-journey" element={<SageJourney />} />
                    <Route path="/company/futurx" element={<FutuRx />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
