const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

const reporter = new SpecReporter();

jasmine.getEnv().addReporter(reporter);
