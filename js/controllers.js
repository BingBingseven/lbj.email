angular.module("app.controllers",[])
.controller('navController',function($scope){
   $scope.changeColor=function(){ 
       
   };
})
.controller('writeController', function($scope,$http){
    $scope.sendInfo={};
    $scope.sendInfo.reciever="";
    $scope.sendInfo.others=[];
    $scope.sendInfo.emailTitle="";
    $scope.sendInfo.subject="";
    $scope.sendEmail=function(){

        
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