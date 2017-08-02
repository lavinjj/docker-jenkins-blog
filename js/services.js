(function() {
    'use strict';

    angular.module('opb')
           .factory("dataService",['$http','$log','appConfig',function ($http, $log, appConfig) {
                return {
                    getArticleList: function (getArticleList_successCallbak) {
                        $http.get(appConfig.dataPath + '/articles.json').then(function (data) {
                            $log.debug(data);

                            getArticleList_successCallbak(data);
                        });
                    },
                    getArticle: function (paramid, getArticle_successCallbak) {
                        var url = appConfig.dataPath + '/' + paramid + ".md";

                        $http.get(url).then(function (data) {
                            getArticle_successCallbak(data);
                        });
                    }
                };
            }
        ]);
})();
