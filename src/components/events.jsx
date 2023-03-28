import EventCard from "./eventCard";

export default function Events() {
    return (
        <div id="events" className="section text-white text-center my-32">
            <div className="bg-zinc-800 text-zinc-400 px-5 py-2 mb-8 font-space text-3xl inline-flex -skew-y-3 ">
                EVENTS
            </div>
            <section className="grid gap-4 grid-cols-2 mx-16">
                <EventCard
                    title={"Saviskar"}
                    content={
                        "Joust against another skilled programmer, competing to see who can solve a given problem faster. You'll need to think fast and act even faster, as you race to write the best code and beat your opponent to the finish line. It's a high-stakes battle of wits, with only one winner emerging victorious."
                    }
                    date={"30th April"}
                    team_number={"Solo"}
                />
                <EventCard
                    title={"Aiganite"}
                    content={
                        "An event where teams of people come together to collaborate on creating a solution to a problem or developing a project in 36 hours. Work tirelessly to develop a working prototype, pitch your ideas, and receive feedback from judges. "
                    }
                    date={"30th April"}
                    team_number={"2-4"}
                />
                <EventCard
                    title={"Devjousts"}
                    content={
                        "A sport where you collaborate and create your own team to compete against many other teams of competitive programmers. Ignite the logical side of your brain to find the best solution to a list of real world problems ."
                    }
                    date={"30th April"}
                    team_number={"2-4"}
                />
                <EventCard
                    title={"Crack the Code"}
                    content={
                        "Gear up to break your brain! In this event you will be tasked with solving a series of intricate puzzles scattered throughout the techfest . From deciphering cryptic codes to unraveling complex algorithms, each puzzle will push your mind to its limits. But with determination and perseverance, you will be able to overcome any obstacle that comes your way."
                    }
                    date={"30th April"}
                    team_number={"Solo"}
                />
                <EventCard
                    title={"Figma Workshop"}
                    content={
                        "Unleash your inner artist and get ready to showcase your web design skills in an epic competition! Join forces with your team to create the most stunning and imaginative website, vying to take home the top prize."
                    }
                    date={"30th April"}
                    team_number={"Solo"}
                />
            </section>
        </div>
    );
}
