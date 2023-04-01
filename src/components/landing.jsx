import { useRef, useEffect } from "react";
import "../styles/landing.css";
import landingBack from "../assets/landingBackground.mp4";
export default function Landing() {
    const nameREF = useRef(null);
    const motto = useRef(null);
    const hackInfo = useRef(null);
    const videoRef = useRef(null);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const dataName = "SAMARTHYA";
    let iterations = 0;

    useEffect(() => {
        motto.current.style.transform = "translateY(-30%)";
        motto.current.style.opacity = "0";
        hackInfo.current.style.transform = "translateY(-30%)";
        hackInfo.current.style.opacity = "0";
        const interval = setInterval(() => {
            nameREF.current.innerHTML = nameREF.current.innerHTML
                .split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return dataName[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");
            iterations += 1 / 5;
        }, 30);
        return () => clearInterval(interval);
    }, [nameREF, motto, hackInfo]);

    setTimeout(() => {
        nameREF.current.style.transition =
            "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        nameREF.current.style.transform = "translateY(-25%)";
    }, 1800);

    setTimeout(() => {
        motto.current.className =
            "text-2xl font-inconsolata text-white text-center pb-8 max-mobile:text-base";
        motto.current.style.transition =
            "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        motto.current.style.opacity = "1";
        motto.current.style.transform = "translateY(0.5rem)";
    }, 2100);

    setTimeout(() => {
        videoRef.current.className =
            "text-white h-screen blur opacity-25 rounded-lg backdrop-brightness-50 transition-all duration-1000";
        hackInfo.current.className = "flex gap-4 max-mobile:gap-2";
        hackInfo.current.style.transition =
            "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        hackInfo.current.style.opacity = "1";
        hackInfo.current.style.transform = "translateY(0.5rem)";
    }, 2500);

    return (
        <>
            <div
                ref={videoRef}
                className="text-white h-screen blur opacity-0 rounded-lg backdrop-brightness-50 transition-all duration-1000"
            >
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute object-cover w-full h-full"
                >
                    <source src={landingBack} />
                </video>
            </div>
            <div
                id="home"
                className="text-white h-screen section absolute left-0 right-0  top-0"
            >
                <div className="flex flex-col justify-center items-center h-full ">
                    <header>
                        <h1
                            className="heroText font-space text-9xl max-mobile:text-5xl"
                            ref={nameREF}
                        >
                            SAMARTHYA
                        </h1>
                    </header>

                    <div ref={motto}>Think. Code. Innovate</div>
                    <div ref={hackInfo}>
                        <div className="font-space text-xl bg-zinc-800 py-4 px-16 rounded-3xl text-zinc-400 max-mobile:px-2 max-mobile:mx-2 max-mobile:text-sm">
                            6 - 7 MAY
                        </div>
                        <a
                            href="#register"
                            className="font-space text-xl max-mobile:text-sm bg-cyan-700 py-4 px-16 max-mobile:px-5 rounded-3xl text-white cursor-pointer hover:scale-105 transition ease-in-out "
                        >
                            REGISTER FOR THE HACK
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
