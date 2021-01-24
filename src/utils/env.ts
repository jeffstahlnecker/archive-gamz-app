import { load } from 'ts-dotenv'

const env = load({
  APIKEY: String,
  AUTHDOMAIN: String,
  DATABASEURL: String,
  PROJECTID: String,
  STORAGEBUCKET: String,
  MESSAGINGSENDERID: Number,
  APPID: String,
  MEASUREMENTID: String,
})

export default env
