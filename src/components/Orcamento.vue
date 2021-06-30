<template>
    <div>
        <div>
            <div class="fixed z-10 inset-0 bg-black opacity-50 mx-auto my-0"></div>
            <div class="fixed z-10 inset-y-1/3 inset-x-1/3">
                    <div class="flex flex-col bg-white border-4 shadow-xl transform scale-110 rounded-3xl border-black px-5 pb-6 m-5 transition duration-500 ease-in-out transform hover:-translate-y-4 hover:scale-110">
                        <a class="font-semibold font-kanit text-3xl text-black text-center pt-5">Receba seu orçamento</a>
                        <a class="font-kanit text-black text-center pb-2">Preencha os dados abaixo para que um de nossos especialistas possa preparar uma proposta personalizada para seu tipo de negócio</a>

                    <div class="border-b-4 border-grey-200 items-center justify-center">
                    </div>

                    <div class="flex flex-col justify-center items-center">
                        <div class="flex my-6">
                            <p class="text-blue-600 font-semibold items-center flex pr-1">Nome*:</p>
                            <input type="text" class="border-4 border-gray-800 rounded-3xl focus:border-blue-400 p-1">
                        </div>
                        <div class="flex mb-6">
                            <p class="text-blue-600 font-semibold items-center flex pr-1">Email*:</p>
                            <input type="text" class="border-4 border-gray-800 rounded-3xl focus:border-blue-400 p-1">
                        </div>
                        <div class="flex mb-6">
                            <p class="text-blue-600 font-semibold items-center flex pr-1">Celular*:</p>
                            <input type="text" class="border-4 border-gray-800 rounded-3xl focus:border-blue-400 p-1">
                        </div>

                        <div class="flex justify-center">
                            <p class="p-2 rounded-3xl bg-gray-800 text-white border-3 border-gray-100 cursor-pointer">
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
    name:"Orcamento",
}
</script>