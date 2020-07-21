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
                expression {
                    Branch_Name == 'staging'        
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

def notifyBuild(String buildStatus = 'FAILED') {
  // build status of null means successful
  buildStatus =  buildStatus ?: 'FAILED'

  // Default values
  def colorName = 'RED'
  def colorCode = '#FF0000'
  def subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
  def summary = "${subject} (${env.BUILD_URL})"

  // Send notifications
  slackSend (color: colorCode, message: summary)
}
