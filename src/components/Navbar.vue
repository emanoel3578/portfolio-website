<template>

    <div class="fixed opacity-50 h-16 bg-blue-500 top-0 w-screen md:w-full rounded-lg border-blue z-10">
    </div>

    <div class="fixed w-screen md:w-full md:flex md:justify-between items-center text-white text-xl z-10 font-kanit">
      <div class="flex items-center pt-1">
        <img src="img/logoNav.png" class="h-12 pt-2 px-2 md:h-14 md:pt-0 ">
        <p class="text-2xl md:ml-0 mx-auto my-0">Front Tech</p>
        <img @click="mobileMenu()" src="img/hamburguer.png" class="pr-4 md:hidden">
      </div>

      <div class="flex hidden md:block">
        <ul class="flex list-none">
          <li class="mx-2 rounded-full p-2 hover:text-black hover:bg-blue-300 cursor-pointer"><a href="#background-wrap">Página inicial</a></li>
          <li class="mx-2 rounded-full p-2 hover:text-black hover:bg-blue-300 cursor-pointer"><a href="#servicosID">Serviços</a></li>
          <li class="mx-2 rounded-full p-2 hover:text-black hover:bg-blue-300 cursor-pointer"><a href="#projetosID">Projetos</a></li>
          <li class="mx-2 rounded-full p-2 hover:text-black hover:bg-blue-300 cursor-pointer"><a href="#planosID">Planos</a></li>
          <li class="mx-2 rounded-full p-2 hover:text-black hover:bg-blue-300 cursor-pointer"><a href="#sobrenosID">Sobre</a></li>
        </ul>
      </div>

      <transition name="slide-fade">
        <div v-show="closeMobileMenu" class="fixed z-10 top-15 bg-blue-400 right-0 h-screen w-1/2">
          <div class="flex pt-5 flex-col scale-in-hor-right ">
            <ul class="">
              <li class="mx-2 rounded-full p-2 hover:text-black hover:bg-blue-300 cursor-pointer"><a href="#background-wrap">Página inicial</a></li>
              <li class="mx-2 rounded-full p-2 hover:text-black hover:bg-blue-300 cursor-pointer"><a href="#servicosID">Serviços</a></li>
              <li class="mx-2 rounded-full p-2 hover:text-black hover:bg-blue-300 cursor-pointer"><a href="#projetosID">Projetos</a></li>
              <li class="mx-2 rounded-full p-2 hover:text-black hover:bg-blue-300 cursor-pointer"><a href="#planosID">Planos</a></li>
              <li class="mx-2 rounded-full p-2 hover:text-black hover:bg-blue-300 cursor-pointer"><a href="#sobrenosID">Sobre</a></li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      closeMobileMenu: false
    }
  },
  methods: {
    mobileMenu () {
      this.closeMobileMenu = !this.closeMobileMenu
    }
  }
}
</script>

<style>

.scale-in-hor-right {
    -webkit-animation: scale-in-hor-right 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: scale-in-hor-right 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes scale-in-hor-right {
  0% {
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
    -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
    opacity: 1;
  }
}
@keyframes scale-in-hor-right {
  0% {
    -webkit-transform: scaleX(0);
            transform: scaleX(0);
    -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleX(1);
            transform: scaleX(1);
    -webkit-transform-origin: 100% 100%;
            transform-origin: 100% 100%;
    opacity: 1;
  }
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-leave-to
/* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>
