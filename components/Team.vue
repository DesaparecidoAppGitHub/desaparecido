<template>
    <div class="text-center p-8 md:py-16">
        <div class="md:w-1/2 mx-auto">
            <h1 class="text-4xl font-bold leading-[3.5rem] text-monochrome-800">
                Team
            </h1>
            <p class="text-lg w-full leading-relaxed mt-8 text-monochrome-600 mb-16">
                We’re a small team that is pushing the boundaries to create a great impact in search and rescue operations.
            </p>
        </div>
        <div class="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-4 items-center md:px-0 mt-8 md:mt-2">
            <div v-for="{avatar, name, position, exp1, exp2} in team" :key="name" class="px-2 md:px-16 text-center mb-16">
                <img class="mx-auto w-40 h-40" :src='`@/assets/imgs/${avatar}.png`' />
                <h1 class="text-xl mt-4 text-monochrome-800 px-8">
                    {{ name }}
                </h1>
                <p class="text-sm mt-2 text-monochrome-800">
                    {{ position }}
                </p>
                <p class="text-sm mt-4 text-monochrome-600">
                    {{ exp1 }}
                </p>
                <p class="text-sm mt-2 text-monochrome-600">
                    {{ exp2 }}
                </p>
            </div>
        </div>
    </div>

</template>

<script setup>
const team = [
    { avatar: 'edu', name: 'Eduard Aymerich', position: 'Cofounder & CEO', exp1: 'Fullstack Developer', exp2: '+3 years in SW Dev.' },
    { avatar: 'javi', name: 'Javi Sánchez', position: 'Cofounder & CPO', exp1: 'CEO BeHappy', exp2: '+12 years in UX' },
    { avatar: 'carmen', name: 'Carmen Gª Wang', position: 'Cofounder & CFO', exp1: 'Methods & Analysis Leader', exp2: '+3 years in Business Dev.' },
    { avatar: 'stas', name: 'Stas Nikitin', position: 'CDO', exp1: 'Designer', exp2: '+10 years in product design' },
    { avatar: 'enric', name: 'Enric Sala', position: 'Advisor', exp1: 'Firefighter', exp2: '+18 years in SAR' },
    { avatar: 'albert', name: 'Albert Teixidó', position: 'Advisor', exp1: 'Firefighter', exp2: '+20 years in SAR' },
]
</script>