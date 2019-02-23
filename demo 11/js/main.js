Vue.component('good', {
			template: "<button v-on='{click: goodOne}' :class='{active: (gooded == 1)}'>👍 {{goodCount}}</button>",
			props: ['whatan'],
			methods: {
				goodOne: function() {
					console.log('***点赞')
					if (this.gooded == 0) {
						this.goodCount++
						this.gooded++
					} else if (this.gooded == 1) {
						this.goodCount--
						this.gooded--
					}
					alert(this.whatan)
				}
			},
			data: function() {
				return {
					goodCount: 10,
					gooded: 0,
				}
			}
	})

var gua = new Vue({
	el: '.gua',
	components: {
		user: {
			template: '<a v-bind:href="/username/ + username">{{username}}</a>',
			props: ['username'],
		},
	},
})