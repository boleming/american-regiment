<!-- 商品详情 -->
<template>
	<transition name="food-detail">
		<div class="food" ref="foodView" v-show="showFlag">
			<div class="food-wrapper">
				<div class="food-content">
					<div class="img-wrapper">
						<img :src="food.picture" alt="" class="food-img">
						<span @touchstart="closeView" class="close-bt icon-close">x</span>
						<img src="./img/share.png" alt="" class="share-bt">
						<img src="./img/more.png" alt="" class="more-bt">
					</div>
				</div>
				<div class="content-wrapper">
					<h3 class="name">{{food.name}}</h3>
					<p class="saled">{{food.month_saled_content}}</p>
					<img v-show="food.product_label_picture" :src="food.product_label_picture" alt="" class="product">
					<p class="price">
						<span class="text">{{food.min_price}}</span>
						<span class="unit">{{food.unit}}</span>
					</p>
					<div class="cartcontrol-wrapper">
						<app-cart-control :food="food"></app-cart-control>
					</div>
					<div @touchstart="addProduct" class="buy" v-show="!food.count||food.count==0">选规格</div>
				</div>
				<app-split></app-split>
				<!-- 外卖评价 -->
				<div class="rating-wrapper">
					<div class="rating-title">
						<div class="like-ratio" v-if="food.rating">
							<span class="title">{{food.rating.title}}</span>
							<span class="retio">
								(
									{{food.rating.like_ratio_desc}}
									<i>{{food.like_ratio}}</i>
								)
							</span>
						</div>
						<div class="snd-title" v-if="food.rating">
							<span class="text">{{food.rating.snd_title}}</span>
							<span class="icon icon-keyboard_arrow_right"></span>
						</div>
					</div>
					<ul class="rating-content" v-if="food.rating">
						<li v-for="(comment,index) in food.rating.comment_list" :key="index" class="comment-item">
							<div class="comment-header">
								<img :src="comment.user_icon" v-if="comment.user_icon">
								<img src="./img/anonymity.png" v-if="!comment.user_icon">
							</div>
							<div class="comment-main">
								<div class="user">
									{{comment.user_name}}
								</div>
								<div class="time">
									{{comment.comment_time}}
								</div>
								<div class="content">
									{{comment.comment_content}}
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import Vue from 'vue'
	import BScroll from 'better-scroll'
	import CartControl from '../cartcontrol/CartControl'
	import Split from '../split/Split'
	export default {
		data(){
	  		return{
	  			showFlag:false
	  		}
		},
		components:{
			"app-cart-control":CartControl,
			"app-split":Split
		},
		props:{
			food:{
				type:Object
			}
		},
		methods:{
			showView(){
				this.showFlag = true;
				this.$nextTick(() =>{
					if(!this.scroll){
						this.scroll = new BScroll(this.$refs.foodView,{
							touchstart:true
						})
					}else{
						this.scroll.refresh()
					}
				})
			},
			closeView(){
				this.showFlag = false;
			},
			addProduct(){
				Vue.set(this.food,"count",1)
			}
		}
	}
</script>

<style scoped>
.food{
	position: fixed;
	left: 0;
	top: 0;
	bottom: 51px;
	background: white;
	width: 100%;
	z-index: 90;
}

.food-detail-enter-active, .food-detail-leave-active {
  transition:  0.3s
}
.food-detail-enter, .food-detail-leave-to {
  transform: translateX(100%);
}

.img-wrapper{
	position: relative;
	width: 100%;
	height: 0;
	padding-top: 100%;
}

.food-img{
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
}
.close-bt{
	width: 30px;
	height: 30px;
	position: absolute;
	left: 10px;
	top: 10px;
	text-align: center;
	line-height: 30px;
	font-size: 16px;
	color: white;
	background: #7f7f7f;
	border-radius: 50%;
}
.share-bt,.more-bt
{
	width: 30px;
	height: 30px;
	position: absolute;
	top: 10px;
}
.share-bt{
	right: 50px;
}
.more-bt{
	right: 10px;
}

.content-wrapper{
	padding: 0 0 16px 16px;
	position: relative;
}
.name{
	font-size: 15px;
	color: #333333;
	line-height: 30px;
	font-weight: bold;
}
.saled{
	font-size: 11px;
	color: #9d9d9d;
	margin-bottom: 6px;
}
.product{
	height: 15px;
	margin-bottom: 16px;
}
.price{
	font-size: 0;
}
.price .text{
	font-size: 17px;
	color: #FB4E44;
}
.unit{
	font-size: 11px;
	color: #9D9D9D;
}
.cartcontrol-wrapper{
	position: absolute;
	right: 12px;
	bottom: 10px;
	padding: 2px;
}
.buy{
	width: 64px;
	height: 30px;
	font-size: 12px;
	line-height: 30px;
	text-align: center;
	background: #FFD161;
	border-radius: 30px;
	position: absolute;
	right: 12px;
	bottom: 10px;
}

.rating-wrapper{
	padding-left: 16px;
}
.rating-title{
	padding: 16px 16px 16px 0;
}
.like-ratio{
	float: left;
	font-size: 0;
}
.title{
	font-size: 13px;
}
.ratio{
	font-size: 11px;
}
.ratio i{
	color: #FB4E44;
	font-size: 11px;
}

.snd-title{
	float: right;
	font-size: 0;
}
 .snd-title .text,
 .snd-title .icon
{
	font-size: 13px;
	color: #9D9D9D;
	display: inline-block;
}
 .snd-title .icon{
	margin-left: 12px;
}


.comment-item{
	padding: 15px 14px 17px 0;
	border-bottom: 1px solid #F4F4F4;
	width: 100%;
	box-sizing: border-box;
	display: flex;
}
.comment-item .comment-header{
	flex: 0 0 41px;
	margin-right: 10px;
}
.comment-item .comment-header img{
	width: 41px;
	height: 41px;
	border-radius: 50%;
}

.comment-item .comment-main{
	flex: 1;
	margin-top: 6px;
}
.comment-item .comment-main .user{
	width: 50%;
	float: left;
	font-size: 12px;
	color: #333333;
}
.comment-item .comment-main .time{
	width: 50%;
	float: right;
	text-align: right;
	font-size: 10px;
	color: #666666;
}
.comment-item .comment-main .content{
	margin-top: 17px;
	font-size: 13px;
	line-height: 19px;
}
</style>
