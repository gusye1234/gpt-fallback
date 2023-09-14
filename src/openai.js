const { Configuration, OpenAIApi } = require("openai");
const got = require('got')

module.exports.chat = async (value, env = {}) => {
        const configuration = new Configuration({
            apiKey: env.openaiKey
        });
      const openai = new OpenAIApi(configuration);
      const chatCompletion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: value}],
      });
    //   return Promise.resolve([
    //     {
    //         id: "GPT response", 
    //         input: value, 
    //         value: chatCompletion.data.choices[0].message
    //     }
    //   ]) 
    return Promise.resolve(chatCompletion.data.choices[0].message.content) 
}