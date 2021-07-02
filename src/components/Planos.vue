<template lang="">
<link rel="preconnect" href="https://fonts.gstatic.com"> 
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <div class="bg-blue-400 font-sans font-kanit pb-20 pt-10" id="planosID">
        <div class="font-semibold text-3xl text-white text-center pb-5 px-2 md:px-0">Planos perfeitos pra o seu negocio:</div>

        <div class="flex flex-col md:flex md:flex-row justify-center items-center">

            <div class="flex flex-col bg-gray-900 border-4 shadow-xl transform scale-110 rounded-3xl bg-white px-5 pb-10 m-5 transition duration-500 ease-in-out transform hover:-translate-y-4 hover:scale-110">

                <div class="absolute z-10 -top-12 -left-10">
                    <img src="img/promocao.png" class="h-24 transform -rotate-45">
                </div>

                <div class="flex justify-end pt-2">
                    <a class="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">Popular</a>
                </div>

                <a class="font-bold font-kanit text-3xl text-white text-center pb-3">Plano ideal</a>
                <div class="flex flex-col border-b-4 border-grey-200 items-center justify-center text-white">
                    <div class="-mb-2">
                        <a class="text-sm">$</a>
                        <a class="text-2xl font-bold ">999</a>
                        <a class="text-sm">/Sites,app ou programas</a>
                    </div>
                    <div class="-mb-2">
                        <a class="text-sm">ou</a>
                    </div>
                    <div>
                        <a class="">12x</a>
                        <a class="text-2xl pr-1">83,25</a>
                        <a class="text-sm">/Sites,app ou programas</a>
                    </div>
                </div>

                <div class="flex flex-col">
                    <div class="flex mb-4 pt-2">
                        <span class="material-icons text-gray-400 pr-1">done</span>
                        <div class="flex flex-col md:flex md:flex-row text-center">
                            <p class="text-gray-400">Experiência customizada para seu</p>
                            <p class="text-blue-600 font-semibold pl-1">Negócio</p>
                        </div>
                    </div>
                    <div class="flex mb-4">
                        <span class="material-icons text-gray-400 pr-1">done</span>
                        <div class="flex flex-col md:flex md:flex-row text-center">
                            <p class="text-gray-400">Entregamos no máximo de 14 dias ou seu dinheiro de</p>
                            <p class="text-blue-600 font-semibold pl-1">Volta</p>
                        </div>
                    </div>
                    <div class="flex mb-4">
                        <span class="material-icons text-gray-400 pr-1">done</span>
                        <div class="flex flex-col md:flex md:flex-row text-center">
                            <p class="text-gray-400">Desenvolvido para todas as plataformas</p>
                            <p class="text-blue-600 font-semibold pl-1">Computador e Mobile</p>
                        </div>
                    </div>
                    <div class="flex mb-4">
                        <span class="material-icons text-gray-400 pr-1">done</span>
                        <div class="flex flex-col md:flex md:flex-row text-center">
                            <p class="text-gray-400">Suporte vitalício para sua empresa</p>
                            <p class="text-blue-600 font-semibold pl-1">24 Horas</p>
                        </div>
                    </div>

                    <div class="flex justify-center">
                        <p @click="closeOrcamento()" class="p-2 rounded-3xl bg-white border-3 border-gray-100 cursor-pointer">
                            Adquirir orçamento !
                        </p>
                    </div>

                </div>
            </div>

            <div>
                <p class="text-center items-center font-semibold text-white text-5xl mx-8 mb-8 mt-3 md:mt-0 md:mb-0"> OU </p>
            </div>

            <div>
                <div class="flex flex-col bg-white border-4 shadow-xl transform scale-110 rounded-3xl border-black px-5 pb-6 m-5 transition duration-500 ease-in-out transform hover:-translate-y-4 hover:scale-110">

                <a class="font-semibold font-kanit text-3xl text-black text-center pb-3 pt-5">Básico</a>
                <div class="flex flex-col border-b-4 border-grey-200 items-center justify-center text-black">
                    <div class="-mb-2">
                        <a class="text-sm">$</a>
                        <a class="text-2xl font-bold ">699</a>
                        <a class="text-sm">/Sites,app ou programas</a>
                    </div>
                    <div class="-mb-2">
                        <a class="text-sm">ou</a>
                    </div>
                    <div>
                        <a class="">12x</a>
                        <a class="text-2xl pr-1">66,66</a>
                        <a class="text-sm">/Sites,app ou programas</a>
                    </div>
                </div>

                <div class="flex flex-col">
                    <div class="flex my-6">
                        <span class="material-icons text-gray-900 pr-1">done</span>
                        <div class="flex flex-col md:flex md:flex-row text-center">
                            <p class="text-gray-600 ">Dominio exclusivo para sua </p>
                            <p class="text-blue-600 font-semibold pl-1">Marca</p>
                        </div>
                    </div>
                    <div class="flex mb-6">
                        <span class="material-icons text-gray-600">done</span>
                        <div class="flex flex-col md:flex md:flex-row text-center">
                            <p class="text-gray-600">Experiência customizada para seu</p>
                            <p class="text-blue-600 font-semibold pl-1">Negócio</p>
                        </div>
                    </div>
                    <div class="flex mb-6">
                        <span class="material-icons text-gray-600 pr-1">done</span>
                        <div class="flex flex-col md:flex md:flex-row text-center">
                            <p class="text-gray-600">Suporte para sua empresa</p>
                            <p class="text-blue-600 font-semibold pl-1">24 Horas</p>
                        </div>
                    </div>

                    <div class="flex justify-center">
                        <p @click="closeOrcamento()" class="p-2 rounded-3xl bg-gray-800 text-white border-3 border-gray-100 cursor-pointer">
                            Adquirir orçamento !
                        </p>
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
    methods: {
        closeOrcamento () {
            document.getElementById('orcamentoID').className = "visible"
        }
    }
}
</script>