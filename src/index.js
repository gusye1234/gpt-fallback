const path = require('path')
const searches = require('./searches')
const { getSelectedText } = require('electron-selected-text')
// const robotjs = require("robotjs")
const { clipboard } = require('electron')

module.exports = (pluginContext) => {
  return (query, env = {}) => {
      const select_text = clipboard.readText();
      // const select_text = "Coming soon"
      let result = [
        {
          icon: path.join('assets', 'ask.png'),
          title: 'Ask library: ' + query,
          // add built-in prompt here
          value: query
        }
      ]
      if (select_text.length > 0) {
        result.push({
          icon: path.join('assets', 'ask.png'),
          title: 'Ask about "' + select_text.slice(0, 50) + '..."',
          // add built-in prompt here
          value: select_text + ';\n' + query
        })
      }
      return Promise.resolve(result)
    }
}