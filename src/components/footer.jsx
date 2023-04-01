export default function Footer() {
    return (
        <footer className="text-zinc-400 font-inconsolata bg-zinc-800 mt-32 mx-16 desktop:rounded-lg p-1 text-xs flex justify-between max-mobile:mx-0 max-mobile:block">
            <div className="pl-1 ">Baked With Love by ASPD Club</div>
            <div className="flex gap-2 pr-1">
                <div className="max-mobile:pl-1">
                    You can find us here in case of any query
                </div>
                <div
                    className="fa-brands fa-discord mt-1 hover:animate-spin-slow hover:cursor-pointer"
                    onClick={() =>
                        window.open(
                            "https://discord.com/invite/QbrJNMTzUj",
                            "_blank"
                        )
                    }
                ></div>
                <div
                    className="fa-brands fa-instagram mt-1 hover:animate-spin-slow hover:cursor-pointer"
                    onClick={() => {
                        window.open(
                            "https://www.instagram.com/samarthya_au/",
                            "_blank"
                        );
                    }}
                ></div>
                <div
                    className="fa-solid fa-envelope mt-1 hover:animate-spin-slow hover:cursor-pointer"
                    onClick={() =>
                        window.open(
                            "https://mail.google.com/mail/?view=cm&fs=1&to=clubaspd@gmail.com",
                            "_blank"
                        )
                    }
                ></div>
            </div>
        </footer>
    );
}
