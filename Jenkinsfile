pipeline {
    agent any

    tools { 
        nodejs "Node"  // Увери се, че името съответства на настройката в Jenkins за Node.js
    }

    // environment {
    //     CHROME_BIN = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'  // Увери се, че пътят до Chrome е правилен за Windows
    // }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/krumkostov/cypress-jenkins.git'  // Твоят GitHub репозитори
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'  // Изпълняване на командата npm install за инсталиране на зависимостите на Windows
            }
        }

        stage('Run Contact Page Test') {
            steps {
                bat 'npx cypress run --spec "cypress/e2e/contactpage.spec.cy.js"'  // Изпълнение на конкретния Cypress тест
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying application...'  // Placeholder за деплой
            }
        }
    }
}