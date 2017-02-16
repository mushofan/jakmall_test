/* Get json data using VueJS */
var productsCatalog = '../json/products.json';
new Vue({
	el: "#products",

	data: {
		products: null
	},

	created: function(){
		this.fetchData();
	},

	methods: {
		fetchData: function(){
			var self = this;
			$.get(productsCatalog, function(data){
				self.products = data;
			});
		}
	}
});