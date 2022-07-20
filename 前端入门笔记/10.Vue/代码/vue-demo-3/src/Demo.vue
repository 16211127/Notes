<template>
  <div id="app" class="red">
    {{message}}
  </div>
</template>

<script>

export default {
    props:['message']
}
</script>

<style>
.red{
  color:red
}
</style>
