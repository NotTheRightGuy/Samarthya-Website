export default function Prizes() {
    return (
        <div
            id="prizes"
            className="section h-fit bg-zinc-800 m-16 rounded-lg sm:m-8"
        >
            <div className="relative">
                <div className="text-8xl font-space absolute top-1 left-1 text-zinc-500">
                    03
                </div>
                <div className="absolute font-space text-2xl text-white top-16 left-12">
                    PRIZES
                </div>
            </div>
            <div className="text-zinc-300 pt-32 p-4 font-inconsolata text-2xl h-screen grid grid-cols-3 gap-8">
                <div className="outline outline-2 rounded-lg p-4 hover:outline-4 transition-all hover:scale-105">
                    <h1 className="flex gap-6">
                        <div className="text-zinc-400 text-4xl mb-4">
                            Cash Prizes
                        </div>
                        <div className="fa-solid fa-sack-dollar mt-2"></div>
                    </h1>
                    <div className="text-lg">
                        Cash prizes and monetary rewards will beg iven to
                        individuals or groups for their accomplishments or
                        success in events.
                    </div>
                </div>
                <div className="outline outline-2 rounded-lg p-4 hover:outline-4 transition-all col-span-2 pb-11 hover:scale-105">
                    <h1 className="flex gap-6">
                        <div className="text-zinc-400 text-4xl mb-4">
                            Internship
                        </div>
                        <div className="fa-solid fa-building-user mt-2"></div>
                    </h1>
                    <div className="text-lg">
                        Internship oppurtunity will be provided to students by
                        reputed companies and organizations.
                    </div>
                </div>
                <div className="outline outline-2 rounded-lg p-4 hover:outline-4 transition-all col-span-2 pb-11 hover:scale-105">
                    <h1 className="flex gap-6">
                        <div className="text-zinc-400 text-4xl mb-4">
                            Mentorship
                        </div>
                        <div className="fa-solid fa-user mt-2"></div>
                    </h1>
                    <div className="text-lg">
                        Cash prizes are monetary rewards will begiven to
                        individuals or groups for their accomplishments or
                        success in events.
                    </div>
                </div>
                <div className="outline outline-2 rounded-lg p-4 hover:outline-4 transition-all hover:scale-105">
                    <h1 className="flex gap-6">
                        <div className="text-zinc-400 text-4xl mb-4">
                            Goodies
                        </div>
                        <div className="fa-solid fa-paperclip mt-2"></div>
                    </h1>
                    <div className="text-lg">
                        Cash prizes are monetary rewards will begiven to
                        individuals or groups for their accomplishments or
                        success in events.
                    </div>
                </div>
            </div>
            <div className="text-white text-center font-space text-sm pb-2">
                Stay tuned for more detailed prize announcements!
            </div>
        </div>
    );
}
