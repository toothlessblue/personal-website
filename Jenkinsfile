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
            }
        }
    }
}
