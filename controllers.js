/**
 * Created by pranithachandra on 7/22/17.
 */
weatherReport.controller('homeController',['$scope','cityService',function($scope,cityService){
    $scope.city = cityService.city;

    $scope.$watch('city' , function(){
        cityService.city = $scope.city ;
    })


}]);

weatherReport.controller('forecastController',['$scope', '$resource', '$routeParams','cityService',function($scope , $resource , $routeParams , cityService){

    $scope.city = cityService.city;

    $scope.days = $routeParams.days || '2';

    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?appid=166516005eb5b2057f5a88fcd310d7c5",{
        callback: "JSON_CALLBACK" }, { get : { method : "JSONP"}});

    $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt:$scope.days});

    //console.log($scope.weatherResult);

    $scope.convertToFahrenheit  = function(degk){

        return Math.round((1.8 * (degk - 273)) + 32);
    }

    $scope.convertToDate  = function(dt){

        return new Date(dt * 1000);
    }

}]);