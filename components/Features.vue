<template>
    <div class="text-center p-8 md:py-16">
        <div class="md:w-1/2 mx-auto">
            <h1 class="text-4xl font-bold leading-[3.5rem] text-monochrome-800">
                Features
            </h1>
            <p class="text-lg w-full leading-relaxed mt-8 text-monochrome-600 mb-16">
                Desaparecido is a suite of software designed to help search and rescue teams be more effective in finding missing persons.
            </p>
        </div>
        <div class="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 items-center md:px-0 mt-8 md:mt-2">
            <div v-for="{icon, title, content} in features" :key="title" class="px-2 md:px-16 text-center mb-16">
                <img class="mx-auto" :src='`~/assets/icons/${icon}.svg`' />
                <h1 class="text-xl mt-4 text-monochrome-800 px-8">
                    {{ title }}
                </h1>
                <p class="text-sm mt-2 text-monochrome-600">
                    {{ content }}
                </p>
            </div>
        </div>
    </div>

</template>

<script setup>
const features = [
    { icon: 'real_time', title: 'Data in real time', content: 'Monitoring and live control of the data from missing people cases.' },
    { icon: 'db', title: 'Centralized Platform', content: 'Standardized methodology and processes for optimal collaboration.' },
    { icon: 'map', title: 'Control and plan', content: 'Document and coordinate plans between all acting teams.' },
    { icon: 'people', title: 'User management', content: 'Monitoring and live control of the data from missing people cases.' },
    { icon: 'eye', title: 'Optimization', content: 'Standardized methodology and processes for optimal collaboration.' },
    { icon: 'shield', title: 'Data protection', content: 'Document and coordinate plans between all acting teams.' }
]
</script>