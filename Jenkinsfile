pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                echo 'yarn install'
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
       slackSend (color: '#FF0000', message: "Failed")
      }
    }
}
