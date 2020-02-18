'use strict';

var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
var testerQuotedString = /^"[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~\.(\\")(\\\\)\(\),:;<>@\[\] ]*"@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

// Thanks to:
// http://fightingforalostcause.net/misc/2006/compare-email-regex.php
// http://thedailywtf.com/Articles/Validating_Email_Addresses.aspx
// http://stackoverflow.com/questions/201323/what-is-the-best-regular-expression-for-validating-email-addresses/201378#201378
exports.validate = function (email) {
  if (!email) return false;

  if (email.length > 256) return false;

  if (!tester.test(email) && !testerQuotedString.test(email)) return false;

  var [fullEmail, localPart, domainPart] = email.match(/(.*)@(.*)/);

  if (localPart.length > 64) return false;

  var domainParts = domainPart.split('.');
  if (domainParts.some(function (part) {
    return part.length > 63;
  })) return false;

  return true;
};
