<template>
    <div class="my-2">
        <div class="text-center">
            <p class="font-bold text-4xl mb-2">Projetos recentes:</p>
            <p class="text-xl">Here are a few design projects I've worked on recently. Want to see more? Email me.</p>
        </div>
        <div class="">
            <splide class="flex w-1/2 mx-auto my-0" :options="options">
                <splide-slide>
                    <img class="w-max" src="img/thumbproj1.png">
                </splide-slide>
                <splide-slide >
                    <img class="w-max" src="img/thumbproj1.png">
                </splide-slide>
                <splide-slide >
                    <img class="w-max" src="img/thumbproj1.png">
                </splide-slide>
            </splide>
        </div>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

export default {
    name:"Projetos",
    components: {
        Splide,
        SplideSlide,
    },
    data() {
        return {
            options: {
                type:"loop",
                width  : "full",
                perPage: 3,
                gap: "3rem",
                autoplay:true
            },
        };
    },
}
</script>