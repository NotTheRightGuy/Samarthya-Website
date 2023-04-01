import design from "../assets/designDerby.gif";

export default function DesignDerby() {
    return (
        <section className="flex h-screen">
            <div id="section-1" className="flex-1 relative overflow-auto">
                <img
                    src={design}
                    className="absolute -z-50 opacity-10 w-full h-full object-cover"
                />
                <h1 className="text-zinc-300 font-space text-7xl m-4 bg-zinc-800 w-fit p-4 hover:translate-x-12 hover:bg-zinc-100 hover:text-zinc-900 transition-all">
                    Design Derby
                </h1>
                <div className="text-white m-4 font-inconsolata text-lg">
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
