pipeline {
    agent any
    stages {
        stage("拉取众立信官网代码") {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [[$class: 'CloneOption', depth: 1, noTags: true, reference: '', shallow: true, timeout: 60]], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'umatesoft-git', url: 'git@github.com:umatesoft/OfficialWebsite.git']]])
            }
        }
        stage("构建编译") {
            steps {
                sh label: '', script: 'npm install && npm run build && /bin/cp -rf ./dist/* /home/umatesoft/front/dist/'
            }
        }
    }
}
