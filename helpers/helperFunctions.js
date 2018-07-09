/*
 * Step 1 - npm install --save-dev jasmine
 * Step 2 - jasmine init ==> will create spec folder
 * Step 3 - npm i -D jasmine babel-cli babel-preset-es2015 babel-watch
 * Step 4 - Now create a file called as run.js you can place it anywhere, I like to keep it in spec/, which should look like this:
 * Step 5 - To run your test cases and access jasmine from the command line you will want to install jasmine globally.
 * Step 6 - to run the test, add the following line inside scripts section of your package.json: "test": "babel-node ./spec/run.js"
 * Step 7 - create .babelrc file
 * in jasmine.json file, specify the spec's directory
 */

export const testFunction = function () {
    return "Test With Jasmine";
};

export const testFunctionTwo = function () {
    return "Test With Jasmine 2";
};