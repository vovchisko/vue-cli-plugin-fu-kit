// generator
module.exports = (api, options, rootOptions) => {
  console.log(api)
  console.log(options)
  console.log(rootOptions)
  api.extendPackage({
    dependencies: {
      'fu-kit': '^0.0.1-beta.1',
    },
  })
}