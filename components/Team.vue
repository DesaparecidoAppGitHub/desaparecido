<template>
    <div class="text-center p-8 md:py-16">
        <div class="md:w-1/2 mx-auto">
            <h1 class="text-4xl font-bold leading-[3.5rem] text-monochrome-800">
                {{ $t("team.title") }}
            </h1>
            <p class="text-lg w-full leading-relaxed mt-8 text-monochrome-600 mb-16">
                {{ $t("team.subtitle") }}
            </p>
        </div>
        <div class="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 items-center md:px-0 mt-8 md:mt-2">
            <div v-for="{id, name} in team" :key="name" class="px-2 md:px-16 text-center mb-16">
                <img class="mx-auto w-40 h-40" :src='`/imgs/${id}.png`' />
                <h1 class="text-xl mt-4 text-monochrome-800 px-8">
                    {{ name }}
                </h1>
                <p class="text-sm mt-2 text-monochrome-800">
                    {{ $t(`team.${id}.position`) }}
                </p>
                <p class="text-sm mt-4 text-monochrome-600">
                    {{ $t(`team.${id}.currently`) }}
                </p>
                <p class="text-sm mt-2 text-monochrome-600">
                    {{ $t(`team.${id}.experience`) }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const team = [
    { id: 'edu', name: 'Eduard Aymerich' },
    { id: 'javi', name: 'Javi Sánchez' },
    { id: 'carmen', name: 'Carmen Gª Wang' },
    { id: 'stas', name: 'Stas Nikitin' },
    { id: 'enric', name: 'Enric Sala' },
    { id: 'albert', name: 'Albert Teixidó' },
]
</script>