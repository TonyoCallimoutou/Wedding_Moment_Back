pipeline {
  agent any
  stages {
    stage('stop node') {
      steps {
        script {
          sh 'docker exec -w /app/ back pkill node'
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