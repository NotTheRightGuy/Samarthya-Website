export default function Prizes() {
    return (
        <div
            id="prizes"
            className="section h-fit bg-zinc-800 m-16 rounded-lg sm:m-8 max-mobile:m-4"
        >
            <div className="relative">
                <div className="text-8xl font-space absolute top-1 left-1 text-zinc-500">
                    03
                </div>
                <div className="absolute font-space text-2xl text-white top-16 left-12">
                    PRIZES
                </div>
            </div>
            <div className="text-zinc-300 pt-32 p-4  font-inconsolata text-2xl h-fit grid grid-cols-3 gap-8 max-mobile:grid-cols-1">
                <div className="outline outline-2 rounded-lg p-4  max-mobile:w-[111%]   hover:outline-4 transition-all hover:scale-105 bg-zinc-800">
                    <h1 className="flex gap-6">
                        <div className="text-zinc-400 text-4xl mb-4 max-mobile:text-2xl">
                            Cash Prizes
                        </div>
                        <div className="fa-solid fa-sack-dollar mt-2"></div>
                    </h1>
                    <div className="text-lg max-mobile:text-sm">
                        Cash Prizes and monetary rewards will we awarded to the
                        winning teams and individuals. All participants who
                        submit a valid solution will receive a certificate of
                        participation. This certificate is designed to recognize
                        the hard work and dedication of all participants.
                    </div>
                </div>
                <div className="outline outline-2 rounded-lg p-4 hover:outline-4 transition-all col-span-2 hover:scale-105 bg-zinc-800">
                    <h1 className="flex gap-6">
                        <div className="text-zinc-400 text-4xl mb-4 max-mobile:text-2xl">
                            Internship
                        </div>
                        <div className="fa-solid fa-building-user mt-2"></div>
                    </h1>
                    <div className="text-lg max-mobile:text-sm">
                        You will get a chance to receive Internships which will
                        provide learning experience, hands-on training, and a
                        chance to apply your knowledge in a real-world setting.
                        Internships are a great way to gain experience and build
                        your resume. They can also help you decide if a
                        particular career is right for you. So get ready to
                        showcase your skills and ideas in the upcoming events.
                        We wish you all the best of luck and we koop forward to
                        seeing you at the event.
                    </div>
                </div>
                <div className="outline outline-2 rounded-lg p-4 hover:outline-4 transition-all col-span-2 hover:scale-105 bg-zinc-800">
                    <h1 className="flex gap-6">
                        <div className="text-zinc-400 text-4xl mb-4 max-mobile:text-2xl">
                            Mentorship
                        </div>
                        <div className="fa-solid fa-user mt-2"></div>
                    </h1>
                    <div className="text-lg max-mobile:text-sm">
                        Participants will receive a chance to work with industry
                        professionals. Mentors can provide feedback on
                        participants' work, help them identify their strengths
                        and weaknesses, and provide suggestions for improvement.
                        Mentorship provides participants to learn from the
                        experiences of others who have already achieved success
                        in their respective fields. This type of guidance can be
                        particularly valuable for participants who are just
                        starting their careers.
                    </div>
                </div>
                <div className="outline outline-2 rounded-lg p-4  max-mobile:w-[111%]   hover:outline-4 transition-all hover:scale-105 bg-zinc-800">
                    <h1 className="flex gap-6">
                        <div className="text-zinc-400 text-4xl mb-4 max-mobile:text-2xl">
                            Goodies
                        </div>
                        <div className="fa-solid fa-paperclip mt-2"></div>
                    </h1>
                    <div className="text-lg max-mobile:text-sm">
                        Goodies,swags and other fun and useful will be provided
                        to you. Some on which will be open for all to takeway
                        and some will be given to the winners. These goodies are
                        a token of appreciation for your participation and
                        reminder of the memorable experience you will have at
                        the event.
                    </div>
                </div>
            </div>
            <div className="text-white text-center font-space text-sm pb-2">
                Stay tuned for more detailed prize announcements!
            </div>
        </div>
    );
}
