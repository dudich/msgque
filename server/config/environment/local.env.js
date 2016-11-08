'use strict';

// Use local.env.js for environment variables that will be set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN: 'http://localhost:9000',
  SESSION_SECRET: 'msgque-secret',

  // Control debug level for modules using visionmedia/debug
  DEBUG: '',
  MYSQL: 'mysql://root:@localhost/msgque_msgque?zeroDateTimeBehavior=convertToNull'
  // MYSQL: 'mysql://msgque_msgque:Gz?Z-lof]I!}@localhost/msgque_msgque?zeroDateTimeBehavior=convertToNull'
};
