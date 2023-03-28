import logo from "../assets/logo.png";
import "../styles/navbar.css";
import { useEffect } from "react";

export default function NavBar() {
    useEffect(() => {
        const navLinks = document.querySelectorAll("nav a");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0) {
                    navLinks.forEach((e) => {
                        if (e.href.split("#")[1] == entry.target.id) {
                            e.classList.add("highlight");
                        } else {
                            e.classList.remove("highlight");
                        }
                    });
                }
            });
        });

        document
            .querySelectorAll(".section")
            .forEach((e) => observer.observe(e));
    }, []);
    return (
        <nav
            className="bg-[#100d11] flex p-4 items-center sticky backdrop-blur-md top-0 z-50 max-mobile:invisible"
            id="mainNav"
        >
            <img
                src={logo}
                alt="Samarthya Logo"
                className="h-10 animate-spin-slow inline"
            />
            <div className="font-secular text-white text-xl pl-4">
                Samarthya
            </div>
            <div className=" ml-auto font-secular text-white">
                <a
                    href="#home"
                    className="px-4 hover:text-slate-400 transition ease-in-out highlight"
                >
                    HOME
                </a>
                <a
                    href="#about"
                    className="px-4  hover:text-slate-400 transition ease-in-out"
                >
                    ABOUT
                </a>
                <a
                    href="#events"
                    className="px-4  hover:text-slate-400 transition ease-in-out"
                >
                    EVENTS
                </a>
                <a
                    href="#prizes"
                    className="px-4  hover:text-slate-400 transition ease-in-out"
                >
                    PRIZES
                </a>

                <a
                    href="#register"
                    className="px-3 py-3 bg-sky-600 rounded-xl hover:outline cursor-pointer hover:outline-1 hover:bg-transparent transition ease-in-out hover:scale-105"
                >
                    REGISTER
                </a>
            </div>
        </nav>
    );
}
