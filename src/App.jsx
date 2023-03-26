import NavBar from "./components/navBar";
import Landing from "./components/landing";
import About from "./components/about";
import Events from "./components/events";
import Prizes from "./components/prizes";
import Register from "./components/register";
import Footer from "./components/footer";

import "../fontawesome/css/all.css";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Landing />
            <About />
            <Events />
            <Prizes />
            <Register />
            <Footer />
        </div>
    );
}

export default App;
