pipeline {
    agent any
    stages {   
        stage('test') {
            when{
                not { branch 'feature/*'}
            }
            steps {
                sh 'yarn test:app'
                sh 'yarn test:electron'
            }
        }
        stage('no test') {
            when{
                anyOf {branch 'feature/*'}
            }
            steps {
                sh 'yarn test:app'
                sh 'yarn test:electron'                
            }
        }
    } 
    post {
        failure {
            slackSend channel: 'cicd',
            color: '#FF0000',
            message: "*${currentBuild.currentResult}:*  Jenkins Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}.  More info at: ${env.BUILD_URL}"
        }
    }
}
