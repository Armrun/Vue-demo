var gua = new Vue({
		el: '.gua',
		data: {
			role: 'gua'
		},
		methods: {
			onClick: function() {
				console.log('****点击了')
			},
			mouseEn: function() {
				console.log('****鼠标进入')
			},
			mouseOu: function() {
				console.log('****鼠标离开')
			},
			kEnter: function() {
				console.log('****回车了')
			}

		}
	})