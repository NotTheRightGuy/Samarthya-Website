import EventCard from "./eventCard";

export default function Events() {
    return (
        <div id="events" className="section text-white text-center my-32">
            <div className="bg-zinc-800 text-zinc-400 px-5 py-2 mb-8 font-space text-3xl inline-flex -skew-y-3 ">
                EVENTS
            </div>
            <section className="grid gap-4 grid-cols-2 mx-16 max-mobile:mx-4 max-mobile:grid-cols-1">
                <EventCard
                    title={"Saviskar"}
                    content={
                        "Participate in the 36-hour Hackathon, powered by IQM where you can showcase your creativity and innovation skills. You can build anything you want, from a website to mobile apps. The only limit is your imagination!"
                    }
                    date={"30th April"}
                    team_number={"2-4"}
                    site={"saviskar"}
                />
                <EventCard
                    title={"c0deRush"}
                    content={
                        "Joust against another skilled programmer, competing to see who can solve a given problem faster. You'll need to think fast and act even faster, as you race to write the best code and beat your opponent to the finish line. It's a high-stakes battle of wits, with only one winner emerging victorious."
                    }
                    date={"30th April"}
                    team_number={"Solo"}
                    site={"coderush"}
                />
                <EventCard
                    title={"Byte Brawl"}
                    content={
                        "A sport where you collaborate and create your own team to compete against many other teams of competitive programmers. Ignite the logical side of your brain to find the best solution to a list of real world problems ."
                    }
                    date={"30th April"}
                    team_number={"2-4"}
                    site={"byte-brawl"}
                />
                <EventCard
                    title={"cr4ckcryp8"}
                    content={
                        "Gear up to break your brain! In this event you will be tasked with solving a series of intricate puzzles scattered throughout the techfest. From deciphering cryptic codes to unraveling complex algorithms, each puzzle will push your mind to its limits. But with determination and perseverance, you will be able to overcome any obstacle that comes your way."
                    }
                    date={"30th April"}
                    team_number={"Solo"}
                    site={"crack-crypt"}
                />
                <EventCard
                    title={"Design Derby"}
                    content={
                        "Unleash your inner artist and get ready to showcase your web design skills in an epic competition! Join forces with your team to create the most stunning and imaginative website, vying to take home the top prize."
                    }
                    date={"30th April"}
                    team_number={"Solo"}
                    site={"design-derby"}
                />
                <EventCard
                    title={"Intrested But!"}
                    content={
                        "Don't have a team to participate in the events? Don't have much knowledge about coding and development? Don't worry we have got you covered. We will also help you to find a team for the events. RSVP below so we can help you out."
                    }
                    date={"6-7 May"}
                    team_number={"Solo"}
                    hide={true}
                />
            </section>
        </div>
    );
}
