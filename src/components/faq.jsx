export default function FAQ() {
    return (
        <div
            id="faq"
            className="section h-fit bg-zinc-800 m-16 rounded-lg sm:m-8 pb-5 max-mobile:m-4 max-mobile:pr-4"
        >
            <div className="relative">
                <div className="text-8xl font-space absolute top-1 left-1 text-zinc-500">
                    04
                </div>
                <div className="absolute font-space text-2xl text-white top-16 left-12">
                    FAQ
                </div>
            </div>

            <div className="text-white font-inconsolata pt-32 pl-4 grid gap-4 ">
                <details>
                    <summary className="text-2xl transition-all text-zinc-300 w-fit cursor-pointer outline p-4 rounded-lg max-mobile:p-2 max-mobile:text-xl">
                        Who is eligible to apply?{" "}
                    </summary>
                    <div>
                        <p className="ml-6 text-lg w-fit mt-2 max-mobile:text-sm">
                            Current Students of Adani University are allowed to
                            apply only.
                        </p>
                    </div>
                </details>
                <details>
                    <summary className="text-2xl transition-all text-zinc-300 w-fit cursor-pointer outline p-4 rounded-lg max-mobile:text-xl">
                        Can I participate without a technical background?
                    </summary>
                    <div>
                        <p className="ml-6 text-lg w-fit mt-2 max-mobile:text-sm">
                            Of course you can! Creativity is independent of your
                            technical skills. You can learn the tools and
                            technologies anytime.
                        </p>
                    </div>
                </details>
                <details>
                    <summary className="text-2xl transition-all text-zinc-300 w-fit cursor-pointer outline p-4 rounded-lg max-mobile:text-xl">
                        Can I start working on my hack before the event?
                    </summary>
                    <div>
                        <p className="ml-6 text-lg w-fit mt-2 max-mobile:text-sm">
                            No. In the interest of fairness, we don't allow
                            students to work on projects before Saviskar begins.
                            However, you can familiarize yourself with the tools
                            and technologies beforehand.
                        </p>
                    </div>
                </details>
                <details>
                    <summary className="text-2xl transition-all text-zinc-300 w-fit cursor-pointer outline p-4 rounded-lg max-mobile:text-xl">
                        Is there any registration fee?
                    </summary>
                    <div>
                        <p className="ml-6 text-lg w-fit mt-2 max-mobile:text-sm">
                            No. Registration are completely free of cost.
                        </p>
                    </div>
                </details>
                <details>
                    <summary className="text-2xl transition-all text-zinc-300 w-fit cursor-pointer outline p-4 rounded-lg max-mobile:text-xl">
                        Will accomodation and food be provided?
                    </summary>
                    <div>
                        <p className="ml-6 text-lg w-fit mt-2 max-mobile:text-sm">
                            Yes, absolutely! Accomodation and food will be
                            provided to all pariticpants of Saviskar in the
                            college. We'll make sure you have a comfortable
                            stay.
                        </p>
                    </div>
                </details>
                <details>
                    <summary className="text-2xl transition-all text-zinc-300 w-fit cursor-pointer outline p-4 rounded-lg max-mobile:text-xl">
                        What are the selection criteria for Saviskar?
                    </summary>
                    <div>
                        <p className="ml-6 text-lg w-fit mt-2 max-mobile:text-sm">
                            We are looking for innovative people who can build
                            crazy, unique solutions to real-world problems. We
                            will be conducting an elimination round a week or
                            two before the event to select the top 15 teams. The
                            top 15 teams will be invited to the final round of
                            Saviskar on 6-7 May.
                        </p>
                    </div>
                </details>
                <details>
                    <summary className="text-2xl transition-all text-zinc-300 w-fit cursor-pointer outline p-4 rounded-lg max-mobile:text-xl">
                        Do I need to have a team to participate in Saviskar?
                    </summary>
                    <div>
                        <p className="ml-6 text-lg w-fit mt-2 max-mobile:text-sm">
                            Yes, Saviskar is team event. Student teams need a
                            minimum of two members but a maximum of 4. However
                            you can RSVP and form teams after or we can help you
                            find team members as well.
                        </p>
                    </div>
                </details>
                <details>
                    <summary className="text-2xl transition-all text-zinc-300 w-fit cursor-pointer outline p-4 rounded-lg max-mobile:text-xl">
                        Once selected for the hackathon, what should I bring?
                    </summary>
                    <div>
                        <p className="ml-6 text-lg w-fit mt-2 max-mobile:text-sm">
                            Bring your student ID, laptop, and chargers. A
                            pillow and sleeping bag may be helpful as well. Lots
                            of enthusiasm is a must. Please leave anything
                            illegal at home.
                        </p>
                    </div>
                </details>
                <details>
                    <summary className="text-2xl transition-all text-zinc-300 w-fit cursor-pointer outline p-4 rounded-lg max-mobile:text-xl">
                        What are the perks of participating in this event?
                    </summary>
                    <div>
                        <p className="ml-6 text-lg w-fit mt-2 max-mobile:text-sm">
                            Samarthya will instantly increase your knowledge and
                            skill level and serve as a platform to socialize
                            with the tech community. Cash prizes and other perks
                            are in store for the winners and cool swag for all
                            participants. For more details, stay tuned to our
                            website {";)"}
                        </p>
                    </div>
                </details>
                <details>
                    <summary className="text-2xl transition-all text-zinc-300 w-fit cursor-pointer outline p-4 rounded-lg max-mobile:text-xl">
                        Still got questions?
                    </summary>
                    <div>
                        <p className="ml-6 text-lg w-fit mt-2 max-mobile:text-sm">
                            Feel free to drop a message to us at <br />
                            <span className="fa-brands fa-whatsapp"></span>
                            <span className="ml-2">
                                Janmejay Chatterjee +91-90165 89044
                            </span>
                            <br />
                            <span className="fa-brands fa-whatsapp"></span>
                            <span className="ml-2">
                                Dev Sanghavi +91-98792 00470
                            </span>
                            <br />
                            <span className="fa-regular fa-envelope"></span>
                            <span className="ml-2">
                                ASPDC clubaspd@gmail.com
                            </span>
                        </p>
                    </div>
                </details>
            </div>
        </div>
    );
}
