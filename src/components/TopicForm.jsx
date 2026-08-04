import { useState } from "react"

const initialFormData = {
    topicName: "",
    technology: "",
    difficulty: "Beginner",
    status: "Planned",
    studyTime: "",
    notes: "",
}

function TopicForm({
    onAdd,
    onUpdate,
    onCancel,
    editingTopic,
}) {
    const [formData, setFormData] = useState(
        editingTopic ? { ...editingTopic } : initialFormData
    )

    function handleChange(event) {
        const { name, value } = event.target

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    function handleSubmit(event) {
        event.preventDefault()

        if (editingTopic) {
            const updatedTopic = {
                ...formData,
                id: editingTopic.id,
                studyTime: Number(formData.studyTime),
            }

            onUpdate(updatedTopic)
        } else {
            const newTopic = {
                ...formData,
                id: Date.now(),
                studyTime: Number(formData.studyTime),
            }

            onAdd(newTopic)
        }

        setFormData(initialFormData)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="mb-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
        >
            <h2 className="text-2xl font-semibold text-slate-900">
                {editingTopic ? "Edit Topic" : "Add New Topic"}
            </h2>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div>
                    <label
                        htmlFor="topicName"
                        className="mb-2 block text-sm font-medium text-slate-700"
                    >
                        Topic Name
                    </label>

                    <input
                        id="topicName"
                        name="topicName"
                        type="text"
                        value={formData.topicName}
                        onChange={handleChange}
                        placeholder="Example: Spring Security"
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
                    />
                </div>

                <div>
                    <label
                        htmlFor="technology"
                        className="mb-2 block text-sm font-medium text-slate-700"
                    >
                        Technology
                    </label>

                    <input
                        id="technology"
                        name="technology"
                        type="text"
                        value={formData.technology}
                        onChange={handleChange}
                        placeholder="Example: Java"
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
                    />
                </div>

                <div>
                    <label
                        htmlFor="difficulty"
                        className="mb-2 block text-sm font-medium text-slate-700"
                    >
                        Difficulty
                    </label>

                    <select
                        id="difficulty"
                        name="difficulty"
                        value={formData.difficulty}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
                    >
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="status"
                        className="mb-2 block text-sm font-medium text-slate-700"
                    >
                        Status
                    </label>

                    <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
                    >
                        <option value="Planned">Planned</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                <div>
                    <label
                        htmlFor="studyTime"
                        className="mb-2 block text-sm font-medium text-slate-700"
                    >
                        Study Time
                    </label>

                    <input
                        id="studyTime"
                        name="studyTime"
                        type="number"
                        min="0"
                        value={formData.studyTime}
                        onChange={handleChange}
                        placeholder="Minutes"
                        required
                        className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
                    />
                </div>

                <div className="md:col-span-2">
                    <label
                        htmlFor="notes"
                        className="mb-2 block text-sm font-medium text-slate-700"
                    >
                        Notes
                    </label>

                    <textarea
                        id="notes"
                        name="notes"
                        rows="3"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Write a short note"
                        className="w-full resize-none rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
                    />
                </div>
            </div>

            <div className="mt-5 flex gap-3">
                <button
                    type="submit"
                    className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
                >
                    {editingTopic ? "Update Topic" : "Add Topic"}
                </button>

                {editingTopic && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="rounded-lg bg-slate-200 px-5 py-2 font-medium text-slate-700 hover:bg-slate-300"
                    >
                        Cancel Edit
                    </button>
                )}
            </div>
        </form>
    )
}

export default TopicForm