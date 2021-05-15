module.exports = {
  root: true,
  extends: ["airbnb", "prettier"],
  plugins: ["prettier"],
  env: {
    browser: true,
  },
  rules: {
    "prettier/prettier": 1,

    "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
  },
};
