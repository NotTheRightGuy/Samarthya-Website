import { useRef, useEffect } from "react";

export default function Landing() {
    const nameREF = useRef(null);
    const motto = useRef(null);
    const hackInfo = useRef(null);
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
            "text-2xl font-inconsolata text-zinc-400 text-center pb-8";
        motto.current.style.transition =
            "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        motto.current.style.opacity = "1";
        motto.current.style.transform = "translateY(0.5rem)";
    }, 2100);

    setTimeout(() => {
        hackInfo.current.className = "flex gap-4";
        hackInfo.current.style.transition =
            "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        hackInfo.current.style.opacity = "1";
        hackInfo.current.style.transform = "translateY(0.5rem)";
    }, 2500);

    return (
        <div className="text-white h-[90vh]">
            <div className="flex flex-col justify-center items-center h-full ">
                <h1 className="text-9xl font-space" ref={nameREF}>
                    SAMARTHYA
                </h1>
                <h2
                    className="text-2xl font-inconsolata text-zinc-400 text-center pb-8"
                    ref={motto}
                >
                    Join the ultimate festival for developers and programmers of
                    all skill levels! <br></br> Hack, learn, and have fun!
                </h2>
                <div className="flex gap-4" ref={hackInfo}>
                    <div className="font-space text-xl bg-zinc-800 py-4 px-16 rounded-3xl text-zinc-400">
                        29 - 30 APRIL
                    </div>
                    <div className="font-space text-xl bg-cyan-700 py-4 px-16 rounded-3xl text-white cursor-pointer hover:scale-105 transition ease-in-out">
                        REGISTER FOR THE HACK
                    </div>
                </div>
            </div>
        </div>
    );
}
