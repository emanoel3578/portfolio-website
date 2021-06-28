<template>
  <Navbar />
  <Header />
  <Servicos />
  <Projetos />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Servicos from './components/Servicos.vue'
import Projetos from './components/Projetos.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    Servicos,
    Projetos,
  }
}
</script>

<style src="./assets/tailwind.css"></style>
