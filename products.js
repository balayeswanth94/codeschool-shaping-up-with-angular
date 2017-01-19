(function(){
var app = angular.module('store-products',[]);

app.directive('productTitle',function(){
	return {
		restrict: 'E',//Elemnet A:for Attribute
		templateUrl: 'product-title.html', 
	};
});
	app.directive('productPanels',function(){
		return{
			restrict: 'E',
			templateUrl: 'product-panels.html',
			controller:function(){
				this.tab=1;
				this.selectTab = function(setTab){
					this.tab=setTab;
				}
				this.isSelected = function(curTab){
					return this.tab===curTab;
				}
			},//controller-fn
			controllerAs: 'panels',		
		};

	});
	

}) ();


//	app.controller('PanelController',function(){});
/*	app.controller('PanelController',function(){
		this.tab=1;
		this.selectTab = function(setTab){
			this.tab=setTab;
		}
		this.isSelected = function(curTab){
			return this.tab===curTab;
		}
	});*/
