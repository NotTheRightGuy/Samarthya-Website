import codeRush from "../assets/c0derush.gif";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import soloFormValidator from "../helper/soloFormValidator";

export default function CodeRush() {
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

    const handleRegister = async () => {
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const enrol = document.getElementById("enrol").value;
        const email = document.getElementById("email").value;
        const contact = document.getElementById("contact").value;

        const isValid = soloFormValidator(
            firstName,
            lastName,
            enrol,
            email,
            contact
        );
        if (isValid === "") {
            const docRef = await addDoc(collection(db, "codeRush"), {
                firstName,
                lastName,
                enrol,
                email,
                contact,
            });
            window.open("/thank-you", "_blank");
        } else {
            alert(isValid);
        }
    };

    return (
        <section className="flex h-screen max-mobile:inline">
            <div
                id="section-1"
                className="flex-1 relative overflow-auto max-mobile:w-fit"
            >
                <img
                    src={codeRush}
                    className="absolute -z-50 opacity-10 w-full h-full object-cover"
                />
                <h1 className="text-zinc-300 font-space text-7xl max-mobile:text-4xl m-4 bg-zinc-900 w-fit p-4 hover:translate-x-12 hover:bg-zinc-200 hover:text-zinc-900 transition-all">
                    c0deRush
                </h1>
                <div className="text-white m-4 font-inconsolata text-lg max-mobile:text-sm">
                    Welcome to c0deRush - the ultimate 1v1 coding competition
                    where participants will go head-to-head in a race against
                    the clock and each other to solve a series of challenging
                    programming questions. <br />
                    <br /> This high-intensity event will test your coding
                    skills, speed, and accuracy as you compete against other
                    talented coders from our university. Each round will feature
                    a different programming challenge, and the first person to
                    solve the problem correctly will be declared the winner of
                    the round. Code to the top and come victorious as the most
                    talented coder. <br />
                    <br /> To participate, all you need is a computer with a
                    stable internet connection and a passion for coding. Once
                    the event begins, you will have a set amount of time to
                    solve each challenge, and the fastest and most accurate
                    coder will move on to the next round. The competition will
                    take place offline. The event is open to coders of all skill
                    levels, and there will be plenty of opportunities to learn
                    and improve your coding abilities throughout the
                    competition. <br />
                    <br /> So, if you're ready to put your coding skills to the
                    test and compete against some of the best coders in our
                    university, then sign up for c0deRush today!
                </div>
            </div>
            <div className="bg-black flex-1 ml-4">
                <div className="text-white m-4 font-space text-4xl uppercase underline underline-offset-4">
                    Sign Up
                </div>
                <div className="text-white font-space m-4">
                    <form>
                        <div>
                            <label htmlFor="name" className="text-xl">
                                First Name
                            </label>
                            <br />
                            <input
                                id="firstName"
                                placeholder="John"
                                type="text"
                                name="name"
                                className="bg-transparent outline w-full max-mobile:w-full h-10 border-2 border-white rounded-md p-2 mt-2 mb-4 mr-5"
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="text-xl">
                                Last Name
                            </label>
                            <br />
                            <input
                                placeholder="Doe"
                                type="text"
                                name="name"
                                id="lastName"
                                className="bg-transparent outline w-full max-mobile:w-full h-10 border-2 border-white rounded-md p-2 mt-2 mb-4 mr-5"
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="text-xl">
                                Enrolment ID
                            </label>
                            <br />
                            <input
                                placeholder="12/6 Digit Enrolment ID"
                                type="text"
                                name="name"
                                id="enrol"
                                className="bg-transparent outline w-full max-mobile:w-full h-10 border-2 border-white rounded-md p-2 mt-2 mb-4 mr-5"
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="text-xl">
                                Email
                            </label>
                            <br />
                            <input
                                placeholder="Institute Email"
                                type="text"
                                name="name"
                                id="email"
                                className="bg-transparent outline w-full max-mobile:w-full h-10 border-2 border-white rounded-md p-2 mt-2 mb-4 mr-5"
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="text-xl">
                                Contact No.
                            </label>
                            <br />
                            <input
                                placeholder="+91 -"
                                type="text"
                                name="name"
                                id="contact"
                                className="bg-transparent outline w-full max-mobile:w-full h-10 border-2 border-white rounded-md p-2 mt-2 mb-4 mr-5"
                            />
                        </div>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                handleRegister();
                            }}
                            type="submit"
                            className="text-white mt-10 text-xl outline outline-2 w-full p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out bg-zinc-800 hover:bg-zinc-300 hover:text-zinc-800"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
