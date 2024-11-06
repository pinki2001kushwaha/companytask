import React from 'react';
import Dashboard from '../src/pages/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          {/* <Route index element={<Dashboard />} /> */}
          {/* <Route path="PreFrom" element={<PreFrom />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
