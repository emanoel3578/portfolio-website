<template>
    <div>
        <Orcamento />
        <div id="background-wrap" class="absolute opacity-50 top-0 left-0 right-0 pt-50 bg-blue-500">
            <div class="x1">
                <div class="cloud"></div>
            </div>
            
            <div class="x2">
                <div class="cloud"></div>
            </div>

            <div class="x3">
                <div class="cloud"></div>
            </div>

            <div class="x4">
                <div class="cloud"></div>
            </div>

            <div class="x5">
                <div class="cloud"></div>
            </div>
        </div>
    </div>
    <div class="md:flex md:px-40 md:pt-20 text-center text-white md:justify-between font-kanit">
        <div class="md:w-2/4 relative top-12 md:slide-top">
            <p class="md:text-4xl sm:text-sm transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Quer impulsionar o seu negócio até o infinito ? 🚀</p>
            <p class="text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Somos uma empresa que está a dois anos no mercado de tecnologias, trazendo tudo do que a de mais novo para empresas de média, pequena e larga escala. Nossa equipe está disposta a mudar a forma como seu négocio funciona para que seu redimento cresca em até 500%.</p>

            <p @click="closeOrcamento()" class="bg-white rounded-3xl text-gray-800 w-1/2 lg:w-1/3 p-1 md:p-4 mx-auto my-0 md:text-2xl mt-4 md:mt-8 cursor-pointer font-kanit transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Faça seu orçamento gratuito agora !</p>
        </div>

        <div class="hidden md:block">
            <img src="img/brain.png" class="md:animate-bounce">
        </div>
    </div>
</template>

<script>
export default {
    name:"Header",
    data () {
        return {
        }
    },
    methods: {
        closeOrcamento () {
            document.getElementById('orcamentoID').className = "visible"
        }
    }
}

</script>

<style>
#background-wrap {
    z-index: -1;
}

.slide-top {
	-webkit-animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-100px);
            transform: translateY(-100px);
  }
}
@keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-100px);
            transform: translateY(-100px);
  }
}


@-webkit-keyframes animateCloud
{
    0%{margin-left: -1000px;}
    100%{margin-left: 100%;}
} 

.x1 {
    animation: animateCloud 35s linear infinite;
    transform: scale(0.65);
}

.x2 {
    animation: animateCloud 20s linear infinite;
    transform: scale(0.3);
}

.x3 {
    animation: animateCloud 30s linear infinite;
    transform: scale(0.5);
}

.x4 {
    animation: animateCloud 18s linear infinite;
    transform: scale(0.4);
}

.x5 {
    animation: animateCloud 25s linear infinite;
    transform: scale(0.55);
}

.cloud {
    background: white;
    background: linear-gradient(top, white 5%, #f1f1f1 100%);
    filter:
    progid:DXImageTransform.Microsoft.gradient(startColorstr='white',endColorstr='#f1f1f1',GradientType=0);
    border-radius:100px;
    box-shadow:0 8px 5px rgba(0,0,0,0.1);
    height:120px;
    position:relative;
    width:350px;
}

.cloud:after, .cloud:before {
    background:white;
    content: "";
    position:absolute;
    z-index:-1;
}

.cloud:after {
    border-radius:100px;
    height:100px;
    left:50px;
    top:-50px;
    width:100px;
}

.cloud:before {
    border-radius:200px;
    height:180px;
    width:180px;
    right:50px;
    top:-90px;
}
</style>