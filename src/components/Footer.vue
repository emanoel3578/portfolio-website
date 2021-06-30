<template lang="">
    <div class="font-kanit">
        <div class="bg-gray-800 flex justify-center">
            <div class="flex justify-around w-3/5 py-3 items-center">
                <div class="flex flex-col ">
                    <p class="text-white text-sm text-center">
                        Copyright © 2021. Todos os direitos reservados.
                    </p>

                    <p class="text-white text-sm">
                        | Site Seguro Todo o conteúdo deste site é de uso exclusivo da Front Tech - CNPJ 21.118.421.468-98
                    </p>
                </div>

                <div class="flex flex-col">
                    <div class="flex cursor-pointer  text-white m-2 transform scale-110 rounded-3xl border-black px-5 pb-6 m-1 transition duration-500 ease-in-out transform hover:-translate-y-4 hover:scale-110">
                        <img src="img/facebook.png">
                        <p class="pr-4">Facebook</p>
                        <img src="img/instagram.png">
                        <p>Instagram</p>
                    </div>

                    <div class="flex cursor-pointer text-white m-2 transform scale-110 rounded-3xl border-black px-5 pb-6 m-1 transition duration-500 ease-in-out transform hover:-translate-y-4 hover:scale-110">
                        <img src="img/whatss.png">
                        <p class="pr-4">Whatsapp</p>
                        <img src="img/git.png">
                        <p>GitHub</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",
}
</script>