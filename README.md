# ToDo App

A simple task management application for creating, tracking, and managing your daily tasks.

## Tech Stack

- React 19 + TypeScript
- Vite (Build tool)
- React Router
- Docker
- Jenkins

## Folder Structure

```
├── src/
│   ├── components/      # UI components
│   ├── containers/      # Container components
│   ├── contexts/        # React contexts
│   ├── models/          # Data models
│   ├── viewModels/      # Business logic
│   └── styles/          # CSS files
├── public/              # Static assets
├── Dockerfile           # Docker configuration
└── Jenkinsfile          # Jenkins CI/CD pipeline
```

## DevOps

- **Docker**: Containerization for consistent deployment
- **Jenkins**: Automated CI/CD pipeline

## Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Docker

```bash
# Build image
docker build -t todo-app .

# Run container
docker run -p 5173:5173 todo-app
```
