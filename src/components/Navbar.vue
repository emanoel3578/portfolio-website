<template>

    <div class="fixed opacity-50 h-16 bg-blue-500 top-0 w-screen md:w-full rounded-lg border-blue z-10">
    </div>

    <div class="fixed w-screen md:w-full md:flex md:justify-between items-center text-white text-xl z-10 font-kanit">
      <div class="flex items-center pt-1">
        <img src="img/logoNav.png" class="h-12 pt-2 px-2 md:h-14 md:pt-0 ">
        <p class="text-2xl md:ml-0 mx-auto my-0">Front Tech</p>
        <img src="img/hamburguer.png" class="pr-4 md:hidden">
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
    </div>
    
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style>

</style>
