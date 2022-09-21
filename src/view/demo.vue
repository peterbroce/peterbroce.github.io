<template>
  <div>
    <h1>demo page</h1>
    <h1>{{a.j}}</h1>
    <h1>{{b.k}}</h1>
    <h1>{{c.j}}</h1>
    <button @click="change">增加</button>
  </div>
</template>

<script>
  import { defineComponent, ref, reactive, watch, toRefs } from "vue";
  export default defineComponent({

  })
</script>
<script setup>
  const a = reactive({
    j:1
  }), 
    b = ref({
      k: 2
    }),
    c = toRefs(a);

  const arr = [
    ()=>JSON.parse(JSON.stringify(a)),
    ()=>JSON.parse(JSON.stringify(b.value)),
  ]
  watch(arr, (nv, ov)=>{
    console.log(nv, ov);
  }, {
    immediate: true
  });
  const change = () => {
    a.j++;
    b.value.k++;
  }
</script>

<style scoped>
  h1 {
    color: #ccc;
  }
</style>