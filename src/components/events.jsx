import EventCard from "./eventCard";

export default function Events() {
    return (
        <div id="events" className="section text-white text-center  my-32">
            <div className="bg-zinc-800 text-zinc-400 px-5 py-2 font-space text-3xl inline-flex -skew-y-3 ">
                EVENTS
            </div>
            <section className="Event-Card-Container flex my-16 mx-16 justify-evenly w-[90wh]">
                <EventCard content={"Hello World"} />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
            </section>
        </div>
    );
}
