/**
 * @Description: recipe
 */
<template>
  <section class="single-recipe">
  	<div v-for="item in recipe">
  		<h1 class="recipe-title">{{ item[0] }}</h1>
    <div class="recipe-image" @click="ss(item)">
    	{{ item[1] }}
    </div>
  	</div>
    
  </section>
</template>

<script>
import axios from 'axios';
export default {
  /**
	 * @description data from server
	 */
	asyncData (context) {
		return  axios({
	    method: 'get',
	    url: 'https://suggest.taobao.com/sug?code=utf-8&q=%E5%8D%AB%E8%A1%A3'
	})
	.then(function (data) {
            console.log(typeof data.data);
            return {
            	recipe: data.data.result
            } 
        })
  },
  methods:{
  	ss(item){
  		console.log(item)
  	}
  }

};
</script>

<style>
.single-recipe {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 990px;
  text-align: center;
  padding: 30px;
}
.recipe-title {
  margin-bottom: 20px;
  font-size: 36px;
}

.recipe-image img {
  width: 500px;
}

.recipe-content {
  padding: 20px 0;
  width: 500px;
  line-height: 22px;
  text-align: left;
}
</style>

