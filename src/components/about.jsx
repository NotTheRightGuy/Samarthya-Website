import gif from "../assets/sphere.gif";

export default function About() {
    return (
        <section
            id="about"
            className=" grid h-fit bg-zinc-800 rounded-lg m-16 grid-cols-2 section max-mobile:m-5 max-mobile:grid-cols-1"
        >
            <div className="rounded-lg relative overflow-auto max-mobile:overflow-visible">
                <div className="text-8xl font-space absolute top-1  left-8 text-zinc-500">
                    01
                </div>
                <div className="absolute font-space text-2xl  text-white top-16 left-20 ">
                    ABOUT
                </div>
                <div className="text-zinc-300 font-inconsolata text-lg max-mobile:text-sm  absolute top-28 left-8 right-6 max-mobile:text-white max-mobile:leading-[1rem]">
                    Samarthya is a technological festival exclusively organized
                    for the students of Adani University by the ASPD Club.
                    <br></br>
                    <br /> This two-day event offers a platform for students to
                    showcase their technological prowess and compete in various
                    events. Samarthya comprises a range of activities such as
                    competitions, workshops and much more which allow students
                    to learn about the latest technologies and industry trends.
                    The festival also includes a 36-hour long hackathon, powered
                    by IQM, where students can collaborate in teams to solve
                    real-world problems using their skills and creativity.
                    <br />
                    <br /> Through Samarthya, the ASPD Club aims to foster a
                    culture of innovation, creativity, and entrepreneurship
                    among students. The festival provides an opportunity for
                    Adani University students to interact with industry experts,
                    gain recognition, and showcase their talent. Overall,
                    Samarthya is an exciting event that offers a unique
                    experience for Adani University students to enhance their
                    skills and knowledge in the field of technology while also
                    promoting a sense of community and collaboration.
                </div>
            </div>
            <div className="rounded-lg ">
                <img
                    src={gif}
                    alt="coding gif"
                    className="h-screen rounded-lg max-mobile:opacity-20 object-cover"
                />
            </div>
        </section>
    );
}
