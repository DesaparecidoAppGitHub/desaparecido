<template>
    <footer class="flex flex-col items-center justify-items-center w-full p-8 text-monochrome-100 bg-monochrome-800">
        <div class="w-full text-center flex items-center justify-center mb-6 gap-2">
            <a
                href="https://linkedin.com/company/desaparecido"
                target="_blank"
                class="flex items-center gap-1 font-bold rounded-lg px-2 py-1 hover:bg-primary-400"
            >
                <svg class="stroke-monochrome-50" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 11V16M8 8V8.01M12 16V11M16 16V13C16 12.4696 15.7893 11.9609 15.4142 11.5858C15.0391 11.2107 14.5304 11 14 11C13.4696 11 12.9609 11.2107 12.5858 11.5858C12.2107 11.9609 12 12.4696 12 13M6 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Linkedin
            </a>
            <a
                href="https://github.com/DesaparecidoApp"
                target="_blank"
                class="flex items-center gap-1 font-bold rounded-lg px-2 py-1 hover:bg-primary-400"
            >
                <svg class="stroke-monochrome-50" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19C4.7 20.4 4.7 16.5 3 16M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14.1 20 9.49995C19.9988 8.30492 19.5325 7.15726 18.7 6.29995C19.0905 5.26192 19.0545 4.11158 18.6 3.09995C18.6 3.09995 17.5 2.79995 15.1 4.39995C13.0672 3.87054 10.9328 3.87054 8.9 4.39995C6.5 2.79995 5.4 3.09995 5.4 3.09995C4.94548 4.11158 4.90953 5.26192 5.3 6.29995C4.46745 7.15726 4.00122 8.30492 4 9.49995C4 14.1 6.7 15.2 9.5 15.5C8.9 16.1 8.9 16.7 9 17.5V21" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                GitHub
            </a>
        </div>
        <p class="w-full text-center">
            Copyright &copy; Desaparecido {{ new Date().getFullYear() }}. {{ $t("copyright") }}
        </p>
        <a
                href="https://vercel.com?utm_source=desaparecido&utm_campaign=oss"
                target="_blank"
                class="mt-4"
            >
                <img src="/imgs/sponsors/powered_by_vercel.svg" class="mt-4 h-8" />
            </a>
    </footer>
</template>