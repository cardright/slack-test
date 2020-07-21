pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'yarn install'
            }
        }
        stage('test') {
            steps {
                sh 'yarn test:app'
                sh 'yarn test:electron'
            }
        }
        stage('Notify') {
            when {
                branch 'master'  
            }
            steps {
                slackSend (color: colorCode, message: summary)
            }
        }
    }
}
