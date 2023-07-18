import NavBar from "./components/navBar";
import Landing from "./components/landing";
import About from "./components/about";
import Events from "./components/events";
import Prizes from "./components/prizes";
import FAQ from "./components/faq";
import Register from "./components/register";
import Footer from "./components/footer";
import ThankYou from "./pages/thankYou";
import Saviskar from "./pages/saviskar";
import DesignDerby from "./pages/designDerby";
import CrackCrypt from "./pages/crackCrypt";
import CodeRush from "./pages/c0deRush";
import ByteBrawl from "./pages/byteBrawl";
import { Route, Routes } from "react-router-dom";
import Postpone from "./components/postpone";
import "../fontawesome/css/all.css";

function App() {
    return (
        // <div className="App">
        //     <Postpone />
        // </div>
        <Routes>
            <Route
                path="/"
                element={
                    <div className="App">
                        <NavBar />
                        <Landing />
                        <About />
                        <Events />
                        <Prizes />
                        <FAQ />
                        <Register />
                        <Footer />
                    </div>
                }
            />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/saviskar" element={<Saviskar />} />
            <Route path="/design-derby" element={<DesignDerby />} />
            <Route path="/crack-crypt" element={<CrackCrypt />} />
            <Route path="/coderush" element={<CodeRush />} />
            <Route path="/byte-brawl" element={<ByteBrawl />} />
        </Routes>
    );
}

export default App;
