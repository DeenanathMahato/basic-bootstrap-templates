let URL ="https://covid19.mathdro.id/api";

let app = angular.module ("myApp", []);
app.controller ("myCtroller", ($scope, $http) => {
    $scope.title = "Stay Home Stay Safe!!"

    $http.get (URL).then ((response) => {
        $scope.allDatas = response.data;
    }, (error) => {
        console.log (error);
    })

    $scope.getContryData = () => {
        let country = $scope.countryName;
        if (country == "") {
            $scope.country_datas = undefined;
        } 

        $http.get (URL + "/countries/" + country).then ((resp) => {
            $scope.country_datas = resp.data;
        }, (error) => {
            console.log (error);
            $scope.country_datas = undefined;
        })
    }
});
