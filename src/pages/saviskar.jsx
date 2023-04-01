import saviskar from "../assets/saviskar.gif";
export default function Saviskar() {
    return (
        <section className="flex h-screen">
            <div id="section-1" className="flex-1 relative overflow-auto">
                <img
                    src={saviskar}
                    className="absolute -z-50 opacity-10 w-full h-full object-cover"
                />
                <h1 className="text-zinc-300 font-space text-7xl m-4 bg-zinc-900 w-fit p-4 hover:translate-x-12 hover:bg-zinc-400 hover:text-zinc-900 transition-all">
                    Saviskar
                </h1>
                <div className="text-white m-4 font-inconsolata text-lg">
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
