// Require for bower_components
/*var $ = require("jquery");
window.$ = $;
window.jQuery = $;
*/
require("angular");
require("angular-animate");
require("angular-resource");
require("angular-route");

// Require all the .html files


// Require for angular components
require('./core/index');
require('./phone-detail/index');
require('./phone-list/index');
require('./app.module');
require('./app.config');
require('./app.animations');
require('./phone-list/phone-list.module');
require('./phone-list/phone-list.component');
require('./phone-detail/phone-detail.module');
require('./phone-detail/phone-detail.component');
require('./core/core.module');
require('./core/phone/phone.module');
require('./core/checkmark/checkmark.filter');
require('./core/phone/phone.service');

// css
require("./app.animations.css");
require("./app.css");

//bootstraping the application
angular.element(function() {
    angular.bootstrap(document, ['phonecatApp']);
});