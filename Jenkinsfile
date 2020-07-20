node {
    try {
        notifyBuild('STARTED')

        stage('Prepare code') {
            echo 'do checkout stuff'
        }

        stage('Testing') {
            echo 'Testing'
            echo 'Testing - publish coverage results'
        }

        stage('Staging') {
            echo 'Deploy Stage'
        }

        stage('Deploy') {
            echo 'Deploy - Backend'
            echo 'Deploy - Frontend'
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

  // Override default values based on build status
  if (env.Branch_Name = 'master|cicd*') {
  } 
  // Send notifications
  slackSend '#cicd', 
  color: '#FF0000',
  message: "*${currentBuild.currentResult}:*  Jenkins Job ${env.JOB_NAME} build ${env.BUILD_NUMBER}.  More info at: ${env.BUILD_URL}"  
}
