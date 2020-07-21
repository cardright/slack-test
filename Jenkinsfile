node {
    try {
        stage('notifyBuildFAILED') {
            when {
                expression {
                    Branch_Name == 'master'        
                }
            }
        }              
        stage('build') {
            sh 'yarn install'
        }

        stage('Test') {
                sh 'yarn test:app'
                sh 'yarn test:electron'
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
  buildStatus =  buildStatus ?: 'master'  

  // Default values
  def colorName = 'RED'
  def colorCode = '#FF0000'
  def subject = "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'"
  def summary = "${subject} (${env.BUILD_URL})"

  // Override default values based on build status
  if (buildStatus == 'FAILED') {
    color = 'RED'
    colorCode = '#FF0000'
  } else if (buildStatus == 'SUCCESSFUL') {
    color = 'GREEN'
    colorCode = '#00FF00'
  } else {
    color = 'YELLOW'
    colorCode = '#FFF000'
  }

  // Send notifications
  slackSend (color: colorCode, message: summary)
}
