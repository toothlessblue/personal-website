pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building'
                sh '/var/lib/jenkins/.bun/bin/bun i'
                sh '/var/lib/jenkins/.bun/bin/bun run build-docker'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy!'
                sh 'docker compose down'
                sh 'docker compose up -d'
            }
        }
    }
}
