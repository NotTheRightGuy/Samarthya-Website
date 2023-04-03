import saviskar from "../assets/saviskar.gif";
import teamFormValidator from "../helper/teamFormValidator";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default function Saviskar() {
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
    const handleRegister = () => {
        const teamName = document.getElementById("teamName").value;
        const member1Name = document.getElementById("member1Name").value;
        const member1Enrolment =
            document.getElementById("member1Enrolment").value;
        const member1Contact = document.getElementById("member1Contact").value;
        const member2Name = document.getElementById("member2Name").value;
        const member2Enrolment =
            document.getElementById("member2Enrolment").value;
        const member2Contact = document.getElementById("member2Contact").value;
        const member3Name = document.getElementById("member3Name").value;
        const member3Enrolment =
            document.getElementById("member3Enrolment").value;
        const member3Contact = document.getElementById("member3Contact").value;
        const member4Name = document.getElementById("member4Name").value;
        const member4Enrolment =
            document.getElementById("member4Enrolment").value;
        const member4Contact = document.getElementById("member4Contact").value;
        const msg = teamFormValidator(
            teamName,
            [member1Name, member1Contact, member1Enrolment],
            [member2Name, member2Contact, member2Enrolment],
            [member3Name, member3Contact, member3Enrolment],
            [member4Name, member4Contact, member4Enrolment]
        );
        if (msg !== "") {
            alert(msg);
            return;
        }
        const team = {
            teamName,
            members: [
                {
                    name: member1Name,
                    contact: member1Contact,
                    enrolment: member1Enrolment,
                },
                {
                    name: member2Name,
                    contact: member2Contact,
                    enrolment: member2Enrolment,
                },
                {
                    name: member3Name,
                    contact: member3Contact,
                    enrolment: member3Enrolment,
                },
                {
                    name: member4Name,
                    contact: member4Contact,
                    enrolment: member4Enrolment,
                },
            ],
        };
        const docRef = collection(db, "saviskar");
        addDoc(docRef, team)
            .then(() => {
                window.location.href = "/thank-you";
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    };

    return (
        <section className="flex max-mobile:inline ">
            <div
                id="section-1"
                className="flex-1 relative overflow-auto max-mobile:overflow-clip h-fit"
            >
                <img
                    src={saviskar}
                    className="absolute -z-50 opacity-10 h-full w-full object-cover"
                    alt="Background"
                />
                <h1 className="text-zinc-300 font-space text-7xl max-mobile:text-4xl m-4 bg-zinc-900 w-fit p-4 hover:translate-x-12 hover:bg-zinc-200 hover:text-zinc-900 transition-all">
                    Saviskar
                </h1>
                <div className="text-white m-4 font-inconsolata text-lg max-mobile:text-sm">
                    Welcome to Saviskar, the 36-hour long hackathon powered by
                    IQM! Are you ready to put your problem-solving skills to the
                    test and come up with innovative solutions to real-world
                    challenges? This is your chance to showcase your creativity,
                    work collaboratively with fellow developers and potentially
                    make a significant impact on society. <br />
                    <br /> During this hackathon, you will be presented with a
                    series of problem statements that require novel and
                    practical solutions. You can participate in team of 2 - 4
                    members to tackle the challenges together. The topics for
                    the problem statements will be announced at the start of the
                    event. Over the course of the 36 hours, you will have access
                    to a range of resources, including mentors, technical
                    support, and access to industry experts. We encourage you to
                    take advantage of these resources to develop your ideas and
                    build functional prototypes. At the end of the hackathon,
                    each team will have the opportunity to present their
                    solutions to a panel of judges. The winning team will
                    receive recognition, prizes, and the opportunity to develop
                    their solution further with IQM. <br></br> <br /> So what
                    are you waiting for? Register now for Saviskar, and get
                    ready to unleash your creativity and problem-solving skills!
                </div>
                <div className="text-white text-xs font-secular p-8 text-center">
                    Everyone is requested to kindly choose an appropriate team
                    name. <br />
                    ASPDC holds the right to change the team name or disqualify
                    team if it is found to be inappropriate.
                </div>
            </div>
            <div className="bg-black flex-1 ">
                <div className="text-white m-4 font-space text-4xl uppercase underline underline-offset-4">
                    Register
                </div>
                <div className="text-white font-space m-4">
                    <form>
                        <label htmlFor="teamName" className="text-lg">
                            <span className="text-red-700 text-sm mr-1">*</span>
                            Team Name
                        </label>
                        <br />
                        <input
                            id="teamName"
                            name="teamName"
                            type="text"
                            className="bg-transparent outline w-3/4 max-mobile:w-full h-10 border-2 border-white rounded-md p-2 mt-4 mb-4 "
                            placeholder="Go crazy"
                        />
                        <br />
                        <div className="text-lg -mb-2 max-mobile:text-xl max-mobile:mb-0">
                            Team Members
                        </div>
                        <br />
                        <label htmlFor="member1" className="text-lg">
                            <span className="text-red-700 text-xs mr-1">*</span>
                            Member 1
                        </label>
                        <br />
                        <input
                            id="member1Name"
                            name="member1"
                            type="text"
                            className="bg-transparent outline w-2/5 max-mobile:w-full h-10 border-2 border-white rounded-md p-2 mt-2 mb-4 mr-5"
                            placeholder="Full Name"
                        />
                        <input
                            id="member1Enrolment"
                            type="text"
                            placeholder="Enrolment ID"
                            className="bg-transparent outline w-2/5 max-mobile:w-full h-10 border-2 border-white rounded-md p-2 mt-2 mb-4 mr-5"
                        />
                        <input
                            id="member1Contact"
                            type="text"
                            placeholder="Contact Number"
                            className="bg-transparent outline w-2/5 max-mobile:w-full h-10 border-2 border-white rounded-md p-2  mb-4"
                        />
                        <br />
                        <label htmlFor="member2" className="text-lg">
                            <span className="text-red-700 text-xs mr-1">*</span>
                            Member 2
                        </label>
                        <br />
                        <input
                            id="member2Name"
                            name="member2"
                            type="text"
                            className="bg-transparent outline w-2/5 max-mobile:w-full h-10 border-2 border-white rounded-md p-2 mt-2 mb-4 mr-5"
                            placeholder="Full Name"
                        />
                        <input
                            id="member2Enrolment"
                            type="text"
                            placeholder="Enrolment ID"
                            className="bg-transparent outline w-2/5 max-mobile:w-full h-10 border-2 border-white rounded-md p-2 mt-2 mb-4 mr-5"
                        />
                        <input
                            id="member2Contact"
                            type="text"
                            placeholder="Contact Number"
                            className="bg-transparent outline w-2/5 max-mobile:w-full h-10 border-2 border-white rounded-md p-2 mt-2 mb-4 mr-5"
                        />
                        <br />
                        <label htmlFor="member3" className="text-lg">
                            Member 3
                        </label>
                        <br />
                        <input
                            id="member3Name"
                            name="member3"
                            type="text"
                            className="bg-transparent outline w-2/5 max-mobile:w-full h-10 border-2 border-white rounded-md p-2 mt-2 mb-4 mr-5"
                            placeholder="Full Name"
                        />
                        <input
                            id="member3Enrolment"
                            type="text"
                            placeholder="Enrolment ID"
                            className="bg-transparent outline w-2/5 max-mobile:w-full h-10 border-2 border-white rounded-md p-2 mt-2 mb-4 mr-5"
                        />
                        <input
                            id="member3Contact"
                            type="text"
                            placeholder="Contact Number"
                            className="bg-transparent outline w-2/5 max-mobile:w-full h-10 border-2 border-white rounded-md p-2 mt-2 mb-4 mr-5"
                        />
                        <br />
                        <label htmlFor="member4" className="text-lg">
                            Member 4
                        </label>
                        <br />
                        <input
                            id="member4Name"
                            name="member4"
                            type="text"
                            className="bg-transparent outline w-2/5 max-mobile:w-full h-10 border-2 border-white rounded-md p-2 mt-2 mb-4 mr-5"
                            placeholder="Full Name"
                        />
                        <input
                            id="member4Enrolment"
                            type="text"
                            placeholder="Enrolment ID"
                            className="bg-transparent outline w-2/5 max-mobile:w-full h-10 border-2 border-white rounded-md p-2 mt-2 mb-4 mr-5"
                        />
                        <input
                            id="member4Contact"
                            type="text"
                            placeholder="Contact Number"
                            className="bg-transparent outline w-2/5 max-mobile:w-full h-10 border-2 border-white rounded-md p-2 mt-2 mb-4 mr-5"
                        />
                        <br />
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                handleRegister();
                            }}
                            type="submit"
                            className="text-white w-full max-mobile:text-center mt-10 max-mobile:w-full text-lg outline outline-2 p-4 rounded-lg transform transition duration-300 ease-in-out bg-zinc-800 hover:bg-zinc-300 hover:text-zinc-800"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
