<template>
    <div>
        <div id="background-wrap" class="fixed opacity-50 inset-x-0 pt-50 bg-blue-500">
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

    <div class="flex text-center items-center">
        <div>
            <p>Sint reprehenderit minim laborum nostrud mollit. Dolor ea et laboris eiusmod exercitation anim est voluptate. Consequat aute dolore id sunt. Cillum qui sint incididunt reprehenderit eiusmod non laborum exercitation nisi commodo ut. Est sint quis occaecat in exercitation deserunt veniam non ullamco aute nostrud elit exercitation labore. Ex qui exercitation irure officia minim. Dolor dolor et duis quis irure.</p>
        </div>

        <div>
            <img src="img/brain.png" class="">
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