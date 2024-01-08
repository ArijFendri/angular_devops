pipeline {
    agent none
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dh_cred')
        DOCKER_CONFIG = "${JENKINS_HOME}/.docker"
    }

    stages {
        stage('Checkout'){
            agent any
            steps{
                checkout scm
            }
        }

        stage('Init'){
            agent any
            steps {
                script {
                    mkdir("${DOCKER_CONFIG}")
                    sh """
                        echo '${DOCKERHUB_CREDENTIALS_PSW}' | docker login -u '${DOCKERHUB_CREDENTIALS_USR}' --password-stdin
                    """
                }
            }
        }

        stage('Build & Push'){
            agent any
            steps {
                script {
                    sh "docker build -t ${DOCKERHUB_CREDENTIALS_USR}/films:${BUILD_ID} ."
                    sh "docker push ${DOCKERHUB_CREDENTIALS_USR}/films:${BUILD_ID}"
                    sh "docker rmi ${DOCKERHUB_CREDENTIALS_USR}/films:${BUILD_ID}"
                }
            }
        }

        stage('logout'){
            agent any
            steps {
                sh 'docker logout'
            }
        }
    }
}
