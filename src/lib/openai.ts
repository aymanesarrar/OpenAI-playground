import { Configuration, OpenAIApi } from 'openai'
import config from './config'


const configuration = new Configuration({
    apiKey: config.ApiKey,
    
    
  })
const openai = new OpenAIApi(configuration);

export {openai as default}