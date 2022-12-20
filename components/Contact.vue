<template>
    <div class="text-center p-8 md:py-16 bg-monochrome-50">
        <div class="md:w-1/2 mx-auto">
            <h1 class="text-4xl font-bold leading-[3.5rem] text-monochrome-800">
                {{ $t("contact-title") }}
            </h1>
            <p class="text-lg w-full leading-relaxed mt-8 text-monochrome-600 mb-16">
                {{ $t("contact-subtitle") }}
            </p>
            <div class="text-lg w-full leading-relaxed mt-8 text-monochrome-600 mb-16">
                <a
                    href="mailto:hola@desaparecido.appo"
                    class="text-lg leading-relaxed mt-8 text-primary-400 border border-primary-400 mb-16 py-4 px-8 rounded-full mx-auto hover:text-monochrome-50 hover:bg-primary-400"
                    target="_blank"
                >
                hola@desaparecido.app
                </a>
            </div>
        </div>
    </div>
</template>