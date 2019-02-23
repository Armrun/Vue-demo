var sb = {
			template: '<botton @click=\'On\'>点我</botton>',
			methods: {
				On: function(argument) {
					alert('yo.')
				}
			}
		}

var gua = new Vue({
		el: '.gua',
		data: {
			sb: {
				template: '<botton @click=\'On\'>点我</botton>',
				methods: {
					On: function(argument) {
						alert('yo.')
					}
				}
			}
		},
		components: {
			'gua': sb
		}
	})