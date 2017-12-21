var app = angular.module('myApp', []);

app.controller('mainController', ['$scope', function($scope){
      $scope.tasks = [];


      var taskData = localStorage['tasklist'];

      if(taskData != undefined) {
        $scope.tasks = JSON.parse(taskData);
      }


     $scope.searchEnter = function(){
          if(event.which == 13){

            $scope.addTask();
          }
     };

     $scope.addTask = function(){
        $scope.tasks.push({'taskMessage':$scope.task, 'status':false});
        $scope.task = "";
        localStorage['tasklist'] = JSON.stringify($scope.tasks);
     };

     $scope.contentEdit = function(){

         event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";

         localStorage['tasklist'] = JSON.stringify($scope.tasks);  
     };

     $scope.enterAgain = function(){
       if(event.which == 13){

         $scope.contentEdit();
       }
     };
}]);
