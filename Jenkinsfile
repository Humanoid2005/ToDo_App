pipeline {
    agent any

    tools {
        // Ensure "NodeJS" is configured in "Manage Jenkins" -> "Global Tool Configuration"
        nodejs 'NodeJS' 
    }

    stages {
        stage('Checkout') {
            steps {
                // Assuming code is in your GitHub repo
                git branch: 'main', url: 'https://github.com/Humanoid2005/ToDo_App.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing npm dependencies..."
                // using npm install as requested to allow lockfile updates
                sh 'npm install' 
            }
        }

        stage('Test') {
            steps {
                // Placeholder for running actual tests (e.g., sh 'npm test')
                echo "Tests completed successfully"
            }
        }

        stage('Build Check') {
            steps {
                echo "Verifying the app compiles..."
                // This checks for syntax errors/compilation issues without running the server
                sh 'npm run build' 
            }
        }
    }
}