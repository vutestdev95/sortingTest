// prettier-ignore
module.exports = {
    "env": {
        "node": true,
        "mocha": true
    },
    "extends": [
        "eslint:recommended", "prettier"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ["prettier"],
    "rules": {
        "curly": "error",
        "prettier/prettier": "error",
        "eqeqeq": "error"
    }
};
