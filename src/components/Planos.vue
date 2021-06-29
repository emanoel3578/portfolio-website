<template lang="">
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <div class="bg-blue-400 font-sans pb-20 pt-10">
        <div class="font-semibold text-3xl text-white text-center pb-5">Planos perfeitos pra o seu negocio:</div>

        <div class="flex justify-center items-center">

            <div class="flex flex-col bg-gray-900 border-4 shadow-xl transform scale-110 rounded-3xl bg-white px-5 pb-10 m-5">

                <div class="absolute z-10 -top-12 -left-10">
                    <img src="img/promocao.png" class="h-24 transform -rotate-45">
                </div>

                <div class="flex justify-end pt-2">
                    <a class="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">Popular</a>
                </div>

                <a class="font-bold text-3xl text-white text-center pb-3">Plano ideal</a>
                <div class="flex border-b-4 border-grey-200 items-center justify-center text-white">
                    <a class="text-sm">$</a>
                    <a class="text-2xl font-bold">599</a>
                    <a class="text-sm">/Site ou programa</a>
                </div>

                <div class="flex flex-col">
                    <div class="flex my-4">
                        <span class="material-icons text-gray-400 pr-1">done</span>
                        <p class="text-gray-400 ">Dominio exclusivo para sua </p>
                        <p class="text-blue-600 font-semibold pl-1">Marca</p>
                    </div>
                    <div class="flex mb-4">
                        <span class="material-icons text-gray-400 pr-1">done</span>
                        <p class="text-gray-400">Experiência customizada para seu</p>
                        <p class="text-blue-600 font-semibold pl-1">Negócio</p>
                    </div>
                    <div class="flex mb-4">
                        <span class="material-icons text-gray-400 pr-1">done</span>
                        <p class="text-gray-400">Suporte para sua empresa</p>
                        <p class="text-blue-600 font-semibold pl-1">24 Horas</p>
                    </div>

                </div>
            </div>

            <div>
                <p class="text-center items-center font-semibold text-white text-5xl mx-8"> OU </p>
            </div>

            <div>
                <div class="flex flex-col bg-white border-4 shadow-xl transform scale-110 rounded-3xl border-black px-5 pb-6 m-5">

                <a class="font-semibold text-3xl text-black text-center pb-3 pt-5">Completo</a>
                <div class="flex border-b-4 border-grey-200 items-center justify-center text-black">
                    <a class="text-sm">$</a>
                    <a class="text-2xl font-bold">599</a>
                    <a class="text-sm">/Site ou programa</a>
                </div>

                <div class="flex flex-col">
                    <div class="flex my-6">
                        <span class="material-icons text-gray-900 pr-1">done</span>
                        <p class="text-gray-600 ">Dominio exclusivo para sua </p>
                        <p class="text-blue-600 font-semibold pl-1">Marca</p>
                    </div>
                    <div class="flex mb-6">
                        <span class="material-icons text-gray-600 pr-1">done</span>
                        <p class="text-gray-600">Experiência customizada para seu</p>
                        <p class="text-blue-600 font-semibold pl-1">Negócio</p>
                    </div>
                    <div class="flex mb-6">
                        <span class="material-icons text-gray-600 pr-1">done</span>
                        <p class="text-gray-600">Suporte para sua empresa</p>
                        <p class="text-blue-600 font-semibold pl-1">24 Horas</p>
                    </div>

                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Planos",
}
</script>