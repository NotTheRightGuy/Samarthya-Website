import eyes from "../assets/crackTheCode.gif";

export default function CrackCrypt() {
    return (
        <div className="h-screen flex relative justify-center items-center flex-col">
            <div>
                <img
                    src={eyes}
                    alt="All Seeing Eyes"
                    className="absolute -z-50 opacity-25 top-0 left-0 w-full h-full object-cover"
                />
            </div>
            <h1 className=" font-space text-7xl bg-zinc-800 w-fit text-zinc-500 p-4 hover:scale-110 transition-all">
                cr4ckcryp7
            </h1>
            <div className="font-space text-xl text-white mt-2 text-center p-20">
                Introducing{" "}
                <span className="bg-white text-black pl-2 ">c4ckcryp7 </span> ,
                a one-of-a-kind competition that promises to challenge your
                intellect and reward your persistence.{" "}
                <span className="bg-white text-black pl-2 ">c4ckcryp7 </span>
                is a series of intricate and perplexing puzzles that will test
                your knowledge of cryptography, steganography, and other
                esoteric fields. <br />
                <br /> Each puzzle will lead you down a rabbit hole of clues,
                codes, and ciphers, pushing you to think outside the box and
                unravel the final message. You'll have to access a variety of
                resources and tools to help you along the way, but ultimately,
                it will be up to your own intelligence and ingenuity to crack
                the puzzle and come out on top. Only the first person (or team)
                to complete all the puzzles and unlock the final message will
                claim the grand prize. So what are you waiting for? Join the
                ranks of the most talented cryptographers and puzzle enthusiasts
                and take on the Challenge. But be warned, only the brave and the
                brilliant will succeed. Are you up for the challenge?
                <br />
                <br />
                <span className="bg-white text-black text-xs p-2">
                    You will find the first clue here on 26th April
                </span>
            </div>
        </div>
    );
}
