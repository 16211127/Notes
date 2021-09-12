<template>
    <div  id="app" class="red">
        {{n}}
        <button @click="add">+1</button>
    </div>
</template>

<script>
 export default {
    name: 'App',
    data(){
      return {
        n:0
      }
    },
    methods:{
      add(){
        this.n += 1
      }
    }
}
</script>

<style scoped>
.red{
  color: red;
}
</style>
