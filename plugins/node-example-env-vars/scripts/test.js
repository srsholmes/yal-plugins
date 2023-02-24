const path = require('path');

require('dotenv').config({
  debug: true,
  path: path.resolve(__dirname + '/.env'),
});

function main() {
  console.log(process.env.DB_HOST);
  console.log(process.env.DB_PASS);
  console.log(process.env.S3_API);
}

main();
