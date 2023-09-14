const path = require('path')
const searches = require('./searches')

module.exports = (pluginContext) => {
  return (query, env = {}) => {

      return Promise.resolve(
        [
          {
            icon: path.join('assets', 'ask.png'),
            title: 'Ask your library: ' + query,
            // add built-in prompt here
            value: query
          }
        ]
      )
    }
}