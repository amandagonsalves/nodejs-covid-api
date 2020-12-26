const server = require('./config/server');
require('./config/database');
require('./config/routes')(server);

const port = 3001;

server.listen(port, () => {console.log(`backend is running on port ${port}`)});
