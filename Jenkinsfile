node {
    try {            
        stage('build') {
            sh 'yarn install'
        }
        stage('Test') {
                sh 'yarn test:app'
                sh 'yarn test:electron'
        }        
        stage('notifyBuildFAILED') {
            when {
                branch "master" ; branch 'staging'; branch 'my3000'      
                }
            } 
            steps {
                slackSend (color: colorCode, message: summary)
            }
        }               
    }
                    
  } catch (e) {
    // If there was an exception thrown, the build failed
    currentBuild.result = "FAILED"
    throw e
  } finally {
    // Success or failure, always send notifications
    notifyBuild(currentBuild.result)
  }
}
