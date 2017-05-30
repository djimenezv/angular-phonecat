// Require for bower_components
var $ = require("jquery");
window.$ = $;
window.jQuery = $;

require("angular");
require("angular-animate");
require("angular-resource");
require("angular-route");

// Require for angular components
require('./core/index');
require('./phone-detail/index');
require('./phone-list/index');
require('./app.module');
require('./app.config');
require('./app.animations');

// css
require("./app.animations.css");
require("./app.css");
//require("./bootstrap/dist/css/bootstrap.css");
