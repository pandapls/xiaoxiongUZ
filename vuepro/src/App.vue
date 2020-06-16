<template>
  <div id="app">
    <router-view/>
    <myfoot></myfoot>
  </div>
</template>
<script type="text/javascript">
import myfoot from './components/myfoot'
	export default{
		components:{
			myfoot
		}
	}
</script>
<style>
	*{
		margin: 0;
		padding: 0;
	}
body{
	 font-family: Avenir, Helvetica, Arial, sans-serif;
}
#app {
  	width: 100vw;
	height: 100vh;
}


</style>
