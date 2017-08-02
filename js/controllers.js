(function() {
    'use strict';

    angular.module('opb')
        .controller('InfoController',['$scope','$http','appConfig',function ($scope,$http,appConfig) {
            $http.get(appConfig.dataPath +'/config.json').then(function (data) {

                $scope.author = data.author;
                $scope.description = data.description;
                $scope.about = data.about;
                $scope.twitter = data.twitter;
                $scope.linkedin = data.linkedin;
                $scope.github = data.github;
                $scope.imageurl = data.imageurl;
                $scope.rss = appConfig.dataPath + "/rss.xml";
            });
        }])
        .controller('HomeController',['$scope','$log','dataService',function ($scope,$log,dataService) {
            dataService.getArticleList(
                function (data) {
                    $scope.articles = data;
                });
        }])
        .controller('ArticleController',['$scope','$stateParams','$log','dataService',function ($scope, $stateParams,$log,dataService) {
            dataService.getArticle($stateParams.filename,
                function (data) {
                    var converter = new showdown.Converter();
                    var result = converter.makeHtml(data);

                    $scope.articleText = result;
                });
        }]);
})();
