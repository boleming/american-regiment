import goods from '@/components/content/goods/goods'
import ratings from '@/components/content/ratings/ratings'
import sellers from '@/components/content/sellers/sellers'

export default[
	{
		path:"/",
		redirect:'/goods'
	},
	{
		path:"/goods",
		component:goods
	},
	{
		path:"/ratings",
		component:ratings
	},
	{
		path:"/sellers",
		component:sellers
	}
]