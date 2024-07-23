#!/bin/bash
pipeline {
    agent any

    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials-id') // Jenkins credentials ID
        DOCKERHUB_REPO = 'iyappansam97/myreactapp'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/Iyappan97/react-app-test.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("${env.DOCKERHUB_REPO}:${env.BUILD_ID}", '-q .')
                }
            }
        }
        stage('Login to DockerHub') {
            steps {
                script {
                    sh 'echo ${DOCKERHUB_CREDENTIALS_PSW} | docker login -u ${DOCKERHUB_CREDENTIALS_USR} --password-stdin'
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    sh 'docker push ${DOCKERHUB_REPO}:${env.BUILD_ID} -q'
                    sh 'docker push ${DOCKERHUB_REPO}:latest -q'
                }
            }
        }
        stage('Cleanup Docker Images') {
            steps {
                sh 'docker rmi ${DOCKERHUB_REPO}:${env.BUILD_ID} -f'
                sh 'docker rmi ${DOCKERHUB_REPO}:latest -f'
            }
        }
        stage('Cleanup Workspace') {
            steps {
                cleanWs()
            }
        }
    }
}
