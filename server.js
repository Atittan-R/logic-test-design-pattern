const config = require('./config'); // Wait for API to be ready

//receive data from Email

//call API check config is in database

// if config is in database
const Parser = require(config.path); //Select Template
const parser = new Parser(mail, config); //Create Parser
booking_info = parser.manager();


// else if config is not in database