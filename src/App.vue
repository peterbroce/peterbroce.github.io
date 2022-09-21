<template>
  <div>
      <!-- vue-router4.X removed 'tag' attributes -->
      <button>
      <router-link to="/home" tag="button">home</router-link>
      </button>
      <button>
      <router-link to="/demo" tag="button">demo</router-link>
      </button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: "App"
}
</script>
