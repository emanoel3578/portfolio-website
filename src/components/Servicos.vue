<template>
    <div>
        <div class="hidden md:block">
            <div class="flex bg-white font-kanit py-20">
                <div class="flex flex-col mx-auto my-0 text-center font-semibold text-gray-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <p class="text-3xl">AGÊNCIA DIGITAL E MARKETING ONLINE</p>
                    <p class="text-4xl">SOBRE A INCLOUD SISTEMAS</p>
                </div>
            </div>
        </div>

        <div id="servicosID" class="flex flex-col md:flex md:flex-row mx-auto my-0 w-full">
            <div class="flex flex-col">
                <div class="flex items-center bg-blue-500 slide-in-left">
                    <div class="w-1/2">
                        <img src="img/office1.png" class="">
                    </div>
                    <div class="flex flex-col w-1/2  text-center font-kanit text-gray-100 px-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <p class="font-bold text-4xl">Criação de Sistemas e sites que cabem no seu bolso</p>
                        <p class="text-2xl">Temos os melhores valores para o seu negócio crescer com a ajuda da tecnologia, nos orgulhamos em oferecer um serviço de qualidade e preços que buscam caber dentro do orçamento de negócios de pequenas e médias empresas.</p>
                    </div>
                </div>

                <div class="flex items-center slide-in-right">
                    <div class="flex flex-col w-1/2  text-center font-kanit text-black px-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <p class="font-bold text-4xl">Desenvolvimento de Sites para todas as plataformas</p>
                        <p class="text-2xl">Desenvolvemos todos os tipos de sites, do mais simples ao mais complexo sempre buscando o equilíbrio entre desempenho e design para que o usuário tenha a melhor experiència possível.</p>
                    </div>
                    <div class="w-1/2">
                        <img src="img/office2.jpg" class="">
                    </div>
                </div>

               <div class="flex items-center bg-blue-500 slide-in-left">
                    <div class="w-1/2">
                        <img src="img/office3.jpg" class="">
                    </div>
                    <div class="flex flex-col w-1/2  text-center font-kanit text-gray-100 px-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <p class="font-bold text-4xl">A qualquer momento e em qualquer lugar seu negócio está online</p>
                        <p class="text-2xl">Todo projeto que desenvolvemos vem com a garantia que você podera acessar em qualquer aparelho que tenha acesso a internet, em qualquer lugar a qualquer momento.</p>
                    </div>
                </div>

                <div class="flex items-center slide-in-right">
                    <div class="flex flex-col w-1/2  text-center font-kanit text-black px-10 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                        <p class="font-bold text-4xl">Suporte 24hrs 7dias da semana, você nunca está sozinho</p>
                        <p class="text-2xl">Garantimos suporte a todo momento sempre junto de você, queremos te mostrar como é fácil atravez da nossa plataforma solucionar qualquer problema.</p>
                    </div>
                    <div class="w-1/2">
                        <img src="img/office4.jpg" class="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Servicos.vue"
}
</script>

<style>
.scale-up-center {
	-webkit-animation: scale-up-center 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: scale-up-center 2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

.rotate-vert-center {
	-webkit-animation: rotate-vert-center 2s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
        animation: rotate-vert-center 2s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}

@-webkit-keyframes rotate-vert-center {
  0% {
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
  }
  100% {
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  }
}
@keyframes rotate-vert-center {
  0% {
    -webkit-transform: rotateY(0);
            transform: rotateY(0);
  }
  100% {
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  }
}

@-webkit-keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
            transform: scale(0.5);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

#office1Div {
    background:url('../../public/img/office1.png');
    background-size: 100% 100%;
    height: 55vh;
}

#office2Div {
    background:url('../../public/img/office2.jpg');
    background-size: 100% 100%;
    height: 55vh;
}

#office3Div {
    background:url('../../public/img/office3.jpg');
    background-size: 100% 100%;
    height: 55vh;
}

#office4Div {
    background:url('../../public/img/office4.jpg');
    background-size: 100% 100%;
    height: 55vh;
}

.slide-in-left {
	-webkit-animation: slide-in-left 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-in-left 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.slide-in-right {
	-webkit-animation: slide-in-right 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-in-right 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

section {
    position:absolute;
    width:100%;
    background: #3586ff;
    overflow:hidden;
}

section .wave {
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:100px;
    background:url('../../public/img/wave.png');
    background-size: 1000px 100px;
}

section .wave.wave1 {
    animation: animate 30s linear infinite;
    z-index:1000;
    opacity:1;
    animation-delay: 0s;
    bottom:0;
}

section .wave.wave2 {
    animation: animate2 15s linear infinite;
    z-index:999;
    opacity: 0.5;
    animation-delay: -5s;
    bottom: 10px;
}

section .wave.wave3 {
    animation: animate 30s linear infinite;
    z-index:998;
    opacity: 0.2;
    animation-delay: -2s;
    bottom: 15;
}

section .wave.wave4 {
    animation: animate2 5s linear infinite;
    z-index:997;
    opacity: 0.7;
    animation-delay: -2s;
    bottom: 20px;
}

@keyframes animate {
    0% {
        background-position-x: 0;
    }
    100% {
        background-position-x: 1000px;
    }
}

@keyframes animate2 {
    0% {
        background-position-x: 0;
    }
    100% {
        background-position-x: 1000px;
    }
}

@-webkit-keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}

@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
</style>