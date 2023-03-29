import register from "../assets/register.gif";
import { useRef } from "react";

export default function Register() {
    const dropDown = useRef(null);
    const handleEventHover = () => {
        const eventArrow = document.getElementById("eventArrow");
        eventArrow.style.transition = "all 0.5s ease-in-out";
        eventArrow.style.transform = "translateY(6px)";
        setTimeout(() => {
            eventArrow.style.transform = "translateY(0px)";
        }, 500);
    };
    const handleEventClick = () => {
        dropDown.current.classList.toggle("hidden");
        dropDown.current.classList.toggle("inline-flex");
    };

    return (
        <div
            id="register"
            className="section h-screen rounded-lg text-center mt-32 max-mobile:m-4 max-mobile:mt-52 max-mobile:relative p-12 max-mobile:p-2"
        >
            <div className="grid grid-cols-2 max-mobile:grid-cols-1">
                <div>
                    <img
                        src={register}
                        alt="register prompt"
                        className="h-screen rounded-lg max-mobile:opacity-50"
                    />
                </div>
                <div className="max-mobile:absolute -left-2">
                    <div className="bg-zinc-800 max-mobile:bg-zinc-600 text-zinc-400 max-mobile:text-zinc-200 px-5 py-2 font-space text-3xl inline-flex skew-y-3 mb-6 max-mobile:mt-6">
                        REGISTER
                    </div>
                    <form name="intrested" netlify>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="bg-transparent focus:outline-4 outline outline-1 text-white p-2 m-4  outline-white rounded-lg font-inconsolata text-2xl max-mobile:text-xl"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="bg-transparent focus:outline-4 outline outline-1 text-white p-2 m-4 outline-white rounded-lg font-inconsolata text-2xl max-mobile:text-xl"
                        />
                        <br />
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-transparent focus:outline-4 outline outline-1 text-white p-2 m-4  outline-white rounded-lg font-inconsolata text-2xl max-mobile:text-xl"
                        />
                        <input
                            type="text"
                            placeholder="Contact Number"
                            className="bg-transparent focus:outline-4 outline outline-1 text-white p-2 m-4  outline-white rounded-lg font-inconsolata text-2xl max-mobile:text-xl"
                        />
                        <br />
                        <input
                            type="text"
                            placeholder="Enrolment ID"
                            className="bg-transparent focus:outline-4 outline outline-1 text-white p-2 mt-4 mb-8  outline-white rounded-lg font-inconsolata text-2xl max-mobile:text-xl"
                        />
                        <br />
                        <button
                            className="text-white font-space text-xl bg-zinc-600 px-4 py-2 rounded-lg focus:outline focus:outline-2"
                            onClick={(e) => {
                                e.preventDefault();
                                handleEventClick();
                            }}
                            onMouseEnter={() => {
                                handleEventHover();
                            }}
                        >
                            Events Intrested{" "}
                            <span
                                id="eventArrow"
                                className="fa-solid fa-arrow-down"
                            ></span>
                        </button>
                        <br />
                        <div
                            ref={dropDown}
                            id="dropDown"
                            className="mt-2 hidden z-50  bg-zinc-800 text-zinc-300 flex-col rounded-lg font-space text-xl w-fit p-4"
                        >
                            <div className="hover:scale-105 transition-all">
                                <label htmlFor="event1">Saviskar</label>
                                <input
                                    type="checkbox"
                                    id="event1"
                                    className="ml-2"
                                />
                            </div>
                            <br />
                            <div className="hover:scale-105 transition-all">
                                <label htmlFor="event2">Aiganite</label>
                                <input
                                    type="checkbox"
                                    id="event2"
                                    className="ml-2"
                                />
                            </div>
                            <br />
                            <div className="hover:scale-105 transition-all">
                                <label htmlFor="event3">Devjousts</label>
                                <input
                                    type="checkbox"
                                    id="event3"
                                    className="ml-2"
                                />
                            </div>
                            <br />
                            <div className="hover:scale-105 transition-all">
                                <label htmlFor="event4">Crack the Code</label>
                                <input
                                    type="checkbox"
                                    id="event4"
                                    className="ml-2"
                                />
                            </div>
                            <br />
                            <div className="hover:scale-105 transition-all">
                                <label htmlFor="event5">Figma Event</label>
                                <input
                                    type="checkbox"
                                    id="event5"
                                    className="ml-2"
                                />
                            </div>
                        </div>
                        <br />

                        <button
                            type="submit"
                            className="bg-zinc-800 text-zinc-400 px-36 rounded-lg p-2 mt-8 font-space h-12 max-mobile:px-12 text-2xl transition ease-in-out hover:outline hover:scale-105 transform hover:shadow-2xl max-mobile:text-base"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
