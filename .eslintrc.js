module.exports = {
  env: {
    browser: false,
    mocha: true,
    commonjs: true,
    es6: true,
  },

  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'prefer-arrow-callback': 0,
  //  'max-len': ['error', { code: 80, ignoreUrls: true }],
  },
};
