require('dotenv/config');


const config = require('../config');
const app = require('./app');


app.listen(config.port, () => { console.info(`app listening on port ${config.port}`) });
