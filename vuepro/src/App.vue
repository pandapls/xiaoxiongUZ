<template>
  <div id="app">
  	<myhead></myhead>
    <router-view/>
    <myfoot></myfoot>
  </div>
</template>
<script type="text/javascript">
import myfoot from './components/myfoot'
import myhead from './components/myhead'
	export default{
		components:{
			myfoot,myhead
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
	 background: #f5f5f5;
}
#app {
  	width: 100vw;
	height: 100vh;
}


</style>
