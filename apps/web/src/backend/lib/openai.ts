import { Configuration, OpenAIApi } from 'openai';

declare global {
  var openAIStarter: OpenAIApi | undefined;
}

let openAIStarter: OpenAIApi;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

openAIStarter = new OpenAIApi(configuration);

if (!global.openAIStarter) {
  global.openAIStarter = new OpenAIApi(configuration);
}
openAIStarter = global.openAIStarter;
export default openAIStarter;
