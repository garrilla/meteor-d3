Package.describe({
  name: 'garrilla:d3',
  summary: 'A JavaScript visualization library for HTML and SVG. http://d3js.org',
  version: '3.4.12',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.4');
  api.addFiles('lib/d3.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('garrilla:d3');
  api.addFiles('garrilla:d3-tests.js');
});
