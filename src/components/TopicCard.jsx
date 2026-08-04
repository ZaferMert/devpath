function TopicCard({ topic, onEdit, onDelete }) {
    function getStatusClasses(status) {
        if (status === "Completed") {
            return "bg-green-100 text-green-700"
        }

        if (status === "In Progress") {
            return "bg-amber-100 text-amber-700"
        }

        return "bg-slate-100 text-slate-700"
    }
    return (
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-medium text-blue-600">
                        {topic.technology}
                    </p>

                    <h2 className="mt-1 text-xl font-semibold text-slate-900">
                        {topic.topicName}
                    </h2>
                </div>

                <span
                    className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusClasses(
                        topic.status
                    )}`}
                >
                    {topic.status}
                </span>
            </div>

            <div className="mt-4 space-y-2 text-sm text-slate-600">
                <p>
                    <span className="font-medium text-slate-800">Difficulty:</span>{" "}
                    {topic.difficulty}
                </p>

                <p>
                    <span className="font-medium text-slate-800">Study Time:</span>{" "}
                    {topic.studyTime} minutes
                </p>

                <p>
                    <span className="font-medium text-slate-800">Notes:</span>{" "}
                    {topic.notes}
                </p>
            </div>

            <div className="mt-5 flex gap-3">
                <button
                    type="button"
                    onClick={() => onEdit(topic)}
                    className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                >
                    Edit
                </button>

                <button
                    type="button"
                    onClick={() => onDelete(topic.id)}
                    className="rounded-lg bg-red-100 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-200"
                >
                    Delete
                </button>
            </div>
        </article>
    )
}

export default TopicCard