<template>
	<div class="menu smp-menu">
		<ul class="menu-list list-grid-5">
			<li class="menu-item" v-for="item in menuList" :key="item.name">
				<a class="mi-link" :href="item.links">
					<img class="link-icon" :src="item.menuImg" :alt="item.alt"/>
					<span class="link-title">{{item.name}}</span>
				</a>
			</li>
			
		</ul>	
	</div>
</template>

<script>
	export default{
		name:'menu',
		props:[],
		data(){
			return {
				menuList:[
					{name:'按钮',links:'/',menuImg:'https://m.360buyimg.com/mobilecms/s80x80_jfs/t5875/51/9145207616/18667/66a76536/59843c8cN82899dad.png',alt:'按钮'},
					{name:'表单',links:'/',menuImg:'https://m.360buyimg.com/mobilecms/s80x80_jfs/t5965/339/3633548361/13799/cd4d0416/5954cf81N3294a71c.png',alt:'按钮'},
					{name:'表单',links:'/',menuImg:'https://m.360buyimg.com/mobilecms/s80x80_jfs/t5656/351/153181074/12227/e35aa8d/591d9456Naa85e195.png',alt:'按钮'},
					{name:'表单',links:'/',menuImg:'https://m.360buyimg.com/mobilecms/s80x80_jfs/t5803/126/9174390895/18336/72dd428e/598420dfNdab74566.png',alt:'按钮'},
					{name:'表单',links:'/',menuImg:'https://m.360buyimg.com/mobilecms/s80x80_jfs/t5773/256/159664156/17475/742fec7e/591d9475Na810c2eb.png',alt:'按钮'},
					{name:'表单',links:'/',menuImg:'https://m.360buyimg.com/mobilecms/s80x80_jfs/t5647/156/156583179/12255/981e942a/591d94a1Nfde63a47.png',alt:'按钮'},
					{name:'表单',links:'/',menuImg:'https://m.360buyimg.com/mobilecms/s126x126_jfs/t2758/175/4146829331/10078/d6a3aa98/57aacab9N98edf989.png',alt:'按钮'},
					{name:'表单',links:'/',menuImg:'https://m.360buyimg.com/mobilecms/s80x80_jfs/t5872/340/146804759/11154/f4ae1409/591d94c4N79a488cc.png',alt:'按钮'},
					{name:'表单',links:'/',menuImg:'https://m.360buyimg.com/mobilecms/s80x80_jfs/t5824/248/156712927/7215/1ad6be5f/591d94c6Nc4711ad2.png',alt:'按钮'},
					{name:'表单',links:'/',menuImg:'https://m.360buyimg.com/mobilecms/s80x80_jfs/t5842/205/151189300/13247/a6de2d/591d94edNc42fb94d.png',alt:'按钮'}
				]
			}
		}
	}
</script>

<style scoped>
	.menu .menu-list li{
		margin: 0;
	}
</style>