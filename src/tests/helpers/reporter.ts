/* eslint-disable @typescript-eslint/no-var-requires */
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

const reporter = new SpecReporter();

jasmine.getEnv().addReporter(reporter);
