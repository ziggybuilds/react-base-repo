module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
    	"indent": ["error", "tab"],
    	"no-tabs": 0,
    	"arrow-parens": 0,
        "jsx-quotes": [1, "prefer-single"],
        "quotes": ["error", "single"],
        "react/jsx-indent": [1, "tab"],
        "react/no-unused-state": 1,
        "react/jsx-indent-props": 1,
        "react/prop-types": 1,
        "prefer-destructuring": 1,
        "jsx-a11y/anchor-is-valid": 1,
        "react/jsx-max-props-per-line": 0,
    }
};