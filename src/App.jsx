import NavBar from "./components/navBar";
import Landing from "./components/landing";
import About from "./components/about";
import Events from "./components/events";
import Prizes from "./components/prizes";
import Register from "./components/register";
import Footer from "./components/footer";
import ThankYou from "./pages/thankYou";
import { Route, Routes } from "react-router-dom";
import "../fontawesome/css/all.css";

function App() {
    return (
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
                        <Register />
                        <Footer />
                    </div>
                }
            />
            <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
    );
}

export default App;
