import { useRef, useEffect } from "react";

export default function EventCard({ title, content, date, team_number }) {
    const titleRef = useRef(null);
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let iterations = 0;

    const handleOver = () => {
        const interval = setInterval(() => {
            titleRef.current.innerHTML = titleRef.current.innerHTML
                .split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return title[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");
            iterations += 1 / 5;
        }, 30);
        iterations = 0;
        return () => clearInterval(interval);
    };

    return (
        <div
            className="bg-zinc-800 rounded-lg p-4 text-left font-inconsolata hover:outline hover:outline-2 hover:outline-zinc-500"
            onMouseEnter={() => handleOver()}
        >
            <span className="text-3xl font-space text-zinc-500" ref={titleRef}>
                {title}
            </span>
            <div className="mt-4 text-zinc-300 text-lg">{content}</div>
            <div className="mt-5 text-lg text-zinc-300">
                <span className="fa-regular fa-calendar-days mr-3"></span>
                {date}
            </div>
            <div className="text-lg text-zinc-300">
                <span className="fa-regular fa-user mr-1"></span> {team_number}
            </div>
        </div>
    );
}
