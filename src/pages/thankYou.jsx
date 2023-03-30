import dancingCat from "../assets/dancing-cat.gif";

export default function ThankYou() {
    return (
        <div className="flex justify-center h-screen flex-col text-center gap-4">
            <h1 className="text-zinc-300 font-space text-7xl uppercase max-mobile:text-4xl">
                registration successful
            </h1>
            <div className="text-zinc-500 text-2xl font-space mt-4 max-mobile:text-base">
                Thank you for showing intrest in{" "}
                <div className="bg-white px-2 rounded-lg hover:scale-105 transition-all inline-flex">
                    Samarthya
                </div>
                <br></br>You will hear from us soon!
                <br />
                <span className="text-xs bg-zinc-800 inline-flex p-2 mt-4 rounded max-mobile:mt-2 max-mobile:p-1">
                    Please Make Sure that this is only to see how many people
                    are intrested. <br /> Team registration form will be shared
                    with you soon
                </span>
                <div className="text-lg mt-4">Until then 👇</div>
            </div>
            <div>
                <img
                    src={dancingCat}
                    alt="dancing-cat"
                    className="inline-flex h-64 rounded hover:animate-pulse transition-all max-mobile:h-36"
                />
            </div>
        </div>
    );
}
