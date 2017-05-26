# tslint-no-loops
It's 2017 and you still use loops?

[![Build Status](https://travis-ci.org/buildo/tslint-no-loops.svg?branch=master)](https://travis-ci.org/buildo/tslint-no-loops)
[![npm](https://img.shields.io/npm/v/eslint-plugin-no-loops.svg)](https://www.npmjs.com/package/eslint-plugin-no-loops)

This is a porting of [eslint-plugin-no-loops](https://github.com/buildo/eslint-plugin-no-loops).

It disallows the use of loops (for, for-in, while, for-of).

## Usage

Add `tslint-no-loops` as a dev dependency:

```sh
yarn add --dev tslint-no-loops
# or npm install --save-dev tslint-no-loops
```

Edit your `tslint.json`

```diff
{
  "extends": [
    "some-other-config",
+   "tslint-no-loops"
  ],
  "rules": {
    "some-other-rule": true,
+   "no-loops": true 
  }
```
