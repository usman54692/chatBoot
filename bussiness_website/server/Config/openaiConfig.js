import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Store your API key in .env file
});

const openai = new OpenAIApi(configuration);

export default openai;
