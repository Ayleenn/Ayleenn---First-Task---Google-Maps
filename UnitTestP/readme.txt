Unit testing an AngularJS project:

1.) We are using Karma and Jasmine for unit testing,

2.) This project contains the test scripts in the tests directory.
    test.config.js is the Karma configuration file
    app-tests.js contains the actual specs (unit tests) we run.

3.) To be able to run unit tests, you need to install the following with npm (node package manager):
    - karma (command: npm install karma)
    - karma-jasmine (command: npm install karma-jasmine)
    - karma chrome launcher (command: npm install karma-chrome-launcher)

4.) test.config.js file contains the configuration parameters for Karma. This sample project already has this file (under tests directory),
    however, in another project, you can also initialize it by using the command karma init test.config.js

5.) In test.config.js file, the required .js dependencies are listed (files attribute)

6.) Also a plugins attribute is already added to this file to list the plugin dependencies, namely:
    karma-jasmine and karma-chrome-launcher

7.) To run the tests, you simply type
        karma start tests/test.config.js

    The test specs in the app-tests.js are then (hopefully successfully) executed.
