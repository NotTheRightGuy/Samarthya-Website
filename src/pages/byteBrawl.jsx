import byteBrawl from "../assets/byteBrawl.gif";

export default function ByteBrawl() {
    return (
        <section className="flex h-screen">
            <div id="section-1" className="flex-1 relative overflow-auto">
                <img
                    src={byteBrawl}
                    className="absolute -z-50 opacity-10 w-full h-full object-cover"
                />
                <h1 className="text-zinc-300 font-space text-7xl m-4 bg-zinc-900 w-fit p-4 hover:translate-x-12 hover:bg-zinc-400 hover:text-zinc-900 transition-all">
                    Byte Brawl
                </h1>
                <div className="text-white m-4 font-inconsolata text-lg">
                    Byte Brawl is an exciting event for competitive programmers
                    who are passionate about coding and ready to put their
                    skills to the test. In this event, teams of 2-4 players will
                    compete against other teams to come out victorious as the
                    best competitive programmers in the university. <br />
                    <br /> During Byte Brawl, teams will be presented with a
                    series of programming challenges that they must solve within
                    a set time limit. These challenges will test the team's
                    knowledge of data structures, algorithms, and programming
                    concepts, as well as their ability to work together under
                    pressure. The event will be held in a competitive and
                    collaborative atmosphere to help participants learn from
                    each other and push their limits. Throughout the
                    competition, teams will earn points for each challenge they
                    successfully complete, and the team with the most points at
                    the end of the event will be crowned the winners of Byte
                    Brawl. <br />
                    <br /> Byte Brawl is an excellent opportunity for
                    competitive programmers to showcase their skills and network
                    with other like-minded individuals. It's a great way to
                    develop problem-solving and teamwork skills, and to learn
                    from some of the best programmers in the university.
                </div>
                <div className="text-white text-xs font-secular p-8 text-center">
                    It is expected from everyone to choose an appropriate team
                    name. <br /> ASPDC holds the right to disqualify a team
                    based on inappropriate names.
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
