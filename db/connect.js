const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, {
    debug: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
