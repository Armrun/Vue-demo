var gua = new Vue({
		el: '.gua',
		data: {
			sex: 'male',
			sexl: ['male'],
			atr: 'sbsbbbsbbsbsbsbsbsbsb',
			who: 2
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