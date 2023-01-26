<template>
    <div class="p-8 text-center md:py-16 bg-monochrome-100">
        <div class="mx-auto md:w-1/2">
            <h1 class="text-4xl font-bold leading-[3.5rem] text-monochrome-800">
                {{ $t("updates-title") }}
            </h1>
            <p class="w-full mt-8 mb-16 text-lg leading-relaxed text-monochrome-600">
                {{ $t("updates-subtitle") }}
            </p>
            <a
                href="https://desaparecido.notion.site/57d8494096344420bc002e2024da113f?v=2c4dba1f50d544b8b34449a9624d09d5"
                target="_blank"
                class="px-8 py-4 mb-8 text-sm rounded-full cursor-pointer bg-primary-300 hover:bg-primary-400 text-monochrome-50 md:mb-16"
            >
                {{ $t("updates-see") }}
            </a>
        </div>
    </div>
</template>