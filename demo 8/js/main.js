var gua = new Vue({
		el: '.gua',
		data: {
			a: 1,
			b: 43
		},
		computed: {
			sum: function() {
				return this.a + this.b 
			}
		}		
	})