<template>
  <Navbar />
  <Header />
  <Servicos />
  <Projetos />
  <Planos />
  <Faq />
  <Sobrenos />
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Servicos from './components/Servicos.vue'
import Projetos from './components/Projetos.vue'
import Planos from './components/Planos.vue'
import Sobrenos from './components/Sobrenos.vue'
import Footer from './components/Footer.vue'
import Faq from './components/Faq.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Header,
    Servicos,
    Projetos,
    Planos,
    Faq,
    Sobrenos,
    Footer,
  }
}
</script>

<style src="./assets/tailwind.css"></style>
