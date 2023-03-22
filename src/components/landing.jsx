import { useRef, useEffect } from "react";

export default function Landing() {
    const nameREF = useRef(null);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const dataName = "SAMARTHYA";
    let iterations = 0;

    useEffect(() => {
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
    }, [nameREF]);

    setTimeout(() => {
        nameREF.current.style.transition =
            "all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        nameREF.current.style.transform = "translateY(-140%)";
    }, 1600);
    return (
        <div className="text-white h-[80vh]">
            <div className="flex flex-col justify-center items-center h-full ">
                <h1 className="text-9xl font-space" ref={nameREF}>
                    SAMARTHYA
                </h1>
                {/* <div>29th - 30th April</div> */}
            </div>
        </div>
    );
}
