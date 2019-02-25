var Event = new Vue()

Vue.component('yubi', {
	template: `
		<div>
			<h2>组件A</h2>
			玉碧说：<input type="text" v-model='say' @keyup='something_chang' />
		</div>`,
	methods: {
		something_chang: function() {
			console.log('*****keyup')
				Event.$emit('yubi!', this.say)
		},
	},
	data: function() {
		return {
			say: '',
		}
	}
})

Vue.component('run', {
	template: `
		<div>
			<h2>组件B</h2>
			玉碧说了:{{yubi_say}}
		</div>`,
	mounted: function() {
		var me = this
		Event.$on('yubi!', function(data) {
			me.yubi_say = data
		})
	},
	data: function() {
		return {
			'yubi_say': '',
		}
	},
})

var gua = new Vue ({
	el: '.gua',
})