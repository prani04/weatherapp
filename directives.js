/**
 * Created by pranithachandra on 7/22/17.
 */
weatherReport.directive("weatherReport",function(){

    return {
        restrict: 'E',
        templateUrl : 'directive/weather-report.html',
        replace     : true,
        scope: {
            weatherDay: "=",
            standard : "&",
            convertDate: "&",
            dateFormat : "@"
        }
    }
});

////Directive
//weatherReport.directive("footer",function(){
//
//    return {
//        restrict: 'E',
//        templateUrl : 'directive/footer.html',
//        replace     : true,
//    }
//});
