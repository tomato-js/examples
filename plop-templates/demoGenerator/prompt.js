const { notEmpty } = require('../utils.js')

module.exports = {
  description: 'generate a demo',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'demo name please',
    validate: notEmpty('name')
  }],
  actions: data => {
    const { name } = data;
    const actions = [
      {
        type: "add",
        path: `${name}/public/index.html`,
        templateFile: "plop-templates/demoGenerator/index.html.hbs"
      },
      {
        type: "add",
        path: `${name}/src/index.js`,
        templateFile: "plop-templates/demoGenerator/index.js.hbs"
      },
      {
        type: "add",
        path: `${name}/webpack.config.js`,
        templateFile: "plop-templates/demoGenerator/webpack.config.js.hbs"
      },
      {
        type: "add",
        path: `${name}/package.json`,
        templateFile: "plop-templates/demoGenerator/package.json.hbs"
      }
    ];

    return actions
  }
}
