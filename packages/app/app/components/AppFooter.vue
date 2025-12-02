<template>
  <footer class="text-center p-12 opacity-100 flex flex-col items-center gap-3 text-xs">
    <div class="flex gap-6 items-center justify-center">
      <div class="flex items-center">
        <a href="https://blog.khulnasoft.com/posts/pkg-khulnasoft/" target="_blank" class="block">
          <img
            src="/khulnasoft.svg"
            alt="KhulnaSoft"
            width="117"
            height="28"
            class="not-dark:hidden"
          />
          <img
            src="/khulnasoft-black.svg"
            alt="KhulnaSoft"
            width="117"
            height="28"
            class="dark:hidden"
          />
        </a>
      </div>
      <div class="text-xs opacity-70 flex items-center">+</div>
      <div class="flex items-center">
        <a
          href="https://blog.khulnasoft.com/posts/cloudflare-backing-pkg-khulnasoft-data-infrastructure/"
          target="_blank"
          class="block"
        >
          <img src="/cloudflare.svg" alt="Cloudflare" width="120" height="24" class="pb-1" />
        </a>
      </div>
    </div>

    <div class="flex gap-3 items-center">
      <div>
        Built in
        <a href="https://github.com/khulnasoft" target="_blank" class="text-primary"
          >KhulnaSoft Labs</a
        >
      </div>
      <UIcon name="ph-dot" />
      <div>
        <a
          href="https://blog.khulnasoft.com/posts/cloudflare-backing-pkg-khulnasoft-data-infrastructure/"
          target="_blank"
          class="text-primary"
          >Backed by Cloudflare</a
        >
      </div>
      <UIcon name="ph-dot" />
      <div>
        UI by
        <a href="https://github.com/Akryum" target="_blank" class="text-primary">Akryum</a>
      </div>
    </div>
  </footer>
</template>
