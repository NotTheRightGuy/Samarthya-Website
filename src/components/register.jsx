import register from "../assets/register.gif";

export default function Register() {
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
                    <form>
                        <input
                            type="text"
                            placeholder="First Name"
                            className="bg-transparent outline outline-1 text-white p-2 m-4  outline-white rounded-lg font-inconsolata text-2xl max-mobile:text-xl"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="bg-transparent outline outline-1 text-white p-2 m-4 outline-white rounded-lg font-inconsolata text-2xl max-mobile:text-xl"
                        />
                        <br />
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-transparent outline outline-1 text-white p-2 m-4  outline-white rounded-lg font-inconsolata text-2xl max-mobile:text-xl"
                        />
                        <input
                            type="text"
                            placeholder="Contact Number"
                            className="bg-transparent outline outline-1 text-white p-2 m-4  outline-white rounded-lg font-inconsolata text-2xl max-mobile:text-xl"
                        />
                        <br />
                        <input
                            type="text"
                            placeholder="Enrolment ID"
                            className="bg-transparent outline outline-1 text-white p-2 mt-4 mb-8  outline-white rounded-lg font-inconsolata text-2xl max-mobile:text-xl"
                        />
                        <br />
                        <button
                            className="text-white font-space text-xl bg-zinc-600 px-4 py-2 rounded-lg"
                            onClick={(e) => e.preventDefault()}
                            onMouseEnter={() => {
                                handleEventBtn();
                            }}
                        >
                            Events Intrested{" "}
                            <span
                                id="eventBtn"
                                className="fa-solid fa-arrow-down"
                            ></span>
                        </button>
                        <br></br>
                        {/* <div className="pl-3 flex justify-center max-mobile:grid">
                            <div>
                                <div className="text-xl text-zinc-400 font-space mb-4 max-mobile:text-base">
                                    Which year are you in?
                                </div>
                                <input
                                    type="radio"
                                    name="year"
                                    id="first"
                                    value="1st Year"
                                />
                                <label
                                    for="first"
                                    className="text-zinc-400 text-base pl-2 font-space"
                                >
                                    1st Year
                                </label>
                                <br />
                                <input
                                    type="radio"
                                    name="year"
                                    id="second"
                                    value="2nd Year"
                                />
                                <label
                                    htmlFor="second"
                                    className="text-zinc-400 text-base pl-2 font-space"
                                >
                                    2nd Year
                                </label>
                                <br />
                                <input
                                    type="radio"
                                    name="year"
                                    id="third"
                                    value="3rd Year"
                                />
                                <label
                                    htmlFor="third"
                                    className="text-zinc-400 text-base pl-2 font-space"
                                >
                                    3rd Year
                                </label>
                                <br />
                                <input
                                    type="radio"
                                    name="year"
                                    id="fourth"
                                    value="4th Year"
                                />
                                <label
                                    htmlFor="fourth"
                                    className="text-zinc-400 text-base pl-2 font-space"
                                >
                                    4th Year
                                </label>
                            </div>
                            <div className="pl-10">
                                <div className="text-xl text-zinc-400 font-space mb-4 max-mobile:text-base max-mobile:mt-4 ">
                                    What events are you intrested in?
                                </div>
                                <input
                                    type="checkbox"
                                    name="event"
                                    id="saviskar"
                                    value="Saviskar"
                                />
                                <label
                                    htmlFor="first"
                                    className="text-zinc-400 text-base pl-2 font-space"
                                >
                                    Saviskar
                                </label>
                                <br />
                                <input
                                    type="checkbox"
                                    name="event"
                                    id="1v1"
                                    value="1v1 Coding"
                                />
                                <label
                                    htmlFor="second"
                                    className="text-zinc-400 text-base pl-2 font-space"
                                >
                                    1v1 Coding
                                </label>
                                <br />
                                <input
                                    type="checkbox"
                                    name="event"
                                    id="figma"
                                    value="Figma Workshop"
                                />
                                <label
                                    htmlFor="third"
                                    className="text-zinc-400 text-base pl-2 font-space"
                                >
                                    Figma Workshop
                                </label>
                                <br />
                                <input
                                    type="checkbox"
                                    name="event"
                                    id="cryptic"
                                    value="cryptic puzzle"
                                />
                                <label
                                    htmlFor="fourth"
                                    className="text-zinc-400 text-base pl-2 font-space"
                                >
                                    Cryptic Puzzle
                                </label>
                                <br />
                                <input
                                    type="checkbox"
                                    name="event"
                                    id="teamCP"
                                    value="Team Based CP"
                                />
                                <label
                                    htmlFor="fourth"
                                    className="text-zinc-400 text-base pl-2 font-space"
                                >
                                    Team Based CP
                                </label>
                            </div>
                        </div> */}
                        <button
                            type="submit"
                            className="bg-zinc-800 text-zinc-400 px-36 rounded-lg p-2 mt-8 font-space h-12 max-mobile:px-12 text-2xl transition ease-in-out hover:outline hover:scale-105 transform hover:shadow-2xl max-mobile:text-base"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
