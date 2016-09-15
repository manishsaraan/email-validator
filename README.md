# email-validator
> A simple module to validate an e-mail address

[![npm version](https://badge.fury.io/js/email-validator.svg)](https://badge.fury.io/js/email-validator)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)]()

## Installation
Install via NPM:

```ruby
npm install email-validator

```

## Usage

#### javascript

```javascript

var validator = require("email-validator");

validator.validate("test@email.com"); // true

validator.validate_async("test@email.com", function(err, isValidEmail) {
        //Do something with isValidEmail
}); // true

```

#### TypeScript

```typescript

import * as EmailValidator from 'email-validator';

EmailValidator.validate("test@email.com"); // true

EmailValidator.validate_async("test@email.com", ((err, isValidEmail) => {
        // Do something with isValidEmail        
}));

```

## Contribute

We would love for you to contribute to **email-validator**, check the ``LICENSE`` file for more info.

## Meta

Robert Schultz – http://cosmicrealms.com – robert@cosmicrealms.com

Distributed under the MIT license. See ``LICENSE`` for more information.

[https://github.com/Sembiance/email-validator](https://github.com/Sembiance/email-validator)
