const contentful = require('contentful')

const config = {
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
  space: process.env.CTF_SPACE_ID,
}

module.exports = {
  createClient: () => contentful.createClient(config),
}
