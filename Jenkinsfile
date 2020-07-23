pipeline {
    agent any
    stages {
        stage('test Not Master') {
            when{
                not { branch 'master'}
            }
            steps {
                sh 'yarn test:app'
                sh 'yarn test:electron'
            }
        }
        stage('test Master') {
            when{
                anyOf {branch 'master'}
            }
            steps {
                sh 'yarn test:app'
                sh 'yarn test:electron'                
            }
        }
    } 
    post {
        failure {
            script {
                if (env.BRANCH_NAME == 'master') {
                    slackSend channel: 'cicd',
                     message: "*${currentBuild.currentResult}:*  Jenkins Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}.  More info at: ${env.BUILD_URL}"
                }
            }
        }
    }
}
