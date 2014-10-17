Package.describe({
  name: 'garrilla:d3',
  summary: 'A JavaScript visualization library for HTML and SVG. http://d3js.org',
  version: '3.4.12',
  git: 'https://github.com/garrilla/d3-meteor'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.4');
  api.addFiles('lib/d3.js','client');
  api.export('d3');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('garrilla:d3');
  api.addFiles('garrilla:d3-tests.js');
});
