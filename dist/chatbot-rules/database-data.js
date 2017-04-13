'use strict';

require('colors');

/**
 * mock api client for retrieving account information
 */
module.exports = {
  getCurrentData: function getCurrentData(accountId, current_response) {
    return new Promise(function (resolve, reject) {
      setImmediate(function () {
        resolve(current_response[accountId]);
      });
    });
  }
};