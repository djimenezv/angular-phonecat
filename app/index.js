

// Require for bower_components
var $ = require("./bower_components/jquery/dist/jquery");
window.$ = $;
window.jQuery = $;
require("./bower_components/angular/angular");

require("./bower_components/angular-animate/angular-animate");
require("./bower_components/angular-resource/angular-resource");
require("./bower_components/angular-route/angular-route");

// Require for angular components
require('./app.js');


// css
require("./app.animations.css");
require("./app.css");
require("./bower_components/bootstrap/dist/css/bootstrap.css");
