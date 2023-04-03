import design from "../assets/designDerby.gif";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import soloFormValidator from "../helper/soloFormValidator";

export default function DesignDerby() {
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
            const docRef = await addDoc(collection(db, "designDerby"), {
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
            <div id="section-1" className="flex-1 relative overflow-auto">
                <img
                    src={design}
                    className="absolute -z-50 opacity-10 w-full h-full object-cover"
                />
                <h1 className="text-zinc-300 font-space text-7xl max-mobile:text-4xl m-4 bg-zinc-900 w-fit p-4 hover:translate-x-12 hover:bg-zinc-200 hover:text-zinc-900 transition-all">
                    Design Derby
                </h1>
                <div className="text-white m-4 font-inconsolata text-lg max-mobile:text-sm">
                    Design Derby is an exciting event where participants will
                    have the opportunity to learn how to work with Figma, a
                    popular design software used by professionals all over the
                    world. <br />
                    <br />
                    The event is designed to be fun and educational, providing
                    participants with the chance to improve their design skills
                    while competing against others. The event will start with a
                    workshop led by experienced designers who will provide
                    step-by-step guidance on how to use Figma to create
                    beautiful and functional designs. Participants will be able
                    to ask questions and receive feedback on their work
                    throughout the workshop.
                    <br />
                    <br /> After the workshop, the competition will begin.
                    Participants will have a set amount of time to create their
                    own unique design using Figma. Once the time is up, the
                    designs will be judged by a panel of expert designers. The
                    design with the highest score will win the cash prize and
                    the title of the best design of the event. Design Derby is
                    the perfect event for anyone who is interested in design,
                    whether they are a beginner or an experienced designer
                    looking to hone their skills. Join us for a fun and
                    educational experience that could change the course of your
                    career.
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
