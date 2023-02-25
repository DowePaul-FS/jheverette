const app = require("./app");
const log = require('debug')('API:logging');
const port = process.env.PORT || 4000

app.listen(port, () => log(`API listening on port ${port}!`));