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
        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-8 items-center md:px-0 mt-8 md:mt-2">
            <div v-for="{id, name, linkedin} in team" :key="name" class="p-4 md:p-8 text-center rounded-lg hover:shadow">
                <img class="mx-auto rounded-full w-40 h-40" :src='`/imgs/team/${id}.png`' />
                <h1 class="text-xl mt-4 text-monochrome-800">
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
                <div class="text-sm w-fit mx-auto mt-4 text-secondary-400 rounded-lg px-2 py-1 hover:bg-secondary-50">
                    <a
                        v-if="linkedin"
                        :href="`https://www.linkedin.com/in/${linkedin}`"
                        target="_blank"
                        class="flex items-center gap-1 font-bold"
                    >
                        <svg class="stroke-secondary-300" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 11V16M8 8V8.01M12 16V11M16 16V13C16 12.4696 15.7893 11.9609 15.4142 11.5858C15.0391 11.2107 14.5304 11 14 11C13.4696 11 12.9609 11.2107 12.5858 11.5858C12.2107 11.9609 12 12.4696 12 13M6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Linkedin
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const team = [
    { id: 'edu', name: 'Eduard Aymerich', linkedin: 'eduayme' },
    { id: 'javi', name: 'Javi Sánchez', linkedin: 'javiersanchezmesa' },
    { id: 'carmen', name: 'Carmen Gª Wang', linkedin: 'carmen-garcia-wang' },
    { id: 'stas', name: 'Stas Nikitin', linkedin: 'stasnikitin' },
    { id: 'kiko', name: 'Kiko Requena', linkedin: 'kikorequena' },
    { id: 'enric', name: 'Enric Sala' },
    { id: 'albert', name: 'Albert Teixidó' },
]
</script>