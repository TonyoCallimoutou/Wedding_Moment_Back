pipeline {
  agent any
  stages {
    stage('restart') {
      steps {
        script {
          sh 'docker restart back'
        }
      }
    }
    stage('Git pull') {
      steps {
        script {
          sh 'docker exec -w /app back git pull'
        }
      }
    }
    stage('npm install') {
      steps {
        script {
          sh 'docker exec -w /app back npm install'
        }
      }
    }
    stage('npm start') {
      steps {
        script {
          sh 'docker exec -d -w /app back npm start'
        }
      }
    }
  }
}