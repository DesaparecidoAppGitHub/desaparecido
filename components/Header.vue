<template>
    <header class="w-full z-10 h-16 bg-monochrome-50 py-2 shadow-sm fixed top-0 left-0 right-0">
        <nav class="flex items-center justify-between w-full h-full text-black container mx-auto px-4 md:px-0">
            <img src="~/assets/logos/primary.svg" />
            <form class="p-1 bg-monochrome-200 rounded-md">
                <select v-model="$i18n.locale" class="bg-monochrome-200 cursor-pointer">
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                </select>
            </form>
        </nav>
    </header>
</template>