<template>
    <div>
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

    <div class="flex text-center items-end text-white px-40 pt-20 justify-between">
        <div class="w-2/4 slide-top">
            <p class="text-3xl">Sint reprehenderit minim laborum nostrud mollit. Dolor ea et laboris.</p>
            <p class="text-xl">Sint reprehenderit minim laborum nostrud mollit. Dolor ea et laboris eiusmod exercitation anim est voluptate. Consequat aute dolore id sunt. Cillum qui sint incididunt reprehenderit eiusmod non laborum exercitation nisi commodo ut. Est sint quis occaecat in exercitation deserunt veniam non ullamco aute nostrud elit exercitation labore. Ex qui exercitation irure officia minim. Dolor dolor et duis quis irure.</p>

            <p class="bg-white rounded-3xl text-gray-800 w-2/5 p-4 mx-auto my-0 text-2xl mt-8 cursor-pointer">Faça seu orçamento gratuito agora !</p>
        </div>

        <div class="">
            <img src="img/brain.png" class="animate-bounce">
        </div>
    </div>
</template>

<script>
export default {
    name:"Header",
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