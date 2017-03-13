var angular = require("angular");

var app = angular.module("todo-app", []);

app.run(["$rootScope", function(root) {
  root.started = true;
}]);

// wire the rest of the components however you see fit - either wire up here or
// write individual modules.
