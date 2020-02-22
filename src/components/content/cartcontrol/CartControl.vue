<!-- 加减号 -->
<template>
	<div class="cartcntrol">
		<transition name="move">
			<div class="cart-decrease icon-remove_circle_outline" v-show="food.count" @touchstart="decreaseCart"></div>
		</transition>
		<div class="cart-count" v-show="food.count">{{food.count}}</div>
		<div class="cart-add icon-add_circle" @touchstart.stop="increaseCart">
			<i class="bg"></i>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	export default {
		props:{
			food:{
				type:Object
			}
		},
		methods:{
			decreaseCart(){
				this.food.count--
			},
			increaseCart(){
				if(!this.food.count){
					Vue.set(this.food,"count",1)
				}else{
					this.food.count++
				}
			}
		}
	}
</script>

<style scoped>
@import url("../../../common/css/icon.css");
.cartcntrol{
	font-size: 0;
}
.cart-decrease{
	display: inline-block;
	width: 26px;
	height: 26px;
	font-size: 26px;
	color: #b4b4b4;
}
.cart-count{
	display: inline-block;
	width: 25px;
	text-align: center;
	font-size: 12px;
	line-height: 26px;
	vertical-align: top;
}
.cart-add{
	display: inline-block;
	width: 26px;
	height: 26px;
	font-size: 26px;
	color: #ffd161;
	position: relative;
}
.bg{
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background: #496E91;
	position: absolute;
	left: 3px;
	top: 3px;
	z-index: -1;
}
.move-enter-active,.move-leave-active{
	transition: all 0.3s linear;
}
.move-enter,.move-leave-to{
	transform: translateX(20px) rotate(180deg);
}
</style>