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
            post{
                always{
                    slackSend channel: '#slack-test-channel',
                        color: COLOR_MAP[currentBuild.currentResult],
                        message: "*${currentBuild.currentResult}:* Job ${env.JOB_NAME} build ${env.BUILD_NUMBER} by ${BUILD_USER}\n More info at: ${env.BUILD_URL}"
                }
            }
        }
    }
}
