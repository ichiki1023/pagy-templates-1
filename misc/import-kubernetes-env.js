const fs = require('fs')
const YAML = require('yaml')

const service = process.argv[2]
const env = process.argv[3]

const baseFilePath = `./pagy-kubernetes/base/${service}/deployment.yaml`
const baseFile = fs.readFileSync(baseFilePath, 'utf8')

let envs = getEnvironments(baseFile)

if (env === 'production') {
  const prodFilePath = `./pagy-kubernetes/overlays/production/roles/${service}/deployment.yaml`
  const prodFile = fs.readFileSync(prodFilePath, 'utf8')
  const prodEnvs = getEnvironments(prodFile)
  envs = Object.assign(envs, prodEnvs)
}

let text = ''
Object.keys(envs).forEach(key => {
  const line = `${key}=${envs[key]}\r\n`
  text += line
})

fs.writeFileSync('.env', text)

function getEnvironments (file) {
  const {
    spec: {
      template: {
        spec: { containers }
      }
    }
  } = YAML.parse(file)
  const environments = containers[0].env

  let results = {}
  environments.forEach(env => {
    const { name, value } = env
    results = {
      ...results,
      [name]: value
    }
  })
  return results
}
