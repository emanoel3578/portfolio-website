<template>

    <div class="fixed opacity-50 h-16 bg-blue-500 w-full rounded-lg border-blue">
    </div>

    <div class="fixed flex justify-between w-full items-center text-white text-xl">
      <div class="flex items-center pt-1">
        <img src="img/logoNav.png" class="h-14 px-2">
        <p>Front Tech</p>
      </div>

      <div class="flex">
        <ul class="flex list-none">
          <li class="mx-2 rounded-full p-2 hover:text-black hover:bg-blue-300">Página inicial</li>
          <li class="mx-2 rounded-full p-2 hover:text-black hover:bg-blue-300">Serviços</li>
          <li class="mx-2 rounded-full p-2 hover:text-black hover:bg-blue-300">Projetos</li>
          <li class="mx-2 rounded-full p-2 hover:text-black hover:bg-blue-300">Planos</li>
          <li class="mx-2 rounded-full p-2 hover:text-black hover:bg-blue-300">Sobre</li>
          <li class="mx-2 rounded-full p-2 hover:text-black hover:bg-blue-300">Contato</li>
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
