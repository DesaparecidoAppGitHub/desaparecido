<template>
    <div class="flex flex-col justify-center md:h-screen text-xl bg-monochrome-100 py-8 md:py-16">
        <div class="container px-4 md:px-8 mx-auto w-7xl flex flex-col lg:flex-row">
            <div class="basis-2/5 pr-8">
                <h1 class="text-4xl font-bold leading-[3rem] text-monochrome-800 mb-8 md:mb-12">
                    {{ $t("hero-header") }}
                </h1>
                <p class="text-lg w-full leading-relaxed mt-8 text-monochrome-600 mb-8 md:mb-16">
                    {{ $t("hero-subheader") }}.
                </p>
                <a
                    href="mailto:hola@desaparecido.app?subject=Request a demo"
                    class="px-8 py-4 bg-primary-300 hover:bg-primary-400 text-monochrome-50 rounded-full text-sm mb-8 md:mb-16 cursor-pointer"
                    target="_blank"
                >
                    {{ $t("hero-cta") }}
                </a>
            </div>
            <div class="basis-3/5 mt-16 md:mt-0 pl-0 md:pl-8">
                <img src="/imgs/product.png" />
            </div>
        </div>
    </div>
</template>