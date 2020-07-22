pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'yarn install'
            }
        }        
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
                anyOf { branch 'master'}
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
            currentBuild.result = 'FAILURE'
          }   
          when {
              branch 'master | release/*'
          } 
          slackSend channel: '#cicd',
            color: '#FF0000',
            message: "*${currentBuild.currentResult}:*  Jenkins Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}.  More info at: ${env.BUILD_URL}"
        }
    }
}
