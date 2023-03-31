import register from "../assets/register.gif";
import { useRef } from "react";
import contactValidator from "../helper/contactValidator";
import emailValidator from "../helper/emailValidator";
import enrolValidator from "../helper/enrolValidator";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default function Register() {
    const firebaseConfig = {
        apiKey: "AIzaSyDp249vOSQZlsCARAZnOXnfaQ5K7x_S-Ic",
        authDomain: "samarthya-au.firebaseapp.com",
        databaseURL:
            "https://samarthya-au-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "samarthya-au",
        storageBucket: "samarthya-au.appspot.com",
        messagingSenderId: "788597991278",
        appId: "1:788597991278:web:d7aaa0689a27504a6d037f",
        measurementId: "G-JVD48D5WRC",
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
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

    const handleRSVP = () => {
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const contact = document.getElementById("contact").value;
        const enrolment = document.getElementById("enrolment").value;
        const event1 = document.getElementById("event1").checked;
        const event2 = document.getElementById("event2").checked;
        const event3 = document.getElementById("event3").checked;
        const event4 = document.getElementById("event4").checked;
        const event5 = document.getElementById("event5").checked;
        let flag = false;
        let msg = "";
        if (
            firstName === "" ||
            lastName === "" ||
            email === "" ||
            contact === "" ||
            enrolment === ""
        ) {
            msg += "Please fill all the fields";
        } else if (!contactValidator(contact)) {
            msg += "Please enter a valid contact number";
        } else if (!emailValidator(email)) {
            msg += "Please enter a valid email";
        } else if (!enrolValidator(enrolment)) {
            msg += "Please enter a valid enrolment number";
        } else if (!event1 && !event2 && !event3 && !event4 && !event5) {
            msg += "Please select atleast one event";
        } else {
            flag = true;
            const docRef = collection(db, "rsvp");
            addDoc(docRef, {
                firstName: firstName,
                lastName: lastName,
                email: email,
                contact: contact,
                enrolment: enrolment,
                event1: event1,
                event2: event2,
                event3: event3,
                event4: event4,
                event5: event5,
            })
                .then(() => {
                    window.location.href = "/thank-you";
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
        }
        if (!flag) {
            alert(msg);
        }
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
                        RSVP
                    </div>
                    <form name="intrested" className="relative">
                        <input
                            id="firstName"
                            type="text"
                            placeholder="First Name"
                            className="bg-transparent focus:outline-4 outline outline-1 text-white p-2 m-4  outline-white rounded-lg font-inconsolata text-2xl max-mobile:text-xl"
                        />
                        <input
                            id="lastName"
                            type="text"
                            placeholder="Last Name"
                            className="bg-transparent focus:outline-4 outline outline-1 text-white p-2 m-4 outline-white rounded-lg font-inconsolata text-2xl max-mobile:text-xl"
                        />
                        <br />
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            className="bg-transparent focus:outline-4 outline outline-1 text-white p-2 m-4  outline-white rounded-lg font-inconsolata text-2xl max-mobile:text-xl"
                        />
                        <input
                            id="contact"
                            type="text"
                            placeholder="Contact Number"
                            className="bg-transparent focus:outline-4 outline outline-1 text-white p-2 m-4  outline-white rounded-lg font-inconsolata text-2xl max-mobile:text-xl"
                        />
                        <br />
                        <input
                            id="enrolment"
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
                            className="mt-2 hidden z-50 absolute max-mobile:top-1/2 max-mobile:left-1/2 max-mobile:transform max-mobile:-translate-x-1/2 max-mobile:-translate-y-1/2 bg-zinc-800 text-zinc-300 flex-col rounded-lg font-space text-xl w-fit p-4"
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
                            onClick={(e) => {
                                e.preventDefault();
                                handleRSVP();
                            }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
