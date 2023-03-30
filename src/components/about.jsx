import gif from "../assets/scroller.gif";

export default function About() {
    return (
        <section
            id="about"
            className=" grid h-fit bg-zinc-800 rounded-lg m-16 grid-cols-2 section max-mobile:m-5 max-mobile:grid-cols-1"
        >
            <div className="rounded-lg relative overflow-hidden ">
                <div className="text-8xl font-space absolute top-1  left-8 text-zinc-500">
                    01
                </div>
                <div className="absolute font-space text-2xl  text-white top-16 left-20 ">
                    ABOUT
                </div>
                <div className="text-zinc-500 font-inconsolata text-lg max-mobile:text-sm  absolute top-28 left-8 right-6 max-mobile:text-white max-mobile:leading-4 ">
                    Welcome to Samarthya, the ultimate platform for showcasing
                    your technological innovations and skills.<br></br>
                    <br></br> The ASPD club of Adani University is proud to
                    present Samarthya Techfest - the first student-driven
                    techfest of Adani University. Over the course of two
                    weekends, we offer a wide range of events and programs,
                    packed with exciting opportunities and cash prizes. Our goal
                    is to showcase the latest advancements in technology,.
                    promote creativity and collaboration, and provide a platform
                    for networking and learning. At Samarthya Techfest, we offer
                    a unique opportunity for college students to showcase their
                    talents and be recruited by top corporations. With a focus
                    on innovation and technology, we aim to inspire and empower
                    the next generation of tech leaders. <br></br>
                    <br></br>Join us as we push the boundaries of what's
                    possible and explore the exciting world of technology.
                    Unlock your true potential and be a part of this exciting
                    journey towards a brighter future. Together, let's build a
                    better tomorrow through innovation, collaboration, and
                    creativity.
                </div>
            </div>
            <div className="rounded-lg ">
                <img
                    src={gif}
                    alt="coding gif"
                    className="h-screen rounded-lg max-mobile:object-cover max-mobile:opacity-20"
                />
            </div>
        </section>
    );
}
