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
              slackSend (color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")
            }
        }
    }
}
