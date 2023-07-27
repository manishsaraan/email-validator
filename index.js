'use strict';

var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
// Thanks to:
// http://fightingforalostcause.net/misc/2006/compare-email-regex.php
// http://thedailywtf.com/Articles/Validating_Email_Addresses.aspx
// http://stackoverflow.com/questions/201323/what-is-the-best-regular-expression-for-validating-email-addresses/201378#201378
// https://en.wikipedia.org/wiki/Email_address  The format of an email address is local-part@domain, where the 
// local part may be up to 64 octets long and the domain may have a maximum of 255 octets.[4]
exports.validate = function (email) {
  if (!email) return false;

  var emailParts = email.split('@');

  if (emailParts.length !== 2) return false;

  var account = emailParts[0];
  var address = emailParts[1];

  if (account.length > 64) return false;

  else if (address.length > 255) return false;

  var domainParts = address.split('.');
  
  if (domainParts.some(function (part) {
    return part.length > 63;
  })) return false;

  return tester.test(email);
};

exports.tester = tester;
