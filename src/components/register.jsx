import register from "../assets/register.gif";
import { useEffect, useRef, useState } from "react";

export default function Register() {
    const dropDown = useRef(null);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        enrolmentID: "",
        eventsIntrested: [],
    });
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
    const checkboxOnChange = (e) => {
        const {value, checked} = e.target;
        const { eventsIntrested } = formData;

        if(checked) {
            setFormData({
                ...formData,
                eventsIntrested: [...eventsIntrested, value],
            });
        } else if(!checked) {
            setFormData({
                ...formData,
                eventsIntrested: eventsIntrested.filter((e) => e !== value), 
            });
        }
    }
    const onChangeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
    const submitForm = async (e) => {
        e.preventDefault();
        const {firstName, lastName, email, contactNumber, enrolmentID, eventsIntrested} = formData;

        if(firstName && lastName && email && contactNumber && enrolmentID && (eventsIntrested.length >= 1)) {
            const response = await fetch(
                "https://samarthya2023-default-rtdb.firebaseio.com/participationResponse.json",
                {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName, 
                        lastName, 
                        email, 
                        contactNumber, 
                        enrolmentID, 
                        eventsIntrested,
                    })
                }
            );
    
            if(response) {
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    contactNumber: "",
                    enrolmentID: "",
                    eventsIntrested: [],
                });
                console.log(response);
                alert("Your response has been submitted");
            } else {
                console.log("data has not been stored in firebase ...");
            }
        } else {
            alert("Please enter all the details");
        }

    }

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
                    <form method="post" name="intrested" netlify>
                        <input
                            name="firstName"
                            value={formData.firstName}
                            type="text"
                            placeholder="First Name"
                            className="bg-transparent focus:outline-4 outline outline-1 text-white p-2 m-4  outline-white rounded-lg font-inconsolata text-2xl max-mobile:text-xl"
                            onChange={onChangeInput}
                        />
                        <input
                            name="lastName"
                            value={formData.lastName}
                            type="text"
                            placeholder="Last Name"
                            className="bg-transparent focus:outline-4 outline outline-1 text-white p-2 m-4 outline-white rounded-lg font-inconsolata text-2xl max-mobile:text-xl"
                            onChange={onChangeInput}
                        />
                        <br />
                        <input
                            name="email"
                            value={formData.email}
                            type="email"
                            placeholder="Email"
                            className="bg-transparent focus:outline-4 outline outline-1 text-white p-2 m-4  outline-white rounded-lg font-inconsolata text-2xl max-mobile:text-xl"
                            onChange={onChangeInput}
                        />
                        <input
                            name="contactNumber"
                            value={formData.contactNumber}
                            type="text"
                            placeholder="Contact Number"
                            className="bg-transparent focus:outline-4 outline outline-1 text-white p-2 m-4  outline-white rounded-lg font-inconsolata text-2xl max-mobile:text-xl"
                            onChange={onChangeInput}
                        />
                        <br />
                        <input
                            name="enrolmentID"
                            value={formData.enrolmentID}
                            type="text"
                            placeholder="Enrolment ID"
                            className="bg-transparent focus:outline-4 outline outline-1 text-white p-2 mt-4 mb-8  outline-white rounded-lg font-inconsolata text-2xl max-mobile:text-xl"
                            onChange={onChangeInput}
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
                                    name="interestedEvents"
                                    type="checkbox"
                                    value="Saviskar"
                                    id="event1"
                                    className="ml-2"
                                    onChange={checkboxOnChange}
                                />
                            </div>
                            <br />
                            <div className="hover:scale-105 transition-all">
                                <label htmlFor="event2">Aiganite</label>
                                <input
                                    name="interestedEvents"
                                    value="Aiganite"
                                    type="checkbox"
                                    id="event2"
                                    className="ml-2"
                                    onChange={checkboxOnChange}
                                />
                            </div>
                            <br />
                            <div className="hover:scale-105 transition-all">
                                <label htmlFor="event3">Devjousts</label>
                                <input
                                    name="interestedEvents"
                                    value="Devjousts"
                                    type="checkbox"
                                    id="event3"
                                    className="ml-2"
                                    onChange={checkboxOnChange}
                                />
                            </div>
                            <br />
                            <div className="hover:scale-105 transition-all">
                                <label htmlFor="event4">Crack the Code</label>
                                <input
                                    name="interestedEvents"
                                    value="Crack the Code"
                                    type="checkbox"
                                    id="event4"
                                    className="ml-2"
                                    onChange={checkboxOnChange}
                                />
                            </div>
                            <br />
                            <div className="hover:scale-105 transition-all">
                                <label htmlFor="event5">Figma Event</label>
                                <input
                                    name="interestedEvents"
                                    value="Figma Event"
                                    type="checkbox"
                                    id="event5"
                                    className="ml-2"
                                    onChange={checkboxOnChange}
                                />
                            </div>
                        </div>
                        <br />

                        <button
                            type="submit"
                            className="bg-zinc-800 text-zinc-400 px-36 rounded-lg p-2 mt-8 font-space h-12 max-mobile:px-12 text-2xl transition ease-in-out hover:outline hover:scale-105 transform hover:shadow-2xl max-mobile:text-base"
                            onClick={submitForm}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
