pipeline {
    agent any

    environment {
        // Définir les variables d'environnement pour SonarQube et Docker Hub
        SONARQUBE_URL = 'http://localhost:9000'
        SONARQUBE_TOKEN = credentials('frontend')
        DOCKER_HUB_CREDENTIALS = credentials('dockerhub-credentials')
        DOCKER_IMAGE = 'Chronocare1'
        DOCKER_TAG = 'latest'
    }

   

    stages {
        stage('Checkout') {
            steps {
                // Cloner le code source du dépôt Git
                git 'https://github.com/Nahladhouibi/frontend.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                // Installer les dépendances Angular
                bat 'npm install'
            }
        }

        stage('Lint') {
            steps {
                // Linter le code
                bat 'npm run lint'
            }
        }
        
        // Commenter les tests unitaires pour l'instant, décommentez-les si nécessaire
        /*
        stage('Test') {
            steps {
                // Exécuter les tests unitaires
                bat 'npm test -- --watch=false --code-coverage'
            }
            post {
                always {
                    // Publier les rapports de couverture de code
                    publishHTML([allowMissing: false, alwaysLinkToLastBuild: true, keepAll: true, reportDir: 'coverage', reportFiles: 'index.html', reportName: 'Code Coverage'])
                }
            }
        }
        */

        stage('SonarQube Analysis') {
            steps {
                // Analyse SonarQube
                withSonarQubeEnv('SonarQube') {
                    bat 'sonar-scanner -Dsonar.host.url=%SONARQUBE_URL% -Dsonar.login=%SONARQUBE_TOKEN%'
                }
            }
        }

        stage('Quality Gate') {
            steps {
                // Attendre que l'analyse SonarQube soit terminée et vérifier le Quality Gate
                waitForQualityGate abortPipeline: true
            }
        }
        
        stage('Build') {
            steps {
                // Construire l'application Angular
                bat 'npm run build -- --prod'
            }
        }

        stage('Build Docker Image') {
            steps {
                // Construire l'image Docker
                script {
                    bat "docker build -t %DOCKER_IMAGE%:%DOCKER_TAG% ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                // Publier l'image Docker sur Docker Hub
                script {
                    bat "docker login -u %DOCKER_HUB_CREDENTIALS_USR% -p %DOCKER_HUB_CREDENTIALS_PSW%"
                    bat "docker push %DOCKER_IMAGE%:%DOCKER_TAG%"
                }
            }
        }
    }

   
