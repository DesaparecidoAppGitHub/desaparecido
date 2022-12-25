<template>
    <div class="text-center px-4 py-8 md:py-16">
        <div class="md:w-1/2 mx-auto">
            <h1 class="text-4xl font-bold leading-[3.5rem] text-monochrome-800">
                {{ $t("features.title") }}
            </h1>
            <p class="text-lg w-full leading-relaxed mt-4 md:mt-8 text-monochrome-600 mb-16">
                {{ $t("features.subtitle") }}
            </p>
        </div>
        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center md:px-0 mt-8 md:mt-2">
            <div v-for="{icon, content} in features" :key="content" class="p-2 md:p-8 text-center rounded-lg hover:shadow">
                <img class="mx-auto" :src='`/icons/${icon}.svg`' />
                <h1 class="text-xl mt-4 text-monochrome-800">
                    {{ $t(`features.${content}-title`) }}
                </h1>
                <p class="text-sm mt-2 text-monochrome-600">
                    {{ $t(`features.${content}-subtitle`) }}
                </p>
            </div>
        </div>
    </div>

</template>

<script setup>
const features = [
    { icon: 'real_time', content: 'real-time'},
    { icon: 'db', content: 'centralized'},
    { icon: 'map', content: 'control-plan'},
    { icon: 'people', content: 'user-manage'},
    { icon: 'eye', content: 'optimization'},
    { icon: 'shield', content: 'data-protection'}
]
</script>