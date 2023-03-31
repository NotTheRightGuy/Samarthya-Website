import EventCard from "./eventCard";

export default function Prizes() {
    return (
        <div
            id="prizes"
            className="section h-fit bg-zinc-800 m-16 rounded-lg sm:m-8"
        >
            <div className="rounded-lg relative">
                <div className="text-8xl font-space absolute top-1 left-1 text-zinc-500">
                    03
                </div>
                <div className="absolute font-space text-2xl text-white top-16 left-12 ">
                    PRIZES
                </div>
            </div>
            <div className="grid gap-4 grid-cols-4 mx-16 max-mobile:mx-2 max-mobile:grid-cols-1 text-zinc-300 pt-32 p-4 font-inconsolata text-2xl">
            <EventCard
                    title={"Mentorship"}
                    content={
                        "You will get a change to work with seasoned professional in the technology industry, who can provide you guidance and share their experience."
                    }
                />
                <EventCard
                    title={"Cash Prize"}
                    content={
                        "You can win cash prize if you are among one of the top participants in any of the events will be reviled later on."
                    }
                />
                 <EventCard
                    title={"Internship"}
                    content={
                        "If you participate in the hackathon and win the hackathon then there is a change that a company can offer an internhip to you."
                    }
                />
                 <EventCard
                    title={"Goodies"}
                    content={
                        "There are tons and tons of goddies and swags present like badges, stickers, bottle, t-shirt, hand bands and many more."
                    }
                />
            </div>
        </div>
    );
}
