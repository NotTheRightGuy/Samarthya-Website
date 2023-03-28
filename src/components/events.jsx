import EventCard from "./eventCard";

export default function Events() {
    return (
        <div id="events" className="section text-white text-center  my-32">
            <div className="bg-zinc-800 text-zinc-400 px-5 py-2 font-space text-3xl inline-flex -skew-y-3 ">
                EVENTS
            </div>
            <section className="Event-Card-Container flex my-16 mx-16 justify-evenly w-[90wh]">
                <EventCard
                    title={"Saviskar"}
                    content={
                        "Joust against another skilled programmer, competing to see who can solve a given problem faster. You'll need to think fast and act even faster, as you race to write the best code and beat your opponent to the finish line. It's a high-stakes battle of wits, with only one winner emerging victorious."
                    }
                />
                <EventCard
                    title={"Aiganite"}
                    content={
                        "An event where teams of people come together to collaborate on creating a solution to a problem or developing a project in 36 hours. Work tirelessly to develop a working prototype, pitch your ideas, and receive feedback from judges. "
                    }
                />
                <EventCard
                    title={"Devjousts"}
                    content={
                        "A sport where you collaborate and create your own team to compete against many other teams of competitive programmers. Ignite the logical side of your brain to find the best solution to a list of real world problems ."
                    }
                />
                <EventCard title={"Crack the Code"} />
                <EventCard title={"Figma Workshop"} />
            </section>
        </div>
    );
}
