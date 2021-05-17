const fs = require('fs')

const modulesToChange = [
  '@react-spectrum/button',
  '@react-spectrum/provider',
  '@react-spectrum/theme-default'
]

modulesToChange.forEach((mod) => {
  const packagePath = getPackageJSONPathFromResolvedEntry(mod)
  changeSideEffectsInPackageJson(mod, packagePath)
}
)

// const buttonModulePath = getPackageJSONPathFromResolvedEntry('@react-spectrum/button')
// const providerModulePath = getPackageJSONPathFromResolvedEntry('@react-spectrum/provider')
// const themeModulePath = getPackageJSONPathFromResolvedEntry('@react-spectrum/theme-default')
// console.log('buttonModulePath', buttonModulePath)
// console.log('provider', providerModulePath)
// console.log('theme', themeModulePath)

// changeSideEffectsInPackageJson('@react-spectrum/theme-defaul', buttonModulePath)

function changeSideEffectsInPackageJson(moduleName, packageJSONPath) {
  try {
    const packageJSON = JSON.parse(fs.readFileSync(packageJSONPath, 'utf-8'))
    delete packageJSON.sideEffects
    fs.writeFileSync(packageJSONPath, JSON.stringify(packageJSON, undefined, 2))
    console.info(`successfully changed package.json for ${moduleName} at ${packageJSONPath}`)
  } catch (e) {
    console.error(e)
  }
}

function getPackageJSONPathFromResolvedEntry(module) {
  const moduleSplit = module.split('/')
  const entryPath = require.resolve(module)
  const arrayPath = entryPath.split('/')
  const position = arrayPath.indexOf(moduleSplit[1])
  const sliced = arrayPath.slice(0, position + 1)
  sliced.push('package.json')
  return sliced.join('/')
}
