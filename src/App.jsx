import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import GoogleAds from "./Pages/GoogleAds";
import FacebookAds from "./Pages/FacebookAds";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<GoogleAds />} />
        <Route path="/facebook-ads" element={<FacebookAds />} />
        <Route path="/google-ads" element={<GoogleAds />} />
      </Routes>
    </>
  );
}

export default App;
