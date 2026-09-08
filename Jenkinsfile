pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building'
                sh '/home/toothlessblue/.bun/bin/bun run build-docker'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy!'
            }
        }
    }
}
