pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/krumkostov/cypress-jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Инсталиране на npm зависимости
                    bat 'npm install'
                }
            }
        }

        stage('Run Cypress Tests') {
            steps {
                script {
                    // Стартиране на всички тестови файлове в папката cypress/e2e/*.spec.cy.js
                    bat 'npx cypress run --spec "cypress/e2e/**/*.spec.cy.js"'
                }
            }
        }
    }

    post {
        always {
            // Стъпки за почистване или архивиране на резултати след тестовете
            cleanWs()
        }
    }
}