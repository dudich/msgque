'use strict';

import angular from 'angular';
import moment from 'moment';

// eslint-disable-next-line angular/window-service
const { host, protocol } = window.location;
const PREFIX = `${protocol}//${host.substr(0, host.indexOf('-') + 1)}`;
const DOMAIN = `${host.substr(host.indexOf('.') + 1)}`;

const SMS_SERVER = 'http://139.162.48.23:13013/cgi-bin/sendsms?smsc=smsc2&username=tester&password=foobar&to=9844717202&from=9844717202&text=hi'
const API_SERVER = `${PREFIX}api.${DOMAIN}`;
const ACCOUNTS_APP = `${PREFIX}accounts.${DOMAIN}`;
const HIRE_APP = `${PREFIX}hire.${DOMAIN}`;
const PDF_JS = `${PREFIX}pdfviewer.${DOMAIN}/web/viewer.html`;

// export default constants.name;
export default angular
  .module('msgqueApp.constants', [])
  .constant('moment', moment)
  .constant('urls', {
    API_SERVER, SMS_SERVER,
  })
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
