export default function(appModule) {
  appModule.config(function ($routeProvider) {
    $routeProvider.
    when('/view1', {
      template: '<view1></view1>'
    }).
    otherwise('/view1');
  });
}

