const crypto = require('crypto').randomBytes(256).toString('hex'); // Provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)

// Export config object
module.exports = {
  uri: 'mongodb://localhost:27017/mean-ang2', // Databse URI and database name
  secret: crypto, // Cryto-created secret
  db: 'mean-ang2' // Database name
}
