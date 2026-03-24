import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Home from "./components/home";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <SpeedInsights />
      </>
    </Suspense>
  );
}

export default App;
