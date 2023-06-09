import logo from "../assets/logo.png";
import "../styles/navbar.css";
import { useEffect } from "react";

export default function NavBar() {
    useEffect(() => {
        const navLinks = document.querySelectorAll("nav a");
        const nav = document.getElementById("mainNav");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.intersectionRatio > 0) {
                    navLinks.forEach((e) => {
                        if (e.href.split("#")[1] == entry.target.id) {
                            e.classList.add("highlight");
                            if (e.href.split("#")[1] !== "home") {
                                nav.className =
                                    "bg-[#1a1a1a] flex p-4 items-center fixed top-0 z-50 w-screen";
                            } else {
                                nav.classList.remove("bg-[#1a1a1a]");
                            }
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

    const handleClick = () => {
        const hamBurger = document.getElementById("menuBtn");
        const navMenu = document.getElementById("navMenu");
        if (hamBurger.classList.contains("fa-bars")) {
            navMenu.classList.remove("hidden");
            hamBurger.classList.remove("fa-bars");
            hamBurger.classList.add("fa-xmark");
        } else {
            navMenu.classList.add("hidden");
            hamBurger.classList.remove("fa-xmark");
            hamBurger.classList.add("fa-bars");
        }
    };

    return (
        <>
            <div
                id="navMenu"
                className="hidden h-fit bg-[#1a1a1a] fixed top-0 z-50 w-full mt-14 text-center"
            >
                <button
                    className="text-zinc-400 font-space my-2 mx-2"
                    onClick={() => {
                        handleClick();
                        window.location.href = "#home";
                    }}
                >
                    HOME
                </button>
                <button
                    className="text-zinc-400 font-space my-2 mx-2"
                    onClick={() => {
                        handleClick();
                        window.location.href = "#about";
                    }}
                >
                    ABOUT
                </button>
                <button
                    className="text-zinc-400 font-space my-2 mx-2"
                    onClick={() => {
                        handleClick();
                        window.location.href = "#events";
                    }}
                >
                    EVENTS
                </button>
                <button
                    className="text-zinc-400 font-space my-2 mx-2"
                    onClick={() => {
                        handleClick();
                        window.location.href = "#prizes";
                    }}
                >
                    PRIZES
                </button>
                <button
                    className="text-zinc-400 font-space my-2 mx-2"
                    onClick={() => {
                        handleClick();
                        window.location.href = "#faq";
                    }}
                >
                    FAQ
                </button>
                <button
                    className="text-zinc-400 font-space my-2 mx-2"
                    onClick={() => {
                        handleClick();
                        window.location.href = "#register";
                    }}
                >
                    REGISTER
                </button>
            </div>
            <nav
                className="bg-transparent flex p-4 items-center fixed top-0 z-50 w-screen"
                id="mainNav"
            >
                <img
                    src={logo}
                    alt="Samarthya Logo"
                    className="h-10 animate-spin-slow inline max-mobile:h-6 cursor-pointer"
                    onClick={() => {
                        window.location.href = "#home";
                    }}
                />
                <div
                    className="font-secular text-white text-xl pl-4 max-mobile:text-base max-mobile:pl-2 cursor-pointer"
                    onClick={() => {
                        window.location.href = "#home";
                    }}
                >
                    Samarthya
                </div>
                <div className=" ml-auto font-secular text-white">
                    <a
                        href="#home"
                        className="px-4 hover:text-slate-400 transition ease-in-out highlight max-mobile:hidden"
                    >
                        HOME
                    </a>
                    <a
                        href="#about"
                        className="px-4  hover:text-slate-400 transition ease-in-out max-mobile:hidden"
                    >
                        ABOUT
                    </a>
                    <a
                        href="#events"
                        className="px-4  hover:text-slate-400 transition ease-in-out max-mobile:hidden"
                    >
                        EVENTS
                    </a>
                    <a
                        href="#prizes"
                        className="px-4  hover:text-slate-400 transition ease-in-out max-mobile:hidden"
                    >
                        PRIZES
                    </a>
                    <a
                        href="#faq"
                        className="px-4  hover:text-slate-400 transition ease-in-out max-mobile:hidden"
                    >
                        FAQ
                    </a>

                    <a
                        href="#register"
                        className="px-3 py-3 bg-sky-500 rounded-xl max-mobile:hidden hover:outline cursor-pointer hover:outline-1 hover:bg-transparent transition ease-in-out hover:scale-105"
                    >
                        REGISTER
                    </a>
                    <button
                        id="menuBtn"
                        className="fa-solid fa-bars hidden max-mobile:block"
                        onClick={() => handleClick()}
                    ></button>
                </div>
            </nav>
        </>
    );
}
