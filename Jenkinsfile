pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building';
                /home/toothlessblue/.bun/bin/bun run build-docker;
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy!';
            }
        }
    }
}
