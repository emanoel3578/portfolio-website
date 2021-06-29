<template>
    <div class="">
        <div class="my-5">
            <div class="text-center">
                <p class="font-bold text-4xl mb-2">Projetos recentes:</p>
            </div>

            <div class="flex justify-around border-b-4 border-grey-200 w-3/5 mx-auto my-0">
                <div class="text-center" @click="sites = true, aplicativos = false, tecnologias = false">
                    <img class="cursor-pointer" src="img/website.png">
                    <p class="cursor-pointer text-blue-600 hover:text-black">Criação de sites</p>
                </div>
                <div class="text-center" @click="sites = false, aplicativos = true, tecnologias = false">
                    <img class="cursor-pointer" src="img/application.png">
                    <p class="cursor-pointer text-blue-600 hover:text-black">Criação de Aplicativos</p>
                </div>
                <div class="text-center" @click="sites = false, aplicativos = false, tecnologias = true">
                    <img class="cursor-pointer" src="img/program.png">
                    <p class="cursor-pointer text-blue-600 hover:text-black">Tecnologias que usamos</p>
                </div>
            </div>
        </div>

        <transition name="fade">
            <div v-show="sites">
                <div class="flex w-3/5 mx-auto my-0 items-center mb-5">
                    <div class="flex rounded-full py-3 px-6 bg-blue-500 w-full">
                        <img class="" src="img/computer.png">
                    </div>
                    
                    <div class="flex flex-col">
                        <div class="">
                            <div class="text-center font-bold text-3xl mb-2">
                                <p>Front Finanças</p>
                            </div>
                        </div>

                        <div class="text-center">
                            <p>Laborum cupidatat in aute enim laboris occaecat. Eu nulla adipisicing aliqua dolor occaecat. Qui magna minim cupidatat aliqua sint sunt deserunt consequat est fugiat. Amet anim Lorem culpa sit Lorem pariatur ea ullamco. Sit Lorem ullamco voluptate eiusmod aliqua officia do occaecat cupidatat ad fugiat. Veniam reprehenderit dolore exercitation voluptate dolor in deserunt ad dolor velit ex. Nostrud incididunt eu est exercitation aute do cillum.</p>
                        </div>
                    </div>
                </div>
            

            
                <div class="flex w-3/5 mx-auto my-0  items-center mb-5">
                    <div class="flex rounded-full bg-blue-500 w-full">
                        <img class="" src="img/computer.png">
                    </div>
                    
                    <div class="flex flex-col">
                        <div class="">
                            <div class="text-center font-bold text-3xl mb-2">
                                <p>Front Finanças</p>
                            </div>
                        </div>

                        <div class="text-center">
                            <p>Laborum cupidatat in aute enim laboris occaecat. Eu nulla adipisicing aliqua dolor occaecat. Qui magna minim cupidatat aliqua sint sunt deserunt consequat est fugiat. Amet anim Lorem culpa sit Lorem pariatur ea ullamco. Sit Lorem ullamco voluptate eiusmod aliqua officia do occaecat cupidatat ad fugiat. Veniam reprehenderit dolore exercitation voluptate dolor in deserunt ad dolor velit ex. Nostrud incididunt eu est exercitation aute do cillum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

        <transition name="fade">
            <div v-show="aplicativos">
                <div class="flex w-3/5 mx-auto my-0  items-center mb-5">
                    <div class="flex rounded-full bg-blue-500 w-full items-center">
                        <img class="mx-auto my-0" src="img/computer.png">
                    </div>
                    
                    <div class="flex flex-col">
                        <div class="">
                            <div class="text-center font-bold text-3xl mb-2">
                                <p>Front Finanças APP</p>
                            </div>
                        </div>

                        <div class="text-center">
                            <p>Laborum cupidatat in aute enim laboris occaecat. Eu nulla adipisicing aliqua dolor occaecat. Qui magna minim cupidatat aliqua sint sunt deserunt consequat est fugiat. Amet anim Lorem culpa sit Lorem pariatur ea ullamco. Sit Lorem ullamco voluptate eiusmod aliqua officia do occaecat cupidatat ad fugiat. Veniam reprehenderit dolore exercitation voluptate dolor in deserunt ad dolor velit ex. Nostrud incididunt eu est exercitation aute do cillum.</p>
                        </div>
                    </div>
                    <div class="flex bg-blue-500 rounded-full py-3 px-6 w-full">
                        <img class="" src="img/phone.png">
                    </div>
                </div>
            </div>
        </transition>

        <transition name="fade">
            <div v-show="tecnologias">
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

        <div class="flex justify-around border-b-4 border-grey-200 w-3/5 mx-auto mb-5"></div>

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
.fade-leave-from{
  opacity:1;
}
.fade-leave-to{
  opacity:0;
}
.fade-leave-active{
  transition:all 1s ease;
}


</style>