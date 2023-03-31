export default function EventBtn(props) {
    if (props.hide === true) {
        return null;
    } else {
        return (
            <button
                onClick={() => {
                    window.open(`/${props.page}`, "_blank");
                }}
                className="bg-zinc-500 text-zinc-800 font-space text-lg rounded-lg px-4 py-2 mt-4 hover:scale-105 hover:bg-zinc-300 transition-all"
            >
                REGISTER
            </button>
        );
    }
}
