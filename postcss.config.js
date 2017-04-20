module.exports = {
  plugins: [
    require("stylelint")({})
    require("postcss-reporter")({
      clearMessages: true
    })
    require('postcss-smart-import')({}),
    require('precss')({}),
    require('autoprefixer')({})
  ]
}
