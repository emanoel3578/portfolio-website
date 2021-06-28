<template>
  <Navbar />
  <Header />
  <Servicos />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Servicos from './components/Servicos.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    Servicos,
  }
}
</script>

<style src="./assets/tailwind.css"></style>
