pipeline {
    agent {
        docker { image 'node'}
    }
    stages { 
        stage('build') {
            steps {
                sh 'yarn'
            }
        }        
        stage('test') {
            steps {
                sh 'yarn test:app'
                sh 'yarn test:electron'                
            }
            post {
                failure {
                    slackSend channel: 'cicd',
                    color: '#FF0000',
                    message: "*${currentBuild.currentResult}:*  Jenkins Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}.  More info at: ${env.BUILD_URL}"
                }
            }
        }
    }
}
