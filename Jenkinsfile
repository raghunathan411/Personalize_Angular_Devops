node{
    stage('Checkout SCM'){
        git branch: 'DEV', credentialsId: '908d955b-e36c-49cd-8e89-81077fd0c9b2', url: 'git@github.com:raghunathan411/Personalize_Angular_Devops.git' 
    }

    stage('Install node modules'){
        sh "npm install"
    }
    stage('Build'){
        sh "npm run build --prod"
    }
}
