<template>
  <Navbar />
  <Header />
  <Servicos />
  <Projetos />
  <Planos />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Servicos from './components/Servicos.vue'
import Projetos from './components/Projetos.vue'
import Planos from './components/Planos.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    Servicos,
    Projetos,
    Planos,
  }
}
</script>

<style src="./assets/tailwind.css"></style>
