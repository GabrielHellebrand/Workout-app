var workout = angular.module('excelApp', []);

workout.controller('excelController', ['$scope', function($scope) {
  $scope.saveData = function() {
    var workbook = XLSX.utils.book_new();
    var worksheet = XLSX.utils.json_to_sheet([$scope.data]);

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    XLSX.writeFile(workbook, 'excelfile.xlsx');
  };
}]);