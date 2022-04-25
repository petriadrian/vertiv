import 'angular-route';
import './view1/view1';
import './view2/view2';
import './core/version/version';

// Declare app level module which depends on views, and core components
export default angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]);
