(function () {
    'use strict';

    angular.module('app.uigrid', ['app.uigridService', 'ui.grid', 'ui.grid.pagination', 'ui.grid.edit', 'ui.grid.rowEdit', 'ui.grid.cellNav'])

            .controller('UIGridController', UIGridController);

    UIGridController.$inject = ['$log', 'uigridService', '$scope', 'uiGridConstants'];

    function UIGridController($log, uigridService, $scope, uiGridConstants) {
        var today = new Date();
        var nextWeek = new Date();
        nextWeek.setDate(nextWeek.getDate() + 7);

        $scope.highlightFilteredHeader = function( row, rowRenderIndex, col, colRenderIndex ) {
            if( col.filters[0].term ){
              return 'header-filtered';
            } else {
              return '';
            }
        };

        $scope.gridOptions = {
            paginationPageSizes: [25, 50, 75],
            paginationPageSize: 25,
            enableFiltering: true,
            columnDefs: [
                { field: 'name', headerCellClass: $scope.highlightFilteredHeader },
                { field: 'gender', enableFiltering: false }, 
                { field: 'company', headerCellClass: $scope.highlightFilteredHeader },
                { field: 'email',
                    filter: {
                      condition: uiGridConstants.filter.ENDS_WITH,
                      placeholder: 'ends with'
                    }, headerCellClass: $scope.highlightFilteredHeader },
                { field: 'phone' },
                { field: 'age', filters: [
                        {
                            condition: uiGridConstants.filter.GREATER_THAN,
                            placeholder: 'greater than'
                        },
                        {
                            condition: uiGridConstants.filter.LESS_THAN,
                            placeholder: 'less than'
                        }
                    ], headerCellClass: $scope.highlightFilteredHeader },
                //{ field: 'mixedDate', cellFilter: 'date', width: '15%', filter: {
                        //condition: uiGridConstants.filter.LESS_THAN,
                        //placeholder: 'less than',
                        //term: nextWeek
                    //}, headerCellClass: $scope.highlightFilteredHeader
                //},
                { field: 'mixedDate', displayName: "Long Date", cellFilter: 'date:"longDate"', filterCellFiltered:true, width: '15%'}
            ]
        };

        $scope.saveRow = function(rowEntity){
            //alert("Data Saved");
        }

        uigridService.getData().then(function (data) {            
            $scope.gridOptions.data = data;

            data.forEach( function addDates( row, index ){
                row.mixedDate = new Date();
                row.mixedDate.setDate(today.getDate() + ( index % 14 ) );
            });
        });
    }
})();
