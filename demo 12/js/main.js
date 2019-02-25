Vue.component('sass', {
	template: `<div>
					<show v-on='{money: show_money, foo: again,}'></show>
					<h1 v-show='showed'>{{con}}亿 {{emithing}}</h1>
				</div>`,
	methods: {
		show_money: function(data) {
			console.log('接到子组件转来的数据了 ' + data)
			this.showed = !this.showed
		},
		again: function(data) {
			console.log(data)
			this.emithing = data
		},
	},
	data: function() {
		return {
			showed: false,
			con: '￥4231439999999',
		}
	}
})

Vue.component('show', {
	template: "<button v-on='{click: on_click}'>显示余额</button>",
	methods: {
		'on_click': function() {
			console.log('点击事件')
			this.$emit('money', 'ssamco')
			this.$emit('foo', '又穿回来了')
		},
		
	},
})

var gua = new Vue ({
	el: '.gua',
})