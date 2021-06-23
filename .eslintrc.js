module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    // "react/prop-types": [
    //   "error",
    //   {
    //     "ignore": [
    //       "navigation","route"
    //     ]
    //   }
    // ],
    // "no-undef":[
    //   "error",
    //   {
    //     "ignore": [
    //       "beforeAll","route"
    //     ]
    //   }
    // ],
    // "react/forbid-prop-types": 1,
    'react/prop-types': 0,
    'react/no-danger': 0,
    'import/named': 0,
    'no-underscore-dangle': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-array-index-key': 0,
    'no-param-reassign': 0,
    'react-native/split-platform-components': 0,
    'class-methods-use-this': 0,
    'jsx-a11y/click-events-have-key-events': 1,
  },
  plugins: ['react', 'react-native', 'prettier', 'detox'],
  globals: {
    beforeAll: false,
    fetch: false,
    jest: false,
  },
};
