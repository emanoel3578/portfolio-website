<template>
  <Navbar />
  <Header />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Header
  }
}
</script>

<style src="./assets/tailwind.css"></style>
