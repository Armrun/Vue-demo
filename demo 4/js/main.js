var gua = new Vue({
		el: '.gua',
		data: {
			url: null,
			img: 'https://img.alicdn.com/imgextra/i3/3001593287/TB2YrvvCv9TBuNjy1zbXXXpepXa_!!3001593287.jpg',
			isactive: '屁',
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