export default function ThankYou() {
    return (
        <div className="flex justify-center h-screen flex-col text-center">
            <h1 className="text-zinc-300 font-space text-7xl uppercase max-mobile:text-4xl">
                Registration successful
            </h1>
            <div className="text-zinc-500 text-2xl font-space max-mobile:text-base">
                <br></br>You will hear from us soon!
                <br />
            </div>
            <span className="text-white font-space text-xs my-4">
                {" "}
                Until Then follow us on
            </span>
            <div>
                <div
                    onClick={() => {
                        window.open(
                            "https://discord.com/invite/QbrJNMTzUj",
                            "_blank"
                        );
                    }}
                    className="fa-brands fa-discord text-white text-3xl hover:-translate-y-1 transition-all cursor-pointer"
                ></div>
                <div
                    onClick={() => {
                        window.open(
                            "https://www.instagram.com/samarthya_au/",
                            "_blank"
                        );
                    }}
                    className="fa-brands fa-instagram text-white text-3xl ml-4 hover:-translate-y-1 transition-all cursor-pointer"
                ></div>
                <div></div>
            </div>
        </div>
    );
}
