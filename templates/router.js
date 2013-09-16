/*global <%= _.camelize(appname) %>, Backbone*/

<%= _.camelize(appname) %>.Routers = <%= _.camelize(appname) %>.Routers || {};

(function () {
    'use strict';

    <%= _.camelize(appname) %>.Routers.<%= _.classify(name) %>Router = Backbone.Router.extend({
        routes: {
            "*actions": "defaultRoute"
        },
        defaultRoute: function() {

        }
    });

})();
