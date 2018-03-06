angular.module("app.controllers",[])
.controller('navController',function($scope,$rootScope){
    $rootScope.user="dream111@foxmail.com";
    $scope.changeColor=function(){ 
            
   };
})
.controller('inboxListController',function($scope,letterList,$stateParams,$rootScope){
    $rootScope.inbox=[];
    $rootScope.inbox=letters['inbox'];
})
.controller('contentController',function($scope,$stateParams,$rootScope){
    $scope.letterId=$stateParams.letterId;
    $scope.currentLetter=$rootScope.inbox[$scope.letterId];
}
)
.controller('writeController', function($scope,$http,$rootScope){
    $scope.sendInfo={};
    $scope.sendInfo.reciever="";
    $scope.sendInfo.others=[];
    $scope.sendInfo.emailTitle="";
    $scope.sendInfo.subject="";
    $scope.sendEmail=function(){
        console.log($rootScope.user);
        if($scope.sendInfo.reciever==undefined){
            $scope.check=true;
        }else{
            $scope.check=false;
            console.log($scope.sendInfo);
            //此处添加ajax
            // $http({
            //     method:'GET',
            //     url:'/'
            // }).then(function successCallback(response){

            // },function errorCallback(response){

            // })
        }
        $scope.sendInfo.reciever="";
        $scope.sendInfo.others=[];
        $scope.sendInfo.emailTitle="";
        $scope.sendInfo.subject="";
    }
});