const fs = require('fs')
const YAML = require('yaml')

const service = process.argv[2]
const env = process.argv[3]
const developmentFilePath = `./pagy-kubernetes/base/${service}/deployment.yaml`
const productionFilePath = `./pagy-kubernetes/overlays/production/roles/${service}/deployment.yaml`
const filePath = env !== 'production' ? developmentFilePath : productionFilePath
const file = fs.readFileSync(filePath, 'utf8')
const {
  spec: {
    template: {
      spec: { containers }
    }
  }
} = YAML.parse(file)

const web = containers[0]
const environments = web.env
let text = ''

environments.forEach(env => {
  const line = `${env.name}=${env.value}\r\n`
  text += line
})

fs.writeFileSync('.env', text)
