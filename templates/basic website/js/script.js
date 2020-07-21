let app = angular.module ("myApp", []);
app.controller ("myCtroller", ($scope, $http) => {
    $http.get ("https://covid19.mathdro.id/api").then ((response) => {
        console.log (response);
        $scope.allDatas = response.data;
    }, (error) => {
        console.log (error);
    })
});