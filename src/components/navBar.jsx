import logo from "../assets/logo.png";

export default function NavBar() {
    return (
        <nav className="bg-light flex p-4 items-center">
            <img
                src={logo}
                alt="Samarthya Logo"
                className="h-10 animate-spin-slow inline"
            />
            <div className="font-secular text-white text-xl pl-4">
                Samarthya
            </div>
        </nav>
    );
}
