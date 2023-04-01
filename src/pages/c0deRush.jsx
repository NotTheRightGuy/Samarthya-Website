import codeRush from "../assets/c0derush.gif";

export default function CodeRush() {
    return (
        <section className="flex h-screen">
            <div id="section-1" className="flex-1 relative overflow-auto">
                <img
                    src={codeRush}
                    className="absolute -z-50 opacity-10 w-full h-full object-cover"
                />
                <h1 className="text-zinc-300 font-space text-7xl m-4 bg-zinc-900 w-fit p-4 hover:translate-x-12 hover:bg-zinc-400 hover:text-zinc-900 transition-all">
                    c0deRush
                </h1>
                <div className="text-white m-4 font-inconsolata text-lg">
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
            <div className="bg-black flex-1 ml-4 mt-4">
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
                                placeholder="John"
                                type="text"
                                name="name"
                                id="name"
                                className="bg-transparent outline w-1/2 h-10 border-2 border-white rounded-md p-2 mt-4 mb-4"
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
                                id="name"
                                className="bg-transparent outline w-1/2 h-10 border-2 border-white rounded-md p-2 mt-4 mb-4"
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="text-xl">
                                Enrolment ID
                            </label>
                            <br />
                            <input
                                placeholder="12 Digit Enrolment ID"
                                type="text"
                                name="name"
                                id="name"
                                className="bg-transparent outline w-1/2 h-10 border-2 border-white rounded-md p-2 mt-4 mb-4"
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
                                id="name"
                                className="bg-transparent outline w-1/2 h-10 border-2 border-white rounded-md p-2 mt-4 mb-4"
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
                                id="name"
                                className="bg-transparent outline w-1/2 h-10 border-2 border-white rounded-md p-2 mt-4 mb-4"
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-white mt-10 text-xl outline outline-2 p-4 rounded-lg hover:scale-105 transform transition duration-300 ease-in-out bg-zinc-800 hover:bg-zinc-300 hover:text-zinc-800"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
