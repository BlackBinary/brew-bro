<script lang="ts">
  import { sidebarOpen } from "./../store/";

  const links = [
    {
      title: "Settings",
      to: "settings",
      active: true,
    },
    {
      title: "Recepten",
      to: "recipes",
      active: false,
    },
    {
      title: "Brouwsels",
      to: "brews",
      active: false,
    },
    {
      title: "Databases",
      to: "databases",
      active: false,
    },
    {
      title: "Analyse",
      to: "analysis",
      active: false,
    },
  ];

  function navigate(link) {
    console.log(link);
  }

  export let appName: string;
</script>

<div class="flex">
  <!-- Backdrop -->
  <div
    on:click={() => ($sidebarOpen = false)}
    class="{$sidebarOpen ? 'block' : 'hidden'} fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden" />
  <!-- End Backdrop -->

  <div
    class="{$sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'} fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
    <div class="flex items-center justify-center mt-8">
      <div class="flex items-center">
        <span class="text-white text-2xl mx-2 font-semibold">{appName}</span>
      </div>
    </div>

    <nav class="mt-10">
      {#each links as link}
        <a
          class="{link.active ? 'bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100' : 'border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100'} flex items-center mt-4 py-2 px-6 border-l-4"
          href="#"
          on:click|preventDefault={() => navigate(link)}>
          <svg
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z"
              fill="currentColor" />
            <path
              d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z"
              fill="currentColor" />
          </svg>

          <span class="mx-4">{link.title}</span>
        </a>
      {/each}
    </nav>
  </div>
</div>
