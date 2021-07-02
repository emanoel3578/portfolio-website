<template>
    <div class="" id="projetosID">
        <div class="w-full flex bg-blue-400 font-kanit py-5">
            <div class="flex mx-auto my-0 py-2">
                <div class="flex flex-col items-center">
                    <div class="md:text-3xl text-lg font-semibold text-white text-center px-3">
                        DESCUBRA COMO A FRONT TECH PODE AJUDAR A MELHORAR OS RESULTADOS DO SEU NEGÓCIO.
                    </div>
                    <div class="flex justify-center mt-5">   
                        <p class="p-2 text-lg md:text-2xl font-kanit bg-gray-800 text-white border-3 border-gray-100 bg-gradient-to-r hover:from-blue-500 hover:to-purple-400 hover:text-white cursor-pointer shadow-lg">
                            Visitar projetos
                        </p>
                    </div>
                </div>
            </div>
        </div>


        <div class="">
            <div class="text-center my-5">
                <p class="font-bold text-4xl font-kanit font-bold">Projetos recentes:</p>
                <p class="text-lg">(Clique nos ícones abaixo)</p>
            </div>

            <div class="flex md:justify-around border-b-4 items-center border-grey-200 md:w-3/5 mx-auto my-0 pb-5 mb-5 font-kanit">
                <div class="text-center px-4 md:px-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" @click="sites = true, aplicativos = false, tecnologias = false">
                    <img src="img/click.png"  class="mx-auto my-0 animate-pulse transform rotate-180" >
                    <img class="cursor-pointer w-20 md:w-auto mx-auto my-0" src="img/website.png" >
                    <p class="cursor-pointer text-blue-600 hover:text-black">Sites recentes</p>
                </div>
                <div class="text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" @click="sites = false, aplicativos = true, tecnologias = false">
                    <img src="img/click.png"  class="mx-auto my-0 animate-pulse transform rotate-180 mb-2" >
                    <img class="cursor-pointer w-20 md:w-auto mx-auto my-0" src="img/application.png">
                    <p class="cursor-pointer text-blue-600 hover:text-black">Aplicativos recentes</p>
                </div>
                <div class="text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" @click="sites = false, aplicativos = false, tecnologias = true">
                    <img src="img/click.png"  class="mx-auto my-0 animate-pulse transform rotate-180" >
                    <img class="cursor-pointer w-20 md:w-auto mx-auto my-0" src="img/program.png">
                    <p class="cursor-pointer text-blue-600 hover:text-black">Tecnologias que usamos</p>
                </div>
            </div>
        </div>

        <transition name="fade">
            <div v-if="sites" class="">
                <div class="flex flex-col md:flex md:flex-row md:w-3/5 mx-auto my-0 items-center mb-5">
                    <div class="flex justify-center rounded-full bg-blue-500 md:w-1/2">
                        <img class="md:py-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src="img/computer.png">
                    </div>
                    
                    <div class="flex flex-col md:w-full">
                        <div class="flex justify-center mt-5 md:mt-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mb-4">
                            <div class="flex flex-col md:flex md:flex-row">
                                <div class="text-center text-3xl">
                                    <p class="font-kanit text-blue-900 font-semibold">Front Finanças</p>
                                </div>

                                <div class="flex justify-center ml-2">
                                    <p class="p-2 font-kanit rounded-3xl bg-gray-800 text-white border-3 border-gray-100 bg-gradient-to-r hover:from-blue-500 hover:to-purple-400 hover:text-white cursor-pointer shadow-lg">
                                        Visitar projeto
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col text-center mx-4 md:mx-0 md:ml-9 font-poppins font-semibold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <div class="text-sm md:text-lg pb-2">
                                <p class="text-green-800">Principais Funções:</p>
                                <p class="text-blue-800">1: Adição e controle das despesas e receitas mensais</p>
                                <p class="text-blue-800">2: Geração de relatórios mensais e anuais de cada operação </p>
                                <p class="text-blue-800">3: Gráficos responsivos de acordo com os dados</p>
                                <p class="text-blue-800">4: Disponível para Computador/Celular/Tablet</p>
                            </div>
                            <p class="">
                                Nosso sistema mais recente, desenvolvido com o objetivo de automatizar todo o processo de fluxo de caixa e controle de finanças do nosso cliente.
                            </p>
                        </div>

                    </div>
                </div>
            

            
                <div class="flex flex-col md:flex md:flex-row md:w-3/5 mx-auto my-0  items-center mb-5">
                    <div class="flex justify-center rounded-full bg-blue-500 md:w-1/2">
                        <img class="md:py-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src="img/computer2.png">
                    </div>
                    
                    <div class="flex flex-col md:w-full">
                        <div class="flex justify-center mt-5 md:mt-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mb-5">
                            <div class="flex flex-col md:flex md:flex-row">
                                <div class="text-center text-3xl">
                                    <p class="font-kanit text-blue-900 font-semibold ">Galaxy Studios</p>
                                </div>
                                <div class="flex justify-center ml-2">
                                    <p class="p-2 font-kanit rounded-3xl bg-gray-800 text-white border-3 border-gray-100 bg-gradient-to-r hover:from-blue-500 hover:to-purple-400 hover:text-white cursor-pointer shadow-lg">
                                        Visitar projeto
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col text-center mx-4 md:mx-0 md:ml-9 font-poppins font-semibold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <div class="text-sm md:text-lg pb-2">
                                <p class="text-green-800">Principais Funções:</p>
                                <p class="text-blue-800">1: Tornar mais fácil o marketing da marca</p>
                                <p class="text-blue-800">2: Ter uma plataforma de controle de dados de quem frequenta o site</p>
                                <p class="text-blue-800">3: Gerar mais engajamento com futuros investidores</p>
                            </div>
                            <p class="">
                                Um site de estilo One page, com o intuito de solidificar o começo de uma start-up com o objetivo de buscar investimento para a crição de conteúdo voltado para curiosidades espaciais
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

        <transition name="fade">
            <div v-if="aplicativos">
                <div class="flex flex-col md:flex md:flex-row md:w-3/5 mx-auto my-0  items-center mb-5">
                    <div class="flex rounded-full bg-blue-500 w-full items-center">
                        <img class="mx-auto my-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src="img/computer.png">
                    </div>
                    
                    <div class="flex flex-col">
                        <div class="flex justify-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mb-5">
                            <div class="flex flex-col md:flex md:flex-row">
                                <div class="text-center text-3xl mt-4 md:mt-0 md:mb-2">
                                    <p class="font-semibold font-kanit transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-blue-900 font-semibold">Front Finanças APP</p>
                                </div>

                                <div class="flex justify-center items-center ml-2">
                                    <p class="p-1 md:p-2 text-center font-kanit rounded-3xl bg-gray-800 text-white border-3 border-gray-100 bg-gradient-to-r hover:from-blue-500 hover:to-purple-400 hover:text-white cursor-pointer shadow-lg">
                                        Visitar projeto
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="flex flex-col text-center md:ml-9 font-poppins font-semibold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            <div class="text-sm md:text-lg pb-2">
                                <p class="text-green-800">Principais Funções:</p>
                                <p class="text-blue-800">1: Adição e controle das despesas e receitas mensais</p>
                                <p class="text-blue-800">2: Geração de relatórios mensais e anuais de cada operação </p>
                                <p class="text-blue-800">3: Gráficos responsivos de acordo com os dados</p>
                                <p class="text-blue-800">4: Disponível para Computador/Celular/Tablet</p>
                            </div>
                            <p class="">
                                Nosso sistema mais recente, desenvolvido com o objetivo de automatizar todo o processo de fluxo de caixa e controle de finanças do nosso cliente.
                            </p>
                        </div>
                    </div>
                    <div class="flex bg-blue-500 justify-center rounded-full md:w-full">
                        <img src="img/phoneframe.png" class="w-3/4 md:w-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    </div>
                </div>
            </div>
        </transition>

        <transition name="fade">
            <div v-if="tecnologias">
                <div class="flex flex-col md:w-3/5 w-full mx-auto my-0 items-center mb-5">
                    <div class="flex items-center md:mx-auto md:my-3">
                        <img src="img/tec1.png" class="h-10 mr-3 md:h-14 md:mx-10">
                        <img src="img/tec2.png" class="h-8 mr-3 md:h-12 md:mx-10">
                        <img src="img/tec3.png" class="h-8 md:h-12 md:mx-10">
                    </div>

                    <div class="flex items-center md:mx-auto md:my-3">
                        <img src="img/tec4.png" class="h-8 mr-3 md:h-12 md:mx-10">
                        <img src="img/tec5.png" class="h-8 mr-3 md:h-12 md:mx-10">
                        <img src="img/tec6.png" class="h-12 md:h-20 md:mx-10">
                    </div>

                    <div class="flex items-center md:mx-auto md:my-3">
                        <img src="img/tec7.png" class="h-12 mr-1 md:h-16 md:mx-10">
                        <img src="img/tec8.svg" class="h-4 mr-3 md:h-8 md:mx-10">
                        <img src="img/tec9.png" class="h-6 md:h-10 md:mx-10">
                    </div>
                </div>
            </div>
        </transition>

        <div class="flex justify-around border-b-4 border-grey-200 md:w-3/5 mx-auto mb-10"></div>

    </div>
</template>

<script>
export default {
    name:"Projetos",
    data () {
        return {
            sites: true,
            aplicativos: false,
            tecnologias: false,
        }
    }
}
</script>

<style>

.fade-enter-from{
  opacity:0;
}
.fade-enter-to{
  opacity:1;
}
.fade-enter-active{
  transition:all 3s ease;
}


</style>