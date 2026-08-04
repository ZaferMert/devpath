import { useEffect, useState } from "react"
import TopicCard from "./components/TopicCard"
import TopicForm from "./components/TopicForm"

const initialTopics = [
  {
    id: 1,
    topicName: "Spring Boot REST API",
    technology: "Java",
    difficulty: "Intermediate",
    status: "In Progress",
    studyTime: 120,
    notes: "Practice controller and service layers",
  },
  {
    id: 2,
    topicName: "React Components",
    technology: "React",
    difficulty: "Beginner",
    status: "Completed",
    studyTime: 90,
    notes: "Learn props and reusable components",
  },
  {
    id: 3,
    topicName: "Git Branching",
    technology: "Git",
    difficulty: "Beginner",
    status: "Planned",
    studyTime: 0,
    notes: "Practice creating and merging branches",
  },
]

function App() {
  const [topics, setTopics] = useState(() => {
    const savedTopics = localStorage.getItem("topics")

    return savedTopics ? JSON.parse(savedTopics) : initialTopics
  })

  const [editingTopic, setEditingTopic] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")

  useEffect(() => {
    localStorage.setItem("topics", JSON.stringify(topics))
  }, [topics])

  const filteredTopics = topics.filter((topic) => {
    const matchesSearch =
      topic.topicName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.technology.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus =
      statusFilter === "All" || topic.status === statusFilter

    return matchesSearch && matchesStatus
  })

  const totalTopics = topics.length

  const completedTopics = topics.filter(
    (topic) => topic.status === "Completed"
  ).length

  const totalStudyTime = topics.reduce(
    (total, topic) => total + topic.studyTime,
    0
  )

  function handleAddTopic(newTopic) {
    setTopics((currentTopics) => [...currentTopics, newTopic])
  }

  function handleEditTopic(topic) {
    setEditingTopic(topic)
  }

  function handleUpdateTopic(updatedTopic) {
    setTopics((currentTopics) =>
      currentTopics.map((topic) =>
        topic.id === updatedTopic.id ? updatedTopic : topic
      )
    )

    setEditingTopic(null)
  }

  function handleCancelEdit() {
    setEditingTopic(null)
  }

  function handleDeleteTopic(topicId) {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this topic?"
    )

    if (!shouldDelete) {
      return
    }

    setTopics((currentTopics) =>
      currentTopics.filter((topic) => topic.id !== topicId)
    )

    if (editingTopic?.id === topicId) {
      setEditingTopic(null)
    }
  }

  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            DevPath
          </h1>

          <p className="mt-2 text-slate-600">
            Track your software learning journey.
          </p>
        </header>

        <section className="mb-8 grid gap-4 sm:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Total Topics
            </p>

            <p className="mt-2 text-3xl font-bold text-slate-900">
              {totalTopics}
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Completed
            </p>

            <p className="mt-2 text-3xl font-bold text-green-600">
              {completedTopics}
            </p>
          </article>

          <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              Total Study Time
            </p>

            <p className="mt-2 text-3xl font-bold text-blue-600">
              {totalStudyTime}
              <span className="ml-1 text-base font-medium text-slate-500">
                min
              </span>
            </p>
          </article>
        </section>

        <TopicForm
          key={editingTopic ? editingTopic.id : "new-topic"}
          onAdd={handleAddTopic}
          onUpdate={handleUpdateTopic}
          onCancel={handleCancelEdit}
          editingTopic={editingTopic}
        />

        <div className="mb-6 grid gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-2">
          <div>
            <label
              htmlFor="search"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Search Topics
            </label>

            <input
              id="search"
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search by topic or technology"
              className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="statusFilter"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Filter by Status
            </label>

            <select
              id="statusFilter"
              value={statusFilter}
              onChange={(event) => setStatusFilter(event.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
            >
              <option value="All">All</option>
              <option value="Planned">Planned</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>

        {filteredTopics.length > 0 ? (
          <section className="grid gap-5 md:grid-cols-2">
            {filteredTopics.map((topic) => (
              <TopicCard
                key={topic.id}
                topic={topic}
                onEdit={handleEditTopic}
                onDelete={handleDeleteTopic}
              />
            ))}
          </section>
        ) : (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <h2 className="text-xl font-semibold text-slate-800">
              No topics found
            </h2>

            <p className="mt-2 text-slate-500">
              Try changing your search or status filter.
            </p>
          </div>
        )}
      </div>
    </main>
  )
}

export default App