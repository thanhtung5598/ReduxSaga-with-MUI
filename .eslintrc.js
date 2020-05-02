module.exports = {
  "parser": 'babel-eslint',
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "semi": 1,
    "quotes": [2, 'single'],
    'react/prop-types': 1
  }
}