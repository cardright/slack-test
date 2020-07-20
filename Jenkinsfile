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
        when {
         branch 'master|slack-test/*'   
        }    
            slackSend channel: '#cicd',
            color: '#FF0000',
            message: "*${currentBuild.currentResult}:*  Jenkins Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}.  More info at: ${env.BUILD_URL}" 
        }
    }
}
