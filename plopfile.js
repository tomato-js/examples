const demoGenerator = require('./plop-templates/demoGenerator/prompt')

module.exports = function(plop) {
  plop.setGenerator('demo', demoGenerator)
}
