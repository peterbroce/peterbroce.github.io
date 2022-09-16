<template>
  <div>
      <router-link to="/home" tag="button">home</router-link>
      <router-link to="/demo" tag="button">demo</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: "App"
}
</script>
