<template>
  <div class="flex flex-col w-full">
    <Header />
    <main class="flex-grow w-full">
      <slot>Fallback main content</slot>
    </main>
    <Footer />
  </div>
</template>