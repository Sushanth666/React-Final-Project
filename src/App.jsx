import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Packages from "./pages/Packages";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Domestic from "./pages/packages/Domestic";
import International from "./pages/packages/International";
import Honeymoon from "./pages/packages/Honeymoon";
import PackageDetails from "./pages/PackageDetails";
import APIPackages from "./pages/APIPackages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
    path="package/:id"
    element={<PackageDetails />}
    />
    <Route
        path="/api-packages"
        element={<APIPackages />}
    />
        <Route index element={<Home />} />

        <Route path="destinations" element={<Destinations />} />

        <Route path="packages" element={<Packages />}>
          <Route index element={<Domestic />} />
          <Route path="domestic" element={<Domestic />} />
          <Route path="international" element={<International />} />
          <Route path="honeymoon" element={<Honeymoon />} />
        </Route>

        <Route path="booking" element={<Booking />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
  path="package/:id"
  element={<PackageDetails />}
/>
      </Route>
    </Routes>
  );
}

export default App;