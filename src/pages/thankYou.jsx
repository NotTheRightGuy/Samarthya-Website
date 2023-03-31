import dancingCat from "../assets/dancing-cat.gif";

export default function ThankYou() {
    return (
        <div className="flex justify-center h-screen flex-col text-center gap-4">
            <h1 className="text-zinc-300 font-space text-7xl uppercase max-mobile:text-4xl">
                RSVP SUCCESSFUL
            </h1>
            <div className="text-zinc-500 text-2xl font-space mt-4 max-mobile:text-base">
                Thank you for showing intrest in{" "}
                <div className="bg-white px-2 rounded-lg hover:scale-105 transition-all inline-flex">
                    Samarthya
                </div>
                <br></br>You will hear from us soon!
                <br />
            </div>
            <div>
                <img
                    src={dancingCat}
                    alt="dancing-cat"
                    className="hidden h-64 rounded hover:animate-pulse transition-all max-mobile:h-36"
                />
            </div>
        </div>
    );
}
