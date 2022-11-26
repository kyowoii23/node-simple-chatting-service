// @ts-check

require('dotenv').config()
const { MongoClient } = require('mongodb')

const uri = `mongodb+srv://superadmin:${process.env.MONGO_PASSWORD}@cluster0.7iskp.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(uri, {
  // @ts-ignore
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

module.exports = client
