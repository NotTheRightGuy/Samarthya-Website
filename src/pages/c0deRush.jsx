export default function CodeRush() {
    return (
        <section className="flex h-screen">
            <div id="section-1" className="flex-1 relative overflow-auto">
                {/* <img
                    src={saviskar}
                    className="absolute -z-50 opacity-10 w-full h-full object-cover"
                /> */}
                <h1 className="text-zinc-300 font-space text-7xl m-4 bg-zinc-800 w-fit p-4 hover:translate-x-12 hover:bg-zinc-900 hover:text-white transition-all">
                    c0deRush
                </h1>
                <div className="text-white m-4 font-inconsolata text-lg">
                    Welcome to c0deRush - the ultimate 1v1 coding competition
                    where participants will go head-to-head in a race against
                    the clock and each other to solve a series of challenging
                    programming questions. <br />
                    <br /> This high-intensity event will test your coding
                    skills, speed, and accuracy as you compete against other
                    talented coders from around the world. Each round will
                    feature a different programming challenge, and the first
                    person to solve the problem correctly will be declared the
                    winner. To participate, all you need is a computer with a
                    stable internet connection and a passion for coding. Once
                    the event begins, you will have a set amount of time to
                    solve each challenge, and the fastest and most accurate
                    coder will move on to the next round. The competition will
                    take place online, and participants will be able to
                    communicate with each other through a chat platform. The
                    event is open to coders of all skill levels, and there will
                    be plenty of opportunities to learn and improve your coding
                    abilities throughout the competition. So, if you're ready to
                    put your coding skills to the test and compete against some
                    of the best coders in the world, then sign up for c0deRush
                    today!
                </div>
            </div>
            <div className="bg-black flex-1 ">
                <div className="text-white m-4 font-space text-4xl uppercase underline underline-offset-4">
                    Register
                </div>
                <div className="text-white font-space m-4">
                    <form>
                        <label htmlFor="teamName" className="text-2xl">
                            <span className="text-red-700 text-xs mr-1">*</span>
                            Team Name
                        </label>
                        <br />
                        <input
                            name="teamName"
                            type="text"
                            className="bg-transparent outline w-1/2 h-10 border-2 border-white rounded-md p-2 mt-4 mb-4"
                            placeholder="Go crazy"
                        />
                        <br />
                        <div className="text-2xl -mb-2">Team Members</div>
                        <br />
                        <label htmlFor="member1" className="text-xl">
                            <span className="text-red-700 text-xs mr-1">*</span>
                            Member 1
                        </label>
                        <br />
                        <input
                            name="member1"
                            type="text"
                            className="bg-transparent outline w-72 h-10 border-2 border-white rounded-md p-2 mt-2 mb-4 mr-5"
                            placeholder="Full Name"
                        />
                        <input
                            type="text"
                            placeholder="Enrolment ID"
                            className="bg-transparent outline w-1/4 h-10 border-2 border-white rounded-md p-2  mb-4 mr-5"
                        />
                        <input
                            type="text"
                            placeholder="Contact Number"
                            className="bg-transparent outline w-1/4 h-10 border-2 border-white rounded-md p-2  mb-4"
                        />
                        <br />
                        <label htmlFor="member1" className="text-xl">
                            <span className="text-red-700 text-xs mr-1">*</span>
                            Member 2
                        </label>
                        <br />
                        <input
                            name="member1"
                            type="text"
                            className="bg-transparent outline w-72 h-10 border-2 border-white rounded-md p-2 mt-2 mb-4 mr-5"
                            placeholder="Full Name"
                        />
                        <input
                            type="text"
                            placeholder="Enrolment ID"
                            className="bg-transparent outline w-1/4 h-10 border-2 border-white rounded-md p-2  mb-4 mr-5"
                        />
                        <input
                            type="text"
                            placeholder="Contact Number"
                            className="bg-transparent outline w-1/4 h-10 border-2 border-white rounded-md p-2  mb-4"
                        />
                        <br />
                        <label htmlFor="member1" className="text-xl">
                            Member 3
                        </label>
                        <br />
                        <input
                            name="member1"
                            type="text"
                            className="bg-transparent outline w-72 h-10 border-2 border-white rounded-md p-2 mt-2 mb-4 mr-5"
                            placeholder="Full Name"
                        />
                        <input
                            type="text"
                            placeholder="Enrolment ID"
                            className="bg-transparent outline w-1/4 h-10 border-2 border-white rounded-md p-2  mb-4 mr-5"
                        />
                        <input
                            type="text"
                            placeholder="Contact Number"
                            className="bg-transparent outline w-1/4 h-10 border-2 border-white rounded-md p-2  mb-4"
                        />
                        <br />
                        <label htmlFor="member1" className="text-xl">
                            Member 4
                        </label>
                        <br />
                        <input
                            name="member1"
                            type="text"
                            className="bg-transparent outline w-72 h-10 border-2 border-white rounded-md p-2 mt-2 mb-4 mr-5"
                            placeholder="Full Name"
                        />
                        <input
                            type="text"
                            placeholder="Enrolment ID"
                            className="bg-transparent outline w-1/4 h-10 border-2 border-white rounded-md p-2  mb-4 mr-5"
                        />
                        <input
                            type="text"
                            placeholder="Contact Number"
                            className="bg-transparent outline w-1/4 h-10 border-2 border-white rounded-md p-2  mb-4"
                        />
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
