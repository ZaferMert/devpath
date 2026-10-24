# DevPath

### Software Learning Tracker

DevPath is a responsive web application designed to help developers organize their learning journey, track study progress, and manage the technologies and topics they are studying.

Built with React and Tailwind CSS, the application provides a simple way to monitor learning activities without requiring an account or backend service.

**[Live Demo](https://zafermert-devpath.netlify.app)**

## Features

- **Topic Management:** Add, edit, and delete learning topics.
- **Progress Tracking:** Organize topics by learning status.
- **Study Time Tracking:** Record time spent studying each topic.
- **Learning Statistics:** View total topics, completed topics, and accumulated study time.
- **Search:** Find topics by name or technology.
- **Status Filtering:** Filter topics based on their current progress.
- **Difficulty Levels:** Categorize topics by difficulty.
- **Personal Notes:** Store notes related to individual learning topics.
- **Local Persistence:** Save learning data using browser LocalStorage.
- **Responsive Design:** Use the application across different screen sizes.

## Tech Stack

| Category | Technologies |
|----------|--------------|
| Frontend | React 19 |
| Build Tool | Vite 8 |
| Language | JavaScript (JSX) |
| Styling | Tailwind CSS 4 |
| Data Storage | Browser LocalStorage |
| Code Quality | ESLint |
| Deployment | Netlify |

## Screenshot

### Learning Dashboard

The dashboard provides an overview of learning progress, study statistics, topic management, and filtering options.

![DevPath Dashboard](public/screenshots/devpath-dashboard.png)

## Getting Started

### Prerequisites

Make sure the following tools are installed:

- Git
- Node.js
- npm

### 1. Clone the Repository

```bash
git clone https://github.com/ZaferMert/devpath.git
cd devpath
```

### 2. Install Dependencies

```bash
npm ci
```

### 3. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal, typically:

http://localhost:5173

### 4. Build for Production

```bash
npm run build
```

The production-ready files will be generated in the `dist` directory.

### 5. Run ESLint

```bash
npm run lint
```

### 6. Preview the Production Build

```bash
npm run preview
```

## Data Storage

DevPath uses the browser's LocalStorage API to persist learning data.

This means:

- No account or registration is required.
- Data remains available after refreshing the page.
- Data is stored locally in the current browser.
- Data is not automatically synchronized across devices.
- Clearing browser storage may permanently remove saved learning records.

The application does not require a backend server or external database.

## Project Structure

```text
src/
├── components/
│   ├── TopicCard.jsx
│   └── TopicForm.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Project Status

DevPath is a personal portfolio project developed to practice frontend application development with React.

The project demonstrates:

- Component-based UI development
- React state management
- Form handling and validation
- CRUD operations
- Browser-based data persistence
- Search and filtering
- Responsive interface design

## Author

**Zafer Mert Serinken**

Computer Engineering Student

[GitHub Profile](https://github.com/ZaferMert)