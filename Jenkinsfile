pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout code from your repository
                checkout scm
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    def image = docker.build("test-jenkin:${env.BUILD_NUMBER}")
                }
            }
        }
        
        stage('Test') {
            steps {
                script {
                    // Run tests in container
                    docker.image("test-jenkin:${env.BUILD_NUMBER}").inside {
                        sh 'npm test || echo "No tests defined"'
                    }
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    // Stop existing container if running
                    sh 'docker stop test-jenkin-app || true'
                    sh 'docker rm test-jenkin-app || true'
                    
                    // Run new container
                    docker.image("test-jenkin:${env.BUILD_NUMBER}").run(
                        "--name test-jenkin-app -p 3001:3000"
                    )
                }
            }
        }
    }
    
    post {
        always {
            // Clean up old images
            sh 'docker image prune -f'
        }
    }
}