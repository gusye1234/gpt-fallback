const openai = require("./openai")


module.exports = () => async (query, env = {}) => await openai.chat(query, env)