import logo from "../assets/logo.png";

export default function NavBar() {
    return (
        <nav className="bg-light flex p-4 items-center sticky top-0">
            <img
                src={logo}
                alt="Samarthya Logo"
                className="h-10 animate-spin-slow inline"
            />
            <div className="font-secular text-white text-xl pl-4">
                Samarthya
            </div>
            <div className="ml-auto font-secular text-white">
                <a
                    href=""
                    className="px-4  hover:text-slate-400 transition ease-in-out"
                >
                    HOME
                </a>
                <a
                    href=""
                    className="px-4  hover:text-slate-400 transition ease-in-out"
                >
                    ABOUT
                </a>
                <a
                    href=""
                    className="px-4  hover:text-slate-400 transition ease-in-out"
                >
                    EVENTS
                </a>
                <a
                    href=""
                    className="px-4  hover:text-slate-400 transition ease-in-out"
                >
                    SPONSORS
                </a>
                <a
                    href=""
                    className="px-4  hover:text-slate-400 transition ease-in-out"
                >
                    FAQ
                </a>
                <button className="px-3 py-3 bg-sky-600 rounded-xl hover:outline hover:outline-1 hover:bg-transparent transition ease-in-out hover:scale-105">
                    REGISTER
                </button>
            </div>
        </nav>
    );
}
