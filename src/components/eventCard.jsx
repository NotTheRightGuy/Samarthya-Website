export default function EventCard({ title, content, date, team_number }) {
    return (
        <div className="min-h-fit w-screen rounded-lg bg-zinc-800 mx-4 text-left pl-2 hover:scale-105 transition-all font-inconsolata">
            <span className="text-3xl font-space">{title}</span>
            <div>{content}</div>
        </div>
    );
}
