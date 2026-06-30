import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import ScrollProgress from "./ScrollProgress";

function Layout() {
  return (
    <>
    <ScrollProgress />
    <Navbar />

    <main>
        <Outlet />
    </main>

    <BackToTop />

    <Footer/>
</>
  );
}

export default Layout;