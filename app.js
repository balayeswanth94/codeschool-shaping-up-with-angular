(function(){
	var app = angular.module('store', ['store-products']);
	app.controller('StoreController',['$http',function($http){
		var store = this;
		store.products = [ ];
		$http.get('products.json').success(function(data){
			store.products=data;
		});
	
	}]);

	app.controller("ReviewController",function(){
		this.review={};
		this.addReview=function(product){
			product.reviews.push(this.review);
			this.review={};
		}
	});
	/*
		app.controller('StoreController', function(){
		this.products=gems;
	});
	var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Dodecahedron description...',
      img: [
        {
          full: 'http://courseware.codeschool.com.s3.amazonaws.com/shaping-up-with-angular-js/images/gem-01.gif'
        }
      ],
      canPurchase: true,
      soldOut: false,
      reviews: [
        {
          stars: 5,
          body: 'I love this gem!',
          author: 'user@codeschool.com'
        },
        {
          stars: 1,
          body: 'This sucks!',
          author: 'user@codeschool.com'
        }
      ]
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'Pentagonal Gem description...',
      img: [
        {
          full: 'http://courseware.codeschool.com.s3.amazonaws.com/shaping-up-with-angular-js/images/gem-02.gif'
        }
      ],
      canPurchase: true,
      soldOut: false,
      reviews: [
        {
          stars: 5,
          body: 'I love this gem!',
          author: 'user@codeschool.com'
        },
        {
          stars: 1,
          body: 'This sucks!',
          author: 'user@codeschool.com'
        }
      ]
    }
  ];
	*/
})();
