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
    }          
    post {
        failure {
            slackSend channel: '#cicd', "env.Branch_Name = 'master|cicd/*"
            color: '#FF0000',
            message: "*${currentBuild.currentResult}:*  Jenkins Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}.  More info at: ${env.BUILD_URL}"
        }
    }
}
