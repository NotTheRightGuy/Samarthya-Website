import gif from "../assets/scroller.gif";

export default function About() {
    return (
        <section
            id="about"
            className="grid h-screen bg-zinc-800 rounded-lg m-16 grid-cols-2 text-white section overflow-hidden"
        >
            <div className="rounded-lg relative">
                <div className="text-8xl font-space absolute top-1 left-1 text-zinc-500">
                    01
                </div>
                <div className="absolute font-space text-2xl text-white top-16 left-12 ">
                    ABOUT
                </div>
                <div className="text-zinc-500 font-inconsolata text-2xl absolute top-32 left-12">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatem, quam? Reiciendis vitae voluptatibus error
                    ducimus ipsa sed libero! Laudantium mollitia ipsa
                    blanditiis, quos iusto unde perspiciatis animi. Doloremque
                    ratione esse laboriosam maxime accusamus, mollitia expedita
                    quaerat reprehenderit repudiandae nesciunt iure recusandae
                    debitis commodi voluptatem dignissimos cumque quidem tempore
                    <br></br>
                    <br></br>
                    pariatur, perspiciatis suscipit aliquid. Repellendus minus
                    beatae quia ex quaerat sapiente perferendis distinctio
                    veniam asperiores, impedit libero non voluptatibus,
                    excepturi hic? Fuga facere odit totam suscipit sit mollitia
                    eaque veritatis modi nam vel! Iste ratione ea perspiciatis
                    totam adipisci explicabo eveniet earum numquam iusto,
                    laudantium sit. Ducimus temporibus incidunt sed natus nulla.
                </div>
            </div>
            <div className="rounded-lg">
                <img
                    src={gif}
                    alt="coding gif"
                    className="h-screen rounded-lg"
                />
            </div>
        </section>
    );
}
