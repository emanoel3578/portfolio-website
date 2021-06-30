<template>
    <div class="" id="projetosID">
        <div class="my-5">
            <div class="text-center">
                <p class="font-bold text-4xl mb-10 font-kanit font-bold">Projetos recentes:</p>
            </div>

            <div class="flex md:justify-around border-b-4 items-center border-grey-200 md:w-3/5 mx-auto my-0 pb-5 mb-5 font-kanit">
                <div class="text-center px-4 md:px-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" @click="sites = true, aplicativos = false, tecnologias = false">
                    <img class="cursor-pointer w-20 md:w-auto mx-auto my-0" src="img/website.png" >
                    <p class="cursor-pointer text-blue-600 hover:text-black">Sites recentes</p>
                </div>
                <div class="text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" @click="sites = false, aplicativos = true, tecnologias = false">
                    <img class="cursor-pointer w-20 md:w-auto mx-auto my-0" src="img/application.png">
                    <p class="cursor-pointer text-blue-600 hover:text-black">Aplicativos recentes</p>
                </div>
                <div class="text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" @click="sites = false, aplicativos = false, tecnologias = true">
                    <img class="cursor-pointer w-20 md:w-auto mx-auto my-0" src="img/program.png">
                    <p class="cursor-pointer text-blue-600 hover:text-black">Tecnologias que usamos</p>
                </div>
            </div>
        </div>

        <transition name="fade">
            <div v-if="sites" class="">
                <div class="flex flex-col md:flex md:flex-row md:w-3/5 mx-auto my-0 items-center mb-5">
                    <div class="flex justify-center rounded-full bg-blue-500 md:w-full">
                        <img class="md:p-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src="img/computer.png">
                    </div>
                    
                    <div class="flex flex-col">
                        <div class="flex justify-center mt-5 md:mt-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mb-4">
                            <div class="text-center text-3xl">
                                <p class="font-kanit text-blue-900 font-semibold">Front Finanças - </p>
                            </div>

                            <div class="flex justify-center ml-2">
                                <p class="p-2 font-kanit rounded-3xl bg-gray-800 text-white border-3 border-gray-100 bg-gradient-to-r hover:from-blue-500 hover:to-purple-400 hover:text-white cursor-pointer shadow-lg">
                                    Visitar projeto
                                </p>
                            </div>
                        </div>

                        <div class="text-center md:ml-9">
                            <p class="font-poppins font-semibold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Laborum cupidatat in aute enim laboris occaecat. Eu nulla adipisicing aliqua dolor occaecat. Qui magna minim cupidatat aliqua sint sunt deserunt consequat est fugiat. Amet anim Lorem culpa sit Lorem pariatur ea ullamco. Sit Lorem ullamco voluptate eiusmod aliqua officia do occaecat cupidatat ad fugiat. Veniam reprehenderit dolore exercitation voluptate dolor in deserunt ad dolor velit ex. Nostrud incididunt eu est exercitation aute do cillum.</p>
                        </div>

                    </div>
                </div>
            

            
                <div class="flex flex-col md:flex md:flex-row md:w-3/5 mx-auto my-0  items-center mb-5">
                    <div class="flex justify-center rounded-full bg-blue-500 md:w-full">
                        <img class="md:p-5 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src="img/computer2.png">
                    </div>
                    
                    <div class="flex flex-col">
                        <div class="flex justify-center mt-5 md:mt-0 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 mb-5">
                            <div class="text-center text-3xl">
                                <p class="font-kanit text-blue-900 font-semibold ">Galaxy Studios -</p>
                            </div>

                            <div class="flex justify-center ml-2">
                                <p class="p-2 font-kanit rounded-3xl bg-gray-800 text-white border-3 border-gray-100 bg-gradient-to-r hover:from-blue-500 hover:to-purple-400 hover:text-white cursor-pointer shadow-lg">
                                    Visitar projeto
                                </p>
                            </div>
                        </div>

                        <div class="text-center md:ml-9">
                            <p class="font-poppins font-semibold transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Laborum cupidatat in aute enim laboris occaecat. Eu nulla adipisicing aliqua dolor occaecat. Qui magna minim cupidatat aliqua sint sunt deserunt consequat est fugiat. Amet anim Lorem culpa sit Lorem pariatur ea ullamco. Sit Lorem ullamco voluptate eiusmod aliqua officia do occaecat cupidatat ad fugiat. Veniam reprehenderit dolore exercitation voluptate dolor in deserunt ad dolor velit ex. Nostrud incididunt eu est exercitation aute do cillum.</p>
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
                            <div class="text-center text-3xl mt-4 md:mt-0 md:mb-2">
                                <p class="font-semibold font-kanit transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-blue-900 font-semibold">Front Finanças APP -</p>
                            </div>

                            <div class="flex justify-center items-center ml-2">
                                <p class="p-1 md:p-2 text-center font-kanit rounded-3xl bg-gray-800 text-white border-3 border-gray-100 bg-gradient-to-r hover:from-blue-500 hover:to-purple-400 hover:text-white cursor-pointer shadow-lg">
                                    Visitar projeto
                                </p>
                            </div>
                        </div>

                        <div class="text-center mx-8">
                            <p class="font-kanit transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Laborum cupidatat in aute enim laboris occaecat. Eu nulla adipisicing aliqua dolor occaecat. Qui magna minim cupidatat aliqua sint sunt deserunt consequat est fugiat. Amet anim Lorem culpa sit Lorem pariatur ea ullamco. Sit Lorem ullamco voluptate eiusmod aliqua officia do occaecat cupidatat ad fugiat. Veniam reprehenderit dolore exercitation voluptate dolor in deserunt ad dolor velit ex. Nostrud incididunt eu est exercitation aute do cillum.</p>
                        </div>
                    </div>
                    <div class="flex bg-blue-500 justify-center rounded-full w-full">
                        <img src="img/phoneframe.png" class="w-3/4 md:w-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    </div>
                </div>
            </div>
        </transition>

        <transition name="fade">
            <div v-if="tecnologias">
                <div class="flex flex-col w-3/5 mx-auto my-0 items-center mb-5">
                    <div class="flex items-center mx-auto my-3">
                        <img src="img/tec1.png" class="h-14 mx-10">
                        <img src="img/tec2.png" class="h-12 mx-10">
                        <img src="img/tec3.png" class="h-12 mx-10">
                    </div>

                    <div class="flex items-center mx-auto my-3">
                        <img src="img/tec4.png" class="h-12 mx-10">
                        <img src="img/tec5.png" class="h-12 mx-10">
                        <img src="img/tec6.png" class="h-20 mx-10">
                    </div>

                    <div class="flex items-center mx-auto my-3">
                        <img src="img/tec7.png" class="h-16 mx-10">
                        <img src="img/tec8.svg" class="h-8 mx-10">
                        <img src="img/tec9.png" class="h-10 mx-10">
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